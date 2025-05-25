import { AbstractViewLeft } from 'Knoin/AbstractViews';

class MenuSettingsAdminView extends AbstractViewLeft {
	/**
	 * @param {?} screen
	 */
	constructor(screen) {
		super('AdminMenu');

		this.menu = screen.menu;
	}

	link(route) {
		return '#/' + route;
	}

	onBuild() {

		const wrapperBlock = document.querySelector('.rl-wrapper');
		wrapperBlock.classList.add('active');
	}
}

export { MenuSettingsAdminView };
