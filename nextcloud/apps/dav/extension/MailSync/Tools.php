<?php
namespace MailSync;

use MailSync\Crypt;
use OCP\IDBConnection;
use OCP\DB\QueryBuilder\IQueryBuilder;
use Sabre\VObject\Reader;
use MailSync\PropertyType;

class Tools
{
    protected string $usersTable = 'rainloop_users';
    protected string $contactTable = 'rainloop_ab_contacts';

    public function __construct(
        private IDBConnection $dbConnection,
	) {
    }
    public static function getCookie(string $sName)
    {
        return isset($_COOKIE[$sName])
            ? Crypt::DecryptFromJSON(\base64_decode(\strtr($_COOKIE[$sName], '-_', '+/'), true))
            : null;
    }

    public function getUserId(string $mail): int
    {
        $sql = "SELECT id_user FROM ".$this -> usersTable. " WHERE rl_email = '".$mail."'";
        $result = $this->dbConnection->executeQuery($sql);
        $row = $result->fetchOne();
        $result->closeCursor();

        return $row;
    }

    public function getContactId(string $uid): int
    {
        $sql = "SELECT id_contact FROM ".$this -> contactTable. " WHERE id_contact_str = '".$uid."'";
        $result = $this->dbConnection->executeQuery($sql);
        $row = $result->fetchOne();
        $result->closeCursor();

        return $row;
    }

    public function contactDelete($userId, $contactId, $card ) : bool
    {

        try {
            $sql = 'DELETE FROM rainloop_ab_properties WHERE id_contact = :id_contact';
            $result = $this->dbConnection->executeUpdate($sql, [ $contactId]);


            $sql = 'DELETE FROM rainloop_ab_contacts WHERE id_contact = :id_contact';
            $result = $this->dbConnection->executeUpdate($sql, ['id_contact' => $contactId]);


            $this->dbConnection->commit();
        }

        catch (\Throwable $oException) {
            throw $oException;

        }
        return (bool)$result;
    }

    public function contactSave($userId, $contactId, $card ) : bool
    {

        $bUpdate = 0 < $contactId;

        $cardData = \trim($card['carddata']);

        // Remove UTF-8 BOM
        if ("\xef\xbb\xbf" === \substr($cardData, 0, 3)) {
            $cardData = \substr($cardData, 3);
        }

        $vCard = Reader::read($card['carddata']);


        try {

            $fullName = (string) $vCard->FN->getValue();

            if ($bUpdate) {

                $sql = "UPDATE rainloop_ab_contacts 
            SET id_contact_str = :id_contact_str, 
                display = :display, 
                changed = :changed, 
                etag = :etag 
            WHERE id_user = :id_user AND id_contact = :id_contact";

                $params = [
                    'id_user' => (int)$userId,
                    'id_contact' => (int)$contactId,
                    'id_contact_str' =>  $vCard->UID->getValue(),
                    'display' => $fullName,
                    'changed' => $card['lastmodified'],
                    'etag' => $card['etag']
                ];

                $this->dbConnection->beginTransaction();
                $result = $this->dbConnection->executeUpdate($sql, $params);
                $this->dbConnection->commit();

                $sql = "DELETE FROM rainloop_ab_properties 
                WHERE id_user = :id_user AND id_contact = :id_contact";

                $params = [
                    'id_user' => $userId,
                    'id_contact' => $contactId
                ];

                $this->dbConnection->beginTransaction();
                $result = $this->dbConnection->executeUpdate($sql, $params);
                $this->dbConnection->commit();
                $iIdContact  = $contactId;

            } else {


                $sql = "SELECT MAX(id_contact) as last_id FROM rainloop_ab_contacts";

                $this->dbConnection->beginTransaction();

                $result = $this->dbConnection->executeQuery($sql);
                $sLast = $result->fetch()['last_id'];


                $nextId = $sLast ? ((int)$sLast + 1) : 1;


               $sql = "INSERT INTO rainloop_ab_contacts
                (id_user, id_contact_str, id_contact, display, changed, deleted, etag)
                VALUES
                (:id_user, :id_contact_str, :id_contact, :display, :changed, :deleted, :etag)";

                    $params = [
                        'id_user' => (int)$userId,
                        'id_contact_str' => $vCard->UID->getValue(),
                        'id_contact' => (int)$nextId,
                        'display' => $fullName,
                        'changed' => $card['lastmodified'],
                        'deleted' => 0,
                        'etag' => $card['etag']
                    ];

                    $result = $this->dbConnection->executeUpdate($sql, $params);
                    $this->dbConnection->commit();

                if (\is_numeric($nextId) && 0 < (int) $nextId) {
                    $iIdContact = (int) $nextId;
                }
            }

            if (0 < $iIdContact) {

                $aParams = array();

                foreach ($vCard-> children() as $property) {

                    $propType = 0;

                    switch ($property->name) {

                        case "UID":
                            $propType = PropertyType::UID;
                            break;
                        case "FN":
                            $propType = PropertyType::FIRST_NAME;
                            break;
                        case "EMAIL":
                            $propType = PropertyType::EMAIl;
                            break;
                        case "TEL":
                            $propType = PropertyType::PHONE;
                            break;
                        default:
                            $propType = 0;
                            break;

                    }

                    if ($propType == 0) {
                        continue;
                    }

                    $aParams[] = array(
                        'id_contact' => (int)$iIdContact,
                        'id_user' =>(int)$userId,
                        'prop_type' => $propType,
                        'prop_type_str' =>'',
                        'prop_value' => (string)$property,
                        'prop_value_lower' =>\mb_strtolower((string)$property, 'UTF-8'),
                        'prop_value_custom' => '',
                        'prop_frec' => 0,
                    );


                    if ($property->name == 'FN') {

                        $aParams[] = array(
                            'id_contact' => $contactId,
                            'id_user' =>$userId,
                            'prop_type' => PropertyType::LAST_NAME,
                            'prop_type_str' => '',
                            'prop_value' =>(string)$property,
                            'prop_value_lower' => \mb_strtolower((string)$property, 'UTF-8'),
                            'prop_value_custom' => '',
                            'prop_frec' =>0,
                        );

                        $aParams[] = array(
                            'id_contact' => (int)$iIdContact,
                            'id_user' => (int)$userId,
                            'prop_type' => PropertyType::MIDDLE_NAME,
                            'prop_type_str' => '',
                            'prop_value' => (string)$property,
                            'prop_value_lower' =>\mb_strtolower((string)$property, 'UTF-8'),
                            'prop_value_custom' => '',
                            'prop_frec' => 0,
                        );
                        $aParams[] = array(
                            'id_contact' => (int)$iIdContact,
                            'id_user' => (int)$userId,
                            'prop_type' => PropertyType::NICK_NAME,
                            'prop_type_str' =>'',
                            'prop_value' => (string)$property,
                            'prop_value_lower' => \mb_strtolower((string)$property, 'UTF-8'),
                            'prop_value_custom' => '', \PDO::PARAM_STR,
                            'prop_frec' => 0,
                        );
                    }
                }

                $aParams[] = array(
                    'id_contact' => (int)$iIdContact,
                    'id_user' => (int)$userId,
                    'prop_type' => PropertyType::JCARD,
                    'prop_type_str' =>'',
                    'prop_value' => $cardData,
                    'prop_value_lower' =>\mb_strtolower((string)$cardData, 'UTF-8'),
                    'prop_value_custom' =>'',
                    'prop_frec' => 0,
                );

                // clear previous props

                if ($aParams) {
                    $sql = "INSERT INTO rainloop_ab_properties 
            (id_contact, id_user, prop_type, prop_type_str, prop_value, prop_value_lower, prop_value_custom, prop_frec)
            VALUES 
            (:id_contact, :id_user, :prop_type, :prop_type_str, :prop_value, :prop_value_lower, :prop_value_custom, :prop_frec)";

                    $this->dbConnection->beginTransaction();

                    try {

                        foreach ($aParams as $param) {
                            $result = $this->dbConnection->executeUpdate($sql, $param);
                        }

                        // Фиксируем транзакцию ОДИН раз после всех операций
                        $this->dbConnection->commit();

                    } catch (\Exception $e) {
                        // Если возникла ошибка - откатываем транзакцию
                        if ($this->dbConnection->isTransactionActive()) {
//                            $this->dbConnection->rollBack();
                        }
                        throw $e; // Перебрасываем исключение дальше
                    }

                }
            }
        }
        catch (\Throwable $oException) {
            throw $oException;
        }

        return 0 < $iIdContact;
    }

}