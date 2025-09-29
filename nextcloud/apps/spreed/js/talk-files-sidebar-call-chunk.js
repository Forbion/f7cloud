(()=>{(self.webpackChunktalk=self.webpackChunktalk||[]).push([["files-sidebar-call-chunk"],{191:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(72776),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),276:((c,_,s)=>{"use strict";var o=s(83017)}),333:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"BlurOffIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),337:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("NcButton",{class:{"no-audio-available":!e.model.attributes.audioAvailable},attrs:{title:e.audioButtonTitle,type:e.type,"aria-label":e.audioButtonAriaLabel,disabled:!e.isAudioAllowed},on:{click:function(r){return r.stopPropagation(),e.toggleAudio.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("VolumeIndicator",{attrs:{"audio-preview-available":e.model.attributes.audioAvailable,"audio-enabled":e.showMicrophoneOn,"current-volume":e.model.attributes.currentVolume,"volume-threshold":e.model.attributes.volumeThreshold,"overlay-muted-color":"#888888"}})]},proxy:!0}])})},a=[]}),998:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(95935),a=s(16924),l=s(77468),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"63234d26",null);const r=i.exports}),1295:((c,_,s)=>{"use strict";var o=s(98452)}),1747:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("div",{ref:"videoContainer",staticClass:"localVideoContainer",class:e.videoContainerClass,on:{mouseover:function(r){e.mouseover=!0},mouseleave:function(r){e.mouseover=!1},click:function(r){return e.$emit("click-video")}}},[e.screenshotModeUrl?i("img",{staticClass:"dev-mode-video--self videoWrapper",attrs:{alt:"dev-mode-video--self",src:e.screenshotModeUrl}}):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.screenshotModeUrl&&e.localMediaModel.attributes.videoEnabled,expression:"!screenshotModeUrl && localMediaModel.attributes.videoEnabled"}],staticClass:"videoWrapper",style:e.videoWrapperStyle},[i("video",{ref:"video",staticClass:"video",class:e.fitVideo?"video--fit":"video--fill",attrs:{id:"localVideo",disablePictureInPicture:"true"},on:{playing:e.updateVideoAspectRatio}}),e._v(" "),e.isPresenterOverlay&&e.mouseover?i("AccountOff",{staticClass:"presenter-icon__hide",attrs:{"aria-label":e.t("spreed","Hide presenter video"),title:e.t("spreed","Hide presenter video"),size:32},on:{click:function(r){return e.$emit("click-presenter")}}}):e._e(),e._v(" "),e.isNotConnected?i("NcLoadingIcon",{staticClass:"video-loading",attrs:{size:e.avatarSize/2}}):e._e()],1),e._v(" "),!e.screenshotModeUrl&&!e.localMediaModel.attributes.videoEnabled&&!e.isSidebar?i("div",{staticClass:"avatar-container"},[e.isGrid||e.isStripe?i("VideoBackground",{attrs:{"display-name":e.displayName,user:e.userId}}):e._e(),e._v(" "),i("AvatarWrapper",{attrs:{id:e.userId,token:e.token,name:e.displayName,source:e.actorType,size:e.avatarSize,loading:e.isNotConnected,"disable-menu":"","disable-tooltip":""}}),e._v(" "),i("span",{staticClass:"username"},[e._v(`
          `+e._s(e.displayName)+`
        `)])],1):e._e(),e._v(" "),i("div",{staticClass:"bottom-bar"},[e.isBig?i("NcButton",{staticClass:"bottom-bar__button",attrs:{type:"tertiary"},on:{click:e.handleStopFollowing}},[e._v(`
				`+e._s(e.stopFollowingLabel)+`
			`)]):e._e()],1)])},a=[]}),1773:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon blur-off-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M3,13.5A0.5,0.5 0 0,0 2.5,14A0.5,0.5 0 0,0 3,14.5A0.5,0.5 0 0,0 3.5,14A0.5,0.5 0 0,0 3,13.5M6,17A1,1 0 0,0 5,18A1,1 0 0,0 6,19A1,1 0 0,0 7,18A1,1 0 0,0 6,17M10,20.5A0.5,0.5 0 0,0 9.5,21A0.5,0.5 0 0,0 10,21.5A0.5,0.5 0 0,0 10.5,21A0.5,0.5 0 0,0 10,20.5M3,9.5A0.5,0.5 0 0,0 2.5,10A0.5,0.5 0 0,0 3,10.5A0.5,0.5 0 0,0 3.5,10A0.5,0.5 0 0,0 3,9.5M6,13A1,1 0 0,0 5,14A1,1 0 0,0 6,15A1,1 0 0,0 7,14A1,1 0 0,0 6,13M21,13.5A0.5,0.5 0 0,0 20.5,14A0.5,0.5 0 0,0 21,14.5A0.5,0.5 0 0,0 21.5,14A0.5,0.5 0 0,0 21,13.5M10,17A1,1 0 0,0 9,18A1,1 0 0,0 10,19A1,1 0 0,0 11,18A1,1 0 0,0 10,17M2.5,5.27L6.28,9.05L6,9A1,1 0 0,0 5,10A1,1 0 0,0 6,11A1,1 0 0,0 7,10C7,9.9 6.97,9.81 6.94,9.72L9.75,12.53C9.04,12.64 8.5,13.26 8.5,14A1.5,1.5 0 0,0 10,15.5C10.74,15.5 11.36,14.96 11.47,14.25L14.28,17.06C14.19,17.03 14.1,17 14,17A1,1 0 0,0 13,18A1,1 0 0,0 14,19A1,1 0 0,0 15,18C15,17.9 14.97,17.81 14.94,17.72L18.72,21.5L20,20.23L3.77,4L2.5,5.27M14,20.5A0.5,0.5 0 0,0 13.5,21A0.5,0.5 0 0,0 14,21.5A0.5,0.5 0 0,0 14.5,21A0.5,0.5 0 0,0 14,20.5M18,7A1,1 0 0,0 19,6A1,1 0 0,0 18,5A1,1 0 0,0 17,6A1,1 0 0,0 18,7M18,11A1,1 0 0,0 19,10A1,1 0 0,0 18,9A1,1 0 0,0 17,10A1,1 0 0,0 18,11M18,15A1,1 0 0,0 19,14A1,1 0 0,0 18,13A1,1 0 0,0 17,14A1,1 0 0,0 18,15M10,7A1,1 0 0,0 11,6A1,1 0 0,0 10,5A1,1 0 0,0 9,6A1,1 0 0,0 10,7M21,10.5A0.5,0.5 0 0,0 21.5,10A0.5,0.5 0 0,0 21,9.5A0.5,0.5 0 0,0 20.5,10A0.5,0.5 0 0,0 21,10.5M10,3.5A0.5,0.5 0 0,0 10.5,3A0.5,0.5 0 0,0 10,2.5A0.5,0.5 0 0,0 9.5,3A0.5,0.5 0 0,0 10,3.5M14,3.5A0.5,0.5 0 0,0 14.5,3A0.5,0.5 0 0,0 14,2.5A0.5,0.5 0 0,0 13.5,3A0.5,0.5 0 0,0 14,3.5M13.8,11.5H14A1.5,1.5 0 0,0 15.5,10A1.5,1.5 0 0,0 14,8.5A1.5,1.5 0 0,0 12.5,10V10.2C12.61,10.87 13.13,11.39 13.8,11.5M14,7A1,1 0 0,0 15,6A1,1 0 0,0 14,5A1,1 0 0,0 13,6A1,1 0 0,0 14,7Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),2713:((c,_,s)=>{"use strict";s.r(_),s.d(_,{default:()=>r});var o=s(56843),a=s(85747),l=s(21622),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"69c35b21",null);const r=i.exports}),2773:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(85471),a=s(91882),l=s(53334),e=s(78457),i=s(54161);const r={name:"SelectableParticipant",components:{AvatarWrapper:e.A,IconCheck:a.A},props:{participant:{type:Object,required:!0},checked:{type:Array,required:!0},showUserStatus:{type:Boolean,default:!0}},emits:["update:checked","click-participant"],setup(){return{isBulkSelection:(0,o.WQ)("bulkParticipantsSelection",!1)}},computed:{modelProxy:{get(){return this.checked},set(d){this.isBulkSelection?this.$emit("update:checked",d):this.$emit("click-participant",this.participant)}},value(){return this.participant.attendeeId||this.participant},actorId(){return this.participant.actorId||this.participant.id},actorType(){return this.participant.actorType||this.participant.source},computedName(){return this.participant.displayName||this.participant.label},preloadedUserStatus(){return(0,i.kd)(this.participant)},participantStatus(){return this.participant.shareWithDisplayNameUnique??(0,i.yW)(this.participant)},participantAriaLabel(){return(0,l.t)("spreed",'Add participant "{user}"',{user:this.computedName})},participantNavigationId(){return this.participant.actorType&&this.participant.actorId?this.participant.actorType+"_"+this.participant.actorId:this.participant.source+"_"+this.participant.id}},methods:{t:l.t,handleEnter(d){this.isBulkSelection?d.target.click():this.$emit("click-participant",this.participant)}}}}),3062:((c,_,s)=>{"use strict";s.d(_,{A:()=>L});var o=s(69956),a=s.n(o),l=s(45471),e=s.n(l),i=s(85471),r=s(64191),d=s(24558),u=s(53334),m=s(88289),h=s(92252),v=s(7789),E=s(47999),p=s(78457),A=s(64902),P=s(72925),C=s(55031),O=s(50634),R=s(14816),T=s(21625),S=s(81478),D=s(50123),x=s(26600);const L={name:"VideoVue",components:{AvatarWrapper:p.A,TransitionWrapper:A.A,VideoBackground:v.A,Screen:h.A,VideoBottomBar:E.A,NcLoadingIcon:m.A,AccountCircle:r.A,AccountOff:d.A},props:{token:{type:String,required:!0},placeholderForPromoted:{type:Boolean,default:!1},model:{type:Object,required:!0},sharedData:{type:Object,required:!0},showVideoOverlay:{type:Boolean,default:!0},isGrid:{type:Boolean,default:!1},fitVideo:{type:Boolean,default:!1},isPresenterOverlay:{type:Boolean,default:!1},isBig:{type:Boolean,default:!1},isStripe:{type:Boolean,default:!1},isPromoted:{type:Boolean,default:!1},isSelected:{type:Boolean,default:!1},isSidebar:{type:Boolean,default:!1},isOneToOne:{type:Boolean,default:!1},unSelectable:{type:Boolean,default:!1},hideBottomBar:{type:Boolean,default:!1}},emits:["click-video","click-presenter","force-promote-video"],setup(){const g=(0,i.WQ)("CallView:screenshotModeEnabled",(0,i.KR)(!1));return{callViewStore:(0,O.e)(),guestNameStore:(0,R.m)(),screenshotMode:g}},data(){return{videoAspectRatio:null,containerAspectRatio:null,resizeObserver:null,mouseover:!1}},computed:{videoWrapperStyle(){if(!(!this.containerAspectRatio||!this.videoAspectRatio||!this.isBig||this.isGrid))return this.containerAspectRatio>this.videoAspectRatio?`width: ${this.$refs.videoContainer.clientHeight*this.videoAspectRatio}px`:`height: ${this.$refs.videoContainer.clientWidth/this.videoAspectRatio}px`},isSelectable(){return this.isStripe?!this.isSelected:!0},wasConnectedAtLeastOnce(){return this.model.attributes.connectedAtLeastOnce},isConnected(){return this.model.attributes.connectionState===D.K.CONNECTED||this.model.attributes.connectionState===D.K.COMPLETED},isLoading(){return!this.isConnected&&this.model.attributes.connectionState!==D.K.FAILED_NO_RESTART},isDisconnected(){return this.model.attributes.connectionState!==D.K.NEW&&this.model.attributes.connectionState!==D.K.CHECKING&&this.model.attributes.connectionState!==D.K.CONNECTED&&this.model.attributes.connectionState!==D.K.COMPLETED},isReconnecting(){return this.model.attributes.connectionState===D.K.FAILED||!this.model.attributes.initialConnection&&(this.model.attributes.negotiating&&!this.isConnected||this.model.attributes.connecting)},isNoLongerTryingToReconnect(){return this.model.attributes.connectionState===D.K.FAILED_NO_RESTART},connectionMessage(){return!this.wasConnectedAtLeastOnce&&this.isNoLongerTryingToReconnect?(0,u.t)("spreed","Connection could not be established \u2026"):this.isNoLongerTryingToReconnect?(0,u.t)("spreed","Connection was lost and could not be re-established \u2026"):!this.wasConnectedAtLeastOnce&&this.isReconnecting?(0,u.t)("spreed","Connection could not be established. Trying again \u2026"):this.isReconnecting?(0,u.t)("spreed","Connection lost. Trying to reconnect \u2026"):this.isDisconnected?(0,u.t)("spreed","Connection problems \u2026"):null},containerClass(){return{"videoContainer-dummy":this.placeholderForPromoted,"not-connected":!this.placeholderForPromoted&&!this.isConnected,speaking:!this.placeholderForPromoted&&this.isSpeaking&&!this.isBig,hover:this.mouseover&&!this.unSelectable&&!this.isBig,promoted:!this.placeholderForPromoted&&this.sharedData.promoted&&!this.isGrid,presenter:this.isPresenterOverlay&&this.mouseover,"video-container-grid":this.isGrid,"video-container-big":this.isBig,"one-to-one":this.isOneToOne,"presenter-overlay":this.isPresenterOverlay}},videoWrapperClass(){return{"presenter-overlay":this.isPresenterOverlay}},avatarSize(){return this.isStripe||!this.isBig&&!this.isGrid?P.of.SIZE.LARGE:this.containerAspectRatio?Math.min(P.of.SIZE.FULL,this.$refs.videoContainer.clientHeight/2,this.$refs.videoContainer.clientWidth/2):P.of.SIZE.FULL},connectionMessageClass(){return{"below-avatar":this.showBackgroundAndAvatar}},sessionHash(){return a().stringify(e()(this.nextcloudSessionId))},peerData(){let g=this.$store.getters.getPeer(this.$store.getters.getToken(),this.nextcloudSessionId,this.model.attributes.userId);return g.actorId||(C.l.emit("refresh-peer-list"),g={actorType:"",actorId:"",displayName:""}),g},participant(){return this.$store.getters.findParticipant(this.$store.getters.getToken(),{sessionId:this.nextcloudSessionId})||{}},participantActorType(){return this.model.attributes.actorType?this.model.attributes.actorType:this.participant?.actorType?this.participant.actorType:this.peerData?.actorType?this.peerData.actorType:this.participantUserId?P.Rf.ACTOR_TYPE.USERS:P.Rf.ACTOR_TYPE.GUESTS},participantUserId(){return this.model.attributes.actorId?this.model.attributes.actorId:this.model.attributes.userId?this.model.attributes.userId:this.participant?.actorType?this.participant?.actorType===P.Rf.ACTOR_TYPE.USERS&&this.participant?.actorId?this.participant.actorId:null:this.peerData.actorType===P.Rf.ACTOR_TYPE.USERS||this.peerData.actorType===P.Rf.ACTOR_TYPE.FEDERATED_USERS?this.peerData.actorId:null},displayName(){if(this.model.attributes.name)return this.model.attributes.name;if(this.participant?.displayName)return this.participant.displayName;let g=this.model.attributes.name;return!this.model.attributes.userId&&!g&&g!==void 0&&(g=this.guestNameStore.getGuestName(this.$store.getters.getToken(),this.sessionHash)),g||(g=this.peerData.displayName),g?.trim()??""},participantName(){return(0,S.G)(this.displayName,this.participantActorType)},isSpeaking(){return this.model.attributes.speaking},hasVideo(){return!this.model.attributes.videoBlocked&&this.model.attributes.videoAvailable&&this.sharedData.remoteVideoBlocker.isVideoEnabled()&&typeof this.model.attributes.stream=="object"},hasSelectedVideo(){return this.callViewStore.selectedVideoPeerId!==null},hasSharedScreen(){return this.model.attributes.screen},isSharedScreenPromoted(){return this.sharedData.screenVisible&&(!this.hasSelectedVideo||this.isSelected)},showSharedScreen(){return this.isBig?this.hasSharedScreen:this.isStripe?this.isSharedScreenPromoted?!1:!(this.isSelected?this.isSelected:this.isPromoted)&&this.hasSharedScreen:this.hasSharedScreen&&!this.isPresenterOverlay},showVideo(){return this.hasSharedScreen?!this.showSharedScreen&&this.hasVideo&&!this.isSelected||this.isPresenterOverlay:this.isStripe?this.hasSelectedVideo?!this.isSelected&&this.hasVideo:!this.isPromoted&&this.hasVideo:this.hasVideo},showPlaceholderForPromoted(){return this.isStripe?this.showVideo||this.showSharedScreen?!1:this.hasSelectedVideo?this.isSelected:this.isPromoted:!1},showBackgroundAndAvatar(){return!(this.showSharedScreen||this.showVideo||this.showPlaceholderForPromoted)},peerId(){return this.model.attributes.peerId},nextcloudSessionId(){return this.model.attributes.nextcloudSessionId},screenshotModeUrl(){return this.screenshotMode?(0,x.jM)(6):""}},watch:{"model.attributes.stream"(g){this._setStream(g)},isSelected(g){g&&(this.mouseover=!1)}},mounted(){this.sharedData.remoteVideoBlocker.increaseVisibleCounter(),this._setStream(this.model.attributes.stream),(this.isBig||this.isGrid)&&(this.resizeObserver=new ResizeObserver(this.updateContainerAspectRatio),this.resizeObserver.observe(this.$refs.videoContainer))},beforeDestroy(){this.resizeObserver&&this.resizeObserver.disconnect()},destroyed(){this.sharedData.remoteVideoBlocker.decreaseVisibleCounter()},methods:{t:u.t,_setStream(g){g&&((0,T.A)(g,this.$refs.video),this.$refs.video.muted=!0,this.$refs.video.style.transform==="scaleX(1)"&&(this.$refs.video.style.transform=""))},updateContainerAspectRatio([{target:g}]){this.containerAspectRatio=g.clientWidth/g.clientHeight},updateVideoAspectRatio(){this.isBig&&(this.videoAspectRatio=this.model.attributes.stream.getVideoTracks()?.[0].getSettings().aspectRatio??this.$refs.video.videoWidth/this.$refs.video.videoHeight)},handleHoverEvent(g){this.$emit("force-promote-video",g?this.model:null)}}}}),3227:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(33556),a=s(84661),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),3463:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(3062);const a=o.A}),3556:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(337),a=s(94438),l=s(89115),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"5cdeb6e2",null);const r=i.exports}),3694:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"AccountMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),3707:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(97320),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),3753:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});function o(a){this._model=a,this._blocked=!1,this._enabled=!0,this._visibleCounter=1,this._blockVideoTimeout=null,this.decreaseVisibleCounter()}o.prototype={destroy(){this._destroyed=!0,clearTimeout(this._blockVideoTimeout)},isVideoEnabled(){return this._enabled},setVideoEnabled(a){if(this._destroyed)return;this._enabled=a;const l=this._blockVideoTimeout;clearTimeout(this._blockVideoTimeout),this._blockVideoTimeout=null,!(!this._visibleCounter&&!l)&&this._setVideoBlocked(!a)},increaseVisibleCounter(){this._destroyed||(this._visibleCounter++,clearTimeout(this._blockVideoTimeout),this._blockVideoTimeout=null,this._enabled&&this._setVideoBlocked(!1))},decreaseVisibleCounter(){if(!this._destroyed){if(this._visibleCounter<=0){console.error("Visible counter decreased when not visible");return}this._visibleCounter--,!(this._visibleCounter>0||!this._enabled)&&(clearTimeout(this._blockVideoTimeout),this._blockVideoTimeout=setTimeout(()=>{this._setVideoBlocked(!0),this._blockVideoTimeout=null},5e3))}},_setVideoBlocked(a){this._blocked!==a&&(this._blocked=a,this._model.setVideoBlocked(a))}}}),4426:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"ChevronDownIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),4513:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,`
.no-audio-available[data-v-5cdeb6e2] {
	opacity: .7;
}
`,"",{version:3,sources:["webpack://./src/components/CallView/shared/LocalAudioControlButton.vue"],names:[],mappings:";AAuJA;CACA,WAAA;AACA",sourcesContent:[`<!--
  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->

<template>
	<NcButton :title="audioButtonTitle"
		:type="type"
		:aria-label="audioButtonAriaLabel"
		:class="{ 'no-audio-available': !model.attributes.audioAvailable }"
		:disabled="!isAudioAllowed"
		@click.stop="toggleAudio">
		<template #icon>
			<VolumeIndicator :audio-preview-available="model.attributes.audioAvailable"
				:audio-enabled="showMicrophoneOn"
				:current-volume="model.attributes.currentVolume"
				:volume-threshold="model.attributes.volumeThreshold"
				overlay-muted-color="#888888" />
		</template>
	</NcButton>
</template>

<script>
import { emit, subscribe, unsubscribe } from '@nextcloud/event-bus'
import { t } from '@nextcloud/l10n'

import NcButton from '@nextcloud/vue/dist/Components/NcButton.js'
import { useHotKey } from '@nextcloud/vue/dist/Composables/useHotKey.js'

import VolumeIndicator from '../../UIShared/VolumeIndicator.vue'

import { PARTICIPANT } from '../../../constants.js'
import BrowserStorage from '../../../services/BrowserStorage.js'

export default {
	name: 'LocalAudioControlButton',

	components: {
		NcButton,
		VolumeIndicator,
	},

	props: {
		conversation: {
			type: Object,
			required: true,
		},

		model: {
			type: Object,
			required: true,
		},

		disableKeyboardShortcuts: {
			type: Boolean,
			default: OCP.Accessibility.disableKeyboardShortcuts(),
		},

		type: {
			type: String,
			default: 'tertiary-no-background',
		},

		token: {
			type: String,
			required: true,
		},
	},

	computed: {
		isAudioAllowed() {
			return this.conversation.permissions & PARTICIPANT.PERMISSIONS.PUBLISH_AUDIO
		},

		showMicrophoneOn() {
			return this.model.attributes.audioAvailable && this.model.attributes.audioEnabled
		},

		audioButtonTitle() {
			if (!this.isAudioAllowed) {
				return t('spreed', 'You are not allowed to enable audio')
			}

			if (!this.model.attributes.audioAvailable) {
				return t('spreed', 'No audio. Click to select device')
			}

			if (this.model.attributes.audioEnabled) {
				return this.disableKeyboardShortcuts
					? t('spreed', 'Mute audio')
					: t('spreed', 'Mute audio (M)')
			} else {
				return this.disableKeyboardShortcuts
					? t('spreed', 'Unmute audio')
					: t('spreed', 'Unmute audio (M)')
			}
		},

		audioButtonAriaLabel() {
			if (!this.model.attributes.audioAvailable) {
				return t('spreed', 'No audio. Click to select device')
			}

			return this.model.attributes.audioEnabled
				? t('spreed', 'Mute audio')
				: t('spreed', 'Unmute audio')
		},
	},

	created() {
		useHotKey('m', this.toggleAudio)
		useHotKey(' ', this.toggleAudio, { push: true })
	},

	mounted() {
		subscribe('local-audio-control-button:toggle-audio', this.updateDeviceState)
	},

	beforeDestroy() {
		unsubscribe('local-audio-control-button:toggle-audio', this.updateDeviceState)
	},

	expose: ['toggleAudio'],

	methods: {
		t,
		toggleAudio() {
			if (!this.model.attributes.audioAvailable) {
				emit('talk:media-settings:show')
				return
			}

			if (this.model.attributes.audioEnabled) {
				this.model.disableAudio()
			} else {
				this.model.enableAudio()
			}
		},

		updateDeviceState() {
			if (BrowserStorage.getItem('audioDisabled_' + this.token) === 'true') {
				this.model.disableAudio()
			} else {
				this.model.enableAudio()
			}
		},
	},
}
<\/script>

<style scoped>
.no-audio-available {
	opacity: .7;
}
</style>
`],sourceRoot:""}]);const r=i}),5040:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(17625);const a=o.A}),5196:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon network-strength2-alert-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M21 1L1 21H17V19H13V11.8L19 5.8V9H21M19 11V17H21V11M19 19V21H21V19"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),5811:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon fullscreen-exit-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),6139:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,`/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-d81f7625] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.nc-button-group-base > div[data-v-d81f7625] {
  text-align: center;
  color: var(--color-text-maxcontrast);
}
.nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] {
  display: flex;
  gap: 4px;
  justify-content: space-between;
}
.nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] li {
  flex: 1 1;
}
.nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] .action-button {
  padding: 0 !important;
  width: 100%;
  display: flex;
  justify-content: center;
}
.nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] .action-button.action-button--active {
  background-color: var(--color-primary-element);
  border-radius: var(--border-radius-large);
  color: var(--color-primary-element-text);
}
.nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] .action-button.action-button--active:hover, .nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] .action-button.action-button--active:focus, .nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] .action-button.action-button--active:focus-within {
  background-color: var(--color-primary-element-hover);
}
.nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] .action-button .action-button__pressed-icon {
  display: none;
}`,"",{version:3,sources:["webpack://./node_modules/@nextcloud/vue/dist/assets/NcActionButtonGroup-CRXLyFpx.css"],names:[],mappings:"AAAA;;;EAGE;AACF;;;EAGE;AACF;;CAEC;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,oCAAoC;AACtC;AACA;EACE,aAAa;EACb,QAAQ;EACR,8BAA8B;AAChC;AACA;EACE,SAAS;AACX;AACA;EACE,qBAAqB;EACrB,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,8CAA8C;EAC9C,yCAAyC;EACzC,wCAAwC;AAC1C;AACA;EACE,oDAAoD;AACtD;AACA;EACE,aAAa;AACf",sourcesContent:[`/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/**
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
/*
* Ensure proper alignment of the vue material icons
*/
.material-design-icon[data-v-d81f7625] {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
}
.nc-button-group-base > div[data-v-d81f7625] {
  text-align: center;
  color: var(--color-text-maxcontrast);
}
.nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] {
  display: flex;
  gap: 4px;
  justify-content: space-between;
}
.nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] li {
  flex: 1 1;
}
.nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] .action-button {
  padding: 0 !important;
  width: 100%;
  display: flex;
  justify-content: center;
}
.nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] .action-button.action-button--active {
  background-color: var(--color-primary-element);
  border-radius: var(--border-radius-large);
  color: var(--color-primary-element-text);
}
.nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] .action-button.action-button--active:hover, .nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] .action-button.action-button--active:focus, .nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] .action-button.action-button--active:focus-within {
  background-color: var(--color-primary-element-hover);
}
.nc-button-group-base ul.nc-button-group-content[data-v-d81f7625] .action-button .action-button__pressed-icon {
  display: none;
}`],sourceRoot:""}]);const r=i}),6484:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(33073),a=s(30374),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),6594:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"participants-editor"},[i("ul",{staticClass:"participants-editor__scroller"},[i("BreakoutRoomItem",{key:"unassigned",staticClass:"participants-editor__section",attrs:{name:e.t("spreed","Unassigned participants")}},e._l(e.unassignedParticipants,function(r){return i("SelectableParticipant",{key:r.attendeeId,attrs:{value:r.attendeeId,checked:e.selectedParticipants,participant:r},on:{"update:checked":function(d){e.selectedParticipants=d}}})}),1),e._v(" "),e._l(e.assignments,function(r,d){return i("BreakoutRoomItem",{key:d,staticClass:"participants-editor__section",attrs:{name:e.roomName(d)}},e._l(r,function(u){return i("SelectableParticipant",{key:u,attrs:{value:e.assignments,checked:e.selectedParticipants,participant:e.attendeesById[u]},on:{"update:checked":function(m){e.selectedParticipants=m}}})}),1)})],2),e._v(" "),i("div",{staticClass:"participants-editor__buttons"},[e.breakoutRoomsConfigured?i("NcButton",{staticClass:"delete",attrs:{title:e.deleteButtonLabel,"aria-label":e.deleteButtonLabel,type:"error"},on:{click:e.toggleShowDialog},scopedSlots:e._u([{key:"icon",fn:function(){return[i("Delete",{attrs:{size:20}})]},proxy:!0}],null,!1,2705356561)},[e._v(`
			`+e._s(e.deleteButtonLabel)+`
		`)]):e._e(),e._v(" "),e.isReorganizingAttendees?e._e():i("NcButton",{attrs:{type:"tertiary"},on:{click:e.goBack},scopedSlots:e._u([{key:"icon",fn:function(){return[i("ArrowLeft",{attrs:{size:20}})]},proxy:!0}],null,!1,1821202730)},[e._v(`
			`+e._s(e.t("spreed","Back"))+`
		`)]),e._v(" "),e.hasAssigned?i("NcButton",{attrs:{type:"tertiary"},on:{click:e.resetAssignments},scopedSlots:e._u([{key:"icon",fn:function(){return[i("Reload",{attrs:{size:20}})]},proxy:!0}],null,!1,163584889)},[e._v(`
			`+e._s(e.resetButtonLabel)+`
		`)]):e._e(),e._v(" "),e.hasSelected?i("NcActions",{attrs:{type:"primary",container:".participants-editor__buttons","menu-name":e.t("spreed","Assign")}},e._l(e.assignments,function(r,d){return i("NcActionButton",{key:d,attrs:{"close-after-click":""},on:{click:function(u){return e.assignAttendees(d)}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("DotsCircle",{attrs:{size:20}})]},proxy:!0}],null,!0)},[e._v(`
				`+e._s(e.roomName(d))+`
			`)])}),1):e._e(),e._v(" "),i("NcButton",{attrs:{disabled:!e.hasAssigned,type:e.confirmButtonType},on:{click:e.handleSubmit}},[e._v(`
			`+e._s(e.confirmButtonLabel)+`
		`)])],1),e._v(" "),e.showDialog?i("NcDialog",{attrs:{open:e.showDialog,name:e.t("spreed","Delete breakout rooms"),message:e.dialogMessage,container:".participants-editor"},on:{"update:open":function(r){e.showDialog=r}},scopedSlots:e._u([{key:"actions",fn:function(){return[i("NcButton",{attrs:{type:"tertiary"},on:{click:e.toggleShowDialog}},[e._v(`
				`+e._s(e.t("spreed","Cancel"))+`
			`)]),e._v(" "),i("NcButton",{attrs:{type:"error"},on:{click:e.deleteBreakoutRooms}},[e._v(`
				`+e._s(e.t("spreed","Delete breakout rooms"))+`
			`)])]},proxy:!0}],null,!1,2445291331)}):e._e()],1)},a=[]}),6934:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(44224),a=s(79516),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),7022:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"grid-main-wrapper",class:{"is-grid":!e.isStripe,transparent:e.isLessThanTwoVideos}},[e.isStripe&&!e.isRecording?i("NcButton",{staticClass:"stripe--collapse",attrs:{type:"tertiary-no-background",title:e.stripeButtonTitle,"aria-label":e.stripeButtonTitle},on:{click:e.handleClickStripeCollapse},scopedSlots:e._u([{key:"icon",fn:function(){return[e.stripeOpen?i("ChevronDown",{attrs:{"fill-color":"#ffffff",size:20}}):i("ChevronUp",{attrs:{"fill-color":"#ffffff",size:20}})]},proxy:!0}],null,!1,2967664880)}):e._e(),e._v(" "),i("TransitionWrapper",{attrs:{name:e.isStripe?"slide-down":void 0}},[!e.isStripe||e.stripeOpen?i("div",{staticClass:"wrapper",style:e.wrapperStyle},[i("div",{class:[e.isStripe?"stripe-wrapper":"grid-wrapper"]},[e.hasPreviousPage&&e.gridWidth>0?i("NcButton",{staticClass:"grid-navigation grid-navigation__previous",attrs:{type:"tertiary-no-background","aria-label":e.t("spreed","Previous page of videos")},on:{click:e.handleClickPrevious},scopedSlots:e._u([{key:"icon",fn:function(){return[i("ChevronLeft",{attrs:{"fill-color":"#ffffff",size:20}})]},proxy:!0}],null,!1,2547924082)}):e._e(),e._v(" "),i("div",{ref:"grid",staticClass:"grid",class:{stripe:e.isStripe},style:e.gridStyle,on:{mousemove:e.handleMovement,wheel:e.debounceHandleWheelEvent,keydown:e.handleMovement}},[!e.devMode&&(!e.isLessThanTwoVideos||!e.isStripe)?[e.videos.length===0&&!e.isStripe?i("EmptyCallView",{staticClass:"video",attrs:{"is-grid":!0}}):e._e(),e._v(" "),e._l(e.displayedVideos,function(r){return[i("VideoVue",{key:r.attributes.peerId,class:{video:!e.isStripe},attrs:{"show-video-overlay":e.showVideoOverlay,token:e.token,model:r,"is-grid":!0,"show-talking-highlight":!e.isStripe,"is-stripe":e.isStripe,"is-promoted":e.sharedDatas[r.attributes.peerId].promoted,"is-selected":e.isSelected(r),"shared-data":e.sharedDatas[r.attributes.peerId]},on:{"click-video":function(d){return e.handleClickVideo(d,r.attributes.peerId)}}})]})]:e._e(),e._v(" "),e.devMode?[e._l(e.displayedVideos,function(r){return i("div",{key:r,staticClass:"dev-mode-video video",class:{"dev-mode-screenshot":e.screenshotMode}},[i("img",{attrs:{alt:e.placeholderName(r),src:e.placeholderImage(r)}}),e._v(" "),i("VideoBottomBar",{attrs:{"has-shadow":!1,model:e.placeholderModel(r),"shared-data":e.placeholderSharedData(r),token:e.token,"participant-name":e.placeholderName(r)}})],1)}),e._v(" "),e.screenshotMode?e._e():i("h1",{staticClass:"dev-mode__title"},[e._v(`
							Dev mode on ;-)
						`)])]:e._e(),e._v(" "),!e.isStripe&&!e.isRecording?i("LocalVideo",{ref:"localVideo",staticClass:"video",attrs:{"is-grid":"","fit-video":!1,token:e.token,"local-media-model":e.localMediaModel,"local-call-participant-model":e.localCallParticipantModel},on:{"click-video":e.handleClickLocalVideo}}):e._e()],2),e._v(" "),e.hasNextPage&&e.gridWidth>0?i("NcButton",{staticClass:"grid-navigation grid-navigation__next",attrs:{type:"tertiary-no-background","aria-label":e.t("spreed","Next page of videos")},on:{click:e.handleClickNext},scopedSlots:e._u([{key:"icon",fn:function(){return[i("ChevronRight",{attrs:{"fill-color":"#ffffff",size:20}})]},proxy:!0}],null,!1,226061961)}):e._e()],1),e._v(" "),e.isStripe&&!e.isRecording?i("LocalVideo",{ref:"localVideo",staticClass:"video",attrs:{"is-stripe":!0,"show-controls":!1,token:e.token,"local-media-model":e.localMediaModel,"local-call-participant-model":e.localCallParticipantModel},on:{"click-video":e.handleClickLocalVideo}}):e._e(),e._v(" "),e.devMode?[i("NcButton",{staticClass:"dev-mode__toggle",attrs:{type:"tertiary","aria-label":"Toggle screenshot mode"},on:{click:function(r){e.screenshotMode=!e.screenshotMode}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.screenshotMode?e._e():i("ChevronLeft",{attrs:{"fill-color":"#00FF41",size:20}})]},proxy:!0}],null,!1,986809350)}),e._v(" "),e.screenshotMode?e._e():i("div",{staticClass:"dev-mode__data"},[i("span",[e._v("GRID INFO")]),e._v(" "),i("NcButton",{attrs:{small:""},on:{click:e.disableDevMode}},[e._v(`
						Disable
					`)]),e._v(" "),i("span",[e._v("Videos (total):")]),i("span",[e._v(e._s(e.videosCount))]),e._v(" "),i("span",[e._v("Displayed videos:")]),i("span",[e._v(e._s(e.displayedVideos.length))]),e._v(" "),i("span",[e._v("Max per page:")]),i("span",[e._v("~"+e._s(e.videosCap))]),e._v(" "),i("span",[e._v("Grid width:")]),i("span",[e._v(e._s(e.gridWidth)+"px")]),e._v(" "),i("span",[e._v("Grid height:")]),i("span",[e._v(e._s(e.gridHeight)+"px")]),e._v(" "),i("span",[e._v("Min video width:")]),i("span",[e._v(e._s(e.minWidth)+"px")]),e._v(" "),i("span",[e._v("Min video Height:")]),i("span",[e._v(e._s(e.minHeight)+"px")]),e._v(" "),i("span",[e._v("Grid aspect ratio:")]),i("span",[e._v(e._s(e.gridAspectRatio))]),e._v(" "),i("span",[e._v("Number of pages:")]),i("span",[e._v(e._s(e.numberOfPages))]),e._v(" "),i("span",[e._v("Current page:")]),i("span",[e._v(e._s(e.currentPage))]),e._v(" "),i("span",[e._v("Dummies:")]),i("input",{directives:[{name:"model",rawName:"v-model.number",value:e.dummies,expression:"dummies",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.dummies},on:{input:function(r){r.target.composing||(e.dummies=e._n(r.target.value))},blur:function(r){return e.$forceUpdate()}}}),e._v(" "),i("span",[e._v("Stripe mode:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.devStripe,expression:"devStripe"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.devStripe)?e._i(e.devStripe,null)>-1:e.devStripe},on:{change:function(r){var d=e.devStripe,u=r.target,m=!!u.checked;if(Array.isArray(d)){var h=null,v=e._i(d,h);u.checked?v<0&&(e.devStripe=d.concat([h])):v>-1&&(e.devStripe=d.slice(0,v).concat(d.slice(v+1)))}else e.devStripe=m}}}),e._v(" "),i("span",[e._v("Screenshot mode:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.screenshotMode,expression:"screenshotMode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.screenshotMode)?e._i(e.screenshotMode,null)>-1:e.screenshotMode},on:{change:function(r){var d=e.screenshotMode,u=r.target,m=!!u.checked;if(Array.isArray(d)){var h=null,v=e._i(d,h);u.checked?v<0&&(e.screenshotMode=d.concat([h])):v>-1&&(e.screenshotMode=d.slice(0,v).concat(d.slice(v+1)))}else e.screenshotMode=m}}})],1)]:e._e()],2):e._e()])],1)},a=[]}),7024:((c,_,s)=>{"use strict";s.d(_,{A:()=>h});var o=s(85471),a=s(53334),l=s(74095),e=s(32073),i=s(16879),r=s(80780),d=s(11891),u=s(23399),m=s(8888);const h={name:"BreakoutRoomsEditor",components:{BreakoutRoomsParticipantsEditor:d.A,NcButton:l.A,NcCheckboxRadioSwitch:e.A,NcInputField:i.A,NcModal:r.A},props:{token:{type:String,required:!0}},emits:["close"],setup(){const v=(0,o.KR)("1"),E=(0,o.KR)(2),p=(0,o.KR)(""),A=(0,o.KR)(!1),P=(0,o.KR)(!1),C=`breakout-rooms-header-${(0,u.B)()}`;return{breakoutRoomsStore:(0,m.w)(),mode:v,amount:E,attendeeMap:p,isEditingParticipants:A,isInvalidAmount:P,dialogHeaderId:C}},computed:{modalTitle(){return this.isEditingParticipants?(0,a.t)("spreed","Assign participants to rooms"):(0,a.t)("spreed","Configure breakout rooms")}},watch:{amount(v){this.isInvalidAmount=isNaN(v)||!this.$refs.inputField.$refs.input?.checkValidity()}},methods:{t:a.t,async handleCreateRooms(){try{await this.breakoutRoomsStore.configureBreakoutRooms({token:this.token,mode:this.mode,amount:this.amount}),this.$emit("close")}catch(v){console.debug(v)}}}}}),7821:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("NcActions",{staticClass:"reaction",attrs:{type:"tertiary",title:e.t("spreed","Send a reaction"),"aria-label":e.t("spreed","Send a reaction")},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconEmoticonOutline",{attrs:{size:20}})]},proxy:!0}])},[e._v(" "),i("NcActionButtonGroup",{staticClass:"reaction__group",style:{"--reactions-in-single-row":e.reactionsInSingleRow}},e._l(e.supportedReactions,function(r,d){return i("NcActionButton",{key:d,staticClass:"reaction__button",attrs:{"aria-label":e.t("spreed","React with {reaction}",{reaction:r})},on:{click:function(u){return e.throttledSendReaction(r)}},scopedSlots:e._u([{key:"icon",fn:function(){return[e._v(`
				`+e._s(r)+`
			`)]},proxy:!0}],null,!0)})}),1)],1)},a=[]}),8423:((c,_,s)=>{"use strict";s.d(_,{A:()=>l});let o="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",a=(e,i=21)=>(r=i)=>{let d="",u=r|0;for(;u--;)d+=e[Math.random()*e.length|0];return d},l=(e=21)=>{let i="",r=e|0;for(;r--;)i+=o[Math.random()*64|0];return i}}),8551:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(51942);const a=o.A}),8573:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon chevron-down-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),9152:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(98381),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),9216:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"DotsHorizontalIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),9560:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(87682),a=s(78690),l=s(10359),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"3cac5446",null);const r=i.exports}),10182:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".breakout-room-item[data-v-63234d26]{margin-top:calc(var(--default-grid-baseline)*5);font-weight:bold}.breakout-room-item__wrapper[data-v-63234d26]{display:flex;align-items:center;gap:var(--default-grid-baseline);margin:0 var(--default-grid-baseline)}.breakout-room-item__room-name[data-v-63234d26]{margin:0 auto 0 var(--default-grid-baseline)}","",{version:3,sources:["webpack://./src/components/RightSidebar/BreakoutRooms/BreakoutRoomItem.vue"],names:[],mappings:"AACA,qCACC,+CAAA,CACA,gBAAA,CAEA,8CACC,YAAA,CACA,kBAAA,CACA,gCAAA,CACA,qCAAA,CAGD,gDACC,4CAAA",sourcesContent:[`
.breakout-room-item {
	margin-top: calc(var(--default-grid-baseline)*5);
	font-weight: bold;

	&__wrapper {
		display: flex;
		align-items: center;
		gap: var(--default-grid-baseline);
		margin : 0 var(--default-grid-baseline);
	}

	&__room-name {
		margin : 0 auto 0 var(--default-grid-baseline);
	}
}
`],sourceRoot:""}]);const r=i}),10359:((c,_,s)=>{"use strict";var o=s(45746)}),10477:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(72051),a=s(41563),l=s(78714),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"420763c6",null);const r=i.exports}),10919:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(11994),a=s(3463),l=s(71575),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"163828b4",null);const r=i.exports}),11579:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(31476);const a=o.A}),11653:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(5811),a=s(60941),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),11749:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".screen[data-v-c3944ea6]{width:100%;height:100%;position:absolute;top:0;left:0}.screen--fit[data-v-c3944ea6]{object-fit:contain}.screen--fill[data-v-c3944ea6]{object-fit:cover}","",{version:3,sources:["webpack://./src/components/CallView/shared/Screen.vue"],names:[],mappings:"AAEA,yBACC,UAAA,CACA,WAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,8BACC,kBAAA,CAED,+BACC,gBAAA",sourcesContent:[`

.screen {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	&--fit {
		object-fit: contain;
	}
	&--fill {
		object-fit: cover;
	}
}

`],sourceRoot:""}]);const r=i}),11891:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(6594),a=s(31521),l=s(41885),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"792e17c6",null);const r=i.exports}),11994:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("div",{directives:[{name:"show",rawName:"v-show",value:!e.placeholderForPromoted||e.sharedData.promoted,expression:"!placeholderForPromoted || sharedData.promoted"}],ref:"videoContainer",staticClass:"video-container",class:e.containerClass,attrs:{id:(e.placeholderForPromoted?"placeholder-":"")+"container_"+e.peerId+"_video_incoming"},on:{mouseover:function(r){e.mouseover=!0},mouseleave:function(r){e.mouseover=!1},click:function(r){return e.$emit("click-video")}}},[i("TransitionWrapper",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showVideo,expression:"showVideo"}],staticClass:"videoWrapper",class:e.videoWrapperClass,style:e.videoWrapperStyle},[i("video",{ref:"video",staticClass:"video",class:e.fitVideo?"video--fit":"video--fill",attrs:{disablePictureInPicture:!e.isBig},on:{playing:e.updateVideoAspectRatio}}),e._v(" "),e.isPresenterOverlay&&e.mouseover?i("AccountOff",{staticClass:"presenter-icon__hide",attrs:{"aria-label":e.t("spreed","Hide presenter video"),title:e.t("spreed","Hide presenter video"),size:32},on:{click:function(r){return e.$emit("click-presenter")}}}):e._e(),e._v(" "),e.isLoading?i("NcLoadingIcon",{staticClass:"video-loading",attrs:{size:e.avatarSize/2}}):e._e(),e._v(" "),e.screenshotModeUrl&&e.isPresenterOverlay?i("img",{staticClass:"dev-mode-video--presenter",attrs:{alt:"dev-mode-video--presenter",src:e.screenshotModeUrl}}):e._e()],1)]),e._v(" "),i("TransitionWrapper",{attrs:{name:"fade"}},[e.showSharedScreen?i("Screen",{attrs:{"is-big":e.isBig,token:e.token,"call-participant-model":e.model,"shared-data":e.sharedData}}):e._e()],1),e._v(" "),i("TransitionWrapper",{attrs:{name:"fade"}},[e.showBackgroundAndAvatar?i("div",{key:"backgroundAvatar",staticClass:"avatar-container"},[i("VideoBackground",{attrs:{"display-name":e.displayName,user:e.participantUserId}}),e._v(" "),i("AvatarWrapper",{attrs:{id:e.participantUserId,token:e.token,name:e.displayName,source:e.participantActorType,size:e.avatarSize,loading:e.isLoading,"disable-menu":"","disable-tooltip":""}})],1):e._e()]),e._v(" "),i("TransitionWrapper",{attrs:{name:"fade"}},[e.showPlaceholderForPromoted?i("div",{key:"placeholderForPromoted",staticClass:"placeholder-for-promoted"},[e.isPromoted||e.isSelected?i("AccountCircle",{attrs:{"fill-color":"#FFFFFF",size:64}}):e._e()],1):e._e()]),e._v(" "),e.connectionMessage?i("div",{staticClass:"connection-message",class:e.connectionMessageClass},[e._v(`
		`+e._s(e.connectionMessage)+`
	`)]):e._e(),e._v(" "),e.hideBottomBar?e._e():e._t("bottom-bar",function(){return[i("VideoBottomBar",e._b({attrs:{"has-shadow":e.hasVideo,"participant-name":e.participantName},on:{"bottom-bar-hover":e.handleHoverEvent}},"VideoBottomBar",e.$props,!1))]})],2)},a=[]}),13787:((c,_,s)=>{"use strict";s.d(_,{A:()=>A});var o=s(85471),a=s(24558),l=s(85168),e=s(53334),i=s(74095),r=s(88289),d=s(7789),u=s(78457),m=s(72925),h=s(50634),v=s(21625),E=s(50123),p=s(26600);const A={name:"LocalVideo",components:{AvatarWrapper:u.A,AccountOff:a.A,NcButton:i.A,VideoBackground:d.A,NcLoadingIcon:r.A},props:{token:{type:String,required:!0},localMediaModel:{type:Object,required:!0},localCallParticipantModel:{type:Object,required:!0},isGrid:{type:Boolean,default:!1},isStripe:{type:Boolean,default:!1},fitVideo:{type:Boolean,default:!1},isSidebar:{type:Boolean,default:!1},showControls:{type:Boolean,default:!0},unSelectable:{type:Boolean,default:!1},isBig:{type:Boolean,default:!1},isSmall:{type:Boolean,default:!1},isPresenterOverlay:{type:Boolean,default:!1}},emits:["click-video","click-presenter"],setup(){const P=(0,o.WQ)("CallView:devModeEnabled",(0,o.KR)(!1)),C=(0,o.WQ)("CallView:screenshotModeEnabled",(0,o.KR)(!1));return{devMode:P,screenshotMode:C,callViewStore:(0,h.e)()}},data(){return{notificationHandle:null,videoAspectRatio:null,containerAspectRatio:null,resizeObserver:null,mouseover:!1}},computed:{stopFollowingLabel(){return(0,e.t)("spreed","Back")},isNotConnected(){return this.localCallParticipantModel.attributes.peerNeeded&&this.localCallParticipantModel.attributes.connectionState!==E.K.CONNECTED&&this.localCallParticipantModel.attributes.connectionState!==E.K.COMPLETED},videoContainerClass(){return{"not-connected":this.isNotConnected,"video-container-grid":this.isGrid,"video-container-stripe":this.isStripe,"video-container-big":this.isBig,"video-container-small":this.isSmall,presenter:this.isPresenterOverlay&&this.mouseover,"presenter-overlay":this.isPresenterOverlay,"hover-shadow":this.isSelectable&&this.mouseover,speaking:this.localMediaModel.attributes.speaking}},videoWrapperStyle(){if(!(!this.containerAspectRatio||!this.videoAspectRatio||!this.isBig||this.isGrid))return this.containerAspectRatio>this.videoAspectRatio?`width: ${this.$refs.videoContainer.clientHeight*this.videoAspectRatio}px`:`height: ${this.$refs.videoContainer.clientWidth/this.videoAspectRatio}px`},userId(){return this.$store.getters.getUserId()},actorType(){return this.$store.getters.getActorType()},displayName(){return this.$store.getters.getDisplayName()},avatarSize(){return this.isStripe||!this.isBig&&!this.isGrid?m.of.SIZE.LARGE:this.containerAspectRatio?Math.min(m.of.SIZE.FULL,this.$refs.videoContainer.clientHeight/2,this.$refs.videoContainer.clientWidth/2):m.of.SIZE.FULL},localStreamVideoError(){return this.localMediaModel.attributes.localStream&&this.localMediaModel.attributes.localStreamRequestVideoError},hasLocalVideo(){return this.localMediaModel.attributes.videoEnabled},isSelected(){return this.callViewStore.selectedVideoPeerId==="local"},isSelectable(){return!this.unSelectable&&!this.isSidebar&&this.hasLocalVideo&&this.callViewStore.selectedVideoPeerId!=="local"},screenshotModeUrl(){return this.screenshotMode?(0,p.jM)(8):""}},watch:{localCallParticipantModel:{immediate:!0,handler(P,C){C&&C.off("forcedMute",this._handleForcedMute),P&&P.on("forcedMute",this._handleForcedMute)}},"localMediaModel.attributes.localStream"(P){this._setLocalStream(P)},localStreamVideoError:{immediate:!0,handler(P){P&&(P.name==="NotAllowedError"?this.notificationHandle=(0,l.Qg)((0,e.t)("spreed","Access to camera was denied")):P.name==="NotReadableError"||P.name==="AbortError"?this.notificationHandle=(0,l.Qg)((0,e.t)("spreed","Error while accessing camera: It is likely in use by another program"),{timeout:l.DH}):(console.error("Error while accessing camera: ",P.message,P.name),this.notificationHandle=(0,l.Qg)((0,e.t)("spreed","Error while accessing camera"),{timeout:l.DH})))}}},mounted(){this._setLocalStream(this.localMediaModel.attributes.localStream),(this.isBig||this.isGrid)&&(this.resizeObserver=new ResizeObserver(this.updateContainerAspectRatio),this.resizeObserver.observe(this.$refs.videoContainer))},beforeDestroy(){this.resizeObserver&&this.resizeObserver.disconnect()},destroyed(){this.notificationHandle&&this.notificationHandle.hideToast(),this.localCallParticipantModel&&this.localCallParticipantModel.off("forcedMute",this._handleForcedMute)},methods:{t:e.t,_handleForcedMute(){(0,l.cf)((0,e.t)("spreed","You have been muted by a moderator"),{selector:void 0})},_setLocalStream(P){if(!P)return;const C={autoplay:!0,mirror:!0,muted:!0};(0,v.A)(P,this.$refs.video,C)},handleStopFollowing(){this.callViewStore.setSelectedVideoPeerId(null),this.callViewStore.stopPresentation(this.token)},updateContainerAspectRatio([{target:P}]){this.containerAspectRatio=P.clientWidth/P.clientHeight},updateVideoAspectRatio(){this.isBig&&(this.videoAspectRatio=this.localMediaModel.attributes.localStream.getVideoTracks()?.[0].getSettings().aspectRatio??this.$refs.video.videoWidth/this.$refs.video.videoHeight)}}}}),14072:((c,_,s)=>{"use strict";s.d(_,{A:()=>C});var o=s(74273),a=s(37361),l=s(57191),e=s(32436),i=s(53334),r=s(74095),d=s(9560),u=s(3556),m=s(41850),h=s(10477),v=s(92252),E=s(10919),p=s(64902),A=s(50634),P=s(92608);const C={name:"ViewerOverlayCallView",components:{EmptyCallView:d.A,LocalAudioControlButton:u.A,LocalVideoControlButton:h.A,Portal:o.ZL,Screen:v.A,LocalVideo:m.A,ChevronUp:e.A,ChevronDown:l.A,NcButton:r.A,TransitionWrapper:p.A,VideoVue:E.A,ArrowExpand:a.A},props:{token:{type:String,required:!0},model:{type:Object,required:!1,default:null},sharedData:{type:Object,required:!1,default:null},localModel:{type:Object,required:!1,default:()=>P.PR},localCallParticipantModel:{type:Object,required:!1,default:()=>P.cA},localSharedData:{type:Object,required:!0,default:()=>{}},screens:{type:Array,required:!1,default:()=>[]}},setup(){return{callViewStore:(0,A.e)()}},data(){return{isCollapsed:!1,observer:null,position:{right:0,bottom:0}}},computed:{conversation(){return this.$store.getters.conversation(this.token)},hasLocalScreen(){return!!this.localModel.attributes.localScreen},showLocalScreen(){return this.hasLocalScreen&&this.screens[0]===P.cA.attributes.peerId}},mounted(){this.updatePosition(),this.observer=new ResizeObserver(this.updatePosition),this.observer.observe(this.$refs.ghost)},beforeDestroy(){this.observer.disconnect()},methods:{t:i.t,maximize(){OCA.Viewer&&OCA.Viewer.close(),this.callViewStore.setIsViewerOverlay(!1)},updatePosition(){const{right:O,bottom:R}=this.$refs.ghost.getBoundingClientRect();this.position.right=window.innerWidth-O,this.position.bottom=window.innerHeight-R}}}}),14196:((c,_,s)=>{"use strict";var o=s(60581)}),14449:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".buttons-bar[data-v-572e43ac]{display:flex;align-items:center;gap:3px}.buttons-bar #screensharing-menu button[data-v-572e43ac]{width:100%;height:auto}.buttons-bar button.screensharing-enabled[data-v-572e43ac]{opacity:1}.buttons-bar button.no-screensharing-available[data-v-572e43ac],.buttons-bar button.no-screensharing-available *[data-v-572e43ac]{opacity:.7}.hint[data-v-572e43ac]{padding:12px;max-width:300px;text-align:left}.hint__actions[data-v-572e43ac]{display:flex;flex-direction:row-reverse;justify-content:space-between;padding-top:4px}.hint__button[data-v-572e43ac]{height:var(--default-clickable-area)}.trigger[data-v-572e43ac]{display:flex;align-items:center;justify-content:center}","",{version:3,sources:["webpack://./src/components/TopBar/TopBarMediaControls.vue"],names:[],mappings:"AACA,8BACC,YAAA,CACA,kBAAA,CACA,OAAA,CAGD,yDACC,UAAA,CACA,WAAA,CAID,2DACC,SAAA,CAIA,kIACC,UAAA,CAIF,uBACC,YAAA,CACA,eAAA,CACA,eAAA,CACA,gCACC,YAAA,CACA,0BAAA,CACA,6BAAA,CACA,eAAA,CAED,+BACC,oCAAA,CAIF,0BACC,YAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:[`
.buttons-bar {
	display: flex;
	align-items: center;
	gap: 3px;
}

.buttons-bar #screensharing-menu button {
	width: 100%;
	height: auto;
}

/* Highlight the media buttons when enabled */
.buttons-bar button.screensharing-enabled {
	opacity: 1;
}

.buttons-bar button.no-screensharing-available {
	&, & * {
		opacity: .7;
	}
}

.hint {
	padding: 12px;
	max-width: 300px;
	text-align: left;
	&__actions {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		padding-top:4px;
	}
	&__button {
		height: var(--default-clickable-area);
	}
}

.trigger {
	display: flex;
	align-items: center;
	justify-content: center;
}
`],sourceRoot:""}]);const r=i}),14835:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(79662);const a=o.A}),16053:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".send-message-dialog[data-v-07e47972]{padding-bottom:calc(3*var(--default-grid-baseline))}","",{version:3,sources:["webpack://./src/components/BreakoutRoomsEditor/SendMessageDialog.vue"],names:[],mappings:"AACA,sCACC,mDAAA",sourcesContent:[`
.send-message-dialog {
	padding-bottom: calc(3 * var(--default-grid-baseline));
}
`],sourceRoot:""}]);const r=i}),16879:((c,_,s)=>{"use strict";s.d(_,{A:()=>o.N});var o=s(94589)}),16880:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"ViewGridIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),16924:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(49799);const a=o.A}),17204:((c,_,s)=>{"use strict";var o=s(19269)}),17401:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".grid-main-wrapper[data-v-54f9a690]{--navigation-position: calc(var(--default-grid-baseline) * 2);position:relative;width:100%}.grid-main-wrapper.transparent[data-v-54f9a690]{background:rgba(0,0,0,0)}.grid-main-wrapper.is-grid[data-v-54f9a690]{height:100%}.wrapper[data-v-54f9a690]{width:100%;display:flex;position:relative;bottom:0;left:0}.grid[data-v-54f9a690]{display:grid;height:100%;width:100%;grid-row-gap:var(--grid-gap);grid-column-gap:var(--grid-gap)}.grid.stripe[data-v-54f9a690]{padding:var(--grid-gap) var(--grid-gap) 0 0}.grid-wrapper[data-v-54f9a690]{width:100%;min-width:0;position:relative;flex:1 0 auto}.stripe-wrapper[data-v-54f9a690]{width:100%;min-width:0;position:relative}.dev-mode-video[data-v-54f9a690]:not(.dev-mode-screenshot){outline:1px solid #00ff41;color:#00ff41}.dev-mode-video[data-v-54f9a690]{position:relative}.dev-mode-video img[data-v-54f9a690]{object-fit:cover;height:100%;width:100%;border-radius:var(--border-radius-element, calc(var(--default-clickable-area) / 2))}.dev-mode-video .wrapper[data-v-54f9a690]{position:absolute}.dev-mode__title[data-v-54f9a690]{position:absolute;left:var(--default-clickable-area);color:#00ff41;z-index:100;line-height:120px;font-weight:900;font-size:100px !important;top:88px;opacity:25%}.dev-mode__toggle[data-v-54f9a690]{position:fixed !important;left:20px;top:calc(2*var(--header-height))}.dev-mode__data[data-v-54f9a690]{font-family:monospace;position:fixed;color:#00ff41;left:20px;top:calc(2*var(--header-height) + 40px);padding:5px;background:rgba(0,0,0,.8);border:1px solid #00ff41;display:grid;grid-template-columns:165px 75px;align-items:center;justify-content:flex-start;z-index:1}.dev-mode__data span[data-v-54f9a690]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.dev-mode__data input[data-v-54f9a690]{max-width:65px;height:22.5px !important;min-height:unset;margin:0}.video[data-v-54f9a690]:last-child{grid-column-end:-1}.grid-wrapper .grid-navigation[data-v-54f9a690]{position:absolute;top:calc(50% - var(--default-clickable-area)/2)}.grid-wrapper .grid-navigation__previous[data-v-54f9a690]{left:calc(var(--default-grid-baseline)*2)}.grid-wrapper .grid-navigation__next[data-v-54f9a690]{right:calc(var(--default-grid-baseline)*2)}.stripe-wrapper .grid-navigation[data-v-54f9a690]{position:absolute;top:calc(var(--navigation-position) + var(--grid-gap))}.stripe-wrapper .grid-navigation__previous[data-v-54f9a690]{left:var(--navigation-position)}.stripe-wrapper .grid-navigation__next[data-v-54f9a690]{right:calc(var(--navigation-position) + var(--grid-gap))}.stripe--collapse[data-v-54f9a690]{position:absolute !important;top:calc(-1*(var(--default-clickable-area) + var(--navigation-position)/2));right:calc(var(--navigation-position)/2)}.stripe--collapse[data-v-54f9a690],.grid-navigation[data-v-54f9a690]{z-index:2;opacity:.7}#call-container:hover .stripe--collapse[data-v-54f9a690],#call-container:hover .grid-navigation[data-v-54f9a690]{background-color:rgba(0,0,0,.1) !important}#call-container:hover .stripe--collapse[data-v-54f9a690]:hover,#call-container:hover .stripe--collapse[data-v-54f9a690]:focus,#call-container:hover .grid-navigation[data-v-54f9a690]:hover,#call-container:hover .grid-navigation[data-v-54f9a690]:focus{opacity:1;background-color:rgba(0,0,0,.2) !important}.stripe--collapse[data-v-54f9a690]:active,.grid-navigation[data-v-54f9a690]:active{background:none}","",{version:3,sources:["webpack://./src/components/CallView/Grid/Grid.vue"],names:[],mappings:"AACA,oCACC,6DAAA,CACA,iBAAA,CACA,UAAA,CAGD,gDACC,wBAAA,CAGD,4CACC,WAAA,CAGD,0BACC,UAAA,CACA,YAAA,CACA,iBAAA,CACA,QAAA,CACA,MAAA,CAGD,uBACC,YAAA,CACA,WAAA,CACA,UAAA,CAEA,4BAAA,CACA,+BAAA,CAEA,8BACC,2CAAA,CAIF,+BACC,UAAA,CACA,WAAA,CACA,iBAAA,CACA,aAAA,CAGD,iCACC,UAAA,CACA,WAAA,CACA,iBAAA,CAIA,2DACC,yBAAA,CACA,aAAA,CAHF,iCAMC,iBAAA,CAEA,qCACC,gBAAA,CACA,WAAA,CACA,UAAA,CACA,mFAAA,CAGD,0CACC,iBAAA,CAIF,kCACC,iBAAA,CACA,kCAAA,CACA,aAAA,CACA,WAAA,CACA,iBAAA,CACA,eAAA,CACA,0BAAA,CACA,QAAA,CACA,WAAA,CAGD,mCACC,yBAAA,CACA,SAAA,CACA,gCAAA,CAGD,iCACC,qBAAA,CACA,cAAA,CACA,aAAA,CACA,SAAA,CACA,uCAAA,CACA,WAAA,CACA,yBAAA,CACA,wBAAA,CACA,YAAA,CACA,gCAAA,CACA,kBAAA,CACA,0BAAA,CACA,SAAA,CAEA,sCACC,sBAAA,CACA,eAAA,CACA,kBAAA,CAED,uCACC,cAAA,CACA,wBAAA,CACA,gBAAA,CACA,QAAA,CAIF,mCACC,kBAAA,CAIA,gDACC,iBAAA,CACA,+CAAA,CAEA,0DACC,yCAAA,CAGD,sDACC,0CAAA,CAIF,kDACC,iBAAA,CACA,sDAAA,CAEA,4DACC,+BAAA,CAGD,wDACC,wDAAA,CAKH,mCACC,4BAAA,CACA,2EAAA,CACA,wCAAA,CAGD,qEAEC,SAAA,CACA,UAAA,CAEA,iHACC,0CAAA,CAEA,0PAEC,SAAA,CACA,0CAAA,CAIF,mFAEC,eAAA",sourcesContent:[`
.grid-main-wrapper {
	--navigation-position: calc(var(--default-grid-baseline) * 2);
	position: relative;
	width: 100%;
}

.grid-main-wrapper.transparent {
	background: transparent;
}

.grid-main-wrapper.is-grid {
	height: 100%;
}

.wrapper {
	width: 100%;
	display: flex;
	position: relative;
	bottom: 0;
	left: 0;
}

.grid {
	display: grid;
	height: 100%;
	width: 100%;

	grid-row-gap: var(--grid-gap);
	grid-column-gap: var(--grid-gap);

	&.stripe {
		padding: var(--grid-gap) var(--grid-gap) 0 0;
	}
}

.grid-wrapper {
	width: 100%;
	min-width: 0;
	position: relative;
	flex: 1 0 auto;
}

.stripe-wrapper {
	width: 100%;
	min-width: 0;
	position: relative;
}

.dev-mode-video {
	&:not(.dev-mode-screenshot) {
		outline: 1px solid #00FF41;
		color: #00FF41;
	}

	position: relative;

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
		border-radius: var(--border-radius-element, calc(var(--default-clickable-area) / 2));
	}

	.wrapper {
		position: absolute;
	}
}

.dev-mode__title {
	position: absolute;
	left: var(--default-clickable-area);
	color: #00FF41;
	z-index: 100;
	line-height: 120px;
	font-weight: 900;
	font-size: 100px !important;
	top: 88px;
	opacity: 25%;
}

.dev-mode__toggle {
	position: fixed !important;
	left: 20px;
	top: calc(2 * var(--header-height));
}

.dev-mode__data {
	font-family: monospace;
	position: fixed;
	color: #00FF41;
	left: 20px;
	top: calc(2 * var(--header-height) + 40px);
	padding: 5px;
	background: rgba(0, 0, 0, 0.8);
	border: 1px solid #00FF41;
	display: grid;
	grid-template-columns: 165px 75px;
	align-items: center;
	justify-content: flex-start;
	z-index: 1;

	& span {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	& input {
		max-width: 65px;
		height: 22.5px !important;
		min-height: unset;
		margin: 0;
	}
}

.video:last-child {
	grid-column-end: -1;
}

.grid-navigation {
	.grid-wrapper & {
		position: absolute;
		top: calc(50% - var(--default-clickable-area) / 2);

		&__previous {
			left: calc(var(--default-grid-baseline) * 2);
		}

		&__next {
			right: calc(var(--default-grid-baseline) * 2);
		}
	}

	.stripe-wrapper & {
		position: absolute;
		top: calc(var(--navigation-position) + var(--grid-gap));

		&__previous {
			left: var(--navigation-position);
		}

		&__next {
			right: calc(var(--navigation-position) + var(--grid-gap));
		}
	}
}

.stripe--collapse {
	position: absolute !important;
	top: calc(-1 * (var(--default-clickable-area) + var(--navigation-position) / 2));
	right: calc(var(--navigation-position) / 2) ;
}

.stripe--collapse,
.grid-navigation {
	z-index: 2;
	opacity: .7;

	#call-container:hover & {
		background-color: rgba(0, 0, 0, 0.1) !important;

		&:hover,
		&:focus {
			opacity: 1;
			background-color: rgba(0, 0, 0, 0.2) !important;
		}
	}

	&:active {
		/* needed again to override default active button style */
		background: none;
	}
}

`],sourceRoot:""}]);const r=i}),17625:((c,_,s)=>{"use strict";s.d(_,{A:()=>m});var o=s(69956),a=s.n(o),l=s(45471),e=s.n(l),i=s(53334),r=s(47999),d=s(14816),u=s(21625);const m={name:"Screen",components:{VideoBottomBar:r.A},props:{token:{type:String,required:!0},localMediaModel:{type:Object,default:null},callParticipantModel:{type:Object,default:null},sharedData:{type:Object,required:!0},isBig:{type:Boolean,default:!1}},setup(){return{guestNameStore:(0,d.m)()}},computed:{model(){return this.callParticipantModel?this.callParticipantModel:this.localMediaModel},screenContainerId(){return this.localMediaModel?"localScreenContainer":"container_"+this.callParticipantModel.attributes.peerId+"_screen_incoming"},remoteSessionHash(){return this.callParticipantModel?a().stringify(e()(this.callParticipantModel.attributes.nextcloudSessionId)):null},remoteParticipantName(){if(!this.callParticipantModel)return(0,i.t)("spreed","You");let h=this.callParticipantModel.attributes.name;return!this.callParticipantModel.attributes.userId&&!h&&h!==void 0&&(h=this.guestNameStore.getGuestName(this.$store.getters.getToken(),this.remoteSessionHash)),h},screenClass(){return this.isBig?"screen--fit":"screen--fill"}},watch:{"localMediaModel.attributes.localScreen"(h){this._setScreen(h)},"callParticipantModel.attributes.screen"(h){this._setScreen(h)}},mounted(){this.localMediaModel?this._setScreen(this.localMediaModel.attributes.localScreen):this._setScreen(this.callParticipantModel.attributes.screen)},methods:{t:i.t,_setScreen(h){if(!h){this.$refs.screen.srcObject=null;return}(0,u.A)(h,this.$refs.screen),this.$refs.screen.muted=!0}}}}),18320:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon monitor-off-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M14,18V20H16V22H8V20H10V18H3A2,2 0 0,1 1,16V4L0,3L1.41,1.58L22.16,22.34L20.75,23.75L15,18H14M3,16H13L3,6V16M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H20.66L18.66,16H21V4H6.66L4.66,2H21Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),19269:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(88614),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),19431:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".participants-editor[data-v-792e17c6]{display:flex;width:100%;flex-direction:column;gap:var(--default-grid-baseline);height:calc(100% - 57px)}.participants-editor__section[data-v-792e17c6]{margin:calc(var(--default-grid-baseline)*2) 0 calc(var(--default-grid-baseline)*4)}.participants-editor__scroller[data-v-792e17c6]{height:100%;overflow:auto}.participants-editor__buttons[data-v-792e17c6]{display:flex;justify-content:flex-end;gap:calc(var(--default-grid-baseline)*2);padding-top:10px}[data-v-792e17c6] .icon-collapse{position:absolute !important;left:0}[data-v-792e17c6] .dialog{padding-block:0px 8px;padding-inline:12px 8px}.delete[data-v-792e17c6]{margin-right:auto}","",{version:3,sources:["webpack://./src/components/BreakoutRoomsEditor/BreakoutRoomsParticipantsEditor.vue"],names:[],mappings:"AACA,sCACC,YAAA,CACA,UAAA,CACA,qBAAA,CACA,gCAAA,CACA,wBAAA,CAEA,+CACC,kFAAA,CAID,gDACC,WAAA,CACA,aAAA,CAGD,+CACC,YAAA,CACA,wBAAA,CACA,wCAAA,CACA,gBAAA,CAKF,iCACC,4BAAA,CACA,MAAA,CAGD,0BACC,qBAAA,CACA,uBAAA,CAGD,yBACC,iBAAA",sourcesContent:[`
.participants-editor {
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: var(--default-grid-baseline);
	height: calc(100% - 57px); // heading 30px * 1.5 line-height + 12px margin-bottom

	&__section {
		margin: calc(var(--default-grid-baseline) * 2) 0 calc(var(--default-grid-baseline) * 4);

	}

	&__scroller {
		height: 100%;
		overflow: auto;
	}

	&__buttons {
		display: flex;
		justify-content: flex-end;
		gap: calc(var(--default-grid-baseline) * 2);
		padding-top: 10px;
	}
}

// TODO: upstream collapse icon position fix
:deep(.icon-collapse) {
	position: absolute !important;
	left: 0;
}

:deep(.dialog) {
	padding-block: 0px 8px;
	padding-inline: 12px 8px;
}

.delete {
	margin-right: auto;
}
`],sourceRoot:""}]);const r=i}),20213:((c,_,s)=>{"use strict";var o=s(56422)}),20221:((c,_,s)=>{"use strict";s.d(_,{A:()=>e});var o=s(53334),a=s(94219),l=s(87681);const e={name:"SendMessageDialog",components:{NcDialog:a.A,NewMessage:l.A},props:{token:{type:String,required:!0},dialogTitle:{type:String,default:""},broadcast:{type:Boolean,default:!1}},emits:["close","submit"],data(){return{modalContainerId:null}},mounted(){this.modalContainerId="#"+this.$refs.dialog.$el.querySelector(".modal-container")?.id,this.$nextTick(()=>{this.$refs.newMessage.focusInput()})},methods:{t:o.t,handleSubmit(i){this.$emit("submit",i)}}}}),20474:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(38947);const a=o.A}),21553:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(98414),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),21622:((c,_,s)=>{"use strict";var o=s(28503)}),22492:((c,_,s)=>{"use strict";s.d(_,{A:()=>H});var o=s(17334),a=s.n(o),l=s(85471),e=s(85168),i=s(61338),r=s(32981),d=s(53334),u=s(31041),m=s(9560),h=s(41850),v=s(26484),E=s(70535),p=s(92252),A=s(47999),P=s(10919),C=s(88781),O=s(26600),R=s(72925),T=s(24140),S=s(7081),D=s(97876),x=s(55031),L=s(50634),g=s(31310),b=s(70667),I=s(92608),z=s(3753);const N=(0,r.C)("core","config",{}).version??"29.0.0.0",K=(0,b.I)(N,"29.0.4.0"),H={name:"CallView",components:{EmptyCallView:m.A,Grid:u.A,LocalVideo:h.A,PresenterOverlay:v.A,ReactionToaster:E.A,Screen:p.A,VideoBottomBar:A.A,VideoVue:P.A,ViewerOverlayCallView:C.A},props:{token:{type:String,required:!0},isSidebar:{type:Boolean,default:!1},isRecording:{type:Boolean,default:!1}},setup(y){const j=(0,l.KR)(!1);(0,l.Gt)("CallView:devModeEnabled",j);const V=(0,l.KR)(!1);(0,l.Gt)("CallView:screenshotModeEnabled",V);const k=(0,g.C)();!k.getShowMediaSettings(y.token)&&k.startWithoutMedia&&(I.PR.disableAudio(),I.PR.disableVideo());const X=(0,l.KR)(T.A.getItem("background-blurred")!=="false");return{localMediaModel:I.PR,localCallParticipantModel:I.cA,callParticipantCollection:I.mx,devMode:j,callViewStore:(0,L.e)(),isBackgroundBlurred:X}},data(){return{screens:[],sharedDatas:{},raisedHandUnwatchers:{},speakingUnwatchers:{},screenUnwatchers:{},speakers:[],localSharedData:{screenVisible:!0},showPresenterOverlay:!0,debounceFetchPeers:()=>{},forcePromotedModel:null}},computed:{promotedParticipantModel(){return this.forcePromotedModel??this.callParticipantModels.find(y=>this.sharedDatas[y.attributes.peerId].promoted)},callParticipantModels(){return I.mx.callParticipantModels.value.filter(y=>!y.attributes.internal)},callParticipantModelsWithScreen(){return this.callParticipantModels.filter(y=>y.attributes.screen)},localScreen(){return I.PR.attributes.localScreen},screenSharingActive(){return this.screens.length>0},isViewerOverlay(){return this.callViewStore.isViewerOverlay},isGrid(){return this.callViewStore.isGrid&&!this.isSidebar},selectedVideoPeerId(){return this.callViewStore.selectedVideoPeerId},selectedCallParticipantModel(){return!this.showSelectedVideo||!this.selectedVideoPeerId?null:this.callParticipantModels.find(y=>y.attributes.peerId===this.selectedVideoPeerId)},hasSelectedScreen(){return this.selectedVideoPeerId!==null&&this.screens.includes(this.selectedVideoPeerId)},hasSelectedVideo(){return this.selectedVideoPeerId!==null&&!this.screens.includes(this.selectedVideoPeerId)},isOneToOne(){return this.callParticipantModels.length===1},showFullPage(){return this.isOneToOne&&!(this.showLocalScreen||this.showRemoteScreen||this.showSelectedScreen)},hasLocalVideo(){return this.localMediaModel.attributes.videoEnabled},hasLocalScreen(){return!!this.localMediaModel.attributes.localScreen},hasRemoteScreen(){return this.callParticipantModelsWithScreen.length>0},showSelectedVideo(){return this.hasSelectedVideo&&!this.showLocalVideo},showSelectedScreen(){return this.hasSelectedScreen&&!this.showLocalVideo},showLocalVideo(){return this.hasLocalVideo&&this.selectedVideoPeerId==="local"},showLocalScreen(){return this.hasLocalScreen&&this.selectedVideoPeerId===null&&this.screens[0]===I.cA.attributes.peerId},showRemoteScreen(){return this.shownRemoteScreenPeerId!==null&&!this.showSelectedVideo&&!this.showSelectedScreen},shownRemoteScreenPeerId(){return!this.screenSharingActive||!this.hasRemoteScreen?null:this.screens.includes(this.selectedVideoPeerId)?this.selectedVideoPeerId:this.hasSelectedScreen?null:this.screens[0]},shownRemoteScreenCallParticipantModel(){return this.shownRemoteScreenPeerId?this.callParticipantModels.find(y=>y.attributes.peerId===this.shownRemoteScreenPeerId):null},shouldShowPresenterOverlay(){return this.showLocalScreen&&this.hasLocalVideo||(this.showRemoteScreen||this.showSelectedScreen)&&(this.shownRemoteScreenCallParticipantModel?.attributes.videoAvailable||this.isModelWithVideo(this.shownRemoteScreenCallParticipantModel))},presenterModel(){return this.showLocalScreen?this.localCallParticipantModel:this.shownRemoteScreenCallParticipantModel},presenterSharedData(){return this.showLocalScreen?this.localSharedData:this.sharedDatas[this.shownRemoteScreenPeerId]},presenterVideoBlockerEnabled(){return this.sharedDatas[this.shownRemoteScreenPeerId]?.remoteVideoBlocker?.isVideoEnabled()},showEmptyCallView(){return!this.callParticipantModels.length&&!this.screenSharingActive&&!this.devMode},supportedReactions(){return(0,D.JR)(this.token,"call","supported-reactions")},callContainerClass(){if(!K)return this.isBackgroundBlurred?"call-container__blurred":"call-container__non-blurred"}},watch:{"localCallParticipantModel.attributes.peerId"(y,j){const V=this.screens.indexOf(j);V!==-1&&(this.screens[V]=y)},localScreen(y){this._setScreenAvailable(I.cA.attributes.peerId,y)},callParticipantModels(y){this.updateDataFromCallParticipantModels(y)},isGrid(){this.adjustSimulcastQuality()},selectedVideoPeerId(){this.adjustSimulcastQuality()},speakers(y){y&&this._setPromotedParticipant()},shownRemoteScreenPeerId(y){y&&this._setPromotedParticipant()},screens(){this._setScreenVisible()},callParticipantModelsWithScreen(y,j){y.length>j.length?this.callViewStore.startPresentation(this.token):y.length===0&&j.length>0&&!this.hasLocalScreen&&!this.selectedVideoPeerId&&this.callViewStore.stopPresentation(this.token)},showLocalScreen(y){y?this.callViewStore.startPresentation(this.token):this.callParticipantModelsWithScreen.length===0&&!this.selectedVideoPeerId&&this.callViewStore.stopPresentation(this.token)},hasLocalVideo(y){this.selectedVideoPeerId==="local"&&(y||this.callViewStore.setSelectedVideoPeerId(null))},presenterVideoBlockerEnabled(y){this.showPresenterOverlay=y},showEmptyCallView:{immediate:!0,handler(y){this.callViewStore.setIsEmptyCallView(y)}}},created(){this.updateDataFromCallParticipantModels(this.callParticipantModels)},mounted(){this.debounceFetchPeers=a()(this.fetchPeers,1500),x.l.on("refresh-peer-list",this.debounceFetchPeers),I.mx.on("remove",this._lowerHandWhenParticipantLeaves),(0,i.B1)("switch-screen-to-id",this._switchScreenToId),(0,i.B1)("set-background-blurred",this.setBackgroundBlurred)},beforeDestroy(){this.debounceFetchPeers.clear?.(),this.callViewStore.setIsEmptyCallView(!0),x.l.off("refresh-peer-list",this.debounceFetchPeers),I.mx.off("remove",this._lowerHandWhenParticipantLeaves),(0,i.al)("switch-screen-to-id",this._switchScreenToId),(0,i.al)("set-background-blurred",this.setBackgroundBlurred)},methods:{t:d.t,placeholderImage:O.jM,placeholderName:O.rl,placeholderModel:O.F5,placeholderSharedData:O.zc,updateDataFromCallParticipantModels(y){const j=y.filter(k=>!this.sharedDatas[k.attributes.peerId]);Object.keys(this.sharedDatas).filter(k=>y.find(X=>X.attributes.peerId===k)===void 0).forEach(k=>{this.sharedDatas[k].remoteVideoBlocker.destroy(),this.$delete(this.sharedDatas,k),this.speakingUnwatchers[k](),delete this.speakingUnwatchers[k],this.screenUnwatchers[k](),delete this.screenUnwatchers[k],this.raisedHandUnwatchers[k](),delete this.raisedHandUnwatchers[k];const X=this.speakers.findIndex(f=>f.id===k);this.speakers.splice(X,1),this._setScreenAvailable(k,!1)}),j.forEach(k=>{const X={promoted:!1,remoteVideoBlocker:new z.A(k),screenVisible:!1};this.$set(this.sharedDatas,k.attributes.peerId,X),this.speakingUnwatchers[k.attributes.peerId]=this.$watch(function(){return k.attributes.speaking},function(f){this._setSpeaking(k.attributes.peerId,f)}),this.speakers.push({id:k.attributes.peerId,active:!1}),this.screenUnwatchers[k.attributes.peerId]=this.$watch(function(){return k.attributes.screen},function(f){this._setScreenAvailable(k.attributes.peerId,f)}),this.raisedHandUnwatchers[k.attributes.peerId]=this.$watch(function(){return k.attributes.raisedHand},function(f){this._handleParticipantRaisedHand(k,f)}),this.adjustSimulcastQualityForParticipant(k)})},_setSpeaking(y,j){if(j){const X=this.speakers.findIndex(M=>M.id===y),f=this.speakers[X];f.active=!0,this.speakers.splice(X,1),this.speakers.unshift(f);return}const V=this.speakers.findIndex(X=>X.id===y),k=this.speakers[V];if(k.active=!1,V===0){this.speakers.shift();const X=this.speakers.findIndex(f=>!f.active);X===-1?this.speakers.push(k):this.speakers.splice(X,0,k)}},_handleParticipantRaisedHand(y,j){const V=y.attributes.name||y.attributes.userId;V?j?.state&&(0,e.rG)((0,d.t)("spreed","{nickName} raised their hand.",{nickName:V})):j?.state&&(0,e.rG)((0,d.t)("spreed","A participant raised their hand.")),this.$store.dispatch("setParticipantHandRaised",{sessionId:y.attributes.nextcloudSessionId,raisedHand:j})},_lowerHandWhenParticipantLeaves(y,j){this.$store.dispatch("setParticipantHandRaised",{sessionId:j.attributes.nextcloudSessionId,raisedHand:!1})},_setScreenAvailable(y,j){if(j){this.screens.unshift(y);return}const V=this.screens.indexOf(y);V!==-1&&this.screens.splice(V,1)},_setPromotedParticipant(){Object.values(this.sharedDatas).forEach(y=>{y.promoted=!1}),!this.screenSharingActive&&this.speakers.length?this.sharedDatas[this.speakers[0].id].promoted=!0:this.shownRemoteScreenPeerId&&this.sharedDatas[this.shownRemoteScreenPeerId]&&(this.sharedDatas[this.shownRemoteScreenPeerId].promoted=!0),this.adjustSimulcastQuality()},_switchScreenToId(y){const j=this.screens.indexOf(y);j!==-1&&(this.callViewStore.presentationStarted?this.callViewStore.setCallViewMode({token:this.token,isGrid:!1,isStripeOpen:!1,clearLast:!1}):this.callViewStore.startPresentation(this.token),this.callViewStore.setSelectedVideoPeerId(null),this.screens.splice(j,1),this.screens.unshift(y))},_setScreenVisible(){if(this.localSharedData.screenVisible=!1,Object.values(this.sharedDatas).forEach(y=>{y.screenVisible=!1}),!!this.screens.length){if(this.screens[0]===this.localCallParticipantModel.attributes.peerId){this.localSharedData.screenVisible=!0;return}this.sharedDatas[this.screens[0]].screenVisible=!0}},handleSelectVideo(y){this.isSidebar||(this.callViewStore.setSelectedVideoPeerId(y),this.callViewStore.startPresentation(this.token))},handleClickLocalVideo(){!this.hasLocalVideo||this.isSidebar||(this.callViewStore.setSelectedVideoPeerId("local"),this.callViewStore.startPresentation(this.token))},async fetchPeers(){if(this.isRecording)return;const y=this.token;try{const j=await(0,S.Gy)(y);this.$store.dispatch("purgePeersStore"),j.data.ocs.data.forEach(V=>{this.$store.dispatch("addPeer",{token:y,peer:V})})}catch(j){console.error(j)}},adjustSimulcastQuality(){this.callParticipantModels.forEach(y=>{this.adjustSimulcastQualityForParticipant(y)})},adjustSimulcastQualityForParticipant(y){this.isGrid?y.setSimulcastVideoQuality(R.eL.MEDIUM):this.sharedDatas[y.attributes.peerId].promoted||this.selectedVideoPeerId===y.attributes.peerId?y.setSimulcastVideoQuality(R.eL.HIGH):y.setSimulcastVideoQuality(R.eL.LOW)},setBackgroundBlurred(y){this.isBackgroundBlurred=y},isModelWithVideo(y){return y?y.attributes.videoAvailable&&this.sharedDatas[y.attributes.peerId].remoteVideoBlocker.isVideoEnabled()&&typeof y.attributes.stream=="object":!1},toggleShowPresenterOverlay(){!this.showLocalScreen&&!this.presenterVideoBlockerEnabled?this.sharedDatas[this.shownRemoteScreenPeerId].remoteVideoBlocker.setVideoEnabled(!0):this.showPresenterOverlay=!this.showPresenterOverlay}}}}),22757:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(98270);const a=o.A}),22768:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon monitor-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),23838:((c,_,s)=>{"use strict";var o=s(191)}),23931:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(96366);const a=o.A}),24074:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".tasks-counter[data-v-786c7d84]{display:flex;align-items:center;margin-inline:calc(var(--default-grid-baseline)*2)}.tasks-counter__count[data-v-786c7d84]{font-weight:500}","",{version:3,sources:["webpack://./src/components/TopBar/TasksCounter.vue"],names:[],mappings:"AACA,gCACC,YAAA,CACA,kBAAA,CACA,kDAAA,CAEA,uCACC,eAAA",sourcesContent:[`
.tasks-counter {
	display: flex;
	align-items: center;
	margin-inline: calc(var(--default-grid-baseline) * 2);

	&__count {
		font-weight: 500;
	}
}

`],sourceRoot:""}]);const r=i}),24558:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(86067),a=s(20474),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),24601:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"top-bar-menu"},[e.isInCall?i("TransitionExpand",{attrs:{show:e.isHandRaised,direction:"horizontal"}},[i("NcButton",{attrs:{title:e.raiseHandButtonLabel,"aria-label":e.raiseHandButtonLabel,type:"tertiary"},on:{click:function(r){return r.stopPropagation(),e.toggleHandRaised.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconHandBackLeft",{attrs:{size:18}})]},proxy:!0}],null,!1,2475003483)})],1):e._e(),e._v(" "),e.isSidebar?e._e():i("NcActions",{attrs:{title:e.t("spreed","Conversation actions"),"aria-label":e.t("spreed","Conversation actions"),type:"tertiary"},scopedSlots:e._u([e.isInCall?{key:"icon",fn:function(){return[i("IconDotsHorizontal",{attrs:{size:20}})]},proxy:!0}:null],null,!0)},[e._v(" "),e.showActions&&e.isInCall?[i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.toggleHandRaised},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconHandBackLeft",{attrs:{size:16}})]},proxy:!0}],null,!1,1879775573)},[e._v(`
				`+e._s(e.raiseHandButtonLabel)+`
			`)]),e._v(" "),!e.isOneToOneConversation&&e.canFullModerate?[i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.forceMuteOthers},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconMicrophoneOff",{attrs:{size:20}})]},proxy:!0}],null,!1,1639273386)},[e._v(`
					`+e._s(e.t("spreed","Mute others"))+`
				`)])]:e._e(),e._v(" "),i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.showMediaSettingsDialog},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconVideo",{attrs:{size:20}})]},proxy:!0}],null,!1,1627215346)},[e._v(`
				`+e._s(e.t("spreed","Media settings"))+`
			`)]),e._v(" "),i("NcActionSeparator"),e._v(" "),e.showCallLayoutSwitch?i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.changeView},scopedSlots:e._u([{key:"icon",fn:function(){return[e.isGrid?i("IconViewGallery",{attrs:{size:20}}):i("IconViewGrid",{attrs:{size:20}})]},proxy:!0}],null,!1,4275896617)},[e._v(`
				`+e._s(e.changeViewText)+`
			`)]):e._e()]:e._e(),e._v(" "),i("NcActionButton",{attrs:{"aria-label":e.t("spreed","Toggle full screen"),"close-after-click":""},on:{click:e.toggleFullscreen},scopedSlots:e._u([{key:"icon",fn:function(){return[e.isFullscreen?i("IconFullscreenExit",{attrs:{size:20}}):i("IconFullscreen",{attrs:{size:20}})]},proxy:!0}],null,!1,3877784094)},[e._v(`
			`+e._s(e.labelFullscreen)+`
		`)]),e._v(" "),e.isFileConversation?i("NcActionLink",{attrs:{href:e.linkToFile},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconFile",{attrs:{size:20}})]},proxy:!0}],null,!1,3344175269)},[e._v(`
			`+e._s(e.t("spreed","Go to file"))+`
		`)]):e._e(),e._v(" "),e.canModerateRecording?[!e.isRecording&&!e.isStartingRecording&&e.isInCall?i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.startRecording},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconRecordCircle",{attrs:{size:20}})]},proxy:!0}],null,!1,3937821436)},[e._v(`
				`+e._s(e.t("spreed","Start recording"))+`
			`)]):e.isStartingRecording&&e.isInCall?i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.stopRecording},scopedSlots:e._u([{key:"icon",fn:function(){return[i("NcLoadingIcon",{attrs:{size:20}})]},proxy:!0}],null,!1,3155754792)},[e._v(`
				`+e._s(e.t("spreed","Cancel recording start"))+`
			`)]):e.isRecording&&e.isInCall?i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.stopRecording},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconStop",{attrs:{size:20}})]},proxy:!0}],null,!1,616116283)},[e._v(`
				`+e._s(e.t("spreed","Stop recording"))+`
			`)]):e._e()]:e._e(),e._v(" "),e.canConfigureBreakoutRooms?i("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(r){return e.$emit("open-breakout-rooms-editor")}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconDotsCircle",{attrs:{size:20}})]},proxy:!0}],null,!1,437393661)},[e._v(`
			`+e._s(e.t("spreed","Set up breakout rooms"))+`
		`)]):e._e(),e._v(" "),i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.openConversationSettings},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconCog",{attrs:{size:20}})]},proxy:!0}],null,!1,4087142664)},[e._v(`
			`+e._s(e.t("spreed","Conversation settings"))+`
		`)]),e._v(" "),e.isInCall&&e.canDownloadCallParticipants?i("NcActionLink",{attrs:{href:e.downloadCallParticipantsLink,target:"_blank"},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconDownload",{attrs:{size:20}})]},proxy:!0}],null,!1,2487097783)},[e._v(`
			`+e._s(e.t("spreed","Download attendance list"))+`
		`)]):e._e()],2)],1)},a=[]}),25230:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(48765),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),26205:((c,_,s)=>{"use strict";s.d(_,{A:()=>l});var o=s(85168),a=s(53334);function l(e){this._model=e,this._toast=null,this._handleSpeakingWhileMutedChangeBound=this._handleSpeakingWhileMutedChange.bind(this),this._model.on("change:speakingWhileMuted",this._handleSpeakingWhileMutedChangeBound)}l.prototype={destroy(){this._model.off("change:speakingWhileMuted",this._handleSpeakingWhileMutedChangeBound)},_handleSpeakingWhileMutedChange(e,i){i?this._handleSpeakingWhileMuted():this._handleStoppedSpeakingWhileMuted()},_handleSpeakingWhileMuted(){this._startedSpeakingTimeout=setTimeout(function(){delete this._startedSpeakingTimeout,this._showWarning()}.bind(this),3e3)},_handleStoppedSpeakingWhileMuted(){this._startedSpeakingTimeout&&(clearTimeout(this._startedSpeakingTimeout),delete this._startedSpeakingTimeout),this._hideWarning()},_showWarning(){const e=(0,a.t)("spreed","You seem to be talking while muted, please unmute yourself for others to hear you");document.hidden?(this._pendingBrowserNotification=!0,this._showBrowserNotification(e).catch(function(){this._pendingBrowserNotification&&(this._pendingBrowserNotification=!1,this._showNotification(e))}.bind(this))):this._showNotification(e)},_showNotification(e){this._toast||(this._toast=(0,o.I9)(e,{timeout:o.DH,onClick:()=>{this._toast.hideToast()},onRemove:()=>{this._toast=null}}))},_showBrowserNotification(e){return new Promise(function(i,r){if(this._browserNotification){i();return}if(!Notification){r();return}if(Notification.permission==="denied"){r();return}if(Notification.permission==="granted"){this._pendingBrowserNotification=!1,this._browserNotification=new Notification(e),i();return}Notification.requestPermission().then(function(d){d==="granted"?(this._pendingBrowserNotification&&(this._pendingBrowserNotification=!1,this._browserNotification=new Notification(e)),i()):r()}.bind(this))}.bind(this))},_hideWarning(){this._pendingBrowserNotification=!1,this._toast&&this._toast.hideToast(),this._browserNotification&&(this._browserNotification.close(),this._browserNotification=null)}}}),26484:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(84540),a=s(28648),l=s(88823),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"4792356e",null);const r=i.exports}),26600:((c,_,s)=>{"use strict";s.d(_,{F5:()=>e,jM:()=>a,rl:()=>l,zc:()=>i});var o=s(63814);function a(r){return(0,o.fg)("spreed","docs","screenshotplaceholders/placeholder-"+r%9+".jpeg")}function l(r){switch(r%9){case 0:return"Sandra McKinney";case 1:return"Chris Wurst";case 2:return"Edeltraut Bobb";case 3:return"Arthur Blitz";case 4:return"Roeland Douma";case 5:return"Vanessa Steg";case 6:return"Emily Grant";case 7:return"Tobias Kaminsky";case 8:default:return"Adrian Ada"}}function e(r){return{attributes:{audioAvailable:[1,2,4,5,7,8].includes(r%9),audioEnabled:r%9===8,videoAvailable:!0,screen:!1,currentVolume:.75,volumeThreshold:.75,localScreen:!1,raisedHand:{state:[0,1,6].includes(r%9)}},forceMute:()=>{},on:()=>{},off:()=>{},getWebRtc:()=>({connection:{getSendVideoIfAvailable:()=>{}}})}}function i(){return{videoEnabled:{isVideoEnabled:()=>!0},remoteVideoBlocker:{isVideoEnabled:()=>!0},screenVisible:!1}}}),27990:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(2773);const a=o.A}),28503:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(33904),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),28648:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(83713);const a=o.A}),29422:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon hand-back-left-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M3 16V5.75C3 5.06 3.56 4.5 4.25 4.5S5.5 5.06 5.5 5.75V12H6.5V2.75C6.5 2.06 7.06 1.5 7.75 1.5C8.44 1.5 9 2.06 9 2.75V12H10V1.25C10 .56 10.56 0 11.25 0S12.5 .56 12.5 1.25V12H13.5V3.25C13.5 2.56 14.06 2 14.75 2S16 2.56 16 3.25V15H16.75L18.16 11.47C18.38 10.92 18.84 10.5 19.4 10.31L20.19 10.05C21 9.79 21.74 10.58 21.43 11.37L18.4 19C17.19 22 14.26 24 11 24C6.58 24 3 20.42 3 16Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),30233:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(16880);const a=o.A}),30300:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(17401),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),30374:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(65317);const a=o.A}),30641:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("div",{ref:"ghost",staticClass:"viewer-overlay-ghost"},[i("Portal",[i("div",{staticClass:"viewer-overlay app-talk",style:{right:e.position.right+"px",bottom:e.position.bottom+"px"}},[i("div",{staticClass:"viewer-overlay__collapse",class:{collapsed:e.isCollapsed}},[i("NcButton",{staticClass:"viewer-overlay__button",attrs:{type:"secondary","aria-label":e.isCollapsed?e.t("spreed","Collapse"):e.t("spreed","Expand")},on:{click:function(r){r.stopPropagation(),e.isCollapsed=!e.isCollapsed}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.isCollapsed?i("ChevronUp",{attrs:{size:20}}):i("ChevronDown",{attrs:{size:20}})]},proxy:!0}])})],1),e._v(" "),i("TransitionWrapper",{attrs:{name:"slide-down"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapsed,expression:"!isCollapsed"}],staticClass:"viewer-overlay__video-container",attrs:{tabindex:"0"},on:{click:e.maximize}},[i("div",{staticClass:"video-overlay__top-bar"},[i("NcButton",{staticClass:"viewer-overlay__button",attrs:{type:"secondary","aria-label":e.t("spreed","Expand")},on:{click:function(r){return r.stopPropagation(),e.maximize.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("ArrowExpand",{attrs:{size:20}})]},proxy:!0}])})],1),e._v(" "),e.showLocalScreen?i("Screen",{attrs:{token:e.token,"local-media-model":e.localModel,"shared-data":e.localSharedData}}):e.model&&e.screens[e.model.attributes.peerId]?i("Screen",{attrs:{token:e.token,"call-participant-model":e.model,"shared-data":e.sharedData}}):e.model?i("VideoVue",{staticClass:"viewer-overlay__video",attrs:{token:e.token,model:e.model,"shared-data":e.sharedData,"is-grid":"","un-selectable":"","hide-bottom-bar":""},on:{"click-video":e.maximize},scopedSlots:e._u([{key:"bottom-bar",fn:function(){},proxy:!0}])}):i("EmptyCallView",{attrs:{"is-small":""}}),e._v(" "),e.localModel.attributes.videoEnabled?i("LocalVideo",{staticClass:"viewer-overlay__local-video",attrs:{token:e.token,"show-controls":!1,"local-media-model":e.localModel,"local-call-participant-model":e.localCallParticipantModel,"is-small":"","un-selectable":""}}):e._e(),e._v(" "),i("div",{staticClass:"viewer-overlay__bottom-bar"},[i("LocalAudioControlButton",{staticClass:"viewer-overlay__button",attrs:{token:e.token,conversation:e.conversation,model:e.localModel,type:"secondary","disable-keyboard-shortcuts":""}}),e._v(" "),i("LocalVideoControlButton",{staticClass:"viewer-overlay__button",attrs:{token:e.token,conversation:e.conversation,model:e.localModel,type:"secondary","disable-keyboard-shortcuts":""}})],1)],1)])],1)])],1)},a=[]}),30957:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".presenter-overlay__video[data-v-4792356e]{position:relative;--max-size: 242px;--min-size: 100px;width:10vw;height:10vw;max-width:var(--max-size);max-height:var(--max-size);min-width:var(--min-size);min-height:var(--min-size);z-index:10}.presenter-overlay__video[data-v-4792356e]:hover{cursor:grab}.presenter-overlay__video.dragging[data-v-4792356e]{cursor:grabbing}.presenter-overlay--collapsed[data-v-4792356e]{position:absolute !important;opacity:.7;bottom:48px;right:0}#call-container:hover .presenter-overlay--collapsed[data-v-4792356e]{background-color:rgba(0,0,0,.1) !important}#call-container:hover .presenter-overlay--collapsed[data-v-4792356e]:hover,#call-container:hover .presenter-overlay--collapsed[data-v-4792356e]:focus{opacity:1;background-color:rgba(0,0,0,.2) !important}[data-v-4792356e] div{cursor:inherit}","",{version:3,sources:["webpack://./src/components/CallView/shared/PresenterOverlay.vue"],names:[],mappings:"AACA,2CACC,iBAAA,CACA,iBAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,yBAAA,CACA,0BAAA,CACA,yBAAA,CACA,0BAAA,CACA,UAAA,CAEA,iDACC,WAAA,CAGD,oDACC,eAAA,CAIF,+CACC,4BAAA,CACA,UAAA,CACA,WAAA,CACA,OAAA,CAEA,qEACC,0CAAA,CAEA,sJAEC,SAAA,CACA,0CAAA,CAKH,sBAEC,cAAA",sourcesContent:[`
.presenter-overlay__video {
	position: relative;
	--max-size: 242px;
	--min-size: 100px;
	width: 10vw;
	height: 10vw;
	max-width: var(--max-size);
	max-height: var(--max-size);
	min-width: var(--min-size);
	min-height: var(--min-size);
	z-index: 10;

	&:hover {
		cursor: grab;
	}

	&.dragging {
		cursor: grabbing;
	}
}

.presenter-overlay--collapsed {
	position: absolute !important;
	opacity: .7;
	bottom: 48px;
	right: 0;

	#call-container:hover & {
		background-color: rgba(0, 0, 0, 0.1) !important;

		&:hover,
		&:focus {
			opacity: 1;
			background-color: rgba(0, 0, 0, 0.2) !important;
		}
	}
}

:deep(div) {
	// prevent default cursor
	cursor: inherit;
}
`],sourceRoot:""}]);const r=i}),31041:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(7022),a=s(79505),l=s(60415),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"54f9a690",null);const r=i.exports}),31234:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(333);const a=o.A}),31307:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon dots-horizontal-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),31476:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"ViewGalleryIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),31521:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(95146);const a=o.A}),33073:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon account-box-outline-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5M12,12.25A2.25,2.25 0 0,0 14.25,10A2.25,2.25 0 0,0 12,7.75A2.25,2.25 0 0,0 9.75,10A2.25,2.25 0 0,0 12,12.25Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),33556:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon account-multiple-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),33904:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,"#call-container[data-v-69c35b21]{width:100%;height:100%;background-color:rgba(34,34,34,.8);backdrop-filter:var(--filter-background-blur);--grid-gap: calc(var(--default-grid-baseline) * 2)}#call-container.call-container__blurred[data-v-69c35b21]{backdrop-filter:blur(25px)}#call-container.call-container__non-blurred[data-v-69c35b21]{backdrop-filter:none}#videos[data-v-69c35b21]{position:absolute;width:100%;height:calc(100% - 51px);top:51px;overflow:hidden;display:flex;justify-content:space-around;align-items:flex-end;flex-direction:column;padding:calc(var(--default-grid-baseline)*2);padding-block-start:0}.video__promoted[data-v-69c35b21]{position:relative;height:100%;width:100%}.video__promoted.full-page[data-v-69c35b21]{position:static}.video__promoted .dev-mode-video--promoted[data-v-69c35b21]{position:absolute;width:100%;height:100%;display:flex;justify-content:center}.video__promoted .dev-mode-video--promoted img[data-v-69c35b21]{position:absolute;height:100%;aspect-ratio:4/3;object-fit:cover;border-radius:var(--border-radius-element, calc(var(--default-clickable-area) / 2))}.local-video[data-v-69c35b21]{position:absolute;right:0;bottom:0;width:300px;height:250px}.local-video--sidebar[data-v-69c35b21]{width:150px;height:100px}#videos.hidden[data-v-69c35b21]{display:none}[data-v-69c35b21] video{z-index:0;vertical-align:top}#videos[data-v-69c35b21] video{padding:0}","",{version:3,sources:["webpack://./src/components/CallView/CallView.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,iCACC,UAAA,CACA,WAAA,CACA,kCCauB,CDXvB,6CAAA,CACA,kDAAA,CAEA,yDACC,0BAAA,CAED,6DACC,oBAAA,CAIF,yBACC,iBAAA,CACA,UAAA,CACA,wBAAA,CACA,QAAA,CACA,eAAA,CACA,YAAA,CACA,4BAAA,CACA,oBAAA,CACA,qBAAA,CACA,4CAAA,CACA,qBAAA,CAGD,kCACC,iBAAA,CACA,WAAA,CACA,UAAA,CAEA,4CAGC,eAAA,CAGD,4DACC,iBAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CAGD,gEACC,iBAAA,CACA,WAAA,CACA,gBAAA,CACA,gBAAA,CACA,mFAAA,CAIF,8BACC,iBAAA,CACA,OAAA,CACA,QAAA,CACA,WAAA,CACA,YAAA,CAEA,uCACC,WAAA,CACA,YAAA,CAIF,gCACC,YAAA,CAGD,wBACC,SAAA,CAOA,kBAAA,CAGD,+BACC,SAAA",sourcesContent:[`
@import '../../assets/variables';

#call-container {
	width: 100%;
	height: 100%;
	background-color: $color-call-background;
	// Default value has changed since v29.0.4: 'blur(25px)' => 'none'
	backdrop-filter: var(--filter-background-blur);
	--grid-gap: calc(var(--default-grid-baseline) * 2);

	&.call-container__blurred {
		backdrop-filter: blur(25px);
	}
	&.call-container__non-blurred {
		backdrop-filter: none;
	}
}

#videos {
	position: absolute;
	width: 100%;
	height: calc(100% - 51px);
	top: 51px; // TopBar height
	overflow: hidden;
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	flex-direction: column;
	padding: calc(var(--default-grid-baseline) * 2);
	padding-block-start: 0;
}

.video__promoted {
	position: relative;
	height: 100%;
	width: 100%;

	&.full-page {
		// force the promoted remote or local video to cover the whole call view
		// doesn't affect screen shares, as it's a different MediaStream
		position: static;
	}

	.dev-mode-video--promoted {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	}

	.dev-mode-video--promoted img {
		position: absolute;
		height: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		border-radius: var(--border-radius-element, calc(var(--default-clickable-area) / 2));
	}
}

.local-video {
	position: absolute;
	right: 0;
	bottom: 0;
	width: 300px;
	height: 250px;

	&--sidebar {
		width: 150px;
		height: 100px;
	}
}

#videos.hidden {
	display: none;
}

:deep(video) {
	z-index: 0;
	/* default filter for slightly better look */
	/* Disabled for now as it causes a huuuuge performance drop.
	 CPU usage is more than halved without this.
	 -webkit-filter: contrast(1.1) saturate(1.1) sepia(.1);
	 filter: contrast(1.1) saturate(1.1) sepia(.1);
	 */
	vertical-align: top; /* fix white line below video */
}

#videos :deep(video) {
	padding: 0;
}

`,`/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/** Messages list dimensions:
 * - text max width: ~750px (80 characters per line is recommended by W3C standard)
 * - avatar width: 32px (AVATAR.SIZE.SMALL) + 16px (paddings) = 48px
 * - info width: 8ch(~68px) (timestamp) + 40px (checkmark with paddings) = ~108px
 * - list max width: 48px (avatar width) + 1058px (text width with paddings) + ~108px (info width) = ~1214px
 * - input max width: ~1214px (list max width) - 100px (send button) = ~1114px
 */
$messages-text-max-width: calc(50 * var(--default-font-size));
$messages-avatar-width: calc(32px + 4 * var(--default-grid-baseline));
$messages-info-width: calc(8ch + var(--clickable-area-small, 24px) + 4 * var(--default-grid-baseline));
$messages-list-max-width: calc($messages-avatar-width + $messages-text-max-width + 2 * var(--default-grid-baseline) + $messages-info-width);
$messages-input-max-width: calc($messages-list-max-width - 100px);

// background color of call container
$color-call-background: rgba(34, 34, 34, 0.8);

// transition
$transition-duration-quick: var(--animation-quick, 100ms);
$transition-duration-slow: var(--animation-slow, 300ms);

$transition: all $transition-duration-quick ease-in-out;
$transition-slow: all $transition-duration-slow ease-in-out;
`],sourceRoot:""}]);const r=i}),34075:((c,_,s)=>{"use strict";s.r(_),s.d(_,{default:()=>r});var o=s(81593),a=s(96693),l=s(82472),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"de6fe834",null);const r=i.exports}),34386:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(13787);const a=o.A}),35430:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(46261);const a=o.A}),35756:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"FullscreenExitIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),36432:(function(c){(function(_,s){c.exports=s()})(typeof self<"u"?self:this,(function(){return(function(_){var s={};function o(a){if(s[a])return s[a].exports;var l=s[a]={i:a,l:!1,exports:{}};return _[a].call(l.exports,l,l.exports,o),l.l=!0,l.exports}return o.m=_,o.c=s,o.d=function(a,l,e){o.o(a,l)||Object.defineProperty(a,l,{enumerable:!0,get:e})},o.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,l){if(1&l&&(a=o(a)),8&l||4&l&&typeof a=="object"&&a&&a.__esModule)return a;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&l&&typeof a!="string")for(var i in a)o.d(e,i,function(r){return a[r]}.bind(null,i));return e},o.n=function(a){var l=a&&a.__esModule?function(){return a.default}:function(){return a};return o.d(l,"a",l),l},o.o=function(a,l){return Object.prototype.hasOwnProperty.call(a,l)},o.p="",o(o.s="fb15")})({"0029":function(_,s){_.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"0185":function(_,s,o){var a=o("e5fa");_.exports=function(l){return Object(a(l))}},"01f9":function(_,s,o){"use strict";var a=o("2d00"),l=o("5ca1"),e=o("2aba"),i=o("32e9"),r=o("84f2"),d=o("41a0"),u=o("7f20"),m=o("38fd"),h=o("2b4c")("iterator"),v=!([].keys&&"next"in[].keys()),E="@@iterator",p="keys",A="values",P=function(){return this};_.exports=function(C,O,R,T,S,D,x){d(R,O,T);var L,g,b,I=function(X){if(!v&&X in H)return H[X];switch(X){case p:return function(){return new R(this,X)};case A:return function(){return new R(this,X)}}return function(){return new R(this,X)}},z=O+" Iterator",N=S==A,K=!1,H=C.prototype,y=H[h]||H[E]||S&&H[S],j=y||I(S),V=S?N?I("entries"):j:void 0,k=O=="Array"&&H.entries||y;if(k&&(b=m(k.call(new C)),b!==Object.prototype&&b.next&&(u(b,z,!0),a||typeof b[h]=="function"||i(b,h,P))),N&&y&&y.name!==A&&(K=!0,j=function(){return y.call(this)}),a&&!x||!v&&!K&&H[h]||i(H,h,j),r[O]=j,r[z]=P,S)if(L={values:N?j:I(A),keys:D?j:I(p),entries:V},x)for(g in L)g in H||e(H,g,L[g]);else l(l.P+l.F*(v||K),O,L);return L}},"02f4":function(_,s,o){var a=o("4588"),l=o("be13");_.exports=function(e){return function(i,r){var d,u,m=String(l(i)),h=a(r),v=m.length;return h<0||h>=v?e?"":void 0:(d=m.charCodeAt(h),d<55296||d>56319||h+1===v||(u=m.charCodeAt(h+1))<56320||u>57343?e?m.charAt(h):d:e?m.slice(h,h+2):u-56320+(d-55296<<10)+65536)}}},"0a49":function(_,s,o){var a=o("9b43"),l=o("626a"),e=o("4bf8"),i=o("9def"),r=o("cd1c");_.exports=function(d,u){var m=d==1,h=d==2,v=d==3,E=d==4,p=d==6,A=d==5||p,P=u||r;return function(C,O,R){for(var T,S,D=e(C),x=l(D),L=a(O,R,3),g=i(x.length),b=0,I=m?P(C,g):h?P(C,0):void 0;g>b;b++)if((A||b in x)&&(T=x[b],S=L(T,b,D),d)){if(m)I[b]=S;else if(S)switch(d){case 3:return!0;case 5:return T;case 6:return b;case 2:I.push(T)}else if(E)return!1}return p?-1:v||E?E:I}}},"0a91":function(_,s,o){o("b42c"),o("93c4"),_.exports=o("b77f")},"0bfb":function(_,s,o){"use strict";var a=o("cb7c");_.exports=function(){var l=a(this),e="";return l.global&&(e+="g"),l.ignoreCase&&(e+="i"),l.multiline&&(e+="m"),l.unicode&&(e+="u"),l.sticky&&(e+="y"),e}},"0d58":function(_,s,o){var a=o("ce10"),l=o("e11e");_.exports=Object.keys||function(e){return a(e,l)}},"0f89":function(_,s,o){var a=o("6f8a");_.exports=function(l){if(!a(l))throw TypeError(l+" is not an object!");return l}},"103a":function(_,s,o){var a=o("da3c").document;_.exports=a&&a.documentElement},1169:function(_,s,o){var a=o("2d95");_.exports=Array.isArray||function(l){return a(l)=="Array"}},"11e9":function(_,s,o){var a=o("52a7"),l=o("4630"),e=o("6821"),i=o("6a99"),r=o("69a8"),d=o("c69a"),u=Object.getOwnPropertyDescriptor;s.f=o("9e1e")?u:function(m,h){if(m=e(m),h=i(h,!0),d)try{return u(m,h)}catch{}if(r(m,h))return l(!a.f.call(m,h),m[h])}},"12fd":function(_,s,o){var a=o("6f8a"),l=o("da3c").document,e=a(l)&&a(l.createElement);_.exports=function(i){return e?l.createElement(i):{}}},1495:function(_,s,o){var a=o("86cc"),l=o("cb7c"),e=o("0d58");_.exports=o("9e1e")?Object.defineProperties:function(i,r){l(i);for(var d,u=e(r),m=u.length,h=0;m>h;)a.f(i,d=u[h++],r[d]);return i}},1938:function(_,s,o){var a=o("d13f");a(a.S,"Array",{isArray:o("b5aa")})},"1b55":function(_,s,o){var a=o("7772")("wks"),l=o("7b00"),e=o("da3c").Symbol,i=typeof e=="function",r=_.exports=function(d){return a[d]||(a[d]=i&&e[d]||(i?e:l)("Symbol."+d))};r.store=a},"1b8f":function(_,s,o){var a=o("a812"),l=Math.max,e=Math.min;_.exports=function(i,r){return i=a(i),i<0?l(i+r,0):e(i,r)}},"1c01":function(_,s,o){var a=o("5ca1");a(a.S+a.F*!o("9e1e"),"Object",{defineProperty:o("86cc").f})},"1fa8":function(_,s,o){var a=o("cb7c");_.exports=function(l,e,i,r){try{return r?e(a(i)[0],i[1]):e(i)}catch(u){var d=l.return;throw d!==void 0&&a(d.call(l)),u}}},"230e":function(_,s,o){var a=o("d3f4"),l=o("7726").document,e=a(l)&&a(l.createElement);_.exports=function(i){return e?l.createElement(i):{}}},2312:function(_,s,o){_.exports=o("8ce0")},"23c6":function(_,s,o){var a=o("2d95"),l=o("2b4c")("toStringTag"),e=a((function(){return arguments})())=="Arguments",i=function(r,d){try{return r[d]}catch{}};_.exports=function(r){var d,u,m;return r===void 0?"Undefined":r===null?"Null":typeof(u=i(d=Object(r),l))=="string"?u:e?a(d):(m=a(d))=="Object"&&typeof d.callee=="function"?"Arguments":m}},2418:function(_,s,o){var a=o("6a9b"),l=o("a5ab"),e=o("1b8f");_.exports=function(i){return function(r,d,u){var m,h=a(r),v=l(h.length),E=e(u,v);if(i&&d!=d){for(;v>E;)if(m=h[E++],m!=m)return!0}else for(;v>E;E++)if((i||E in h)&&h[E]===d)return i||E||0;return!i&&-1}}},"245b":function(_,s){_.exports=function(o,a){return{value:a,done:!!o}}},2621:function(_,s){s.f=Object.getOwnPropertySymbols},2695:function(_,s,o){var a=o("43c8"),l=o("6a9b"),e=o("2418")(!1),i=o("5d8f")("IE_PROTO");_.exports=function(r,d){var u,m=l(r),h=0,v=[];for(u in m)u!=i&&a(m,u)&&v.push(u);for(;d.length>h;)a(m,u=d[h++])&&(~e(v,u)||v.push(u));return v}},"27ee":function(_,s,o){var a=o("23c6"),l=o("2b4c")("iterator"),e=o("84f2");_.exports=o("8378").getIteratorMethod=function(i){if(i!=null)return i[l]||i["@@iterator"]||e[a(i)]}},"2a4e":function(_,s,o){var a=o("a812"),l=o("e5fa");_.exports=function(e){return function(i,r){var d,u,m=String(l(i)),h=a(r),v=m.length;return h<0||h>=v?e?"":void 0:(d=m.charCodeAt(h),d<55296||d>56319||h+1===v||(u=m.charCodeAt(h+1))<56320||u>57343?e?m.charAt(h):d:e?m.slice(h,h+2):u-56320+(d-55296<<10)+65536)}}},"2aba":function(_,s,o){var a=o("7726"),l=o("32e9"),e=o("69a8"),i=o("ca5a")("src"),r="toString",d=Function[r],u=(""+d).split(r);o("8378").inspectSource=function(m){return d.call(m)},(_.exports=function(m,h,v,E){var p=typeof v=="function";p&&(e(v,"name")||l(v,"name",h)),m[h]!==v&&(p&&(e(v,i)||l(v,i,m[h]?""+m[h]:u.join(String(h)))),m===a?m[h]=v:E?m[h]?m[h]=v:l(m,h,v):(delete m[h],l(m,h,v)))})(Function.prototype,r,(function(){return typeof this=="function"&&this[i]||d.call(this)}))},"2aeb":function(_,s,o){var a=o("cb7c"),l=o("1495"),e=o("e11e"),i=o("613b")("IE_PROTO"),r=function(){},d="prototype",u=function(){var m,h=o("230e")("iframe"),v=e.length,E="<",p=">";for(h.style.display="none",o("fab2").appendChild(h),h.src="javascript:",m=h.contentWindow.document,m.open(),m.write(E+"script"+p+"document.F=Object"+E+"/script"+p),m.close(),u=m.F;v--;)delete u[d][e[v]];return u()};_.exports=Object.create||function(m,h){var v;return m!==null?(r[d]=a(m),v=new r,r[d]=null,v[i]=m):v=u(),h===void 0?v:l(v,h)}},"2b4c":function(_,s,o){var a=o("5537")("wks"),l=o("ca5a"),e=o("7726").Symbol,i=typeof e=="function",r=_.exports=function(d){return a[d]||(a[d]=i&&e[d]||(i?e:l)("Symbol."+d))};r.store=a},"2d00":function(_,s){_.exports=!1},"2d95":function(_,s){var o={}.toString;_.exports=function(a){return o.call(a).slice(8,-1)}},"2ea1":function(_,s,o){var a=o("6f8a");_.exports=function(l,e){if(!a(l))return l;var i,r;if(e&&typeof(i=l.toString)=="function"&&!a(r=i.call(l))||typeof(i=l.valueOf)=="function"&&!a(r=i.call(l))||!e&&typeof(i=l.toString)=="function"&&!a(r=i.call(l)))return r;throw TypeError("Can't convert object to primitive value")}},"2f21":function(_,s,o){"use strict";var a=o("79e5");_.exports=function(l,e){return!!l&&a((function(){e?l.call(null,(function(){}),1):l.call(null)}))}},"2fdb":function(_,s,o){"use strict";var a=o("5ca1"),l=o("d2c8"),e="includes";a(a.P+a.F*o("5147")(e),"String",{includes:function(i){return!!~l(this,i,e).indexOf(i,arguments.length>1?arguments[1]:void 0)}})},"32e9":function(_,s,o){var a=o("86cc"),l=o("4630");_.exports=o("9e1e")?function(e,i,r){return a.f(e,i,l(1,r))}:function(e,i,r){return e[i]=r,e}},"33a4":function(_,s,o){var a=o("84f2"),l=o("2b4c")("iterator"),e=Array.prototype;_.exports=function(i){return i!==void 0&&(a.Array===i||e[l]===i)}},3425:function(_,s,o){"use strict";var a=function(){var f,M=this,B=M.$createElement,W=M._self._c||B;return W("div",{class:[(f={},f[M.classNameActive]=M.enabled,f[M.classNameDragging]=M.dragging,f[M.classNameResizing]=M.resizing,f[M.classNameDraggable]=M.draggable,f[M.classNameResizable]=M.resizable,f),M.className],style:M.style,on:{mousedown:M.elementMouseDown,touchstart:M.elementTouchDown}},[M._l(M.actualHandles,(function(U){return W("div",{key:U,class:[M.classNameHandle,M.classNameHandle+"-"+U],style:{display:M.enabled?"block":"none"},on:{mousedown:function(F){F.stopPropagation(),F.preventDefault(),M.handleDown(U,F)},touchstart:function(F){F.stopPropagation(),F.preventDefault(),M.handleTouchDown(U,F)}}},[M._t(U)],2)})),M._v(" "),M._t("default")],2)},l=[],e=(o("1c01"),o("58b2"),o("8e6e"),o("f3e2"),o("456d"),o("85f2")),i=o.n(e);function r(f,M,B){return M in f?i()(f,M,{value:B,enumerable:!0,configurable:!0,writable:!0}):f[M]=B,f}o("3b2b");var d=o("a745"),u=o.n(d);function m(f){if(u()(f))return f}var h=o("5d73"),v=o.n(h),E=o("c8bb"),p=o.n(E);function A(f,M){if(p()(Object(f))||Object.prototype.toString.call(f)==="[object Arguments]"){var B=[],W=!0,U=!1,F=void 0;try{for(var G,$=v()(f);!(W=(G=$.next()).done)&&(B.push(G.value),!(M&&B.length===M));W=!0);}catch(Z){U=!0,F=Z}finally{try{W||$.return==null||$.return()}finally{if(U)throw F}}return B}}function P(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function C(f,M){return m(f)||A(f,M)||P()}o("6762"),o("2fdb"),o("d25f"),o("ac6a"),o("cadf"),o("5df3"),o("4f7f"),o("c5f6"),o("7514"),o("6b54"),o("87b3");function O(f){return typeof f=="function"||Object.prototype.toString.call(f)==="[object Function]"}function R(f,M,B){var W=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,U=typeof W=="number"?[W,W]:W,F=C(U,2),G=F[0],$=F[1],Z=Math.round(M/G/f[0])*f[0],Y=Math.round(B/$/f[1])*f[1];return[Z,Y]}function T(f,M,B){return f-M-B}function S(f,M,B){return f-M-B}function D(f,M,B){return M!==null&&f<M?M:B!==null&&B<f?B:f}function x(f,M,B){var W=f,U=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].find((function(F){return O(W[F])}));if(!O(W[U]))return!1;do{if(W[U](M))return!0;if(W===B)return!1;W=W.parentNode}while(W);return!1}function L(f){var M=window.getComputedStyle(f);return[parseFloat(M.getPropertyValue("width"),10),parseFloat(M.getPropertyValue("height"),10)]}function g(f,M,B){f&&(f.attachEvent?f.attachEvent("on"+M,B):f.addEventListener?f.addEventListener(M,B,!0):f["on"+M]=B)}function b(f,M,B){f&&(f.detachEvent?f.detachEvent("on"+M,B):f.removeEventListener?f.removeEventListener(M,B,!0):f["on"+M]=null)}function I(f,M){var B=Object.keys(f);if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols(f);M&&(W=W.filter((function(U){return Object.getOwnPropertyDescriptor(f,U).enumerable}))),B.push.apply(B,W)}return B}function z(f){for(var M=1;M<arguments.length;M++){var B=arguments[M]!=null?arguments[M]:{};M%2?I(B,!0).forEach((function(W){r(f,W,B[W])})):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(B)):I(B).forEach((function(W){Object.defineProperty(f,W,Object.getOwnPropertyDescriptor(B,W))}))}return f}var N={mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"},touch:{start:"touchstart",move:"touchmove",stop:"touchend"}},K={userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none"},H={userSelect:"auto",MozUserSelect:"auto",WebkitUserSelect:"auto",MsUserSelect:"auto"},y=N.mouse,j={replace:!0,name:"vue-draggable-resizable",props:{className:{type:String,default:"vdr"},classNameDraggable:{type:String,default:"draggable"},classNameResizable:{type:String,default:"resizable"},classNameDragging:{type:String,default:"dragging"},classNameResizing:{type:String,default:"resizing"},classNameActive:{type:String,default:"active"},classNameHandle:{type:String,default:"handle"},disableUserSelect:{type:Boolean,default:!0},enableNativeDrag:{type:Boolean,default:!1},preventDeactivation:{type:Boolean,default:!1},active:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},lockAspectRatio:{type:Boolean,default:!1},w:{type:[Number,String],default:200,validator:function(f){return typeof f=="number"?f>0:f==="auto"}},h:{type:[Number,String],default:200,validator:function(f){return typeof f=="number"?f>0:f==="auto"}},minWidth:{type:Number,default:0,validator:function(f){return f>=0}},minHeight:{type:Number,default:0,validator:function(f){return f>=0}},maxWidth:{type:Number,default:null,validator:function(f){return f>=0}},maxHeight:{type:Number,default:null,validator:function(f){return f>=0}},x:{type:Number,default:0},y:{type:Number,default:0},z:{type:[String,Number],default:"auto",validator:function(f){return typeof f=="string"?f==="auto":f>=0}},handles:{type:Array,default:function(){return["tl","tm","tr","mr","br","bm","bl","ml"]},validator:function(f){var M=new Set(["tl","tm","tr","mr","br","bm","bl","ml"]);return new Set(f.filter((function(B){return M.has(B)}))).size===f.length}},dragHandle:{type:String,default:null},dragCancel:{type:String,default:null},axis:{type:String,default:"both",validator:function(f){return["x","y","both"].includes(f)}},grid:{type:Array,default:function(){return[1,1]}},parent:{type:Boolean,default:!1},scale:{type:[Number,Array],default:1,validator:function(f){return typeof f=="number"?f>0:f.length===2&&f[0]>0&&f[1]>0}},onDragStart:{type:Function,default:function(){return!0}},onDrag:{type:Function,default:function(){return!0}},onResizeStart:{type:Function,default:function(){return!0}},onResize:{type:Function,default:function(){return!0}}},data:function(){return{left:this.x,top:this.y,right:null,bottom:null,width:null,height:null,widthTouched:!1,heightTouched:!1,aspectFactor:null,parentWidth:null,parentHeight:null,minW:this.minWidth,minH:this.minHeight,maxW:this.maxWidth,maxH:this.maxHeight,handle:null,enabled:this.active,resizing:!1,dragging:!1,dragEnable:!1,resizeEnable:!1,zIndex:this.z}},created:function(){this.maxWidth&&this.minWidth>this.maxWidth&&console.warn("[Vdr warn]: Invalid prop: minWidth cannot be greater than maxWidth"),this.maxWidth&&this.minHeight>this.maxHeight&&console.warn("[Vdr warn]: Invalid prop: minHeight cannot be greater than maxHeight"),this.resetBoundsAndMouseState()},mounted:function(){this.enableNativeDrag||(this.$el.ondragstart=function(){return!1});var f=this.getParentSize(),M=C(f,2),B=M[0],W=M[1];this.parentWidth=B,this.parentHeight=W;var U=L(this.$el),F=C(U,2),G=F[0],$=F[1];this.aspectFactor=(this.w!=="auto"?this.w:G)/(this.h!=="auto"?this.h:$),this.width=this.w!=="auto"?this.w:G,this.height=this.h!=="auto"?this.h:$,this.right=this.parentWidth-this.width-this.left,this.bottom=this.parentHeight-this.height-this.top,this.active&&this.$emit("activated"),g(document.documentElement,"mousedown",this.deselect),g(document.documentElement,"touchend touchcancel",this.deselect),g(window,"resize",this.checkParentSize)},beforeDestroy:function(){b(document.documentElement,"mousedown",this.deselect),b(document.documentElement,"touchstart",this.handleUp),b(document.documentElement,"mousemove",this.move),b(document.documentElement,"touchmove",this.move),b(document.documentElement,"mouseup",this.handleUp),b(document.documentElement,"touchend touchcancel",this.deselect),b(window,"resize",this.checkParentSize)},methods:{resetBoundsAndMouseState:function(){this.mouseClickPosition={mouseX:0,mouseY:0,x:0,y:0,w:0,h:0},this.bounds={minLeft:null,maxLeft:null,minRight:null,maxRight:null,minTop:null,maxTop:null,minBottom:null,maxBottom:null}},checkParentSize:function(){if(this.parent){var f=this.getParentSize(),M=C(f,2),B=M[0],W=M[1];this.parentWidth=B,this.parentHeight=W,this.right=this.parentWidth-this.width-this.left,this.bottom=this.parentHeight-this.height-this.top}},getParentSize:function(){if(this.parent){var f=window.getComputedStyle(this.$el.parentNode,null);return[parseInt(f.getPropertyValue("width"),10),parseInt(f.getPropertyValue("height"),10)]}return[null,null]},elementTouchDown:function(f){y=N.touch,this.elementDown(f)},elementMouseDown:function(f){y=N.mouse,this.elementDown(f)},elementDown:function(f){if(!(f instanceof MouseEvent&&f.which!==1)){var M=f.target||f.srcElement;if(this.$el.contains(M)){if(this.onDragStart(f)===!1)return;if(this.dragHandle&&!x(M,this.dragHandle,this.$el)||this.dragCancel&&x(M,this.dragCancel,this.$el))return void(this.dragging=!1);this.enabled||(this.enabled=!0,this.$emit("activated"),this.$emit("update:active",!0)),this.draggable&&(this.dragEnable=!0),this.mouseClickPosition.mouseX=f.touches?f.touches[0].pageX:f.pageX,this.mouseClickPosition.mouseY=f.touches?f.touches[0].pageY:f.pageY,this.mouseClickPosition.left=this.left,this.mouseClickPosition.right=this.right,this.mouseClickPosition.top=this.top,this.mouseClickPosition.bottom=this.bottom,this.parent&&(this.bounds=this.calcDragLimits()),g(document.documentElement,y.move,this.move),g(document.documentElement,y.stop,this.handleUp)}}},calcDragLimits:function(){return{minLeft:this.left%this.grid[0],maxLeft:Math.floor((this.parentWidth-this.width-this.left)/this.grid[0])*this.grid[0]+this.left,minRight:this.right%this.grid[0],maxRight:Math.floor((this.parentWidth-this.width-this.right)/this.grid[0])*this.grid[0]+this.right,minTop:this.top%this.grid[1],maxTop:Math.floor((this.parentHeight-this.height-this.top)/this.grid[1])*this.grid[1]+this.top,minBottom:this.bottom%this.grid[1],maxBottom:Math.floor((this.parentHeight-this.height-this.bottom)/this.grid[1])*this.grid[1]+this.bottom}},deselect:function(f){var M=f.target||f.srcElement,B=new RegExp(this.className+"-([trmbl]{2})","");this.$el.contains(M)||B.test(M.className)||(this.enabled&&!this.preventDeactivation&&(this.enabled=!1,this.$emit("deactivated"),this.$emit("update:active",!1)),b(document.documentElement,y.move,this.handleResize)),this.resetBoundsAndMouseState()},handleTouchDown:function(f,M){y=N.touch,this.handleDown(f,M)},handleDown:function(f,M){M instanceof MouseEvent&&M.which!==1||this.onResizeStart(f,M)!==!1&&(M.stopPropagation&&M.stopPropagation(),this.lockAspectRatio&&!f.includes("m")?this.handle="m"+f.substring(1):this.handle=f,this.resizeEnable=!0,this.mouseClickPosition.mouseX=M.touches?M.touches[0].pageX:M.pageX,this.mouseClickPosition.mouseY=M.touches?M.touches[0].pageY:M.pageY,this.mouseClickPosition.left=this.left,this.mouseClickPosition.right=this.right,this.mouseClickPosition.top=this.top,this.mouseClickPosition.bottom=this.bottom,this.bounds=this.calcResizeLimits(),g(document.documentElement,y.move,this.handleResize),g(document.documentElement,y.stop,this.handleUp))},calcResizeLimits:function(){var f=this.minW,M=this.minH,B=this.maxW,W=this.maxH,U=this.aspectFactor,F=C(this.grid,2),G=F[0],$=F[1],Z=this.width,Y=this.height,q=this.left,J=this.top,Q=this.right,ee=this.bottom;this.lockAspectRatio&&(f/M>U?M=f/U:f=U*M,B&&W?(B=Math.min(B,U*W),W=Math.min(W,B/U)):B?W=B/U:W&&(B=U*W)),B-=B%G,W-=W%$;var w={minLeft:null,maxLeft:null,minTop:null,maxTop:null,minRight:null,maxRight:null,minBottom:null,maxBottom:null};return this.parent?(w.minLeft=q%G,w.maxLeft=q+Math.floor((Z-f)/G)*G,w.minTop=J%$,w.maxTop=J+Math.floor((Y-M)/$)*$,w.minRight=Q%G,w.maxRight=Q+Math.floor((Z-f)/G)*G,w.minBottom=ee%$,w.maxBottom=ee+Math.floor((Y-M)/$)*$,B&&(w.minLeft=Math.max(w.minLeft,this.parentWidth-Q-B),w.minRight=Math.max(w.minRight,this.parentWidth-q-B)),W&&(w.minTop=Math.max(w.minTop,this.parentHeight-ee-W),w.minBottom=Math.max(w.minBottom,this.parentHeight-J-W)),this.lockAspectRatio&&(w.minLeft=Math.max(w.minLeft,q-J*U),w.minTop=Math.max(w.minTop,J-q/U),w.minRight=Math.max(w.minRight,Q-ee*U),w.minBottom=Math.max(w.minBottom,ee-Q/U))):(w.minLeft=null,w.maxLeft=q+Math.floor((Z-f)/G)*G,w.minTop=null,w.maxTop=J+Math.floor((Y-M)/$)*$,w.minRight=null,w.maxRight=Q+Math.floor((Z-f)/G)*G,w.minBottom=null,w.maxBottom=ee+Math.floor((Y-M)/$)*$,B&&(w.minLeft=-(Q+B),w.minRight=-(q+B)),W&&(w.minTop=-(ee+W),w.minBottom=-(J+W)),this.lockAspectRatio&&B&&W&&(w.minLeft=Math.min(w.minLeft,-(Q+B)),w.minTop=Math.min(w.minTop,-(W+ee)),w.minRight=Math.min(w.minRight,-q-B),w.minBottom=Math.min(w.minBottom,-J-W))),w},move:function(f){this.resizing?this.handleResize(f):this.dragEnable&&this.handleDrag(f)},handleDrag:function(f){var M=this.axis,B=this.grid,W=this.bounds,U=this.mouseClickPosition,F=M&&M!=="y"?U.mouseX-(f.touches?f.touches[0].pageX:f.pageX):0,G=M&&M!=="x"?U.mouseY-(f.touches?f.touches[0].pageY:f.pageY):0,$=R(B,F,G,this.scale),Z=C($,2),Y=Z[0],q=Z[1],J=D(U.left-Y,W.minLeft,W.maxLeft),Q=D(U.top-q,W.minTop,W.maxTop);if(this.onDrag(J,Q)!==!1){var ee=D(U.right+Y,W.minRight,W.maxRight),w=D(U.bottom+q,W.minBottom,W.maxBottom);this.left=J,this.top=Q,this.right=ee,this.bottom=w,this.$emit("dragging",this.left,this.top),this.dragging=!0}},moveHorizontally:function(f){var M=R(this.grid,f,this.top,1),B=C(M,2),W=B[0],U=(B[1],D(W,this.bounds.minLeft,this.bounds.maxLeft));this.left=U,this.right=this.parentWidth-this.width-U},moveVertically:function(f){var M=R(this.grid,this.left,f,1),B=C(M,2),W=(B[0],B[1]),U=D(W,this.bounds.minTop,this.bounds.maxTop);this.top=U,this.bottom=this.parentHeight-this.height-U},handleResize:function(f){var M=this.left,B=this.top,W=this.right,U=this.bottom,F=this.mouseClickPosition,G=(this.lockAspectRatio,this.aspectFactor),$=F.mouseX-(f.touches?f.touches[0].pageX:f.pageX),Z=F.mouseY-(f.touches?f.touches[0].pageY:f.pageY);!this.widthTouched&&$&&(this.widthTouched=!0),!this.heightTouched&&Z&&(this.heightTouched=!0);var Y=R(this.grid,$,Z,this.scale),q=C(Y,2),J=q[0],Q=q[1];this.handle.includes("b")?(U=D(F.bottom+Q,this.bounds.minBottom,this.bounds.maxBottom),this.lockAspectRatio&&this.resizingOnY&&(W=this.right-(this.bottom-U)*G)):this.handle.includes("t")&&(B=D(F.top-Q,this.bounds.minTop,this.bounds.maxTop),this.lockAspectRatio&&this.resizingOnY&&(M=this.left-(this.top-B)*G)),this.handle.includes("r")?(W=D(F.right+J,this.bounds.minRight,this.bounds.maxRight),this.lockAspectRatio&&this.resizingOnX&&(U=this.bottom-(this.right-W)/G)):this.handle.includes("l")&&(M=D(F.left-J,this.bounds.minLeft,this.bounds.maxLeft),this.lockAspectRatio&&this.resizingOnX&&(B=this.top-(this.left-M)/G));var ee=T(this.parentWidth,M,W),w=S(this.parentHeight,B,U);this.onResize(this.handle,M,B,ee,w)!==!1&&(this.left=M,this.top=B,this.right=W,this.bottom=U,this.width=ee,this.height=w,this.$emit("resizing",this.left,this.top,this.width,this.height),this.resizing=!0)},changeWidth:function(f){var M=R(this.grid,f,0,1),B=C(M,2),W=B[0],U=(B[1],D(this.parentWidth-W-this.left,this.bounds.minRight,this.bounds.maxRight)),F=this.bottom;this.lockAspectRatio&&(F=this.bottom-(this.right-U)/this.aspectFactor);var G=T(this.parentWidth,this.left,U),$=S(this.parentHeight,this.top,F);this.right=U,this.bottom=F,this.width=G,this.height=$},changeHeight:function(f){var M=R(this.grid,0,f,1),B=C(M,2),W=(B[0],B[1]),U=D(this.parentHeight-W-this.top,this.bounds.minBottom,this.bounds.maxBottom),F=this.right;this.lockAspectRatio&&(F=this.right-(this.bottom-U)*this.aspectFactor);var G=T(this.parentWidth,this.left,F),$=S(this.parentHeight,this.top,U);this.right=F,this.bottom=U,this.width=G,this.height=$},handleUp:function(f){this.handle=null,this.resetBoundsAndMouseState(),this.dragEnable=!1,this.resizeEnable=!1,this.resizing&&(this.resizing=!1,this.$emit("resizestop",this.left,this.top,this.width,this.height)),this.dragging&&(this.dragging=!1,this.$emit("dragstop",this.left,this.top)),b(document.documentElement,y.move,this.handleResize)}},computed:{style:function(){return z({transform:"translate(".concat(this.left,"px, ").concat(this.top,"px)"),width:this.computedWidth,height:this.computedHeight,zIndex:this.zIndex},this.dragging&&this.disableUserSelect?K:H)},actualHandles:function(){return this.resizable?this.handles:[]},computedWidth:function(){return this.w!=="auto"||this.widthTouched?this.width+"px":"auto"},computedHeight:function(){return this.h!=="auto"||this.heightTouched?this.height+"px":"auto"},resizingOnX:function(){return!!this.handle&&(this.handle.includes("l")||this.handle.includes("r"))},resizingOnY:function(){return!!this.handle&&(this.handle.includes("t")||this.handle.includes("b"))},isCornerHandle:function(){return!!this.handle&&["tl","tr","br","bl"].includes(this.handle)}},watch:{active:function(f){this.enabled=f,f?this.$emit("activated"):this.$emit("deactivated")},z:function(f){(f>=0||f==="auto")&&(this.zIndex=f)},x:function(f){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcDragLimits()),this.moveHorizontally(f))},y:function(f){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcDragLimits()),this.moveVertically(f))},lockAspectRatio:function(f){this.aspectFactor=f?this.width/this.height:void 0},minWidth:function(f){f>0&&f<=this.width&&(this.minW=f)},minHeight:function(f){f>0&&f<=this.height&&(this.minH=f)},maxWidth:function(f){this.maxW=f},maxHeight:function(f){this.maxH=f},w:function(f){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcResizeLimits()),this.changeWidth(f))},h:function(f){this.resizing||this.dragging||(this.parent&&(this.bounds=this.calcResizeLimits()),this.changeHeight(f))}}},V=j;function k(f,M,B,W,U,F,G,$){var Z,Y=typeof f=="function"?f.options:f;if(M&&(Y.render=M,Y.staticRenderFns=B,Y._compiled=!0),W&&(Y.functional=!0),F&&(Y._scopeId="data-v-"+F),G?(Z=function(Q){Q=Q||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,Q||typeof __VUE_SSR_CONTEXT__>"u"||(Q=__VUE_SSR_CONTEXT__),U&&U.call(this,Q),Q&&Q._registeredComponents&&Q._registeredComponents.add(G)},Y._ssrRegister=Z):U&&(Z=$?function(){U.call(this,this.$root.$options.shadowRoot)}:U),Z)if(Y.functional){Y._injectStyles=Z;var q=Y.render;Y.render=function(Q,ee){return Z.call(ee),q(Q,ee)}}else{var J=Y.beforeCreate;Y.beforeCreate=J?[].concat(J,Z):[Z]}return{exports:f,options:Y}}var X=k(V,a,l,!1,null,null,null);s.a=X.exports},3846:function(_,s,o){o("9e1e")&&/./g.flags!="g"&&o("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:o("0bfb")})},"38fd":function(_,s,o){var a=o("69a8"),l=o("4bf8"),e=o("613b")("IE_PROTO"),i=Object.prototype;_.exports=Object.getPrototypeOf||function(r){return r=l(r),a(r,e)?r[e]:typeof r.constructor=="function"&&r instanceof r.constructor?r.constructor.prototype:r instanceof Object?i:null}},"3adc":function(_,s,o){var a=o("0f89"),l=o("a47f"),e=o("2ea1"),i=Object.defineProperty;s.f=o("7d95")?Object.defineProperty:function(r,d,u){if(a(r),d=e(d,!0),a(u),l)try{return i(r,d,u)}catch{}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(r[d]=u.value),r}},"3b2b":function(_,s,o){var a=o("7726"),l=o("5dbc"),e=o("86cc").f,i=o("9093").f,r=o("aae3"),d=o("0bfb"),u=a.RegExp,m=u,h=u.prototype,v=/a/g,E=/a/g,p=new u(v)!==v;if(o("9e1e")&&(!p||o("79e5")((function(){return E[o("2b4c")("match")]=!1,u(v)!=v||u(E)==E||u(v,"i")!="/a/i"})))){u=function(O,R){var T=this instanceof u,S=r(O),D=R===void 0;return!T&&S&&O.constructor===u&&D?O:l(p?new m(S&&!D?O.source:O,R):m((S=O instanceof u)?O.source:O,S&&D?d.call(O):R),T?this:h,u)};for(var A=function(O){O in u||e(u,O,{configurable:!0,get:function(){return m[O]},set:function(R){m[O]=R}})},P=i(m),C=0;P.length>C;)A(P[C++]);h.constructor=u,u.prototype=h,o("2aba")(a,"RegExp",u)}o("7a56")("RegExp")},"41a0":function(_,s,o){"use strict";var a=o("2aeb"),l=o("4630"),e=o("7f20"),i={};o("32e9")(i,o("2b4c")("iterator"),(function(){return this})),_.exports=function(r,d,u){r.prototype=a(i,{next:l(1,u)}),e(r,d+" Iterator")}},"43c8":function(_,s){var o={}.hasOwnProperty;_.exports=function(a,l){return o.call(a,l)}},"456d":function(_,s,o){var a=o("4bf8"),l=o("0d58");o("5eda")("keys",(function(){return function(e){return l(a(e))}}))},4588:function(_,s){var o=Math.ceil,a=Math.floor;_.exports=function(l){return isNaN(l=+l)?0:(l>0?a:o)(l)}},4630:function(_,s){_.exports=function(o,a){return{enumerable:!(1&o),configurable:!(2&o),writable:!(4&o),value:a}}},"4a59":function(_,s,o){var a=o("9b43"),l=o("1fa8"),e=o("33a4"),i=o("cb7c"),r=o("9def"),d=o("27ee"),u={},m={};s=_.exports=function(h,v,E,p,A){var P,C,O,R,T=A?function(){return h}:d(h),S=a(E,p,v?2:1),D=0;if(typeof T!="function")throw TypeError(h+" is not iterable!");if(e(T)){for(P=r(h.length);P>D;D++)if(R=v?S(i(C=h[D])[0],C[1]):S(h[D]),R===u||R===m)return R}else for(O=T.call(h);!(C=O.next()).done;)if(R=l(O,S,C.value,v),R===u||R===m)return R},s.BREAK=u,s.RETURN=m},"4bf8":function(_,s,o){var a=o("be13");_.exports=function(l){return Object(a(l))}},"4f7f":function(_,s,o){"use strict";var a=o("c26b"),l=o("b39a"),e="Set";_.exports=o("e0b8")(e,(function(i){return function(){return i(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(i){return a.def(l(this,e),i=i===0?0:i,i)}},a)},5147:function(_,s,o){var a=o("2b4c")("match");_.exports=function(l){var e=/./;try{"/./"[l](e)}catch{try{return e[a]=!1,!"/./"[l](e)}catch{}}return!0}},"52a7":function(_,s){s.f={}.propertyIsEnumerable},5537:function(_,s,o){var a=o("8378"),l=o("7726"),e="__core-js_shared__",i=l[e]||(l[e]={});(_.exports=function(r,d){return i[r]||(i[r]=d!==void 0?d:{})})("versions",[]).push({version:a.version,mode:o("2d00")?"pure":"global",copyright:"\xA9 2018 Denis Pushkarev (zloirock.ru)"})},"58b2":function(_,s,o){var a=o("5ca1");a(a.S+a.F*!o("9e1e"),"Object",{defineProperties:o("1495")})},"5ca1":function(_,s,o){var a=o("7726"),l=o("8378"),e=o("32e9"),i=o("2aba"),r=o("9b43"),d="prototype",u=function(m,h,v){var E,p,A,P,C=m&u.F,O=m&u.G,R=m&u.S,T=m&u.P,S=m&u.B,D=O?a:R?a[h]||(a[h]={}):(a[h]||{})[d],x=O?l:l[h]||(l[h]={}),L=x[d]||(x[d]={});for(E in O&&(v=h),v)p=!C&&D&&D[E]!==void 0,A=(p?D:v)[E],P=S&&p?r(A,a):T&&typeof A=="function"?r(Function.call,A):A,D&&i(D,E,A,m&u.U),x[E]!=A&&e(x,E,P),T&&L[E]!=A&&(L[E]=A)};a.core=l,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,_.exports=u},"5cc5":function(_,s,o){var a=o("2b4c")("iterator"),l=!1;try{var e=[7][a]();e.return=function(){l=!0},Array.from(e,(function(){throw 2}))}catch{}_.exports=function(i,r){if(!r&&!l)return!1;var d=!1;try{var u=[7],m=u[a]();m.next=function(){return{done:d=!0}},u[a]=function(){return m},i(u)}catch{}return d}},"5ce7":function(_,s,o){"use strict";var a=o("7108"),l=o("f845"),e=o("c0d8"),i={};o("8ce0")(i,o("1b55")("iterator"),(function(){return this})),_.exports=function(r,d,u){r.prototype=a(i,{next:l(1,u)}),e(r,d+" Iterator")}},"5d73":function(_,s,o){_.exports=o("0a91")},"5d8f":function(_,s,o){var a=o("7772")("keys"),l=o("7b00");_.exports=function(e){return a[e]||(a[e]=l(e))}},"5dbc":function(_,s,o){var a=o("d3f4"),l=o("8b97").set;_.exports=function(e,i,r){var d,u=i.constructor;return u!==r&&typeof u=="function"&&(d=u.prototype)!==r.prototype&&a(d)&&l&&l(e,d),e}},"5df3":function(_,s,o){"use strict";var a=o("02f4")(!0);o("01f9")(String,"String",(function(l){this._t=String(l),this._i=0}),(function(){var l,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(l=a(e,i),this._i+=l.length,{value:l,done:!1})}))},"5eda":function(_,s,o){var a=o("5ca1"),l=o("8378"),e=o("79e5");_.exports=function(i,r){var d=(l.Object||{})[i]||Object[i],u={};u[i]=r(d),a(a.S+a.F*e((function(){d(1)})),"Object",u)}},"613b":function(_,s,o){var a=o("5537")("keys"),l=o("ca5a");_.exports=function(e){return a[e]||(a[e]=l(e))}},"626a":function(_,s,o){var a=o("2d95");_.exports=Object("z").propertyIsEnumerable(0)?Object:function(l){return a(l)=="String"?l.split(""):Object(l)}},6762:function(_,s,o){"use strict";var a=o("5ca1"),l=o("c366")(!0);a(a.P,"Array",{includes:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),o("9c6c")("includes")},"67ab":function(_,s,o){var a=o("ca5a")("meta"),l=o("d3f4"),e=o("69a8"),i=o("86cc").f,r=0,d=Object.isExtensible||function(){return!0},u=!o("79e5")((function(){return d(Object.preventExtensions({}))})),m=function(A){i(A,a,{value:{i:"O"+ ++r,w:{}}})},h=function(A,P){if(!l(A))return typeof A=="symbol"?A:(typeof A=="string"?"S":"P")+A;if(!e(A,a)){if(!d(A))return"F";if(!P)return"E";m(A)}return A[a].i},v=function(A,P){if(!e(A,a)){if(!d(A))return!0;if(!P)return!1;m(A)}return A[a].w},E=function(A){return u&&p.NEED&&d(A)&&!e(A,a)&&m(A),A},p=_.exports={KEY:a,NEED:!1,fastKey:h,getWeak:v,onFreeze:E}},6821:function(_,s,o){var a=o("626a"),l=o("be13");_.exports=function(e){return a(l(e))}},"69a8":function(_,s){var o={}.hasOwnProperty;_.exports=function(a,l){return o.call(a,l)}},"6a99":function(_,s,o){var a=o("d3f4");_.exports=function(l,e){if(!a(l))return l;var i,r;if(e&&typeof(i=l.toString)=="function"&&!a(r=i.call(l))||typeof(i=l.valueOf)=="function"&&!a(r=i.call(l))||!e&&typeof(i=l.toString)=="function"&&!a(r=i.call(l)))return r;throw TypeError("Can't convert object to primitive value")}},"6a9b":function(_,s,o){var a=o("8bab"),l=o("e5fa");_.exports=function(e){return a(l(e))}},"6b54":function(_,s,o){"use strict";o("3846");var a=o("cb7c"),l=o("0bfb"),e=o("9e1e"),i="toString",r=/./[i],d=function(u){o("2aba")(RegExp.prototype,i,u,!0)};o("79e5")((function(){return r.call({source:"a",flags:"b"})!="/a/b"}))?d((function(){var u=a(this);return"/".concat(u.source,"/","flags"in u?u.flags:!e&&u instanceof RegExp?l.call(u):void 0)})):r.name!=i&&d((function(){return r.call(this)}))},"6e1f":function(_,s){var o={}.toString;_.exports=function(a){return o.call(a).slice(8,-1)}},"6f42":function(_,s,o){},"6f8a":function(_,s){_.exports=function(o){return typeof o=="object"?o!==null:typeof o=="function"}},7108:function(_,s,o){var a=o("0f89"),l=o("f568"),e=o("0029"),i=o("5d8f")("IE_PROTO"),r=function(){},d="prototype",u=function(){var m,h=o("12fd")("iframe"),v=e.length,E="<",p=">";for(h.style.display="none",o("103a").appendChild(h),h.src="javascript:",m=h.contentWindow.document,m.open(),m.write(E+"script"+p+"document.F=Object"+E+"/script"+p),m.close(),u=m.F;v--;)delete u[d][e[v]];return u()};_.exports=Object.create||function(m,h){var v;return m!==null?(r[d]=a(m),v=new r,r[d]=null,v[i]=m):v=u(),h===void 0?v:l(v,h)}},7514:function(_,s,o){"use strict";var a=o("5ca1"),l=o("0a49")(5),e="find",i=!0;e in[]&&Array(1)[e]((function(){i=!1})),a(a.P+a.F*i,"Array",{find:function(r){return l(this,r,arguments.length>1?arguments[1]:void 0)}}),o("9c6c")(e)},7633:function(_,s,o){var a=o("2695"),l=o("0029");_.exports=Object.keys||function(e){return a(e,l)}},7726:function(_,s){var o=_.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=o)},7772:function(_,s,o){var a=o("a7d3"),l=o("da3c"),e="__core-js_shared__",i=l[e]||(l[e]={});(_.exports=function(r,d){return i[r]||(i[r]=d!==void 0?d:{})})("versions",[]).push({version:a.version,mode:o("b457")?"pure":"global",copyright:"\xA9 2019 Denis Pushkarev (zloirock.ru)"})},"77f1":function(_,s,o){var a=o("4588"),l=Math.max,e=Math.min;_.exports=function(i,r){return i=a(i),i<0?l(i+r,0):e(i,r)}},"79e5":function(_,s){_.exports=function(o){try{return!!o()}catch{return!0}}},"7a56":function(_,s,o){"use strict";var a=o("7726"),l=o("86cc"),e=o("9e1e"),i=o("2b4c")("species");_.exports=function(r){var d=a[r];e&&d&&!d[i]&&l.f(d,i,{configurable:!0,get:function(){return this}})}},"7b00":function(_,s){var o=0,a=Math.random();_.exports=function(l){return"Symbol(".concat(l===void 0?"":l,")_",(++o+a).toString(36))}},"7d8a":function(_,s,o){var a=o("6e1f"),l=o("1b55")("toStringTag"),e=a((function(){return arguments})())=="Arguments",i=function(r,d){try{return r[d]}catch{}};_.exports=function(r){var d,u,m;return r===void 0?"Undefined":r===null?"Null":typeof(u=i(d=Object(r),l))=="string"?u:e?a(d):(m=a(d))=="Object"&&typeof d.callee=="function"?"Arguments":m}},"7d95":function(_,s,o){_.exports=!o("d782")((function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7}))},"7f20":function(_,s,o){var a=o("86cc").f,l=o("69a8"),e=o("2b4c")("toStringTag");_.exports=function(i,r,d){i&&!l(i=d?i:i.prototype,e)&&a(i,e,{configurable:!0,value:r})}},8378:function(_,s){var o=_.exports={version:"2.6.1"};typeof __e=="number"&&(__e=o)},"84f2":function(_,s){_.exports={}},"85f2":function(_,s,o){_.exports=o("ec5b")},"86cc":function(_,s,o){var a=o("cb7c"),l=o("c69a"),e=o("6a99"),i=Object.defineProperty;s.f=o("9e1e")?Object.defineProperty:function(r,d,u){if(a(r),d=e(d,!0),a(u),l)try{return i(r,d,u)}catch{}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(r[d]=u.value),r}},"87b3":function(_,s,o){var a=Date.prototype,l="Invalid Date",e="toString",i=a[e],r=a.getTime;new Date(NaN)+""!=l&&o("2aba")(a,e,(function(){var d=r.call(this);return d===d?i.call(this):l}))},8875:function(_,s,o){var a,l,e;(function(i,r){l=[],a=r,e=typeof a=="function"?a.apply(s,l):a,e===void 0||(_.exports=e)})(typeof self<"u"&&self,(function(){function i(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(O){var r,d,u,m=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,h=/@([^@]*):(\d+):(\d+)\s*$/gi,v=m.exec(O.stack)||h.exec(O.stack),E=v&&v[1]||!1,p=v&&v[2]||!1,A=document.location.href.replace(document.location.hash,""),P=document.getElementsByTagName("script");E===A&&(r=document.documentElement.outerHTML,d=new RegExp("(?:[^\\n]+?\\n){0,"+(p-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),u=r.replace(d,"$1").trim());for(var C=0;C<P.length;C++)if(P[C].readyState==="interactive"||P[C].src===E||E===A&&P[C].innerHTML&&P[C].innerHTML.trim()===u)return P[C];return null}}return i}))},"89ca":function(_,s,o){o("b42c"),o("93c4"),_.exports=o("d38f")},"8b97":function(_,s,o){var a=o("d3f4"),l=o("cb7c"),e=function(i,r){if(l(i),!a(r)&&r!==null)throw TypeError(r+": can't set as prototype!")};_.exports={set:Object.setPrototypeOf||("__proto__"in{}?(function(i,r,d){try{d=o("9b43")(Function.call,o("11e9").f(Object.prototype,"__proto__").set,2),d(i,[]),r=!(i instanceof Array)}catch{r=!0}return function(u,m){return e(u,m),r?u.__proto__=m:d(u,m),u}})({},!1):void 0),check:e}},"8bab":function(_,s,o){var a=o("6e1f");_.exports=Object("z").propertyIsEnumerable(0)?Object:function(l){return a(l)=="String"?l.split(""):Object(l)}},"8ce0":function(_,s,o){var a=o("3adc"),l=o("f845");_.exports=o("7d95")?function(e,i,r){return a.f(e,i,l(1,r))}:function(e,i,r){return e[i]=r,e}},"8e6e":function(_,s,o){var a=o("5ca1"),l=o("990b"),e=o("6821"),i=o("11e9"),r=o("f1ae");a(a.S,"Object",{getOwnPropertyDescriptors:function(d){for(var u,m,h=e(d),v=i.f,E=l(h),p={},A=0;E.length>A;)m=v(h,u=E[A++]),m!==void 0&&r(p,u,m);return p}})},9093:function(_,s,o){var a=o("ce10"),l=o("e11e").concat("length","prototype");s.f=Object.getOwnPropertyNames||function(e){return a(e,l)}},"93c4":function(_,s,o){"use strict";var a=o("2a4e")(!0);o("e4a9")(String,"String",(function(l){this._t=String(l),this._i=0}),(function(){var l,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(l=a(e,i),this._i+=l.length,{value:l,done:!1})}))},"990b":function(_,s,o){var a=o("9093"),l=o("2621"),e=o("cb7c"),i=o("7726").Reflect;_.exports=i&&i.ownKeys||function(r){var d=a.f(e(r)),u=l.f;return u?d.concat(u(r)):d}},"9b43":function(_,s,o){var a=o("d8e8");_.exports=function(l,e,i){if(a(l),e===void 0)return l;switch(i){case 1:return function(r){return l.call(e,r)};case 2:return function(r,d){return l.call(e,r,d)};case 3:return function(r,d,u){return l.call(e,r,d,u)}}return function(){return l.apply(e,arguments)}}},"9c6c":function(_,s,o){var a=o("2b4c")("unscopables"),l=Array.prototype;l[a]==null&&o("32e9")(l,a,{}),_.exports=function(e){l[a][e]=!0}},"9def":function(_,s,o){var a=o("4588"),l=Math.min;_.exports=function(e){return e>0?l(a(e),9007199254740991):0}},"9e1e":function(_,s,o){_.exports=!o("79e5")((function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7}))},a47f:function(_,s,o){_.exports=!o("7d95")&&!o("d782")((function(){return Object.defineProperty(o("12fd")("div"),"a",{get:function(){return 7}}).a!=7}))},a5ab:function(_,s,o){var a=o("a812"),l=Math.min;_.exports=function(e){return e>0?l(a(e),9007199254740991):0}},a745:function(_,s,o){_.exports=o("d604")},a7d3:function(_,s){var o=_.exports={version:"2.6.9"};typeof __e=="number"&&(__e=o)},a812:function(_,s){var o=Math.ceil,a=Math.floor;_.exports=function(l){return isNaN(l=+l)?0:(l>0?a:o)(l)}},aa77:function(_,s,o){var a=o("5ca1"),l=o("be13"),e=o("79e5"),i=o("fdef"),r="["+i+"]",d="\u200B\x85",u=RegExp("^"+r+r+"*"),m=RegExp(r+r+"*$"),h=function(E,p,A){var P={},C=e((function(){return!!i[E]()||d[E]()!=d})),O=P[E]=C?p(v):i[E];A&&(P[A]=O),a(a.P+a.F*C,"String",P)},v=h.trim=function(E,p){return E=String(l(E)),1&p&&(E=E.replace(u,"")),2&p&&(E=E.replace(m,"")),E};_.exports=h},aae3:function(_,s,o){var a=o("d3f4"),l=o("2d95"),e=o("2b4c")("match");_.exports=function(i){var r;return a(i)&&((r=i[e])!==void 0?!!r:l(i)=="RegExp")}},ac6a:function(_,s,o){for(var a=o("cadf"),l=o("0d58"),e=o("2aba"),i=o("7726"),r=o("32e9"),d=o("84f2"),u=o("2b4c"),m=u("iterator"),h=u("toStringTag"),v=d.Array,E={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=l(E),A=0;A<p.length;A++){var P,C=p[A],O=E[C],R=i[C],T=R&&R.prototype;if(T&&(T[m]||r(T,m,v),T[h]||r(T,h,C),d[C]=v,O))for(P in a)T[P]||e(T,P,a[P],!0)}},b22a:function(_,s){_.exports={}},b39a:function(_,s,o){var a=o("d3f4");_.exports=function(l,e){if(!a(l)||l._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return l}},b3e7:function(_,s){_.exports=function(){}},b42c:function(_,s,o){o("fa54");for(var a=o("da3c"),l=o("8ce0"),e=o("b22a"),i=o("1b55")("toStringTag"),r="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),d=0;d<r.length;d++){var u=r[d],m=a[u],h=m&&m.prototype;h&&!h[i]&&l(h,i,u),e[u]=e.Array}},b457:function(_,s){_.exports=!0},b5aa:function(_,s,o){var a=o("6e1f");_.exports=Array.isArray||function(l){return a(l)=="Array"}},b635:function(_,s,o){"use strict";(function(a){o.d(s,"b",(function(){return e})),o("6f42");var l=o("3425");function e(d){e.installed||(e.installed=!0,d.component("VueDraggableResizable",l.a))}var i={install:e},r=null;typeof window<"u"?r=window.Vue:typeof a<"u"&&(r=a.Vue),r&&r.use(i),s.a=l.a}).call(this,o("c8ba"))},b77f:function(_,s,o){var a=o("0f89"),l=o("f159");_.exports=o("a7d3").getIterator=function(e){var i=l(e);if(typeof i!="function")throw TypeError(e+" is not iterable!");return a(i.call(e))}},bc25:function(_,s,o){var a=o("f2fe");_.exports=function(l,e,i){if(a(l),e===void 0)return l;switch(i){case 1:return function(r){return l.call(e,r)};case 2:return function(r,d){return l.call(e,r,d)};case 3:return function(r,d,u){return l.call(e,r,d,u)}}return function(){return l.apply(e,arguments)}}},be13:function(_,s){_.exports=function(o){if(o==null)throw TypeError("Can't call method on  "+o);return o}},c0d8:function(_,s,o){var a=o("3adc").f,l=o("43c8"),e=o("1b55")("toStringTag");_.exports=function(i,r,d){i&&!l(i=d?i:i.prototype,e)&&a(i,e,{configurable:!0,value:r})}},c26b:function(_,s,o){"use strict";var a=o("86cc").f,l=o("2aeb"),e=o("dcbc"),i=o("9b43"),r=o("f605"),d=o("4a59"),u=o("01f9"),m=o("d53b"),h=o("7a56"),v=o("9e1e"),E=o("67ab").fastKey,p=o("b39a"),A=v?"_s":"size",P=function(C,O){var R,T=E(O);if(T!=="F")return C._i[T];for(R=C._f;R;R=R.n)if(R.k==O)return R};_.exports={getConstructor:function(C,O,R,T){var S=C((function(D,x){r(D,S,O,"_i"),D._t=O,D._i=l(null),D._f=void 0,D._l=void 0,D[A]=0,x!=null&&d(x,R,D[T],D)}));return e(S.prototype,{clear:function(){for(var D=p(this,O),x=D._i,L=D._f;L;L=L.n)L.r=!0,L.p&&(L.p=L.p.n=void 0),delete x[L.i];D._f=D._l=void 0,D[A]=0},delete:function(D){var x=p(this,O),L=P(x,D);if(L){var g=L.n,b=L.p;delete x._i[L.i],L.r=!0,b&&(b.n=g),g&&(g.p=b),x._f==L&&(x._f=g),x._l==L&&(x._l=b),x[A]--}return!!L},forEach:function(D){p(this,O);for(var x,L=i(D,arguments.length>1?arguments[1]:void 0,3);x=x?x.n:this._f;)for(L(x.v,x.k,this);x&&x.r;)x=x.p},has:function(D){return!!P(p(this,O),D)}}),v&&a(S.prototype,"size",{get:function(){return p(this,O)[A]}}),S},def:function(C,O,R){var T,S,D=P(C,O);return D?D.v=R:(C._l=D={i:S=E(O,!0),k:O,v:R,p:T=C._l,n:void 0,r:!1},C._f||(C._f=D),T&&(T.n=D),C[A]++,S!=="F"&&(C._i[S]=D)),C},getEntry:P,setStrong:function(C,O,R){u(C,O,(function(T,S){this._t=p(T,O),this._k=S,this._l=void 0}),(function(){for(var T=this,S=T._k,D=T._l;D&&D.r;)D=D.p;return T._t&&(T._l=D=D?D.n:T._t._f)?m(0,S=="keys"?D.k:S=="values"?D.v:[D.k,D.v]):(T._t=void 0,m(1))}),R?"entries":"values",!R,!0),h(O)}}},c366:function(_,s,o){var a=o("6821"),l=o("9def"),e=o("77f1");_.exports=function(i){return function(r,d,u){var m,h=a(r),v=l(h.length),E=e(u,v);if(i&&d!=d){for(;v>E;)if(m=h[E++],m!=m)return!0}else for(;v>E;E++)if((i||E in h)&&h[E]===d)return i||E||0;return!i&&-1}}},c5f6:function(_,s,o){"use strict";var a=o("7726"),l=o("69a8"),e=o("2d95"),i=o("5dbc"),r=o("6a99"),d=o("79e5"),u=o("9093").f,m=o("11e9").f,h=o("86cc").f,v=o("aa77").trim,E="Number",p=a[E],A=p,P=p.prototype,C=e(o("2aeb")(P))==E,O="trim"in String.prototype,R=function(x){var L=r(x,!1);if(typeof L=="string"&&L.length>2){L=O?L.trim():v(L,3);var g,b,I,z=L.charCodeAt(0);if(z===43||z===45){if(g=L.charCodeAt(2),g===88||g===120)return NaN}else if(z===48){switch(L.charCodeAt(1)){case 66:case 98:b=2,I=49;break;case 79:case 111:b=8,I=55;break;default:return+L}for(var N,K=L.slice(2),H=0,y=K.length;H<y;H++)if(N=K.charCodeAt(H),N<48||N>I)return NaN;return parseInt(K,b)}}return+L};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(x){var L=arguments.length<1?0:x,g=this;return g instanceof p&&(C?d((function(){P.valueOf.call(g)})):e(g)!=E)?i(new A(R(L)),g,p):R(L)};for(var T,S=o("9e1e")?u(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;S.length>D;D++)l(A,T=S[D])&&!l(p,T)&&h(p,T,m(A,T));p.prototype=P,P.constructor=p,o("2aba")(a,E,p)}},c69a:function(_,s,o){_.exports=!o("9e1e")&&!o("79e5")((function(){return Object.defineProperty(o("230e")("div"),"a",{get:function(){return 7}}).a!=7}))},c8ba:function(_,s){var o;o=(function(){return this})();try{o=o||new Function("return this")()}catch{typeof window=="object"&&(o=window)}_.exports=o},c8bb:function(_,s,o){_.exports=o("89ca")},ca5a:function(_,s){var o=0,a=Math.random();_.exports=function(l){return"Symbol(".concat(l===void 0?"":l,")_",(++o+a).toString(36))}},cadf:function(_,s,o){"use strict";var a=o("9c6c"),l=o("d53b"),e=o("84f2"),i=o("6821");_.exports=o("01f9")(Array,"Array",(function(r,d){this._t=i(r),this._i=0,this._k=d}),(function(){var r=this._t,d=this._k,u=this._i++;return!r||u>=r.length?(this._t=void 0,l(1)):l(0,d=="keys"?u:d=="values"?r[u]:[u,r[u]])}),"values"),e.Arguments=e.Array,a("keys"),a("values"),a("entries")},cb7c:function(_,s,o){var a=o("d3f4");_.exports=function(l){if(!a(l))throw TypeError(l+" is not an object!");return l}},cd1c:function(_,s,o){var a=o("e853");_.exports=function(l,e){return new(a(l))(e)}},ce10:function(_,s,o){var a=o("69a8"),l=o("6821"),e=o("c366")(!1),i=o("613b")("IE_PROTO");_.exports=function(r,d){var u,m=l(r),h=0,v=[];for(u in m)u!=i&&a(m,u)&&v.push(u);for(;d.length>h;)a(m,u=d[h++])&&(~e(v,u)||v.push(u));return v}},d13f:function(_,s,o){var a=o("da3c"),l=o("a7d3"),e=o("bc25"),i=o("8ce0"),r=o("43c8"),d="prototype",u=function(m,h,v){var E,p,A,P=m&u.F,C=m&u.G,O=m&u.S,R=m&u.P,T=m&u.B,S=m&u.W,D=C?l:l[h]||(l[h]={}),x=D[d],L=C?a:O?a[h]:(a[h]||{})[d];for(E in C&&(v=h),v)p=!P&&L&&L[E]!==void 0,p&&r(D,E)||(A=p?L[E]:v[E],D[E]=C&&typeof L[E]!="function"?v[E]:T&&p?e(A,a):S&&L[E]==A?(function(g){var b=function(I,z,N){if(this instanceof g){switch(arguments.length){case 0:return new g;case 1:return new g(I);case 2:return new g(I,z)}return new g(I,z,N)}return g.apply(this,arguments)};return b[d]=g[d],b})(A):R&&typeof A=="function"?e(Function.call,A):A,R&&((D.virtual||(D.virtual={}))[E]=A,m&u.R&&x&&!x[E]&&i(x,E,A)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,_.exports=u},d25f:function(_,s,o){"use strict";var a=o("5ca1"),l=o("0a49")(2);a(a.P+a.F*!o("2f21")([].filter,!0),"Array",{filter:function(e){return l(this,e,arguments[1])}})},d2c8:function(_,s,o){var a=o("aae3"),l=o("be13");_.exports=function(e,i,r){if(a(i))throw TypeError("String#"+r+" doesn't accept regex!");return String(l(e))}},d38f:function(_,s,o){var a=o("7d8a"),l=o("1b55")("iterator"),e=o("b22a");_.exports=o("a7d3").isIterable=function(i){var r=Object(i);return r[l]!==void 0||"@@iterator"in r||e.hasOwnProperty(a(r))}},d3f4:function(_,s){_.exports=function(o){return typeof o=="object"?o!==null:typeof o=="function"}},d53b:function(_,s){_.exports=function(o,a){return{value:a,done:!!o}}},d604:function(_,s,o){o("1938"),_.exports=o("a7d3").Array.isArray},d782:function(_,s){_.exports=function(o){try{return!!o()}catch{return!0}}},d8e8:function(_,s){_.exports=function(o){if(typeof o!="function")throw TypeError(o+" is not a function!");return o}},da3c:function(_,s){var o=_.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=o)},dcbc:function(_,s,o){var a=o("2aba");_.exports=function(l,e,i){for(var r in e)a(l,r,e[r],i);return l}},e0b8:function(_,s,o){"use strict";var a=o("7726"),l=o("5ca1"),e=o("2aba"),i=o("dcbc"),r=o("67ab"),d=o("4a59"),u=o("f605"),m=o("d3f4"),h=o("79e5"),v=o("5cc5"),E=o("7f20"),p=o("5dbc");_.exports=function(A,P,C,O,R,T){var S=a[A],D=S,x=R?"set":"add",L=D&&D.prototype,g={},b=function(y){var j=L[y];e(L,y,y=="delete"||y=="has"?function(V){return!(T&&!m(V))&&j.call(this,V===0?0:V)}:y=="get"?function(V){return T&&!m(V)?void 0:j.call(this,V===0?0:V)}:y=="add"?function(V){return j.call(this,V===0?0:V),this}:function(V,k){return j.call(this,V===0?0:V,k),this})};if(typeof D=="function"&&(T||L.forEach&&!h((function(){new D().entries().next()})))){var I=new D,z=I[x](T?{}:-0,1)!=I,N=h((function(){I.has(1)})),K=v((function(y){new D(y)})),H=!T&&h((function(){for(var y=new D,j=5;j--;)y[x](j,j);return!y.has(-0)}));K||(D=P((function(y,j){u(y,D,A);var V=p(new S,y,D);return j!=null&&d(j,R,V[x],V),V})),D.prototype=L,L.constructor=D),(N||H)&&(b("delete"),b("has"),R&&b("get")),(H||z)&&b(x),T&&L.clear&&delete L.clear}else D=O.getConstructor(P,A,R,x),i(D.prototype,C),r.NEED=!0;return E(D,A),g[A]=D,l(l.G+l.W+l.F*(D!=S),g),T||O.setStrong(D,A,R),D}},e11e:function(_,s){_.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},e341:function(_,s,o){var a=o("d13f");a(a.S+a.F*!o("7d95"),"Object",{defineProperty:o("3adc").f})},e4a9:function(_,s,o){"use strict";var a=o("b457"),l=o("d13f"),e=o("2312"),i=o("8ce0"),r=o("b22a"),d=o("5ce7"),u=o("c0d8"),m=o("ff0c"),h=o("1b55")("iterator"),v=!([].keys&&"next"in[].keys()),E="@@iterator",p="keys",A="values",P=function(){return this};_.exports=function(C,O,R,T,S,D,x){d(R,O,T);var L,g,b,I=function(X){if(!v&&X in H)return H[X];switch(X){case p:return function(){return new R(this,X)};case A:return function(){return new R(this,X)}}return function(){return new R(this,X)}},z=O+" Iterator",N=S==A,K=!1,H=C.prototype,y=H[h]||H[E]||S&&H[S],j=y||I(S),V=S?N?I("entries"):j:void 0,k=O=="Array"&&H.entries||y;if(k&&(b=m(k.call(new C)),b!==Object.prototype&&b.next&&(u(b,z,!0),a||typeof b[h]=="function"||i(b,h,P))),N&&y&&y.name!==A&&(K=!0,j=function(){return y.call(this)}),a&&!x||!v&&!K&&H[h]||i(H,h,j),r[O]=j,r[z]=P,S)if(L={values:N?j:I(A),keys:D?j:I(p),entries:V},x)for(g in L)g in H||e(H,g,L[g]);else l(l.P+l.F*(v||K),O,L);return L}},e5fa:function(_,s){_.exports=function(o){if(o==null)throw TypeError("Can't call method on  "+o);return o}},e853:function(_,s,o){var a=o("d3f4"),l=o("1169"),e=o("2b4c")("species");_.exports=function(i){var r;return l(i)&&(r=i.constructor,typeof r!="function"||r!==Array&&!l(r.prototype)||(r=void 0),a(r)&&(r=r[e],r===null&&(r=void 0))),r===void 0?Array:r}},ec5b:function(_,s,o){o("e341");var a=o("a7d3").Object;_.exports=function(l,e,i){return a.defineProperty(l,e,i)}},f159:function(_,s,o){var a=o("7d8a"),l=o("1b55")("iterator"),e=o("b22a");_.exports=o("a7d3").getIteratorMethod=function(i){if(i!=null)return i[l]||i["@@iterator"]||e[a(i)]}},f1ae:function(_,s,o){"use strict";var a=o("86cc"),l=o("4630");_.exports=function(e,i,r){i in e?a.f(e,i,l(0,r)):e[i]=r}},f2fe:function(_,s){_.exports=function(o){if(typeof o!="function")throw TypeError(o+" is not a function!");return o}},f3e2:function(_,s,o){"use strict";var a=o("5ca1"),l=o("0a49")(0),e=o("2f21")([].forEach,!0);a(a.P+a.F*!e,"Array",{forEach:function(i){return l(this,i,arguments[1])}})},f568:function(_,s,o){var a=o("3adc"),l=o("0f89"),e=o("7633");_.exports=o("7d95")?Object.defineProperties:function(i,r){l(i);for(var d,u=e(r),m=u.length,h=0;m>h;)a.f(i,d=u[h++],r[d]);return i}},f605:function(_,s){_.exports=function(o,a,l,e){if(!(o instanceof a)||e!==void 0&&e in o)throw TypeError(l+": incorrect invocation!");return o}},f845:function(_,s){_.exports=function(o,a){return{enumerable:!(1&o),configurable:!(2&o),writable:!(4&o),value:a}}},fa54:function(_,s,o){"use strict";var a=o("b3e7"),l=o("245b"),e=o("b22a"),i=o("6a9b");_.exports=o("e4a9")(Array,"Array",(function(r,d){this._t=i(r),this._i=0,this._k=d}),(function(){var r=this._t,d=this._k,u=this._i++;return!r||u>=r.length?(this._t=void 0,l(1)):l(0,d=="keys"?u:d=="values"?r[u]:[u,r[u]])}),"values"),e.Arguments=e.Array,a("keys"),a("values"),a("entries")},fab2:function(_,s,o){var a=o("7726").document;_.exports=a&&a.documentElement},fb15:function(_,s,o){"use strict";if(o.r(s),o.d(s,"install",(function(){return i.b})),typeof window<"u"){var a=window.document.currentScript,l=o("8875");a=l(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:l});var e=a&&a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);e&&(o.p=e[1])}var i=o("b635");s.default=i.a},fdef:function(_,s){_.exports=`	
\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`},ff0c:function(_,s,o){var a=o("43c8"),l=o("0185"),e=o("5d8f")("IE_PROTO"),i=Object.prototype;_.exports=Object.getPrototypeOf||function(r){return r=l(r),a(r,e)?r[e]:typeof r.constructor=="function"&&r instanceof r.constructor?r.constructor.prototype:r instanceof Object?i:null}}}).default}))}),36486:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"buttons-bar"},[i("div",{staticClass:"network-connection-state"},[e.qualityWarningTooltip?i("NcPopover",{attrs:{boundary:e.boundaryElement,"aria-label":e.qualityWarningAriaLabel,trigger:"hover","auto-hide":!1,"focus-trap":!1,shown:e.showQualityWarningTooltip},scopedSlots:e._u([{key:"trigger",fn:function(){return[i("NcButton",{staticClass:"trigger",attrs:{id:"quality_warning_button",type:"tertiary-no-background","aria-label":e.qualityWarningAriaLabel},on:{click:function(r){e.mouseover=!e.mouseover}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconNetworkStrength2Alert",{attrs:{"fill-color":"#e9322d",size:20}})]},proxy:!0}],null,!1,4158015653)})]},proxy:!0}],null,!1,4144923322)},[e._v(" "),i("div",{staticClass:"hint"},[i("span",[e._v(e._s(e.qualityWarningTooltip.content))]),e._v(" "),i("div",{staticClass:"hint__actions"},[e.qualityWarningTooltip.action?i("NcButton",{staticClass:"hint__button",attrs:{type:"primary"},on:{click:e.executeQualityWarningTooltipAction}},[e._v(`
						`+e._s(e.qualityWarningTooltip.actionLabel)+`
					`)]):e._e(),e._v(" "),e.isQualityWarningTooltipDismissed?e._e():i("NcButton",{staticClass:"hint__button",attrs:{type:"tertiary"},on:{click:e.dismissQualityWarningTooltip}},[e._v(`
						`+e._s(e.t("spreed","Dismiss"))+`
					`)])],1)])]):e._e()],1),e._v(" "),i("LocalAudioControlButton",{attrs:{token:e.token,conversation:e.conversation,model:e.model,type:"tertiary"}}),e._v(" "),i("LocalVideoControlButton",{attrs:{token:e.token,conversation:e.conversation,model:e.model,type:"tertiary"}}),e._v(" "),e.isVirtualBackgroundAvailable&&e.isSidebar?i("NcButton",{class:e.blurButtonClass,attrs:{title:e.toggleVirtualBackgroundButtonLabel,type:"tertiary","aria-label":e.toggleVirtualBackgroundButtonLabel},on:{click:function(r){return r.stopPropagation(),e.toggleVirtualBackground.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.isVirtualBackgroundEnabled?i("IconBlur",{attrs:{size:20}}):i("IconBlurOff",{attrs:{size:20}})]},proxy:!0}],null,!1,4016271557)}):e._e(),e._v(" "),!e.isSidebar&&e.isScreensharing?i("NcActions",{staticClass:"app-navigation-entry-utils-menu-button",class:e.screenSharingButtonClass,attrs:{id:"screensharing-button",title:e.screenSharingButtonTitle,type:"error","aria-label":e.screenSharingButtonAriaLabel,"boundaries-element":e.boundaryElement,disabled:!e.isScreensharingAllowed,open:e.screenSharingMenuOpen},on:{"update:open":function(r){e.screenSharingMenuOpen=r}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconMonitorOff",{attrs:{size:20}})]},proxy:!0}],null,!1,908258432)},[e._v(" "),i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.showScreen},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconMonitor",{attrs:{size:20}})]},proxy:!0}],null,!1,1999862031)},[e._v(`
			`+e._s(e.t("spreed","Show your screen"))+`
		`)]),e._v(" "),i("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.stopScreen},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconMonitorOff",{attrs:{size:20}})]},proxy:!0}],null,!1,908258432)},[e._v(`
			`+e._s(e.t("spreed","Stop screensharing"))+`
		`)])],1):e.isSidebar?e._e():i("NcButton",{attrs:{title:e.screenSharingButtonTitle,type:"tertiary","aria-label":e.screenSharingButtonAriaLabel,disabled:!e.isScreensharingAllowed},on:{click:function(r){return r.stopPropagation(),e.toggleScreenSharingMenu.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconMonitorShare",{attrs:{size:20}})]},proxy:!0}])})],1)},a=[]}),37038:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(24601),a=s(86604),l=s(23838),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"aea49c2e",null);const r=i.exports}),37293:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(49479),a=s(11579),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),37361:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(69589),a=s(57763),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),37540:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(11749),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),37541:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c,r=e._self._setupProxy;return r.tasksCount?i("div",{staticClass:"tasks-counter"},[i(r.NcProgressBar,{attrs:{type:"circular",value:r.tasksRatio,color:r.tasksRatio===100?"var(--color-success)":null}}),e._v(" "),i("div",{staticClass:"tasks-counter__count"},[e._v(`
		`+e._s(r.tasksSummary)+`
	`)])],1):e._e()},a=[]}),37854:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("NcDialog",e._g({ref:"dialog",attrs:{name:e.dialogTitle,"close-on-click-outside":"",size:"normal"},on:{"update:open":function(r){return e.$emit("close")}}},e.$listeners),[i("NewMessage",{ref:"newMessage",staticClass:"send-message-dialog",attrs:{role:"region",token:e.token,container:e.modalContainerId,"aria-label":e.dialogTitle,dialog:"",broadcast:e.broadcast},on:{submit:e.handleSubmit}})],1)},a=[]}),38947:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"AccountOffIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),39014:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"NetworkStrength2AlertIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),39018:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(90975),a=s(54197),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),39182:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(16053),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),39418:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(95209),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),39957:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(87660);const a=o.A}),40580:((c,_,s)=>{"use strict";var o=s(21553)}),41563:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(82664);const a=o.A}),41850:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(1747),a=s(34386),l=s(66230),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"0ddeea4c",null);const r=i.exports}),41885:((c,_,s)=>{"use strict";var o=s(42164)}),42164:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(19431),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),42506:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"ChevronRightIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),42525:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(66600);const a=o.A}),43645:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(81040),a=s(64423),l=s(92291),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"54acf4da",null);const r=i.exports}),44076:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon fullscreen-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),44224:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon calendar-blank-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),44487:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(92343),a=s(70367),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),45459:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(59790);const a=o.A}),45746:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(61777),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),45775:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(36486),a=s(8551),l=s(1295),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"572e43ac",null);const r=i.exports}),45931:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"CalendarBlankIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),46015:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(14072);const a=o.A}),46261:((c,_,s)=>{"use strict";s.d(_,{A:()=>v});var o=s(66605),a=s(39018),l=s(53334),e=s(74095),i=s(88289),r=s(54562),d=s(49583),u=s(72925),m=s(76887);const h=3600*1e3,v={name:"CallTime",components:{NcButton:e.A,NcLoadingIcon:i.A,NcPopover:r.A,IconRecordCircle:o.A,IconStop:a.A},props:{start:{type:Number,required:!0}},setup(){return{isDocumentVisible:(0,d.f)()}},data(){return{callTime:void 0,showPopover:!1,isCallDurationHintShown:!1,timer:null}},computed:{callStart(){return new Date(this.start*1e3)},token(){return this.$store.getters.getToken()},conversation(){return this.$store.getters.conversation(this.token)||this.$store.getters.dummyConversation},isStartingRecording(){return this.conversation.callRecording===u.XV.RECORDING.VIDEO_STARTING||this.conversation.callRecording===u.XV.RECORDING.AUDIO_STARTING},isRecording(){return this.conversation.callRecording===u.XV.RECORDING.VIDEO||this.conversation.callRecording===u.XV.RECORDING.AUDIO},isShowRecordingControls(){return this.$store.getters.isModerator&&(this.isStartingRecording||this.isRecording)},isButtonDisabled(){return!this.isShowRecordingControls&&!this.isCallDurationHintShown},recordingButtonTitle(){return this.isStartingRecording?(0,l.t)("spreed","Starting the recording"):this.isRecording?(0,l.t)("spreed","Recording"):""},formattedCallTime(){return(0,m.m)(this.callTime)},placeholderCallTime(){return this.formattedCallTime.replace(/\d/g,"0")}},watch:{callTime(E){E>h&&E<h+1e4&&!this.isCallDurationHintShown&&this.showCallDurationHint()}},mounted(){this.timer=setInterval(this.computeElapsedTime,1e3)},beforeDestroy(){clearInterval(this.timer)},methods:{t:l.t,stopRecording(){this.$store.dispatch("stopCallRecording",{token:this.token}),this.showPopover=!1},computeElapsedTime(){this.start!==0&&(this.callTime=new Date-this.callStart)},showCallDurationHint(){this.showPopover=!0,this.isCallDurationHintShown=!0,this.isDocumentVisible?setTimeout(()=>{this.showPopover=!1},1e4):window.onfocus=()=>setTimeout(()=>{this.showPopover=!1},1e4)}}}}),46374:((c,_,s)=>{"use strict";s.d(_,{N:()=>h});var o=s(77030),a=s(85471),l=s(418),e=s(88751),i=s(51431);(0,l.r)();const r=(0,a.pM)({name:"NcActionButtonGroup",inject:{isInSemanticMenu:{from:"NcActions:isSemanticMenu",default:!1}},props:{name:{required:!1,default:void 0,type:String}},setup(){return{labelId:`nc-action-button-group-${(0,e.G)()}`}},methods:{t:l.a}});var d=function(){var E=this,p=E._self._c;return E._self._setupProxy,p("li",{staticClass:"nc-button-group-base",attrs:{role:E.isInSemanticMenu&&"presentation"}},[E.name?p("div",{attrs:{id:E.labelId}},[E._v(" "+E._s(E.name)+" ")]):E._e(),p("ul",{staticClass:"nc-button-group-content",attrs:{role:"group","aria-labelledby":E.name?E.labelId:void 0}},[E._t("default")],2)])},u=[],m=(0,i.n)(r,d,u,!1,null,"d81f7625");const h=m.exports}),46446:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(85471),a=s(53334),l=s(51858),e=s(25198);const i=(0,o.pM)({__name:"TasksCounter",setup(r){const d=(0,e.k)(),u=(0,o.EW)(()=>d.tasksCount),m=(0,o.EW)(()=>d.tasksDoneCount),h=(0,o.EW)(()=>u.value===0?0:m.value/u.value*100),v=(0,o.EW)(()=>h.value===100?(0,a.t)("spreed","All tasks done!"):(0,a.n)("spreed","{done} of %n task","{done} of %n tasks",u.value,{done:m.value}));return{__sfc:!0,chatExtrasStore:d,tasksCount:u,tasksDoneCount:m,tasksRatio:h,tasksSummary:v,NcProgressBar:l.A}}})}),47999:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(96556),a=s(23931),l=s(20213),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"04549770",null);const r=i.exports}),48765:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".toaster[data-v-b613c04c]{position:absolute;bottom:20px;left:0;display:flex;flex-direction:column;gap:20px;width:100%;z-index:1}.toast[data-v-b613c04c]{position:absolute;bottom:0;left:var(--horizontal-offset, 0);display:flex;align-items:center;gap:8px;animation:toast-floating-b613c04c var(--animation-length) linear}.toast__reaction[data-v-b613c04c]{font-size:250%;line-height:100%}@media only screen and (max-width: 1920px){.toast__reaction[data-v-b613c04c]{font-size:150%}.toast__reaction-img[data-v-b613c04c]{width:30px;height:30px}}.toast__name[data-v-b613c04c]{padding:8px 12px;border-radius:6px;line-height:100%;white-space:nowrap;color:#fff;background-color:var(--background-color);box-shadow:1px 1px 4px var(--color-box-shadow)}@keyframes toast-floating-b613c04c{0%{transform:translateY(0);opacity:1}50%{transform:translateY(calc(-0.5 * var(--vertical-offset) * 1vh));opacity:1}100%{transform:translateY(calc(-1 * var(--vertical-offset) * 1vh));opacity:0}}","",{version:3,sources:["webpack://./src/components/CallView/shared/ReactionToaster.vue"],names:[],mappings:"AACA,0BACC,iBAAA,CACA,WAAA,CACA,MAAA,CACA,YAAA,CACA,qBAAA,CACA,QAAA,CACA,UAAA,CACA,SAAA,CAGD,wBACC,iBAAA,CACA,QAAA,CACA,gCAAA,CACA,YAAA,CACA,kBAAA,CACA,OAAA,CACA,gEAAA,CAEA,kCACC,cAAA,CACA,gBAAA,CAEA,2CACC,kCACC,cAAA,CAED,sCACC,UAAA,CACA,WAAA,CAAA,CAKH,8BACC,gBAAA,CACA,iBAAA,CACA,gBAAA,CACA,kBAAA,CACA,UAAA,CACA,wCAAA,CACA,8CAAA,CAIF,mCACC,GACC,uBAAA,CACA,SAAA,CAED,IACC,+DAAA,CACA,SAAA,CAED,KACC,6DAAA,CACA,SAAA,CAAA",sourcesContent:[`
.toaster {
	position: absolute;
	bottom: 20px;
	left: 0;
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	z-index: 1;
}

.toast {
	position: absolute;
	bottom: 0;
	left: var(--horizontal-offset, 0);
	display: flex;
	align-items: center;
	gap: 8px;
	animation: toast-floating var(--animation-length) linear;

	&__reaction {
		font-size: 250%;
		line-height: 100%;

		@media only screen and (max-width: 1920px) {
			& {
				font-size: 150%;
			}
			&-img {
				width: 30px;
				height: 30px;
			}
		}
	}

	&__name {
		padding: 8px 12px;
		border-radius: 6px;
		line-height: 100%;
		white-space: nowrap;
		color: #ffffff;
		background-color: var(--background-color);
		box-shadow: 1px 1px 4px var(--color-box-shadow);
	}
}

@keyframes toast-floating {
	0% {
		transform: translateY(0);
		opacity: 1;
	}
	50% {
		transform: translateY(calc(-0.5 * var(--vertical-offset) * 1vh));
		opacity: 1;
	}
	100% {
		transform: translateY(calc(-1 * var(--vertical-offset) * 1vh));
		opacity: 0;
	}
}
`],sourceRoot:""}]);const r=i}),49349:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"MonitorIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),49479:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon view-gallery-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M21 3H2V16H21V3M2 17H6V21H2V17M7 17H11V21H7V17M12 17H16V21H12V17M17 17H21V21H17V17Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),49769:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"ChevronLeftIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),49799:((c,_,s)=>{"use strict";s.d(_,{A:()=>P});var o=s(63274),a=s(68051),l=s(62235),e=s(88307),i=s(79668),r=s(85168),d=s(53334),u=s(57505),m=s(24764),h=s(74095),v=s(59856),E=s(72925),p=s(55031),A=s(8888);const P={name:"BreakoutRoomItem",components:{NcActionButton:u.A,NcActions:m.A,NcButton:h.A,SendMessageDialog:v.A,DotsCircle:o.A,HandBackLeft:a.A,MenuDown:l.A,MenuRight:e.A,Send:i.A},props:{name:{type:String,default:void 0},breakoutRoom:{type:Object,default:void 0},mainConversation:{type:Object,default:void 0}},setup(){return{breakoutRoomsStore:(0,A.w)()}},data(){return{showParticipants:!0,isDialogOpened:!1,elementHoveredOrFocused:!1}},computed:{participantType(){return this.breakoutRoom?.participantType},roomName(){return this.isParticipantsEditor?this.name:this.breakoutRoom?.displayName},dialogTitle(){return(0,d.t)("spreed",'Send a message to "{roomName}"',{roomName:this.roomName})},roomToken(){return this.breakoutRoom?.token},showJoinButton(){return this.roomToken!==this.$store.getters.getToken()},canFullModerate(){return!this.isParticipantsEditor&&(this.participantType===E._z.TYPE.OWNER||this.participantType===E._z.TYPE.MODERATOR)},canModerate(){return this.isParticipantsEditor?!1:this.canFullModerate||this.participantType===E._z.TYPE.GUEST_MODERATOR},showAssistanceButton(){return this.isParticipantsEditor?!1:this.canModerate&&this.breakoutRoom?.breakoutRoomStatus===E.si.BREAKOUT_ROOM_STATUS.STATUS_ASSISTANCE_REQUESTED},toggleParticipantsListLabel(){return this.showParticipants?(0,d.t)("spreed","Hide list of participants"):(0,d.t)("spreed","Show list of participants")},isParticipantsEditor(){return this.name!==void 0}},watch:{showAssistanceButton(C){C&&(0,r.I9)((0,d.t)("spreed","Assistance requested in {roomName}",{roomName:this.roomName}))}},methods:{t:d.t,dismissRequestAssistance(){this.breakoutRoomsStore.dismissRequestAssistance(this.roomToken)},async joinRoom(){if(this.canModerate)p.l.emit("switch-to-conversation",{token:this.roomToken});else try{this.mainConversation.breakoutRoomMode===E.si.BREAKOUT_ROOM_MODE.FREE&&await this.breakoutRoomsStore.switchToBreakoutRoom({token:this.breakoutRoomsStore.getParentRoomToken(this.roomToken),target:this.roomToken}),p.l.emit("switch-to-conversation",{token:this.roomToken})}catch(C){console.debug(C)}},toggleParticipantsVisibility(){this.showParticipants=!this.showParticipants},async sentMessageToRoom({token:C,temporaryMessage:O,options:R}){try{await this.$store.dispatch("postNewMessage",{token:C,temporaryMessage:O,options:R}),(0,r.Te)((0,d.t)("spreed",'The message was sent to "{roomName}"',{roomName:this.roomName})),this.isDialogOpened=!1}catch(T){console.error(T)}}}}}),49840:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"screenContainer",attrs:{id:e.screenContainerId}},[i("video",{directives:[{name:"show",rawName:"v-show",value:e.localMediaModel&&e.localMediaModel.attributes.localScreen||e.callParticipantModel&&e.callParticipantModel.attributes.screen,expression:"(localMediaModel && localMediaModel.attributes.localScreen) || (callParticipantModel && callParticipantModel.attributes.screen)"}],ref:"screen",staticClass:"screen",class:e.screenClass,attrs:{disablePictureInPicture:e.isBig?"false":"true"}}),e._v(" "),e.isBig?i("VideoBottomBar",{attrs:{token:e.token,"shared-data":e.sharedData,"is-big":"","is-screen":"",model:e.model,"participant-name":e.remoteParticipantName}}):e._e()],1)},a=[]}),49976:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon monitor-share-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M23 4V16C23 17.11 22.11 18 21 18H15V16H21V4H3V16H9V18H3C1.9 18 1 17.11 1 16V4C1 2.89 1.89 2 3 2H21C22.1 2 23 2.89 23 4M13 13H16L12 9L8 13H11V20H8V22H16V20H13V13Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),50211:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon menu-right-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M10,17L15,12L10,7V17Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),51542:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(20221);const a=o.A}),51822:((c,_,s)=>{"use strict";s.d(_,{_:()=>u});var o=s(85471),a=s(61338),l=s(49583),e=s(43417),i=s(20109),r=s(72925),d=s(55031);function u(m=(0,o.KR)(!0),h=!0){const v=(0,i.P)(),E=(0,o.EW)(()=>v.getters.getToken()),p=(0,o.EW)(()=>v.getters.conversation(E.value)),A=(0,e.J)(),P=(0,l.f)(),C=(0,o.EW)(()=>p.value?.type===r.si.TYPE.ONE_TO_ONE||p.value?.type===r.si.TYPE.ONE_TO_ONE_FORMER);let O=!1,R=!0,T=null,S=null;function D(){d.l.on("joined-conversation",L),d.l.on("signaling-participant-list-changed",g),(0,a.B1)("guest-promoted",L)}function x(){d.l.off("joined-conversation",L),d.l.off("signaling-participant-list-changed",g),(0,a.al)("guest-promoted",L)}const L=()=>{C.value?b():(0,o.dY)(()=>g())},g=()=>{if(!m.value&&!A.value){R=!0;return}P.value&&(A.value||!p.value?.hasCall)?I():z(),R=!1},b=async()=>{const N=v.getters.isInLobby,K=v.getters.isModeratorOrUser;O||E.value===""||N||!K||(O=!0,clearTimeout(T),T=null,clearTimeout(S),S=null,await v.dispatch("fetchParticipants",{token:E.value}),O=!1)},I=()=>{T||(T=setTimeout(b,3e3))},z=()=>{S||(S=setTimeout(b,15e3))};return(0,o.sV)(()=>{h&&D()}),(0,o.wB)(m,N=>{N&&R&&g()}),(0,o.xo)(()=>{h&&x()}),{cancelableGetParticipants:b}}}),51942:((c,_,s)=>{"use strict";s.d(_,{A:()=>L});var o=s(70580),a=s.n(o),l=s(1077),e=s(80892),i=s(80084),r=s(75835),d=s(92289),u=s(92787),m=s(85168),h=s(61338),v=s(53334),E=s(57505),p=s(24764),A=s(74095),P=s(54562),C=s(3556),O=s(10477),R=s(43417),T=s(72925),S=s(31446),D=s(92608),x=s(26205);const L={name:"TopBarMediaControls",components:{LocalAudioControlButton:C.A,LocalVideoControlButton:O.A,NcActionButton:E.A,NcActions:p.A,NcButton:A.A,NcPopover:P.A,IconBlur:l.A,IconBlurOff:e.A,IconMonitor:i.A,IconMonitorOff:r.A,IconMonitorShare:d.A,IconNetworkStrength2Alert:u.A},props:{token:{type:String,required:!0},model:{type:Object,required:!0},localCallParticipantModel:{type:Object,required:!0},isSidebar:{type:Boolean,default:!1}},setup(){return{isInCall:(0,R.J)(),callAnalyzer:D.DW}},data(){return{screenSharingMenuOpen:!1,boundaryElement:document.querySelector(".main-view"),mouseover:!1,qualityWarningInGracePeriodTimeout:null,isQualityWarningTooltipDismissed:!1}},computed:{isVirtualBackgroundAvailable(){return this.model.attributes.virtualBackgroundAvailable},isVirtualBackgroundEnabled(){return this.model.attributes.virtualBackgroundEnabled},toggleVirtualBackgroundButtonLabel(){return this.isVirtualBackgroundEnabled?(0,v.t)("spreed","Disable background blur"):(0,v.t)("spreed","Blur background")},conversation(){return this.$store.getters.conversation(this.token)||this.$store.getters.dummyConversation},isScreensharingAllowed(){return this.conversation.permissions&T._z.PERMISSIONS.PUBLISH_SCREEN},blurButtonClass(){return{"blur-disabled":this.isVirtualBackgroundEnabled}},screenSharingButtonClass(){return{"screensharing-enabled":this.isScreensharingAllowed&&this.isScreensharing,"no-screensharing-available":!this.isScreensharingAllowed}},isScreensharing(){return this.model.attributes.localScreen},screenSharingButtonTitle(){return this.isScreensharingAllowed?this.screenSharingMenuOpen?null:this.isScreensharingAllowed?this.isScreensharing?(0,v.t)("spreed","Screensharing options"):(0,v.t)("spreed","Enable screensharing"):(0,v.t)("spreed","No screensharing"):(0,v.t)("spreed","You are not allowed to enable screensharing")},screenSharingButtonAriaLabel(){return this.screenSharingMenuOpen||this.isScreensharing?(0,v.t)("spreed","Screensharing options"):(0,v.t)("spreed","Enable screensharing")},showQualityWarningTooltip(){return this.qualityWarningTooltip&&(!this.isQualityWarningTooltipDismissed||this.mouseover)},showQualityWarning(){return this.senderConnectionQualityIsBad||this.qualityWarningInGracePeriodTimeout},senderConnectionQualityIsBad(){return this.senderConnectionQualityAudioIsBad||this.senderConnectionQualityVideoIsBad||this.senderConnectionQualityScreenIsBad},senderConnectionQualityAudioIsBad(){return D.DW&&(D.DW.attributes.senderConnectionQualityAudio===S.$C.VERY_BAD||D.DW.attributes.senderConnectionQualityAudio===S.$C.NO_TRANSMITTED_DATA)},senderConnectionQualityVideoIsBad(){return D.DW&&(D.DW.attributes.senderConnectionQualityVideo===S.$C.VERY_BAD||D.DW.attributes.senderConnectionQualityVideo===S.$C.NO_TRANSMITTED_DATA)},senderConnectionQualityScreenIsBad(){return D.DW&&(D.DW.attributes.senderConnectionQualityScreen===S.$C.VERY_BAD||D.DW.attributes.senderConnectionQualityScreen===S.$C.NO_TRANSMITTED_DATA)},qualityWarningAriaLabel(){let g="";return!this.model.attributes.audioEnabled&&this.model.attributes.videoEnabled&&this.model.attributes.localScreen?g=(0,v.t)("spreed","Bad sent video and screen quality."):!this.model.attributes.audioEnabled&&this.model.attributes.localScreen?g=(0,v.t)("spreed","Bad sent screen quality."):!this.model.attributes.audioEnabled&&this.model.attributes.videoEnabled?g=(0,v.t)("spreed","Bad sent video quality."):this.model.attributes.videoEnabled&&this.model.attributes.localScreen?g=(0,v.t)("spreed","Bad sent audio, video and screen quality."):this.model.attributes.localScreen?g=(0,v.t)("spreed","Bad sent audio and screen quality."):this.model.attributes.videoEnabled?g=(0,v.t)("spreed","Bad sent audio and video quality."):g=(0,v.t)("spreed","Bad sent audio quality."),g},qualityWarningTooltip(){if(!this.showQualityWarning)return null;const g=this.isVirtualBackgroundAvailable&&this.model.attributes.virtualBackgroundEnabled;return!this.model.attributes.audioEnabled&&this.model.attributes.videoEnabled&&g&&this.model.attributes.localScreen?{content:(0,v.t)("spreed","Your internet connection or computer are busy and other participants might be unable to see your screen. To improve the situation try to disable the background blur or your video while doing a screen share."),actionLabel:(0,v.t)("spreed","Disable background blur"),action:"disableVirtualBackground"}:!this.model.attributes.audioEnabled&&this.model.attributes.videoEnabled&&this.model.attributes.localScreen?{content:(0,v.t)("spreed","Your internet connection or computer are busy and other participants might be unable to see your screen. To improve the situation try to disable your video while doing a screenshare."),actionLabel:(0,v.t)("spreed","Disable video"),action:"disableVideo"}:!this.model.attributes.audioEnabled&&this.model.attributes.localScreen?{content:(0,v.t)("spreed","Your internet connection or computer are busy and other participants might be unable to see your screen."),actionLabel:"",action:""}:!this.model.attributes.audioEnabled&&this.model.attributes.videoEnabled?{content:(0,v.t)("spreed","Your internet connection or computer are busy and other participants might be unable to see you."),actionLabel:"",action:""}:this.model.attributes.videoEnabled&&g&&this.model.attributes.localScreen?{content:(0,v.t)("spreed","Your internet connection or computer are busy and other participants might be unable to understand and see you. To improve the situation try to disable the background blur or your video while doing a screenshare."),actionLabel:(0,v.t)("spreed","Disable background blur"),action:"disableVirtualBackground"}:this.model.attributes.videoEnabled&&this.model.attributes.localScreen?{content:(0,v.t)("spreed","Your internet connection or computer are busy and other participants might be unable to understand and see you. To improve the situation try to disable your video while doing a screenshare."),actionLabel:(0,v.t)("spreed","Disable video"),action:"disableVideo"}:this.model.attributes.localScreen?{content:(0,v.t)("spreed","Your internet connection or computer are busy and other participants might be unable to understand you and see your screen. To improve the situation try to disable your screenshare."),actionLabel:(0,v.t)("spreed","Disable screenshare"),action:"disableScreenShare"}:this.model.attributes.videoEnabled&&g?{content:(0,v.t)("spreed","Your internet connection or computer are busy and other participants might be unable to understand and see you. To improve the situation try to disable the background blur or your video."),actionLabel:(0,v.t)("spreed","Disable background blur"),action:"disableVirtualBackground"}:this.model.attributes.videoEnabled?{content:(0,v.t)("spreed","Your internet connection or computer are busy and other participants might be unable to understand and see you. To improve the situation try to disable your video."),actionLabel:(0,v.t)("spreed","Disable video"),action:"disableVideo"}:{content:(0,v.t)("spreed","Your internet connection or computer are busy and other participants might be unable to understand you."),actionLabel:"",action:""}}},watch:{senderConnectionQualityIsBad(g){g&&(this.qualityWarningInGracePeriodTimeout&&window.clearTimeout(this.qualityWarningInGracePeriodTimeout),this.qualityWarningInGracePeriodTimeout=window.setTimeout(()=>{this.qualityWarningInGracePeriodTimeout=null},1e4))}},mounted(){this.speakingWhileMutedWarner=new x.A(this.model)},beforeDestroy(){this.speakingWhileMutedWarner.destroy()},methods:{t:v.t,toggleVirtualBackground(){this.model.attributes.virtualBackgroundEnabled?this.model.disableVirtualBackground():this.model.enableVirtualBackground()},toggleScreenSharingMenu(){if(this.isScreensharingAllowed){if(!this.model.getWebRtc().capabilities.supportScreenSharing){window.location.protocol==="https:"?(0,m.rG)((0,v.t)("spreed","Screen sharing is not supported by your browser.")):(0,m.rG)((0,v.t)("spreed","Screen sharing requires the page to be loaded through HTTPS."));return}this.isScreensharing||this.startShareScreen()}},showScreen(){this.isScreensharing&&(0,h.Ic)("switch-screen-to-id",this.localCallParticipantModel.attributes.peerId)},stopScreen(){this.model.stopSharingScreen()},startShareScreen(g){this.model.shareScreen(g,function(b){if(!b)return;let I=null;switch(b.name){case"HTTPS_REQUIRED":(0,m.rG)((0,v.t)("spreed","Screensharing requires the page to be loaded through HTTPS."));break;case"PERMISSION_DENIED":case"NotAllowedError":case"CEF_GETSCREENMEDIA_CANCELED":break;case"FF52_REQUIRED":(0,m.rG)((0,v.t)("spreed","Sharing your screen only works with Firefox version 52 or newer."));break;case"EXTENSION_UNAVAILABLE":if(window.chrome&&(I="https://chrome.google.com/webstore/detail/screensharing-for-nextclo/kepnpjhambipllfmgmbapncekcmabkol"),I){const z=(0,v.t)("spreed","Screensharing extension is required to share your screen."),N='<a href="'+I+'" target="_blank">'+a()(z)+"</a>";(0,m.rG)(N,{isHTML:!0})}else(0,m.rG)((0,v.t)("spreed","Please use a different browser like Firefox or Chrome to share your screen."));break;default:(0,m.rG)((0,v.t)("spreed","An error occurred while starting screensharing."));break}})},executeQualityWarningTooltipAction(){this.qualityWarningTooltip.action!==""&&(this.qualityWarningTooltip.action==="disableScreenShare"?(this.model.stopSharingScreen(),this.dismissQualityWarningTooltip()):this.qualityWarningTooltip.action==="disableVirtualBackground"?(this.model.disableVirtualBackground(),this.dismissQualityWarningTooltip()):this.qualityWarningTooltip.action==="disableVideo"&&(this.model.disableVideo(),this.dismissQualityWarningTooltip()))},dismissQualityWarningTooltip(){this.isQualityWarningTooltipDismissed=!0}}}}),53510:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"HandBackLeftIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),53514:((c,_,s)=>{"use strict";s.d(_,{A:()=>b});var o=s(3227),a=s(6934),l=s(61338),e=s(53334),i=s(51651),r=s(74095),d=s(54562),u=s(53429),m=s(80701),h=s(64416),v=s(90480),E=s(83823),p=s(96689),A=s(45775),P=s(37038),C=s(43645),O=s(97626),R=s(51822),T=s(72925),S=s(97876),D=s(25198),x=s(97643),L=s(54161),g=s(92608);const b={name:"TopBar",components:{BreakoutRoomsEditor:C.A,CallButton:h.A,CallTime:v.A,ConversationIcon:O.A,TopBarMediaControls:A.A,NcButton:r.A,NcPopover:d.A,TopBarMenu:P.A,TasksCounter:p.A,ReactionMenu:E.A,IconAccountMultiple:o.A,IconCalendarBlank:a.A},mixins:[m.Ay],props:{isInCall:{type:Boolean,required:!0},isSidebar:{type:Boolean,default:!1}},setup(){return(0,R._)(),{AVATAR:T.of,localCallParticipantModel:g.cA,localMediaModel:g.PR,chatExtrasStore:(0,D.k)(),sidebarStore:(0,x.P)(),isMobile:(0,u.al)(),CONVERSATION:T.si}},data:()=>({showBreakoutRoomsEditor:!1,boundaryElement:document.querySelector(".main-view")}),computed:{isOneToOneConversation(){return this.conversation.type===T.si.TYPE.ONE_TO_ONE||this.conversation.type===T.si.TYPE.ONE_TO_ONE_FORMER},isModeratorOrUser(){return this.$store.getters.isModeratorOrUser},token(){return this.$store.getters.getToken()},conversation(){return this.$store.getters.conversation(this.token)||this.$store.getters.dummyConversation},showUserStatusAsDescription(){return this.isOneToOneConversation&&this.statusMessage},statusMessage(){return(0,L.yW)(this.conversation)},renderedDescription(){return this.renderContent(this.conversation.description)},actorId(){return this.$store.getters.getActorId()},isPeerInactive(){if(!this.isOneToOneConversation)return;let I;const z=this.$store.getters.participantsList(this.token);for(const N of z)N.actorId!==this.actorId&&(I=N);return I?!I.sessionIds.length:!1},participantsInCall(){return this.$store.getters.participantsInCall(this.token)||""},participantsInCallAriaLabel(){return(0,e.n)("spreed","%n participant in call","%n participants in call",this.$store.getters.participantsInCall(this.token))},supportedReactions(){return(0,S.JR)(this.token,"call","supported-reactions")},hasReactionSupport(){return this.isInCall&&this.supportedReactions?.length>0},nextEvent(){return this.chatExtrasStore.getNextEvent(this.token)},eventInfo(){return this.nextEvent?this.nextEvent.start<=(0,i.A)().unix()?(0,e.t)("spreed","Now"):(0,i.A)(this.nextEvent.start*1e3).calendar():null},showUpcomingEvent(){return this.nextEvent&&!this.isInCall&&!this.isSidebar&&!this.isMobile&&this.conversation.type!==T.si.TYPE.NOTE_TO_SELF},getUserId(){return this.$store.getters.getUserId()}},watch:{token:{immediate:!0,handler(I){!I||this.isSidebar||!this.getUserId||this.chatExtrasStore.getUpcomingEvents(I)}}},mounted(){document.body.classList.add("has-topbar")},beforeDestroy(){document.body.classList.remove("has-topbar")},methods:{t:e.t,n:e.n,openSidebar(I){this.sidebarStore.showSidebar({activeTab:I})},openConversationSettings(){(0,l.Ic)("show-conversation-settings",{token:this.token})}}}}),54197:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(62799);const a=o.A}),54257:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(10182),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),54716:((c,_,s)=>{"use strict";s.d(_,{A:()=>M});var o=s(35527),a=s(63274),l=s(85630),e=s(15370),i=s(99788),r=s(83461),d=s(11653),u=s(68051),m=s(70361),h=s(66605),v=s(39018),E=s(45987),p=s(37293),A=s(82249),P=s(85168),C=s(61338),O=s(53334),R=s(63814),T=s(57505),S=s(39999),D=s(24764),x=s(15502),L=s(74095),g=s(88289),b=s(91911),I=s(90495),z=s(70858),N=s(43417),K=s(72925),H=s(97876),y=s(8888),j=s(50634),V=s(48729),k=s(92608);const X=3e3,f=OCP.Accessibility.disableKeyboardShortcuts(),M={name:"TopBarMenu",components:{TransitionExpand:I.A,NcActionButton:T.A,NcActionLink:S.A,NcActionSeparator:x.A,NcActions:D.A,NcButton:L.A,NcLoadingIcon:g.A,IconCog:o.A,IconDotsCircle:a.A,IconDotsHorizontal:l.A,IconDownload:e.A,IconFile:i.A,IconFullscreen:r.A,IconFullscreenExit:d.A,IconHandBackLeft:u.A,IconMicrophoneOff:m.A,IconRecordCircle:h.A,IconStop:v.A,IconVideo:E.A,IconViewGallery:p.A,IconViewGrid:A.A},props:{token:{type:String,required:!0},model:{type:Object,required:!0},showActions:{type:Boolean,default:!0},isSidebar:{type:Boolean,default:!1}},emits:["open-breakout-rooms-editor"],setup(){return{isInCall:(0,N.J)(),isFullscreen:(0,z.eg)(),breakoutRoomsStore:(0,y.w)(),callViewStore:(0,j.e)()}},data(){return{boundaryElement:document.querySelector(".main-view"),lowerHandTimeout:null,speakingTimestamp:null,lowerHandDelay:X}},computed:{conversation(){return this.$store.getters.conversation(this.token)||this.$store.getters.dummyConversation},labelFullscreen(){return this.isFullscreen?(0,O.t)("spreed","Exit full screen (F)"):(0,O.t)("spreed","Full screen (F)")},isFileConversation(){return this.conversation.objectType===K.si.OBJECT_TYPE.FILE&&this.conversation.objectId},linkToFile(){return this.isFileConversation?(0,V.yI)("/f/{objectId}",{objectId:this.conversation.objectId}):""},isOneToOneConversation(){return this.conversation.type===K.si.TYPE.ONE_TO_ONE||this.conversation.type===K.si.TYPE.ONE_TO_ONE_FORMER},changeViewText(){return this.isGrid?(0,O.t)("spreed","Speaker view"):(0,O.t)("spreed","Grid view")},isGrid(){return this.callViewStore.isGrid},isVirtualBackgroundAvailable(){return this.model.attributes.virtualBackgroundAvailable},isVirtualBackgroundEnabled(){return this.model.attributes.virtualBackgroundEnabled},isHandRaised(){return this.model.attributes.raisedHand?.state===!0},raiseHandButtonLabel(){return this.isHandRaised?f?(0,O.t)("spreed","Lower hand"):(0,O.t)("spreed","Lower hand (R)"):f?(0,O.t)("spreed","Raise hand"):(0,O.t)("spreed","Raise hand (R)")},participantType(){return this.conversation.participantType},canFullModerate(){return this.participantType===K._z.TYPE.OWNER||this.participantType===K._z.TYPE.MODERATOR},canModerate(){return this.canFullModerate||this.participantType===K._z.TYPE.GUEST_MODERATOR},canModerateRecording(){return this.canFullModerate&&((0,H.JR)(this.token,"call","recording")||!1)},canConfigureBreakoutRooms(){return this.conversation.type!==K.si.TYPE.GROUP||!this.canFullModerate?!1:!!(0,H.JR)(this.token,"call","breakout-rooms")},isStartingRecording(){return this.conversation.callRecording===K.XV.RECORDING.VIDEO_STARTING||this.conversation.callRecording===K.XV.RECORDING.AUDIO_STARTING},isRecording(){return this.conversation.callRecording===K.XV.RECORDING.VIDEO||this.conversation.callRecording===K.XV.RECORDING.AUDIO},userIsInBreakoutRoomAndInCall(){return this.conversation.objectType===K.si.OBJECT_TYPE.BREAKOUT_ROOM&&this.isInCall},showCallLayoutSwitch(){return!this.callViewStore.isEmptyCallView},canDownloadCallParticipants(){return(0,H.t0)(this.token,"download-call-participants")&&this.canModerate},downloadCallParticipantsLink(){return(0,R.KT)("apps/spreed/api/v4/call/{token}/download",{token:this.token})}},watch:{"model.attributes.speaking"(B){if(this.lowerHandTimeout!==null&&!B){this.lowerHandDelay=Math.max(0,this.lowerHandDelay-(Date.now()-this.speakingTimestamp)),clearTimeout(this.lowerHandTimeout),this.lowerHandTimeout=null;return}!B||this.lowerHandTimeout!==null||!this.isHandRaised||(this.speakingTimestamp=Date.now(),this.lowerHandTimeout=setTimeout(()=>{this.lowerHandTimeout=null,this.speakingTimestamp=null,this.lowerHandDelay=X,this.isHandRaised&&this.toggleHandRaised()},this.lowerHandDelay))}},created(){(0,b.C)("r",this.toggleHandRaised),(0,b.C)("f",this.toggleFullscreen)},methods:{t:O.t,forceMuteOthers(){k.mx.callParticipantModels.value.forEach(B=>{B.forceMute()})},toggleFullscreen(){if(!this.isSidebar){if(Array.from(document.body.childNodes).filter(B=>B.nodeName==="DIV"&&B.classList.contains("modal-mask")&&window.getComputedStyle(B).display!=="none").length!==0){(0,P.I9)((0,O.t)("spreed","You need to close a dialog to toggle full screen"));return}this.isFullscreen?(0,z.sM)():((0,C.Ic)("toggle-navigation",{open:!1}),(0,z.Jf)())}},changeView(){this.callViewStore.setCallViewMode({token:this.token,isGrid:!this.isGrid,clearLast:!1}),this.callViewStore.setSelectedVideoPeerId(null)},showMediaSettingsDialog(){(0,C.Ic)("talk:media-settings:show")},toggleHandRaised(){if(!this.isInCall)return;const B=!this.isHandRaised;if(this.model.toggleHandRaised(B),this.$store.dispatch("setParticipantHandRaised",{sessionId:this.$store.getters.getSessionId(),raisedHand:this.model.attributes.raisedHand}),this.userIsInBreakoutRoomAndInCall&&!this.canModerate){if(Object.keys(this.$store.getters.participantRaisedHandList).filter(F=>F!==this.$store.getters.getSessionId()).length!==0)return;const U=this.conversation.breakoutRoomStatus===K.si.BREAKOUT_ROOM_STATUS.STATUS_ASSISTANCE_REQUESTED;B&&!U?this.breakoutRoomsStore.requestAssistance(this.token):!B&&U&&this.breakoutRoomsStore.dismissRequestAssistance(this.token)}},openConversationSettings(){(0,C.Ic)("show-conversation-settings",{token:this.token})},startRecording(){this.$store.dispatch("startCallRecording",{token:this.token,callRecording:K.XV.RECORDING.VIDEO})},stopRecording(){this.$store.dispatch("stopCallRecording",{token:this.token})}}}}),54807:((c,_,s)=>{"use strict";var o=s(25230)}),55443:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".wrapper[data-v-04549770]{display:flex;align-items:center;position:absolute;bottom:0;width:100%;padding:0 calc(var(--default-grid-baseline)*2) var(--default-grid-baseline);z-index:1}.wrapper--big[data-v-04549770]{justify-content:center;margin:0 var(--default-clickable-area);width:calc(100% - var(--default-clickable-area)*2)}.wrapper--big .bottom-bar[data-v-04549770]{width:unset;padding:var(--default-grid-baseline)}.wrapper--big .bottom-bar[data-v-04549770]:hover{background-color:rgba(0,0,0,.2);border-radius:var(--border-radius-large)}.wrapper--big .participant-name[data-v-04549770]{margin-right:0}.bottom-bar[data-v-04549770]{display:flex;align-items:center;gap:var(--default-grid-baseline);width:100%}.bottom-bar .media-indicators[data-v-04549770]{display:flex}.bottom-bar .following-button[data-v-04549770]{opacity:.8;background-color:var(--color-background-dark)}.bottom-bar .following-button[data-v-04549770]:hover,.bottom-bar .following-button[data-v-04549770]:focus{opacity:1}.participant-name[data-v-04549770]{color:#fff;margin:0 auto 0 8px;position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;filter:drop-shadow(1px 1px 4px var(--color-box-shadow))}.participant-name--active[data-v-04549770]{font-weight:bold}.participant-name--has-shadow[data-v-04549770]{text-shadow:0 0 4px rgba(0,0,0,.8)}.status-indicator[data-v-04549770]{width:var(--default-clickable-area);height:var(--default-clickable-area);display:flex;align-items:center;justify-content:center}.iceFailedIndicator[data-v-04549770]{opacity:.8 !important}.audioIndicator[disabled][data-v-04549770],.videoIndicator[data-v-04549770]{opacity:.7}.videoIndicator[data-v-04549770]:hover,.videoIndicator[data-v-04549770]:focus{opacity:1}","",{version:3,sources:["webpack://./src/components/CallView/shared/VideoBottomBar.vue"],names:[],mappings:"AACA,0BACC,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,QAAA,CACA,UAAA,CACA,2EAAA,CACA,SAAA,CAEA,+BACC,sBAAA,CACA,sCAAA,CACA,kDAAA,CACA,2CACC,WAAA,CACA,oCAAA,CAEA,iDACC,+BAAA,CACA,wCAAA,CAIF,iDACC,cAAA,CAKH,6BACC,YAAA,CACA,kBAAA,CACA,gCAAA,CACA,UAAA,CAEA,+CACC,YAAA,CAGD,+CACC,UAAA,CACA,6CAAA,CAEA,0GAEC,SAAA,CAKH,mCACC,UAAA,CACA,mBAAA,CACA,iBAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA,CACA,uDAAA,CACA,2CACC,gBAAA,CAED,+CACC,kCAAA,CAIF,mCACC,mCAAA,CACA,oCAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CAGD,qCACC,qBAAA,CAGD,4EAEC,UAAA,CAIA,8EAEC,SAAA",sourcesContent:[`
.wrapper {
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 0 calc(var(--default-grid-baseline) * 2) var(--default-grid-baseline);
	z-index: 1;

	&--big {
		justify-content: center;
		margin: 0 var(--default-clickable-area); // grid collapse button
		width: calc(100% - var(--default-clickable-area) * 2);
		& .bottom-bar {
			width: unset;
			padding: var(--default-grid-baseline);

			&:hover {
				background-color: rgba(0, 0, 0, 0.2);
				border-radius: var(--border-radius-large);
			}
		}

		& .participant-name {
			margin-right: 0;
		}
	}
}

.bottom-bar {
	display: flex;
	align-items: center;
	gap: var(--default-grid-baseline);
	width: 100%;

	& .media-indicators {
		display: flex;
	}

	& .following-button {
		opacity: 0.8;
		background-color: var(--color-background-dark);

		&:hover,
		&:focus {
			opacity: 1;
		}
	}
}

.participant-name {
	color: white;
	margin: 0 auto 0 8px;
	position: relative;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	filter: drop-shadow(1px 1px 4px var(--color-box-shadow));
	&--active {
		font-weight: bold;
	}
	&--has-shadow {
		text-shadow: 0 0 4px rgba(0, 0, 0, .8);
	}
}

.status-indicator {
	width: var(--default-clickable-area);
	height: var(--default-clickable-area);
	display: flex;
	align-items: center;
	justify-content: center;
}

.iceFailedIndicator {
	opacity: .8 !important;
}

.audioIndicator[disabled],
.videoIndicator {
	opacity: .7;
}

.videoIndicator {
	&:hover,
	&:focus {
		opacity: 1;
	}
}

`],sourceRoot:""}]);const r=i}),56081:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(46446);const a=o.A}),56422:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(55443),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),56754:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".viewer-overlay-ghost[data-v-c1af34de]{position:absolute;bottom:8px;right:8px;left:0}.viewer-overlay[data-v-c1af34de]{--aspect-ratio: calc(3 / 4);--width: 20vw;--min-width: 250px;--max-width: 400px;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);min-height:calc(var(--default-clickable-area) + 8px);z-index:11000}.viewer-overlay *[data-v-c1af34de]{box-sizing:border-box}.viewer-overlay__collapse[data-v-c1af34de]{position:absolute;top:8px;right:8px;z-index:100}.viewer-overlay__button[data-v-c1af34de]{opacity:.8}.viewer-overlay__button[data-v-c1af34de]:active,.viewer-overlay__button[data-v-c1af34de]:hover,.viewer-overlay__button[data-v-c1af34de]:focus{opacity:.9}.video-overlay__top-bar[data-v-c1af34de]{position:absolute;top:8px;left:8px;z-index:100}.viewer-overlay__bottom-bar[data-v-c1af34de]{display:flex;align-items:center;justify-content:center;gap:8px;position:absolute;bottom:0;width:100%;padding:0 12px 8px 12px;z-index:1}.viewer-overlay__video-container[data-v-c1af34de]{width:100%;height:calc(var(--width)*var(--aspect-ratio));min-height:calc(var(--min-width)*var(--aspect-ratio));max-height:calc(var(--max-width)*var(--aspect-ratio));bottom:0;right:0}.viewer-overlay__local-video[data-v-c1af34de]{position:absolute;bottom:8px;right:8px;width:25%;height:25%;overflow:hidden}.viewer-overlay__video[data-v-c1af34de]{position:relative;height:100%}[data-v-c1af34de] .screen{border-radius:calc(var(--default-clickable-area)/4)}","",{version:3,sources:["webpack://./src/components/CallView/shared/ViewerOverlayCallView.vue"],names:[],mappings:"AACA,uCACC,iBAAA,CACA,UAAA,CACA,SAAA,CACA,MAAA,CAGD,iCACC,2BAAA,CACA,aAAA,CACA,kBAAA,CACA,kBAAA,CACA,iBAAA,CACA,kBAAA,CACA,0BAAA,CACA,0BAAA,CACA,oDAAA,CACA,aAAA,CAGD,mCACC,qBAAA,CAGD,2CACC,iBAAA,CACA,OAAA,CACA,SAAA,CACA,WAAA,CAGD,yCACC,UAAA,CACA,8IAGC,UAAA,CAIF,yCACC,iBAAA,CACA,OAAA,CACA,QAAA,CACA,WAAA,CAGD,6CACC,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,OAAA,CACA,iBAAA,CACA,QAAA,CACA,UAAA,CACA,uBAAA,CACA,SAAA,CAGD,kDACC,UAAA,CACA,6CAAA,CACA,qDAAA,CACA,qDAAA,CAEA,QAAA,CACA,OAAA,CAGD,8CACC,iBAAA,CACA,UAAA,CACA,SAAA,CACA,SAAA,CACA,UAAA,CACA,eAAA,CAGD,wCACC,iBAAA,CACA,WAAA,CAGD,0BACC,mDAAA",sourcesContent:[`
.viewer-overlay-ghost {
	position: absolute;
	bottom: 8px;
	right: 8px;
	left: 0;
}

.viewer-overlay {
	--aspect-ratio: calc(3 / 4);
	--width: 20vw;
	--min-width: 250px;
	--max-width: 400px;
	position: absolute;
	width: var(--width);
	min-width: var(--min-width);
	max-width: var(--max-width);
	min-height: calc(var(--default-clickable-area) + 8px);
	z-index: 11000;
}

.viewer-overlay * {
	box-sizing: border-box;
}

.viewer-overlay__collapse {
	position: absolute;
	top: 8px;
	right: 8px;
	z-index: 100;
}

.viewer-overlay__button {
	opacity: 0.8;
	&:active,
	&:hover,
	&:focus {
		opacity: 0.9;
	}
}

.video-overlay__top-bar {
	position: absolute;
	top: 8px;
	left: 8px;
	z-index: 100;
}

.viewer-overlay__bottom-bar {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 0 12px 8px 12px;
	z-index: 1;
}

.viewer-overlay__video-container {
	width: 100%;
	height: calc(var(--width) * var(--aspect-ratio));
	min-height: calc(var(--min-width) * var(--aspect-ratio));
	max-height: calc(var(--max-width) * var(--aspect-ratio));
	/* Note: because of transition it always has position absolute on animation */
	bottom: 0;
	right: 0;
}

.viewer-overlay__local-video {
	position: absolute;
	bottom: 8px;
	right: 8px;
	width: 25%;
	height: 25%;
	overflow: hidden;
}

.viewer-overlay__video {
	position: relative;
	height: 100%;
}

:deep(.screen) {
	border-radius: calc(var(--default-clickable-area) / 4);
}
`],sourceRoot:""}]);const r=i}),56843:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("div",{class:e.callContainerClass,attrs:{id:"call-container"}},[e.isViewerOverlay?i("ViewerOverlayCallView",{attrs:{token:e.token,model:e.promotedParticipantModel,"shared-data":e.promotedParticipantModel&&e.sharedDatas[e.promotedParticipantModel.attributes.peerId],screens:e.screens,"local-shared-data":e.localSharedData}}):[e.showEmptyCallView?i("EmptyCallView",{attrs:{"is-sidebar":e.isSidebar}}):e._e(),e._v(" "),i("div",{attrs:{id:"videos"}},[(e.devMode?!e.isGrid:!e.isGrid||!e.callParticipantModels.length)?i("div",{staticClass:"video__promoted",class:{"full-page":e.showFullPage}},[e.showSelectedVideo&&e.selectedCallParticipantModel?i("VideoVue",{key:`promoted-${e.selectedVideoPeerId}`,attrs:{token:e.token,model:e.selectedCallParticipantModel,"shared-data":e.sharedDatas[e.selectedVideoPeerId],"show-talking-highlight":!1,"is-one-to-one":e.isOneToOne,"is-grid":"","is-big":"","fit-video":""}}):e.showLocalVideo?i("LocalVideo",{ref:"localVideo",attrs:{token:e.token,"local-media-model":e.localMediaModel,"local-call-participant-model":e.localCallParticipantModel,"is-stripe":!1,"show-controls":!1,"is-sidebar":!1,"is-big":"","fit-video":""}}):e.showLocalScreen?i("Screen",{key:"screen-local",attrs:{token:e.token,"local-media-model":e.localMediaModel,"shared-data":e.localSharedData,"is-big":""}}):(e.showRemoteScreen||e.showSelectedScreen)&&e.shownRemoteScreenCallParticipantModel?i("Screen",{key:`screen-${e.shownRemoteScreenPeerId}`,attrs:{token:e.token,"call-participant-model":e.shownRemoteScreenCallParticipantModel,"shared-data":e.sharedDatas[e.shownRemoteScreenPeerId],"is-big":""}}):e.promotedParticipantModel?i("VideoVue",{key:`autopilot-${e.promotedParticipantModel.attributes.peerId}`,attrs:{token:e.token,model:e.promotedParticipantModel,"shared-data":e.sharedDatas[e.promotedParticipantModel.attributes.peerId],"show-talking-highlight":!1,"is-grid":"","fit-video":"","is-big":"","is-one-to-one":e.isOneToOne,"is-sidebar":e.isSidebar},on:{"force-promote-video":function(r){e.forcePromotedModel=r}}}):e._e(),e._v(" "),e.shouldShowPresenterOverlay?i("PresenterOverlay",{attrs:{token:e.token,model:e.presenterModel,"shared-data":e.presenterSharedData,"is-local-presenter":e.showLocalScreen,"local-media-model":e.localMediaModel,"is-collapsed":!e.showPresenterOverlay},on:{click:e.toggleShowPresenterOverlay}}):e.devMode&&!e.isGrid?i("div",{staticClass:"dev-mode-video--promoted"},[i("img",{attrs:{alt:e.placeholderName(6),src:e.placeholderImage(6)}}),e._v(" "),i("VideoBottomBar",{attrs:{"has-shadow":!1,model:e.placeholderModel(6),"shared-data":e.placeholderSharedData(6),token:e.token,"participant-name":e.placeholderName(6),"is-big":""}})],1):e._e()],1):e._e(),e._v(" "),e.isSidebar?e._e():i("Grid",e._b({attrs:{"is-stripe":e.devMode?!e.isGrid:!e.isGrid||!e.callParticipantModels.length,"is-recording":e.isRecording,token:e.token,"has-pagination":!0,"call-participant-models":e.callParticipantModels,screens:e.screens,"local-media-model":e.localMediaModel,"local-call-participant-model":e.localCallParticipantModel,"shared-datas":e.sharedDatas},on:{"select-video":e.handleSelectVideo,"click-local-video":e.handleClickLocalVideo}},"Grid",e.$attrs,!1)),e._v(" "),e.supportedReactions?.length?i("ReactionToaster",{attrs:{token:e.token,"supported-reactions":e.supportedReactions,"call-participant-models":e.callParticipantModels}}):e._e(),e._v(" "),e.isSidebar&&!e.showLocalVideo?i("LocalVideo",{ref:"localVideo",staticClass:"local-video",class:{"local-video--sidebar":e.isSidebar},attrs:{"show-controls":!1,"fit-video":!0,"is-stripe":!0,token:e.token,"local-media-model":e.localMediaModel,"local-call-participant-model":e.localCallParticipantModel,"is-sidebar":e.isSidebar},on:{"click-video":e.handleClickLocalVideo}}):e._e()],1)]],2)},a=[]}),57096:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(97318),a=s(70338),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),57191:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(8573),a=s(81441),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),57763:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(60440);const a=o.A}),58566:((c,_,s)=>{"use strict";s.d(_,{A:()=>E});var o=s(69956),a=s.n(o),l=s(45471),e=s.n(l),i=s(61338),r=s(53334),d=s(63814),u=s(18547),m=s(64902),h=s(14816);const v={"\u2764\uFE0F":"Heart.gif","\u{1F389}":"Party.gif","\u{1F44F}":"Clap.gif","\u{1F44B}":"Wave.gif","\u{1F44D}":"Thumbs-up.gif","\u{1F44E}":"Thumbs-down.gif","\u{1F525}":"Fire.gif","\u{1F602}":"Joy.gif","\u{1F929}":"Star-struck.gif","\u{1F914}":"Thinking-face.gif","\u{1F632}":"Surprised.gif","\u{1F625}":"Concerned.gif"},E={name:"ReactionToaster",components:{TransitionWrapper:m.A},props:{token:{type:String,required:!0},supportedReactions:{type:Array,validator:p=>p.every(A=>typeof A=="string"),required:!0},callParticipantModels:{type:Array,required:!0}},setup(){return{guestNameStore:(0,h.m)()}},data(){return{registeredModels:{},reactionsQueue:[],intervalId:null,animationLength:2e3,toasts:[]}},computed:{participants(){return this.$store.getters.participantsList(this.token)}},watch:{callParticipantModels(p){p.filter(C=>!this.registeredModels[C.attributes.peerId]).forEach(C=>{this.registeredModels[C.attributes.peerId]=C,this.registeredModels[C.attributes.peerId].on("reaction",this.handleReaction)}),Object.keys(this.registeredModels).filter(C=>!p.find(O=>O.attributes.peerId===C)).forEach(C=>{this.registeredModels[C].off("reaction",this.handleReaction),delete this.registeredModels[C]})}},mounted(){this.intervalId=setInterval(this.processReactionsQueue,this.animationLength/4),(0,i.B1)("send-reaction",this.handleOwnReaction)},beforeDestroy(){clearInterval(this.intervalId),(0,i.al)("send-reaction",this.handleOwnReaction),Object.keys(this.registeredModels).forEach(p=>{this.registeredModels[p].off("reaction",this.handleReaction),delete this.registeredModels[p]})},methods:{t:r.t,handleOwnReaction({model:p,reaction:A}){this.handleReaction(p,A,!0)},handleReaction(p,A,P=!1){this.reactionsQueue.some(C=>C.id===p.attributes.peerId)||this.supportedReactions.includes(A)&&this.reactionsQueue.push({id:p.attributes.peerId,reaction:A,reactionURL:this.getReactionURL(A),name:P?this.$store.getters.getDisplayName()||(0,r.t)("spreed","Guest"):this.getParticipantName(p),seed:Math.random()})},processReactionsQueue(){this.reactionsQueue.length>0&&(this.toasts.push(this.reactionsQueue.shift()),setTimeout(()=>{this.toasts.shift()},this.animationLength))},getParticipantName(p){const{name:A,nextcloudSessionId:P}=p.attributes;if(A)return A;const C=this.participants.find(O=>O.sessionIds.includes(P));return C?.displayName?C.displayName:this.guestNameStore.getGuestName(this.token,a().stringify(e()(P)))},getReactionURL(p){return v[p]?(0,d.d0)("spreed","emojis/"+v[p]):void 0},styled(p,A){const P=(0,u.A)(p);return{"--background-color":`rgb(${P.r}, ${P.g}, ${P.b})`,"--animation-length":`${this.animationLength+300}ms`,"--horizontal-offset":`${10+20*A}%`,"--vertical-offset":30+5*A}}}}}),59429:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(39014);const a=o.A}),59595:((c,_,s)=>{"use strict";var o=s(39182)}),59790:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"MonitorOffIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),59856:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(37854),a=s(51542),l=s(59595),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"07e47972",null);const r=i.exports}),60294:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"MenuRightIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),60415:((c,_,s)=>{"use strict";var o=s(30300)}),60440:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"ArrowExpandIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),60581:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(84466),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),60665:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(91682);const a=o.A}),60941:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(35756);const a=o.A}),61695:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon account-circle-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),61777:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".empty-call-view[data-v-3cac5446]{height:100%;width:100%;position:absolute;display:flex;flex-direction:column;align-content:center;justify-content:center;text-align:center;z-index:1}.empty-call-view .icon[data-v-3cac5446]{background-size:64px;height:64px;width:64px;margin:0 auto 15px}.empty-call-view button[data-v-3cac5446]{margin:4px auto}.empty-call-view__icon[data-v-3cac5446],.empty-call-view h2[data-v-3cac5446],.empty-call-view p[data-v-3cac5446]{color:var(--color-main-text)}.empty-call-view--sidebar[data-v-3cac5446]{padding-bottom:16px}.empty-call-view--sidebar h2[data-v-3cac5446],.empty-call-view--sidebar p[data-v-3cac5446]{font-size:90%}.empty-call-view--sidebar .icon[data-v-3cac5446]{transform:scale(0.7);margin-top:0;margin-bottom:0}.empty-call-view--small[data-v-3cac5446]{border-radius:calc(var(--default-clickable-area)/2);background-color:rgba(34,34,34,.8);padding:8px}.empty-call-view--small h2[data-v-3cac5446]{font-size:1rem;font-weight:normal}.empty-call-view--small .icon[data-v-3cac5446]{transform:none;margin-bottom:0;background-size:32px;height:32px;width:32px}","",{version:3,sources:["webpack://./src/components/CallView/shared/EmptyCallView.vue"],names:[],mappings:"AAEA,kCACC,WAAA,CACA,UAAA,CACA,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,oBAAA,CACA,sBAAA,CACA,iBAAA,CACA,SAAA,CAEA,wCACC,oBAAA,CACA,WAAA,CACA,UAAA,CACA,kBAAA,CAGD,yCACC,eAAA,CAGD,iHAEC,4BAAA,CAGD,2CACC,mBAAA,CAEA,2FACC,aAAA,CAGD,iDACC,oBAAA,CACA,YAAA,CACA,eAAA,CAIF,yCACC,mDAAA,CACA,kCAAA,CACA,WAAA,CAEA,4CACC,cAAA,CACA,kBAAA,CAGD,+CACC,cAAA,CACA,eAAA,CACA,oBAAA,CACA,WAAA,CACA,UAAA",sourcesContent:[`

.empty-call-view {
	height: 100%;
	width: 100%;
	position: absolute;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	text-align: center;
	z-index: 1; // Otherwise the "Copy link" button is not clickable

	.icon {
		background-size: 64px;
		height: 64px;
		width: 64px;
		margin: 0 auto 15px;
	}

	button {
		margin: 4px auto;
	}

	&__icon,
	h2, p {
		color: var(--color-main-text);
	}

	&--sidebar {
		padding-bottom: 16px;

		h2, p {
			font-size: 90%;
		}

		.icon {
			transform: scale(0.7);
			margin-top: 0;
			margin-bottom: 0;
		}
	}

	&--small {
		border-radius: calc(var(--default-clickable-area) / 2);
		background-color: rgba(34, 34, 34, 0.8); /* Copy from the call view */
		padding: 8px;

		h2 {
			font-size: 1rem;
			font-weight: normal;
		}

		.icon {
			transform: none;
			margin-bottom: 0;
			background-size: 32px;
			height: 32px;
			width: 32px;
		}
	}
}

`],sourceRoot:""}]);const r=i}),62235:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(87385),a=s(14835),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),62799:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"StopIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),63193:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(58566);const a=o.A}),63274:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(85796),a=s(84830),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),64191:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(61695),a=s(60665),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),64423:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(7024);const a=o.A}),64852:((c,_,s)=>{"use strict";var o=s(95929)}),65317:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"AccountBoxOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),65335:((c,_,s)=>{"use strict";var o=s(37540)}),66230:((c,_,s)=>{"use strict";var o=s(83325)}),66600:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"MonitorShareIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),66605:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(99357),a=s(68605),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),67286:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(4513),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),67732:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"RecordCircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),68051:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(29422),a=s(82367),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),68605:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(67732);const a=o.A}),69589:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon arrow-expand-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),70338:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(49769);const a=o.A}),70367:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(42506);const a=o.A}),70535:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(91736),a=s(63193),l=s(54807),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"b613c04c",null);const r=i.exports}),70572:((c,_,s)=>{"use strict";s.d(_,{A:()=>L});var o=s(17334),a=s.n(o),l=s(85471),e=s(57191),i=s(57096),r=s(44487),d=s(32436),u=s(61338),m=s(32981),h=s(53334),v=s(74095),E=s(64902),p=s(9560),A=s(41850),P=s(47999),C=s(10919),O=s(26600),R=s(72925),T=s(50634),S=s(97643);const D=parseInt((0,m.C)("spreed","grid_videos_limit"),10)||0,x=(0,m.C)("spreed","grid_videos_limit_enforced")||!1,L={name:"Grid",components:{VideoVue:C.A,LocalVideo:A.A,EmptyCallView:p.A,NcButton:v.A,TransitionWrapper:E.A,VideoBottomBar:P.A,ChevronRight:r.A,ChevronLeft:i.A,ChevronUp:d.A,ChevronDown:e.A},props:{hasPagination:{type:Boolean,default:!1},isStripe:{type:Boolean,default:!1},isSidebar:{type:Boolean,default:!1},isRecording:{type:Boolean,default:!1},callParticipantModels:{type:Array,required:!0},localMediaModel:{type:Object,required:!0},localCallParticipantModel:{type:Object,required:!0},token:{type:String,required:!0},sharedDatas:{type:Object,required:!0},isLocalVideoSelectable:{type:Boolean,default:!1},screens:{type:Array,default:()=>[]}},emits:["select-video","click-local-video"],setup(){const g=(0,l.WQ)("CallView:devModeEnabled",(0,l.KR)(!1)),b=(0,l.WQ)("CallView:screenshotModeEnabled",(0,l.KR)(!1)),I=(0,l.KR)(4);return{devMode:g,dummies:I,screenshotMode:b,videosCap:D,videosCapEnforced:x,callViewStore:(0,T.e)(),sidebarStore:(0,S.P)()}},data(){return{gridWidth:0,gridHeight:0,columns:0,rows:0,currentPage:0,showVideoOverlay:!0,showVideoOverlayTimer:null,debounceMakeGrid:()=>{},debounceHandleWheelEvent:()=>{},tempPromotedModels:[],unpromoteSpeakerTimer:{},promotedHistoryMask:[]}},computed:{stripeButtonTitle(){return this.stripeOpen?(0,h.t)("spreed","Collapse stripe"):(0,h.t)("spreed","Expand stripe")},videos(){return this.devMode?Array.from(Array(this.dummies).keys()):this.callParticipantModels},videosCount(){return!this.isStripe&&this.videos.length===0?1:this.videos.length},videoWidth(){return this.gridWidth/this.columns},videoHeight(){return this.gridHeight/this.rows},displayedVideos(){if(!this.slots)return[];const g=this.videosCap&&this.videosCapEnforced?Math.min(this.videosCap,this.slots):this.slots;return(this.currentPage+1)*g>=this.orderedVideos.length?this.orderedVideos.slice(this.currentPage*g):this.orderedVideos.slice(this.currentPage*g,(this.currentPage+1)*g)},isLessThanTwoVideos(){return this.videos.length<=1&&!this.screens.length},dpiFactor(){if(this.isStripe)return 1;const g=window.devicePixelRatio;return g<.5?.5:g>2?2:g},minWidth(){return this.isStripe||this.isSidebar?200:320},minHeight(){return this.isStripe||this.isSidebar?150:240},dpiAwareMinWidth(){return this.minWidth/this.dpiFactor},dpiAwareMinHeight(){return this.minHeight/this.dpiFactor},gridAspectRatio(){return(this.gridWidth/this.gridHeight).toPrecision([2])},targetAspectRatio(){return this.isStripe?1:1.5},columnsMax(){const g=Math.floor((this.gridWidth-8*this.columns)/this.dpiAwareMinWidth),b=Math.floor((this.gridWidth-8*(this.columns+1))/this.dpiAwareMinWidth),I=g===this.columns?g:b;return I<=1?1:I},rowsMax(){return Math.floor(this.gridHeight/this.dpiAwareMinHeight)<1?1:Math.floor(this.gridHeight/this.dpiAwareMinHeight)},slots(){return this.isStripe?this.rows*this.columns:this.rows*this.columns-1},numberOfPages(){return Math.ceil(this.videosCount/this.slots)},hasNextPage(){return this.displayedVideos.length!==0&&this.hasPagination?this.displayedVideos.at(-1)!==this.orderedVideos.at(-1):!1},hasPreviousPage(){return this.displayedVideos.length!==0&&this.hasPagination?this.displayedVideos[0]!==this.orderedVideos[0]:!1},gridStyle(){let g=this.columns,b=this.rows;return this.videos.length===0&&!this.isStripe&&(g=1,b=2),{gridTemplateColumns:`repeat(${g}, minmax(${this.dpiAwareMinWidth}px, 1fr))`,gridTemplateRows:`repeat(${b}, minmax(${this.dpiAwareMinHeight}px, 1fr))`}},hasVideoOverflow(){return this.videosCount>this.slots},sidebarStatus(){return this.sidebarStore.show},wrapperStyle(){return this.isStripe?"height: 250px":"height: 100%"},stripeOpen(){return this.callViewStore.isStripeOpen&&!this.isRecording},participantsInitialised(){return this.$store.getters.participantsInitialised(this.token)},isGuestNonModerator(){return this.$store.getters.getActorType()===R.Rf.ACTOR_TYPE.GUESTS&&this.$store.getters.conversation(this.token).participantType!==R._z.TYPE.GUEST_MODERATOR},orderedVideos(){if(this.isGuestNonModerator||this.devMode)return this.videos;if(!this.participantsInitialised)return[];const g={modelsWithScreenshare:[],modelsTempPromoted:[],modelsWithVideoEnabled:[],modelsWithAudioOnly:[],modelsWithNoPermissions:[]},b=new Set(this.screens),I=new Set(this.tempPromotedModels.map(K=>K.attributes.nextcloudSessionId)),z=new Map,N=new Map;return this.callParticipantModels.forEach(K=>{b.has(K.attributes.peerId)?g.modelsWithScreenshare.push(K):I.has(K.attributes.nextcloudSessionId)?g.modelsTempPromoted.push(K):this.isModelWithVideo(K)?z.set(K.attributes.nextcloudSessionId,K):this.isModelWithAudio(K)?N.set(K.attributes.nextcloudSessionId,K):g.modelsWithNoPermissions.push(K)}),g.modelsWithVideoEnabled=this.getOrderedTiles(z,this.promotedHistoryMask),g.modelsWithAudioOnly=this.getOrderedTiles(N,this.promotedHistoryMask),[...g.modelsWithScreenshare,...g.modelsTempPromoted,...g.modelsWithVideoEnabled,...g.modelsWithAudioOnly,...g.modelsWithNoPermissions]},speakers(){return this.callParticipantModels.filter(g=>g.attributes.speaking)},speakersWithAudioOff(){return this.tempPromotedModels.filter(g=>!g.attributes.audioAvailable)},devStripe:{get(){return this.isStripe},set(g){this.callViewStore.setCallViewMode({token:this.token,isGrid:!g,clearLast:!1})}}},watch:{"videos.length"(){this.makeGrid()},isStripe(){this.rebuildGrid(),this.currentPage=0},stripeOpen(){this.rebuildGrid()},sidebarStatus(){setTimeout(this.handleResize,500)},numberOfPages(){this.currentPage>=this.numberOfPages&&(this.currentPage=Math.max(0,this.numberOfPages-1))},speakers(g){g.forEach(b=>{this.promoteSpeaker(b),clearTimeout(this.unpromoteSpeakerTimer[b.attributes.nextcloudSessionId])})},speakersWithAudioOff(g,b){g.forEach(I=>{b.includes(I)||(this.unpromoteSpeakerTimer[I.attributes.nextcloudSessionId]=setTimeout(()=>{this.unpromoteSpeaker(I)},1e4))})}},mounted(){this.debounceMakeGrid=a()(this.makeGrid,200),this.debounceHandleWheelEvent=a()(this.handleWheelEvent,50),window.addEventListener("resize",this.handleResize),(0,u.B1)("navigation-toggled",this.handleResize),this.makeGrid(),window.OCA.Talk.gridDebugInformation=this.gridDebugInformation},beforeDestroy(){this.debounceMakeGrid.clear?.(),this.debounceHandleWheelEvent.clear?.(),window.OCA.Talk.gridDebugInformation=()=>console.debug("Not in a call"),window.removeEventListener("resize",this.handleResize),(0,u.al)("navigation-toggled",this.handleResize)},methods:{t:h.t,gridDebugInformation(){console.debug("Grid debug information"),console.debug({minWidth:this.minWidth,minHeight:this.minHeight,videosCap:this.videosCap,videosCapEnforced:this.videosCapEnforced,targetAspectRatio:this.targetAspectRatio,videosCount:this.videosCount,videoWidth:this.videoWidth,videoHeight:this.videoHeight,devicePixelRatio:window.devicePixelRatio,dpiFactor:this.dpiFactor,dpiAwareMinWidth:this.dpiAwareMinWidth,dpiAwareMinHeight:this.dpiAwareMinHeight,gridAspectRatio:this.gridAspectRatio,columnsMax:this.columnsMax,rowsMax:this.rowsMax,numberOfPages:this.numberOfPages,bodyWidth:document.body.clientWidth,bodyHeight:document.body.clientHeight,gridWidth:this.$refs.grid.clientWidth,gridHeight:this.$refs.grid.clientHeight})},rebuildGrid(){console.debug("isStripe: ",this.isStripe),console.debug("stripeOpen: ",this.stripeOpen),console.debug("previousGridWidth: ",this.gridWidth,"previousGridHeight: ",this.gridHeight),console.debug("newGridWidth: ",this.gridWidth,"newGridHeight: ",this.gridHeight),(!this.isStripe||this.stripeOpen)&&this.$nextTick(this.makeGrid)},placeholderImage:O.jM,placeholderName:O.rl,placeholderModel:O.F5,placeholderSharedData:O.zc,disableDevMode(){this.screenshotMode=!1,this.devMode=!1},handleResize(g){this.debounceMakeGrid()},makeGrid(){if(this.$refs.grid){if(this.gridWidth=this.$refs.grid.clientWidth,this.gridHeight=this.$refs.grid.clientHeight,this.videos.length===0){this.columns=0,this.rows=0;return}this.devMode&&console.debug("Recreating grid: videos: ",this.videos.length,"columns: ",this.columnsMax+", rows: "+this.rowsMax),this.columns=this.columnsMax,this.rows=this.rowsMax,this.videosCap!==0&&this.videosCount>this.videosCap?this.shrinkGrid(this.videosCap):this.shrinkGrid(this.videosCount)}},async shrinkGrid(g){if(this.devMode&&console.debug("Shrinking grid: columns",this.columns+", rows: "+this.rows),this.rows===1&&this.columns===1)return;let b=this.columns,I=this.rows,z=this.isStripe?b*I:b*I-1;for(;g<z;){const N=b,K=I,H=this.gridWidth/b,y=this.gridHeight/I,j=this.gridWidth/(b-1),V=this.gridHeight/(I-1),k=j/y,X=H/V,f=Math.abs(k-this.targetAspectRatio),M=Math.abs(X-this.targetAspectRatio);if(this.devMode&&console.debug("deltaAspectRatioWithOneColumnLess: ",f,"deltaAspectRatioWithOneRowLess: ",M),f<=M){if(b>=2&&b--,z=this.isStripe?b*I:b*I-1,g>z){b++;break}}else if(I>=2&&I--,z=this.isStripe?b*I:b*I-1,g>z){I++;break}if(N===b&&K===I)break}this.columns=b,this.rows=I},handleWheelEvent(g){this.gridWidth<=0||(g.deltaY<0&&this.hasPreviousPage?this.handleClickPrevious():g.deltaY>0&&this.hasNextPage&&this.handleClickNext())},handleClickNext(){this.currentPage++,console.debug("handleclicknext, ","currentPage ",this.currentPage,"slots ",this.slot,"videos.length ",this.videos.length)},handleClickPrevious(){this.currentPage--,console.debug("handleclickprevious, ","currentPage ",this.currentPage,"slots ",this.slots,"videos.length ",this.videos.length)},handleClickStripeCollapse(){this.callViewStore.setCallViewMode({token:this.token,isStripeOpen:!this.stripeOpen,clearLast:!1})},handleMovement(){this.setTimerForUiControls()},setTimerForUiControls(){this.showVideoOverlayTimer!==null&&clearTimeout(this.showVideoOverlayTimer),this.showVideoOverlay=!0,this.showVideoOverlayTimer=setTimeout(()=>{this.showVideoOverlay=!1},5e3)},handleClickVideo(g,b){console.debug("selected-video peer id",b),this.$emit("select-video",b)},handleClickLocalVideo(){this.$emit("click-local-video")},isSelected(g){return g.attributes.peerId===this.callViewStore.selectedVideoPeerId},isModelWithVideo(g){return g.attributes.videoAvailable&&typeof g.attributes.stream=="object"},isModelWithAudio(g){const b=this.$store.getters.getParticipantBySessionId(this.token,g.attributes.nextcloudSessionId);return b?b?.permissions&R._z.PERMISSIONS.PUBLISH_AUDIO:!1},unpromoteSpeaker(g){const b=this.tempPromotedModels.indexOf(g);b!==-1&&this.tempPromotedModels.splice(b,1)},promoteSpeaker(g){const b=g.attributes.nextcloudSessionId;if(!this.orderedVideos.slice(0,this.slots).find(I=>I.attributes.nextcloudSessionId===b)&&!this.screens.includes(g.attributes.peerId)&&!this.tempPromotedModels.includes(g)){const I=this.promotedHistoryMask.indexOf(b);I!==-1&&this.promotedHistoryMask.splice(I,1),this.tempPromotedModels.unshift(g),this.promotedHistoryMask.unshift(b)}},getOrderedTiles(g,b){const I=[],z=[];return b.forEach(N=>{g.has(N)&&I.push(g.get(N))}),g.forEach((N,K)=>{b.includes(K)||z.push(N)}),[...I,...z]}}}}),70667:((c,_,s)=>{"use strict";s.d(_,{I:()=>o});function o(a,l){const e=a.split(".").map(Number),i=l.split(".").map(Number);for(let r=0;r<Math.max(e.length,i.length);r++)if((e[r]??0)!==(i[r]??0))return(e[r]??0)>(i[r]??0);return!0}}),70858:((c,_,s)=>{"use strict";s.d(_,{Jf:()=>e,eg:()=>r,sM:()=>i});var o=s(59271),a=s(85471);function l(){const d=(0,a.KR)(document.fullscreenElement!==null),u=()=>{d.value=document.fullscreenElement!==null,d.value?document.body.classList.add("talk-in-fullscreen"):document.body.classList.remove("talk-in-fullscreen")};return document.addEventListener("fullscreenchange",u),document.addEventListener("webkitfullscreenchange",u),(0,a.xo)(()=>{document.removeEventListener("fullscreenchange",u),document.removeEventListener("webkitfullscreenchange",u)}),(0,a.tB)(d)}async function e(){document.body.requestFullscreen?await document.body.requestFullscreen():document.body.webkitRequestFullscreen&&await document.body.webkitRequestFullscreen()}async function i(){document.exitFullscreen?await document.exitFullscreen():document.webkitExitFullscreen&&await document.webkitExitFullscreen()}const r=(0,o.F)(l)}),71575:((c,_,s)=>{"use strict";var o=s(9152)}),71752:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(97007),a=s(27990),l=s(40580),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"21da3298",null);const r=i.exports}),72051:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("NcButton",{class:{"no-video-available":!e.model.attributes.videoAvailable},attrs:{title:e.videoButtonTitle,type:e.type,"aria-label":e.videoButtonAriaLabel,disabled:!e.isVideoAllowed},on:{click:function(r){return r.stopPropagation(),e.toggleVideo.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.showVideoOn?i("VideoIcon",{attrs:{size:20}}):i("VideoOff",{attrs:{size:20}})]},proxy:!0}])})},a=[]}),72079:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"DotsCircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),72192:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(30957),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),72610:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".top-bar[data-v-de6fe834]{--border-width: 1px;display:flex;flex-wrap:wrap;gap:3px;align-items:center;justify-content:flex-end;z-index:10;min-height:calc(var(--border-width) + 2*2*var(--default-grid-baseline) + var(--default-clickable-area));padding-block:var(--default-grid-baseline);padding-inline:calc(2*var(--default-grid-baseline)) calc(2*var(--default-grid-baseline) + var(--app-sidebar-offset, 0));background-color:var(--color-main-background);border-bottom:var(--border-width) solid var(--color-border)}.top-bar--in-call[data-v-de6fe834]{right:0;border:none;position:absolute;top:0;left:0;background-color:rgba(0,0,0,0)}.talk-sidebar-callview .top-bar[data-v-de6fe834]{margin-right:var(--default-clickable-area)}.top-bar--sidebar[data-v-de6fe834]{padding:calc(2*var(--default-grid-baseline))}.top-bar--sidebar .conversation-icon[data-v-de6fe834]{margin-left:0}.top-bar--authorised .conversation-icon[data-v-de6fe834]{margin-left:calc(var(--default-clickable-area) + var(--default-grid-baseline))}.top-bar__wrapper[data-v-de6fe834]{flex:1 0;display:flex;flex-wrap:wrap;gap:3px;align-items:center;justify-content:flex-end}.conversation-header[data-v-de6fe834]{position:relative;display:flex;overflow-x:hidden;overflow-y:clip;white-space:nowrap;width:0;flex-grow:1;cursor:pointer}.conversation-header__text[data-v-de6fe834]{display:flex;flex-direction:column;flex-grow:1;margin-left:8px;justify-content:center;width:100%;overflow:hidden;line-height:20px}.conversation-header__text--offline[data-v-de6fe834]{color:var(--color-text-maxcontrast)}.conversation-header .title[data-v-de6fe834]{font-weight:500;overflow:hidden;text-overflow:ellipsis}.conversation-header .description[data-v-de6fe834]{overflow:hidden;text-overflow:ellipsis;max-width:fit-content}.conversation-header .description__in-chat[data-v-de6fe834]{color:var(--color-text-maxcontrast)}.description__popover[data-v-de6fe834]{padding:var(--default-grid-baseline);width:fit-content;max-width:50em}.icon[data-v-de6fe834]{display:flex}.upcoming-event[data-v-de6fe834]{display:flex;flex-direction:row;gap:calc(var(--default-grid-baseline)*2);padding:0 calc(var(--default-grid-baseline)*2);background-color:rgba(var(--color-info-rgb), 0.1);height:100%;border-radius:var(--border-radius)}.event-info[data-v-de6fe834]{display:flex;flex-direction:column;justify-content:center;line-height:20px}.event-info__header[data-v-de6fe834]{font-weight:500}","",{version:3,sources:["webpack://./src/components/TopBar/TopBar.vue"],names:[],mappings:"AACA,0BACC,mBAAA,CAEA,YAAA,CACA,cAAA,CACA,OAAA,CACA,kBAAA,CACA,wBAAA,CAEA,UAAA,CACA,uGAAA,CACA,0CAAA,CAEA,uHAAA,CACA,6CAAA,CACA,2DAAA,CAEA,mCACC,OAAA,CACA,WAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,8BAAA,CAGD,iDACC,0CAAA,CAGD,mCACC,4CAAA,CAEA,sDACC,aAAA,CAKD,yDACC,8EAAA,CAKH,mCACC,QAAA,CACA,YAAA,CACA,cAAA,CACA,OAAA,CACA,kBAAA,CACA,wBAAA,CAGD,sCACC,iBAAA,CACA,YAAA,CACA,iBAAA,CACA,eAAA,CACA,kBAAA,CACA,OAAA,CACA,WAAA,CACA,cAAA,CACA,4CACC,YAAA,CACA,qBAAA,CACA,WAAA,CACA,eAAA,CACA,sBAAA,CACA,UAAA,CACA,eAAA,CAEA,gBAAA,CACA,qDACC,mCAAA,CAGF,6CACC,eAAA,CACA,eAAA,CACA,sBAAA,CAED,mDACC,eAAA,CACA,sBAAA,CACA,qBAAA,CACA,4DACC,mCAAA,CAKH,uCACC,oCAAA,CACA,iBAAA,CACA,cAAA,CAGD,uBACC,YAAA,CAGD,iCACC,YAAA,CACA,kBAAA,CACA,wCAAA,CACA,8CAAA,CACA,iDAAA,CACA,WAAA,CACA,kCAAA,CAGD,6BACC,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,gBAAA,CAEA,qCACC,eAAA",sourcesContent:[`
.top-bar {
	--border-width: 1px;

	display: flex;
	flex-wrap: wrap;
	gap: 3px;
	align-items: center;
	justify-content: flex-end;

	z-index: 10;
	min-height: calc(var(--border-width) + 2 * (2 * var(--default-grid-baseline)) + var(--default-clickable-area));
	padding-block: var(--default-grid-baseline);
	// Reserve space for the sidebar toggle button
	padding-inline: calc(2 * var(--default-grid-baseline)) calc(2 * var(--default-grid-baseline) + var(--app-sidebar-offset, 0));
	background-color: var(--color-main-background);
	border-bottom: var(--border-width) solid var(--color-border);

	&--in-call {
		right: 0;
		border: none;
		position: absolute;
		top: 0;
		left: 0;
		background-color: transparent;
	}

	.talk-sidebar-callview & {
		margin-right: var(--default-clickable-area);
	}

	&--sidebar {
		padding: calc(2 * var(--default-grid-baseline));

		.conversation-icon {
			margin-left: 0;
		}
	}

	&--authorised {
		.conversation-icon {
			margin-left: calc(var(--default-clickable-area) + var(--default-grid-baseline));
		}
	}
}

.top-bar__wrapper {
	flex: 1 0;
	display: flex;
	flex-wrap: wrap;
	gap: 3px;
	align-items: center;
	justify-content: flex-end;
}

.conversation-header {
	position: relative;
	display: flex;
	overflow-x: hidden;
	overflow-y: clip;
	white-space: nowrap;
	width: 0;
	flex-grow: 1;
	cursor: pointer;
	&__text {
		display: flex;
		flex-direction:column;
		flex-grow: 1;
		margin-left: 8px;
		justify-content: center;
		width: 100%;
		overflow: hidden;
		// Text is guaranteed to be one line. Make line-height 20px to fit top bar
		line-height: 20px;
		&--offline {
			color: var(--color-text-maxcontrast);
		}
	}
	.title {
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.description {
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: fit-content;
		&__in-chat {
			color: var(--color-text-maxcontrast);
		}
	}
}

.description__popover {
	padding: var(--default-grid-baseline);
	width: fit-content;
	max-width: 50em;
}

.icon {
	display: flex;
}

.upcoming-event {
	display: flex;
	flex-direction: row;
	gap: calc(var(--default-grid-baseline) * 2);
	padding: 0 calc(var(--default-grid-baseline) * 2);
	background-color: rgba(var(--color-info-rgb), 0.1);
	height: 100%;
	border-radius: var(--border-radius);
}

.event-info {
	display: flex;
	flex-direction: column;
	justify-content: center;
	line-height: 20px;

	&__header {
		font-weight: 500;
	}
}

`],sourceRoot:""}]);const r=i}),72776:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".top-bar-menu[data-v-aea49c2e]{display:flex}","",{version:3,sources:["webpack://./src/components/TopBar/TopBarMenu.vue"],names:[],mappings:"AACA,+BACC,YAAA",sourcesContent:[`
.top-bar-menu {
	display: flex;
}
`],sourceRoot:""}]);const r=i}),74257:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(72610),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),74273:((c,_,s)=>{"use strict";s.d(_,{ZL:()=>u});var o=s(85471),a=s(8423);function l(v){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?l=function(E){return typeof E}:l=function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},l(v)}var e={selector:"vue-portal-target-".concat((0,a.A)())},i=function(E){return e.selector=E},r=typeof window<"u"&&(typeof document>"u"?"undefined":l(document))!==void 0,d=o.Ay.extend({abstract:!0,name:"PortalOutlet",props:["nodes","tag"],data:function(E){return{updatedNodes:E.nodes}},render:function(E){var p=this.updatedNodes&&this.updatedNodes();return p?p.length===1&&!p[0].text?p:E(this.tag||"DIV",p):E()},destroyed:function(){var E=this.$el;E&&E.parentNode.removeChild(E)}}),u=o.Ay.extend({name:"VueSimplePortal",props:{disabled:{type:Boolean},prepend:{type:Boolean},selector:{type:String,default:function(){return"#".concat(e.selector)}},tag:{type:String,default:"DIV"}},render:function(E){if(this.disabled){var p=this.$scopedSlots&&this.$scopedSlots.default();return p?p.length<2&&!p[0].text?p:E(this.tag,p):E()}return E()},created:function(){this.getTargetEl()||this.insertTargetEl()},updated:function(){var E=this;this.$nextTick(function(){!E.disabled&&E.slotFn!==E.$scopedSlots.default&&(E.container.updatedNodes=E.$scopedSlots.default),E.slotFn=E.$scopedSlots.default})},beforeDestroy:function(){this.unmount()},watch:{disabled:{immediate:!0,handler:function(E){E?this.unmount():this.$nextTick(this.mount)}}},methods:{getTargetEl:function(){if(r)return document.querySelector(this.selector)},insertTargetEl:function(){if(r){var E=document.querySelector("body"),p=document.createElement(this.tag);p.id=this.selector.substring(1),E.appendChild(p)}},mount:function(){if(r){var E=this.getTargetEl(),p=document.createElement("DIV");this.prepend&&E.firstChild?E.insertBefore(p,E.firstChild):E.appendChild(p),this.container=new d({el:p,parent:this,propsData:{tag:this.tag,nodes:this.$scopedSlots.default}})}},unmount:function(){this.container&&(this.container.$destroy(),delete this.container)}}});function m(v){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};v.component(E.name||"portal",u),E.defaultSelector&&i(E.defaultSelector)}typeof window<"u"&&window.Vue&&window.Vue===o.Ay&&o.Ay.use(m);var h=null}),75835:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(18320),a=s(45459),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),76887:((c,_,s)=>{"use strict";s.d(_,{m:()=>a});var o=s(53334);function a(e,i=!1){if(!e)return i?"--:--":"-- : --";const r=Math.floor(e/1e3%60),d=Math.floor(e/(1e3*60)%60);return[Math.floor(e/(1e3*60*60)%24),d.toString().padStart(2,"0"),r.toString().padStart(2,"0")].filter(m=>!!m).join(i?":":" : ")}function l(e){const i=e-Date.now(),r=Math.floor(i/(3600*1e3)),d=Math.floor((i-r*60*60*1e3)/(60*1e3));return r>=1?d===0?n("spreed","In %n hour","In %n hours",r):t("spreed","In {hours} and {minutes}",{hours:n("spreed","%n hour","%n hours",r),minutes:n("spreed","%n minute ","%n minutes",d)}):n("spreed","In %n minute","In %n minutes",d)}}),77030:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(6139),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),77377:((c,_,s)=>{"use strict";s.d(_,{A:()=>u});var o=s(61338),a=s(53334),l=s(74095),e=s(91911),i=s(45261),r=s(72925),d=s(24140);const u={name:"LocalAudioControlButton",components:{NcButton:l.A,VolumeIndicator:i.A},props:{conversation:{type:Object,required:!0},model:{type:Object,required:!0},disableKeyboardShortcuts:{type:Boolean,default:OCP.Accessibility.disableKeyboardShortcuts()},type:{type:String,default:"tertiary-no-background"},token:{type:String,required:!0}},computed:{isAudioAllowed(){return this.conversation.permissions&r._z.PERMISSIONS.PUBLISH_AUDIO},showMicrophoneOn(){return this.model.attributes.audioAvailable&&this.model.attributes.audioEnabled},audioButtonTitle(){return this.isAudioAllowed?this.model.attributes.audioAvailable?this.model.attributes.audioEnabled?this.disableKeyboardShortcuts?(0,a.t)("spreed","Mute audio"):(0,a.t)("spreed","Mute audio (M)"):this.disableKeyboardShortcuts?(0,a.t)("spreed","Unmute audio"):(0,a.t)("spreed","Unmute audio (M)"):(0,a.t)("spreed","No audio. Click to select device"):(0,a.t)("spreed","You are not allowed to enable audio")},audioButtonAriaLabel(){return this.model.attributes.audioAvailable?this.model.attributes.audioEnabled?(0,a.t)("spreed","Mute audio"):(0,a.t)("spreed","Unmute audio"):(0,a.t)("spreed","No audio. Click to select device")}},created(){(0,e.C)("m",this.toggleAudio),(0,e.C)(" ",this.toggleAudio,{push:!0})},mounted(){(0,o.B1)("local-audio-control-button:toggle-audio",this.updateDeviceState)},beforeDestroy(){(0,o.al)("local-audio-control-button:toggle-audio",this.updateDeviceState)},expose:["toggleAudio"],methods:{t:a.t,toggleAudio(){if(!this.model.attributes.audioAvailable){(0,o.Ic)("talk:media-settings:show");return}this.model.attributes.audioEnabled?this.model.disableAudio():this.model.enableAudio()},updateDeviceState(){d.A.getItem("audioDisabled_"+this.token)==="true"?this.model.disableAudio():this.model.enableAudio()}}}}),77468:((c,_,s)=>{"use strict";var o=s(54257)}),77742:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon view-grid-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),78690:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(98437);const a=o.A}),78714:((c,_,s)=>{"use strict";var o=s(3707)}),79505:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(70572);const a=o.A}),79516:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(45931);const a=o.A}),79662:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"MenuDownIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),80084:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(22768),a=s(95530),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),80619:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("NcPopover",{staticClass:"call-time",attrs:{shown:e.showPopover,"focus-trap":e.isShowRecordingControls,triggers:[]},on:{"update:shown":function(r){e.showPopover=r}},scopedSlots:e._u([{key:"trigger",fn:function(){return[i("NcButton",{attrs:{disabled:e.isButtonDisabled,wide:!0,title:e.recordingButtonTitle,type:"tertiary"},on:{click:function(r){e.showPopover=!e.showPopover}},scopedSlots:e._u([e.isRecording||e.isStartingRecording?{key:"icon",fn:function(){return[e.isRecording?i("IconRecordCircle",{attrs:{size:20,"fill-color":"#e9322d"}}):i("IconRecordCircle",{attrs:{size:20,"fill-color":"var(--color-loading-light)"}})]},proxy:!0}:null],null,!0)},[e._v(" "),i("span",{staticClass:"call-time__text"},[i("span",{staticClass:"call-time__placeholder"},[e._v(e._s(e.placeholderCallTime))]),e._v(" "),i("span",[e._v(e._s(e.formattedCallTime))])])])]},proxy:!0}])},[e._v(" "),e.isCallDurationHintShown?i("span",{staticClass:"call-duration-hint"},[e._v(`
		`+e._s(e.t("spreed","The call has been running for one hour."))+`
	`)]):e._e(),e._v(" "),e.isShowRecordingControls?[e.isCallDurationHintShown?i("hr",{staticClass:"solid"}):e._e(),e._v(" "),e.isStartingRecording?i("NcButton",{attrs:{type:"tertiary-no-background",wide:!0},on:{click:e.stopRecording},scopedSlots:e._u([{key:"icon",fn:function(){return[i("NcLoadingIcon",{attrs:{size:20}})]},proxy:!0}],null,!1,3155754792)},[e._v(`
			`+e._s(e.t("spreed","Cancel recording start"))+`
		`)]):i("NcButton",{attrs:{type:"tertiary-no-background",wide:!0},on:{click:e.stopRecording},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconStop",{attrs:{size:20}})]},proxy:!0}],null,!1,616116283)},[e._v(`
			`+e._s(e.t("spreed","Stop recording"))+`
		`)])]:e._e()],2)},a=[]}),80701:((c,_,s)=>{"use strict";s.d(_,{Ay:()=>l.r});var o=s(70580),a=s(67098),l=s(36079)}),80892:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(1773),a=s(31234),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),81040:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("NcModal",e._g({class:{"modal-mask__participants-step":e.isEditingParticipants},attrs:{"label-id":e.dialogHeaderId}},e.$listeners),[i("div",{staticClass:"breakout-rooms-editor",class:{"breakout-rooms-editor__participants-step":e.isEditingParticipants}},[i("h2",{staticClass:"nc-dialog-alike-header",attrs:{id:e.dialogHeaderId}},[e._v(`
			`+e._s(e.modalTitle)+`
		`)]),e._v(" "),e.isEditingParticipants?[i("BreakoutRoomsParticipantsEditor",e._g({attrs:{token:e.token,"room-number":e.amount},on:{back:function(r){e.isEditingParticipants=!1},"create-rooms":e.handleCreateRooms}},e.$listeners))]:[i("div",{staticClass:"breakout-rooms-editor__main"},[i("label",{staticClass:"breakout-rooms-editor__caption",attrs:{for:"room-number"}},[e._v(e._s(e.t("spreed","Number of breakout rooms"))+" ")]),e._v(" "),e.isInvalidAmount?i("p",{staticClass:"breakout-rooms-editor__error-hint"},[e._v(`
					`+e._s(e.t("spreed","You can create from 1 to 20 breakout rooms."))+`
				`)]):e._e(),e._v(" "),i("NcInputField",{ref:"inputField",staticClass:"breakout-rooms-editor__number-input",attrs:{id:"room-number",type:"number",min:"1",max:"20"},model:{value:e.amount,callback:function(r){e.amount=r},expression:"amount"}}),e._v(" "),i("label",{staticClass:"breakout-rooms-editor__caption"},[e._v(e._s(e.t("spreed","Assignment method")))]),e._v(" "),i("fieldset",[i("NcCheckboxRadioSwitch",{attrs:{value:"1",name:"mode_radio",type:"radio"},model:{value:e.mode,callback:function(r){e.mode=r},expression:"mode"}},[e._v(`
						`+e._s(e.t("spreed","Automatically assign participants"))+`
					`)]),e._v(" "),i("NcCheckboxRadioSwitch",{attrs:{value:"2",name:"mode_radio",type:"radio"},model:{value:e.mode,callback:function(r){e.mode=r},expression:"mode"}},[e._v(`
						`+e._s(e.t("spreed","Manually assign participants"))+`
					`)]),e._v(" "),i("NcCheckboxRadioSwitch",{attrs:{value:"3",name:"mode_radio",type:"radio"},model:{value:e.mode,callback:function(r){e.mode=r},expression:"mode"}},[e._v(`
						`+e._s(e.t("spreed","Allow participants to choose"))+`
					`)])],1)],1),e._v(" "),i("div",{staticClass:"breakout-rooms-editor__buttons"},[e.mode==="2"?i("NcButton",{attrs:{type:"primary",disabled:e.isInvalidAmount},on:{click:function(r){e.isEditingParticipants=!0}}},[e._v(`
					`+e._s(e.t("spreed","Assign participants to rooms"))+`
				`)]):i("NcButton",{attrs:{type:"primary",disabled:e.isInvalidAmount},on:{click:e.handleCreateRooms}},[e._v(`
					`+e._s(e.t("spreed","Create rooms"))+`
				`)])],1)]],2)])},a=[]}),81441:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(4426);const a=o.A}),81593:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"top-bar",class:{"top-bar--sidebar":e.isSidebar,"top-bar--in-call":e.isInCall,"top-bar--authorised":e.getUserId}},[i("div",{staticClass:"top-bar-outer"},[i("ConversationIcon",{key:e.conversation.token,staticClass:"conversation-icon",attrs:{offline:e.isPeerInactive,item:e.conversation,size:e.AVATAR.SIZE.DEFAULT,"disable-menu":!1,"show-user-online-status":"","hide-favorite":!1,"hide-call":!1}}),e._v(" "),i("a",{staticClass:"conversation-header",attrs:{role:"button"},on:{click:e.openConversationSettings}},[i("div",{staticClass:"conversation-header__text",class:{"conversation-header__text--offline":e.isPeerInactive}},[i("p",{staticClass:"title"},[e._v(`
            `+e._s(e.conversation.displayName)+`
          `)]),e._v(" "),e.showUserStatusAsDescription?i("p",{staticClass:"description",class:{"description__in-chat":!e.isInCall}},[e._v(`
            `+e._s(e.statusMessage)+`
          `)]):e._e(),e._v(" "),e.conversation.description?i("NcPopover",{attrs:{"focus-trap":!1,delay:500,boundary:e.boundaryElement,"popper-triggers":["hover"],triggers:["hover"]},scopedSlots:e._u([{key:"trigger",fn:function({attrs:r}){return[i("p",e._b({staticClass:"description",class:{"description__in-chat":!e.isInCall}},"p",r,!1),[e._v(`
                `+e._s(e.conversation.description)+`
              `)])]}}],null,!1,2894495765)},[e._v(" "),i("div",{staticClass:"description__popover",domProps:{innerHTML:e._s(e.renderedDescription)}})]):e._e()],1)])],1),e._v(" "),i("div",{staticClass:"top-bar__wrapper",attrs:{"data-theme-dark":e.isInCall}},[e.conversation.type===e.CONVERSATION.TYPE.NOTE_TO_SELF?i("TasksCounter"):e._e(),e._v(" "),e.showUpcomingEvent?i("a",{staticClass:"upcoming-event",attrs:{href:e.nextEvent.calendarAppUrl,title:e.t("spreed","Open Calendar"),target:"_blank"}},[i("div",{staticClass:"icon"},[i("IconCalendarBlank",{attrs:{size:20}})],1),e._v(" "),i("div",{staticClass:"event-info"},[i("p",{staticClass:"event-info__header"},[e._v(`
						`+e._s(e.t("spreed","Next call"))+`
					`)]),e._v(" "),i("p",[e._v(" "+e._s(e.eventInfo)+" ")])])]):e._e(),e._v(" "),e.isInCall?i("CallTime",{attrs:{start:e.conversation.callStartTime}}):e._e(),e._v(" "),e.isInCall&&!e.isOneToOneConversation&&e.isModeratorOrUser?i("NcButton",{attrs:{title:e.participantsInCallAriaLabel,"aria-label":e.participantsInCallAriaLabel,type:"tertiary"},on:{click:function(r){return e.openSidebar("participants")}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("IconAccountMultiple",{attrs:{size:20}})]},proxy:!0}],null,!1,437785874)},[e._v(`
				`+e._s(e.participantsInCall)+`
			`)]):e._e(),e._v(" "),e.isInCall&&e.hasReactionSupport?i("ReactionMenu",{attrs:{token:e.token,"supported-reactions":e.supportedReactions,"local-call-participant-model":e.localCallParticipantModel}}):e._e(),e._v(" "),e.isInCall?i("TopBarMediaControls",{attrs:{token:e.token,model:e.localMediaModel,"is-sidebar":e.isSidebar,"local-call-participant-model":e.localCallParticipantModel}}):e._e(),e._v(" "),i("TopBarMenu",{attrs:{token:e.token,"show-actions":!e.isSidebar,"is-sidebar":e.isSidebar,model:e.localMediaModel},on:{"open-breakout-rooms-editor":function(r){e.showBreakoutRoomsEditor=!0}}}),e._v(" "),i("CallButton",{staticClass:"test",attrs:{"shrink-on-mobile":"","hide-text":e.isSidebar,"is-screensharing":!!e.localMediaModel.attributes.localScreen}}),e._v(" "),e.showBreakoutRoomsEditor?i("BreakoutRoomsEditor",{attrs:{token:e.token},on:{close:function(r){e.showBreakoutRoomsEditor=!1}}}):e._e()],1)])},a=[]}),82249:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(77742),a=s(30233),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),82367:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(53510);const a=o.A}),82472:((c,_,s)=>{"use strict";var o=s(74257)}),82664:((c,_,s)=>{"use strict";s.d(_,{A:()=>m});var o=s(45987),a=s(79946),l=s(61338),e=s(53334),i=s(74095),r=s(91911),d=s(72925),u=s(24140);const m={name:"LocalVideoControlButton",components:{NcButton:i.A,VideoIcon:o.A,VideoOff:a.A},props:{conversation:{type:Object,required:!0},model:{type:Object,required:!0},disableKeyboardShortcuts:{type:Boolean,default:OCP.Accessibility.disableKeyboardShortcuts()},type:{type:String,default:"tertiary-no-background"},token:{type:String,required:!0}},computed:{isVideoAllowed(){return this.conversation.permissions&d._z.PERMISSIONS.PUBLISH_VIDEO},showVideoOn(){return this.model.attributes.videoAvailable&&this.model.attributes.videoEnabled},videoButtonTitle(){return this.isVideoAllowed?this.model.attributes.videoAvailable?this.model.attributes.videoEnabled?this.disableKeyboardShortcuts?(0,e.t)("spreed","Disable video"):(0,e.t)("spreed","Disable video (V)"):!this.model.getWebRtc()||!this.model.getWebRtc().connection||this.model.getWebRtc().connection.getSendVideoIfAvailable()?this.disableKeyboardShortcuts?(0,e.t)("spreed","Enable video"):(0,e.t)("spreed","Enable video (V)"):this.disableKeyboardShortcuts?(0,e.t)("spreed","Enable video - Your connection will be briefly interrupted when enabling the video for the first time"):(0,e.t)("spreed","Enable video (V) - Your connection will be briefly interrupted when enabling the video for the first time"):(0,e.t)("spreed","No video. Click to select device"):(0,e.t)("spreed","You are not allowed to enable video")},videoButtonAriaLabel(){return this.model.attributes.videoAvailable?this.model.attributes.videoEnabled?(0,e.t)("spreed","Disable video"):!this.model.getWebRtc()||!this.model.getWebRtc().connection||this.model.getWebRtc().connection.getSendVideoIfAvailable()?(0,e.t)("spreed","Enable video"):(0,e.t)("spreed","Enable video. Your connection will be briefly interrupted when enabling the video for the first time"):(0,e.t)("spreed","No video. Click to select device")}},created(){(0,r.C)("v",this.toggleVideo)},mounted(){(0,l.B1)("local-video-control-button:toggle-video",this.updateDeviceState)},beforeDestroy(){(0,l.al)("local-video-control-button:toggle-video",this.updateDeviceState)},methods:{t:e.t,toggleVideo(){if(!this.model.attributes.videoAvailable){(0,l.Ic)("talk:media-settings:show");return}this.model.attributes.videoEnabled?this.model.disableVideo():this.model.enableVideo()},updateDeviceState(){u.A.getItem("videoDisabled_"+this.token)?this.model.disableVideo():this.model.enableVideo()}}}}),83017:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(24074),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),83325:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(90332),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),83461:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(44076),a=s(39957),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),83713:((c,_,s)=>{"use strict";s.d(_,{A:()=>u});var o=s(36432),a=s.n(o),l=s(6484),e=s(53334),i=s(74095),r=s(41850),d=s(10919);const u={name:"PresenterOverlay",components:{AccountBox:l.A,VueDraggableResizable:a(),NcButton:i.A,LocalVideo:r.A,VideoVue:d.A},props:{token:{type:String,required:!0},model:{type:Object,required:!0},sharedData:{type:Object,required:!0},isCollapsed:{type:Boolean,required:!0},isLocalPresenter:{type:Boolean,default:!1},localMediaModel:{type:Object,default:null}},emits:["click"],data(){return{presenterOverlaySize:128,isDragging:!1}},mounted(){window.addEventListener("resize",this.updateSize)},beforeDestroy(){window.removeEventListener("resize",this.updateSize)},methods:{t:e.t,updateSize(){this.presenterOverlaySize=Math.min(Math.max(window.innerWidth*.1,100),242)}}}}),83823:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(7821),a=s(22757),l=s(17204),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"b68e0a8c",null);const r=i.exports}),84466:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".solid[data-v-6f517b3b]{margin:0}.call-duration-hint[data-v-6f517b3b]{display:flex;padding:calc(var(--default-grid-baseline)*2)}.call-time[data-v-6f517b3b]{display:flex;justify-content:center;align-items:center;height:var(--default-clickable-area);font-weight:bold}.call-time__text[data-v-6f517b3b]{display:flex;flex-direction:column;align-items:center}.call-time__placeholder[data-v-6f517b3b]{height:0;overflow:hidden}[data-v-6f517b3b] .button-vue{justify-content:left !important;color:#fff !important}[data-v-6f517b3b] .button-vue:disabled{opacity:1 !important;pointer-events:none}","",{version:3,sources:["webpack://./src/components/TopBar/CallTime.vue"],names:[],mappings:"AAEA,wBACC,QAAA,CAED,qCACC,YAAA,CACA,4CAAA,CAED,4BACC,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,oCAAA,CACA,gBAAA,CAEA,kCACC,YAAA,CACA,qBAAA,CACA,kBAAA,CAGD,yCACC,QAAA,CACA,eAAA,CAIF,8BACC,+BAAA,CACA,qBAAA,CAEA,uCACC,oBAAA,CACA,mBAAA",sourcesContent:[`

.solid {
	margin: 0;
}
.call-duration-hint {
	display: flex;
	padding: calc(var(--default-grid-baseline) * 2);
}
.call-time {
	display: flex;
	justify-content: center;
	align-items: center;
	height: var(--default-clickable-area);
	font-weight: bold;

	&__text {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__placeholder {
		height: 0;
		overflow: hidden;
	}
}

:deep(.button-vue) {
	justify-content: left !important;
	color: #fff !important;

	&:disabled {
		opacity: 1 !important;
		pointer-events: none;
	}
}

`],sourceRoot:""}]);const r=i}),84540:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return e.isCollapsed?i("NcButton",{staticClass:"presenter-overlay--collapsed",attrs:{"aria-label":e.t("spreed","Show presenter"),title:e.t("spreed","Show presenter"),type:"tertiary-no-background"},on:{click:function(r){return e.$emit("click")}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("AccountBox",{attrs:{"fill-color":"#ffffff",size:20}})]},proxy:!0}])}):i("VueDraggableResizable",{key:e.presenterOverlaySize,attrs:{parent:"",resizable:!1,h:e.presenterOverlaySize,w:e.presenterOverlaySize,x:10,y:10},on:{dragging:function(r){e.isDragging=!0},dragstop:function(r){e.isDragging=!1}}},[e.isLocalPresenter?i("LocalVideo",{staticClass:"presenter-overlay__video",attrs:{token:e.token,"local-media-model":e.localMediaModel,"local-call-participant-model":e.model,"is-presenter-overlay":"","un-selectable":"","hide-bottom-bar":""},on:{"click-presenter":function(r){return e.$emit("click")}}}):i("VideoVue",{staticClass:"presenter-overlay__video",class:{dragging:e.isDragging},attrs:{token:e.token,model:e.model,"shared-data":e.sharedData,"is-presenter-overlay":"","un-selectable":"","hide-bottom-bar":""},on:{"click-presenter":function(r){return e.$emit("click")}}})],1)},a=[]}),84661:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(3694);const a=o.A}),84830:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(72079);const a=o.A}),85630:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(31307),a=s(90630),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),85747:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(22492);const a=o.A}),85796:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon dots-circle-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M12 19C13.1 19 14 19.9 14 21S13.1 23 12 23 10 22.1 10 21 10.9 19 12 19M12 1C13.1 1 14 1.9 14 3S13.1 5 12 5 10 4.1 10 3 10.9 1 12 1M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M3 10C4.1 10 5 10.9 5 12S4.1 14 3 14 1 13.1 1 12 1.9 10 3 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M21 10C22.1 10 23 10.9 23 12S22.1 14 21 14 19 13.1 19 12 19.9 10 21 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),86067:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon account-off-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M12,4A4,4 0 0,1 16,8C16,9.95 14.6,11.58 12.75,11.93L8.07,7.25C8.42,5.4 10.05,4 12,4M12.28,14L18.28,20L20,21.72L18.73,23L15.73,20H4V18C4,16.16 6.5,14.61 9.87,14.14L2.78,7.05L4.05,5.78L12.28,14M20,18V19.18L15.14,14.32C18,14.93 20,16.35 20,18Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),86604:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(54716);const a=o.A}),87385:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon menu-down-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M7,10L12,15L17,10H7Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),87660:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"FullscreenIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),87682:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"empty-call-view",class:{"empty-call-view--sidebar":e.isSidebar,"empty-call-view--small":e.isSmall},attrs:{"data-theme-dark":""}},[i(e.emptyCallViewIcon,{tag:"component",staticClass:"empty-call-view__icon",attrs:{size:e.isSidebar?32:64}}),e._v(" "),i("h2",[e._v(e._s(e.title))]),e._v(" "),e.isSmall?e._e():[e.message?i("p",{staticClass:"emptycontent-additional"},[e._v(`
			`+e._s(e.message)+`
		`)]):e._e(),e._v(" "),e.showLink?i("NcButton",{attrs:{type:"primary"},on:{click:function(r){return r.stopPropagation(),e.handleCopyLink.apply(null,arguments)}}},[e._v(`
			`+e._s(e.t("spreed","Copy link"))+`
		`)]):e._e()]],2)},a=[]}),88307:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(50211),a=s(99545),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),88614:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".reaction__group[data-v-b68e0a8c] .nc-button-group-content{flex-wrap:wrap;justify-content:flex-start;gap:0;width:calc(var(--reactions-in-single-row)*var(--default-clickable-area))}.reaction__button[data-v-b68e0a8c]{flex:0 0 calc(100%/var(--reactions-in-single-row)) !important}","",{version:3,sources:["webpack://./src/components/TopBar/ReactionMenu.vue"],names:[],mappings:"AAGE,2DACC,cAAA,CACA,0BAAA,CACA,KAAA,CACA,wEAAA,CAIF,mCACC,6DAAA",sourcesContent:[`
.reaction {
	&__group {
		:deep(.nc-button-group-content) {
			flex-wrap: wrap;
			justify-content: flex-start;
			gap: 0;
			width: calc(var(--reactions-in-single-row) * var(--default-clickable-area))
		}
	}

	&__button {
		flex: 0 0 calc(100% / var(--reactions-in-single-row)) !important;
	}
}
`],sourceRoot:""}]);const r=i}),88781:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(30641),a=s(46015),l=s(64852),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"c1af34de",null);const r=i.exports}),88823:((c,_,s)=>{"use strict";var o=s(72192)}),89115:((c,_,s)=>{"use strict";var o=s(67286)}),89362:((c,_,s)=>{"use strict";s.d(_,{A:()=>o.N});var o=s(46374)}),90332:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,'.not-connected video[data-v-0ddeea4c],.not-connected .avatar-container[data-v-0ddeea4c]{opacity:.5}.localVideoContainer[data-v-0ddeea4c]{grid-row-end:-1;border-radius:var(--border-radius-element, calc(var(--default-clickable-area) / 2));z-index:1}.video-container-grid[data-v-0ddeea4c]{position:relative;height:100%;width:100%;overflow:hidden;display:flex;flex-direction:column}.video-container-stripe[data-v-0ddeea4c]:not(.local-video--sidebar){--aspect-ratio: 1.33333;--stripe-height: 242px;position:relative;flex:0 0 calc(var(--aspect-ratio)*var(--stripe-height));overflow:hidden;display:flex;flex-direction:column;margin-top:auto;height:var(--stripe-height) !important}.video-container-big[data-v-0ddeea4c]{position:absolute;width:calc(100% - var(--grid-gap)*2);height:calc(100% - var(--grid-gap));display:flex;flex-direction:column}.video-container-big .videoWrapper[data-v-0ddeea4c]{margin:auto}.video-container-small[data-v-0ddeea4c]{border-radius:var(--border-radius-large)}.videoWrapper[data-v-0ddeea4c],.video[data-v-0ddeea4c]{height:100%;width:100%}.video-loading[data-v-0ddeea4c]{position:absolute;top:0;right:0;height:100%;width:100%}.video--fit[data-v-0ddeea4c]{object-fit:contain}.video--fill[data-v-0ddeea4c]{object-fit:cover}.avatar-container[data-v-0ddeea4c]{margin:auto}.presenter-overlay[data-v-0ddeea4c],.presenter-overlay *[data-v-0ddeea4c]{border-radius:50%}.localVideoContainer[data-v-0ddeea4c]::after{position:absolute;height:100%;width:100%;top:0;left:0;border-radius:var(--border-radius-element, calc(var(--default-clickable-area) / 2))}.presenter-overlay[data-v-0ddeea4c]::after{border-radius:50%;z-index:1}.hover-shadow[data-v-0ddeea4c]::after{content:"";box-shadow:inset 0 0 0 3px #fff;cursor:pointer}.speaking[data-v-0ddeea4c]::after{content:"";box-shadow:inset 0 0 0 2px #fff}.bottom-bar[data-v-0ddeea4c]{position:absolute;bottom:0;width:100%;padding:0 calc(var(--default-grid-baseline)*3);padding-bottom:calc(var(--default-grid-baseline)*2);display:flex;justify-content:center;align-items:center}.bottom-bar--big[data-v-0ddeea4c]{justify-content:center}.bottom-bar .bottom-bar__button[data-v-0ddeea4c]{opacity:.8;background-color:var(--color-background-dark)}.bottom-bar .bottom-bar__button[data-v-0ddeea4c]:hover,.bottom-bar .bottom-bar__button[data-v-0ddeea4c]:focus{opacity:1}.dev-mode-video--self[data-v-0ddeea4c]{object-fit:cover !important;border-radius:var(--border-radius-element, calc(var(--default-clickable-area) / 2))}.presenter-overlay .dev-mode-video--self[data-v-0ddeea4c]{border-radius:50%}.presenter-icon__hide[data-v-0ddeea4c]{position:absolute;color:#fff;left:calc(50% - var(--default-clickable-area)/2);top:calc(100% - var(--default-grid-baseline) - var(--default-clickable-area));opacity:.7;background-color:rgba(0,0,0,.5);border-radius:50%;padding:6px;width:var(--default-clickable-area);height:var(--default-clickable-area);z-index:2}.presenter-icon__hide[data-v-0ddeea4c]:hover{cursor:pointer;opacity:.9}',"",{version:3,sources:["webpack://./src/components/CallView/shared/LocalVideo.vue"],names:[],mappings:"AAEC,wFAEC,UAAA,CAKF,sCACC,eAAA,CACA,mFAAA,CACA,SAAA,CAGD,uCACC,iBAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,YAAA,CACA,qBAAA,CAGD,oEAEC,uBAAA,CACA,sBAAA,CACA,iBAAA,CACA,uDAAA,CACA,eAAA,CACA,YAAA,CACA,qBAAA,CACA,eAAA,CACA,sCAAA,CAGD,sCACC,iBAAA,CACA,oCAAA,CACA,mCAAA,CACA,YAAA,CACA,qBAAA,CAEA,oDACC,WAAA,CAIF,wCACC,wCAAA,CAGD,uDAEC,WAAA,CACA,UAAA,CAGD,gCACC,iBAAA,CACA,KAAA,CACA,OAAA,CACA,WAAA,CACA,UAAA,CAGD,6BAEC,kBAAA,CAGD,8BAEC,gBAAA,CAGD,mCACC,WAAA,CAGD,0EAEC,iBAAA,CAGD,6CACC,iBAAA,CACA,WAAA,CACA,UAAA,CACA,KAAA,CACA,MAAA,CACA,mFAAA,CAGD,2CACC,iBAAA,CACA,SAAA,CAGD,sCACC,UAAA,CACA,+BAAA,CACA,cAAA,CAGD,kCACC,UAAA,CACA,+BAAA,CAGD,6BACC,iBAAA,CACA,QAAA,CACA,UAAA,CACA,8CAAA,CACA,mDAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAEA,kCACC,sBAAA,CAGD,iDACC,UAAA,CACA,6CAAA,CAEA,8GAEC,SAAA,CAKH,uCACC,2BAAA,CACA,mFAAA,CAEA,0DACC,iBAAA,CAIF,uCACC,iBAAA,CACA,UAAA,CACA,gDAAA,CACA,6EAAA,CACA,UAAA,CACA,+BAAA,CACA,iBAAA,CACA,WAAA,CACA,mCAAA,CACA,oCAAA,CACA,SAAA,CAEA,6CACC,cAAA,CACA,UAAA",sourcesContent:[`
.not-connected {
	video,
	.avatar-container {
		opacity: 0.5;
	}
}

// Always display the local video in the last row
.localVideoContainer {
	grid-row-end: -1;
	border-radius: var(--border-radius-element, calc(var(--default-clickable-area) / 2));
	z-index: 1;
}

.video-container-grid {
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
}

.video-container-stripe:not(.local-video--sidebar) {
	// aspect-ratio is set according to the maximum video resolution after applying constraints (720*540)
	--aspect-ratio: 1.33333;
	--stripe-height: 242px;
	position: relative;
	flex: 0 0 calc(var(--aspect-ratio) * var(--stripe-height));
	overflow: hidden;
	display: flex;
	flex-direction: column;
	margin-top: auto;
	height: var(--stripe-height) !important;
}

.video-container-big {
	position: absolute;
	width: calc(100% - var(--grid-gap) * 2);
	height: calc(100% - var(--grid-gap));
	display: flex;
	flex-direction: column;

	& .videoWrapper {
		margin: auto;
	}
}

.video-container-small {
	border-radius: var(--border-radius-large);
}

.videoWrapper,
.video {
	height: 100%;
	width: 100%;
}

.video-loading {
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 100%;
}

.video--fit {
	/* Fit the frame */
	object-fit: contain;
}

.video--fill {
	/* Fill the frame */
	object-fit: cover;
}

.avatar-container {
	margin: auto;
}

.presenter-overlay,
.presenter-overlay * {
	border-radius: 50%;
}

.localVideoContainer::after {
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	border-radius: var(--border-radius-element, calc(var(--default-clickable-area) / 2));
}

.presenter-overlay::after {
	border-radius: 50%;
	z-index: 1;
}

.hover-shadow::after {
	content: '';
	box-shadow: inset 0 0 0 3px white;
	cursor: pointer;
}

.speaking::after {
	content: '';
	box-shadow: inset 0 0 0 2px white;
}

.bottom-bar {
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 0 calc(var(--default-grid-baseline) * 3);
	padding-bottom: calc(var(--default-grid-baseline) * 2);
	display: flex;
	justify-content: center;
	align-items: center;

	&--big {
		justify-content: center;
	}

	& &__button {
		opacity: 0.8;
		background-color: var(--color-background-dark);

		&:hover,
		&:focus {
			opacity: 1;
		}
	}
}

.dev-mode-video--self {
	object-fit: cover !important;
	border-radius: var(--border-radius-element, calc(var(--default-clickable-area) / 2));

	.presenter-overlay & {
		border-radius: 50%;
	}
}

.presenter-icon__hide {
	position: absolute;
	color: white;
	left: calc(50% - var(--default-clickable-area) / 2);
	top: calc(100% - var(--default-grid-baseline) - var(--default-clickable-area));
	opacity: 0.7;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 50%;
	padding: 6px;
	width: var(--default-clickable-area);
	height: var(--default-clickable-area);
	z-index: 2; // Above video and its border

	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}

}
`],sourceRoot:""}]);const r=i}),90480:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(80619),a=s(35430),l=s(14196),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"6f517b3b",null);const r=i.exports}),90630:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(9216);const a=o.A}),90975:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon stop-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M18,18H6V6H18V18Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),91682:((c,_,s)=>{"use strict";s.d(_,{A:()=>o});const o={name:"AccountCircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}}),91736:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("TransitionWrapper",{staticClass:"toaster",attrs:{name:"toast",tag:"ul",group:""}},e._l(e.toasts,function(r){return i("li",{key:r.seed,staticClass:"toast",style:e.styled(r.name,r.seed)},[r.reactionURL?i("img",{staticClass:"toast__reaction-img",attrs:{src:r.reactionURL,alt:r.reaction,width:"34",height:"34"}}):i("span",{staticClass:"toast__reaction"},[e._v(`
			`+e._s(r.reaction)+`
		`)]),e._v(" "),i("span",{staticClass:"toast__name"},[e._v(`
			`+e._s(r.name)+`
		`)])])}),0)},a=[]}),92252:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(49840),a=s(5040),l=s(65335),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"c3944ea6",null);const r=i.exports}),92289:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(49976),a=s(42525),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),92291:((c,_,s)=>{"use strict";var o=s(39418)}),92343:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon chevron-right-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),92787:((c,_,s)=>{"use strict";s.d(_,{A:()=>i});var o=s(5196),a=s(59429),l=s(14486),e=(0,l.A)(a.A,o.X,o.Y,!1,null,null,null);const i=e.exports}),94438:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(77377);const a=o.A}),95146:((c,_,s)=>{"use strict";s.d(_,{A:()=>P});var o=s(85471),a=s(89654),l=s(86451),e=s(63274),i=s(54841),r=s(53334),d=s(57505),u=s(24764),m=s(74095),h=s(94219),v=s(71752),E=s(998),p=s(72925),A=s(8888);const P={name:"BreakoutRoomsParticipantsEditor",components:{NcActions:u.A,NcActionButton:d.A,DotsCircle:e.A,Reload:i.A,BreakoutRoomItem:E.A,SelectableParticipant:v.A,NcButton:m.A,ArrowLeft:a.A,Delete:l.A,NcDialog:h.A},props:{token:{type:String,required:!0},roomNumber:{type:Number,default:void 0},breakoutRooms:{type:Array,default:()=>[]}},emits:["back","close"],setup(){return(0,o.Gt)("bulkParticipantsSelection",!0),{breakoutRoomsStore:(0,A.w)()}},data(){return{selectedParticipants:[],assignments:[],showDialog:!1}},computed:{participants(){return this.$store.getters.participantsList(this.token).filter(C=>(C.participantType===p._z.TYPE.USER||C.participantType===p._z.TYPE.GUEST)&&C.actorType===p.Rf.ACTOR_TYPE.USERS)},attendeesById(){return this.$store.state.participantsStore.attendees[this.token]},unassignedParticipants(){if(this.assignments.length===0)return[];const C=this.assignments.flat();return this.participants.filter(O=>!C.includes(O.attendeeId))},hasSelected(){return this.selectedParticipants.length>0},hasAssigned(){return this.assignments.flat().length>0},hasUnassigned(){return this.unassignedParticipants.length>0},isReorganizingAttendees(){return this.breakoutRooms.length},confirmButtonLabel(){return this.isReorganizingAttendees?(0,r.t)("spreed","Confirm"):(0,r.t)("spreed","Create breakout rooms")},confirmButtonType(){return this.hasUnassigned?"secondary":"primary"},resetButtonLabel(){return(0,r.t)("spreed","Reset")},conversation(){return this.$store.getters.conversation(this.token)},breakoutRoomsConfigured(){return this.conversation.breakoutRoomMode!==p.si.BREAKOUT_ROOM_MODE.NOT_CONFIGURED},deleteButtonLabel(){return(0,r.t)("spreed","Delete breakout rooms")},dialogMessage(){return(0,r.t)("spreed","Current breakout rooms and settings will be lost")}},created(){this.initialiseAssignments()},methods:{t:r.t,initialiseAssignments(C){this.isReorganizingAttendees&&!C?this.assignments=this.breakoutRooms.map(O=>{const R=this.$store.getters.participantsList(O.token).map(T=>T.actorId);return this.participants.filter(T=>R.includes(T.actorId)).map(T=>T.attendeeId)}):this.assignments=Array.from(Array(this.isReorganizingAttendees?this.breakoutRooms.length:this.roomNumber),()=>[])},assignAttendees(C){this.selectedParticipants.forEach(O=>{if(this.unassignedParticipants.find(T=>T.attendeeId===O)){this.assignments[C].push(O);return}const R=this.assignments.findIndex(T=>T.includes(O));R!==C&&(this.assignments[R].splice(this.assignments[R].findIndex(T=>T===O),1),this.assignments[C].push(O))}),this.selectedParticipants=[]},roomName(C){return this.breakoutRooms[C]?.displayName??(0,r.t)("spreed","Room {roomNumber}",{roomNumber:C+1})},resetAssignments(){this.selectedParticipants=[],this.assignments=[],this.initialiseAssignments(!0)},goBack(){this.$emit("back")},handleSubmit(){this.isReorganizingAttendees?this.reorganizeAttendees():this.createRooms()},createAttendeeMap(){const C={};return this.assignments.forEach((O,R)=>{O.forEach(T=>{C[T]=R})}),JSON.stringify(C)},createRooms(){this.breakoutRoomsStore.configureBreakoutRooms({token:this.token,mode:2,amount:this.roomNumber,attendeeMap:this.createAttendeeMap()}),this.$emit("close")},reorganizeAttendees(){this.breakoutRoomsStore.reorganizeAttendees({token:this.token,attendeeMap:this.createAttendeeMap()}),this.$emit("close")},toggleShowDialog(){this.showDialog=!this.showDialog},deleteBreakoutRooms(){this.breakoutRoomsStore.deleteBreakoutRooms(this.token)}}}}),95209:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".breakout-rooms-editor[data-v-54acf4da]{display:flex;flex-direction:column;padding:20px;justify-content:flex-start}.breakout-rooms-editor__number-input[data-v-54acf4da]{display:block;margin-bottom:calc(var(--default-grid-baseline)*4)}.breakout-rooms-editor__caption[data-v-54acf4da]{font-weight:bold;display:block;margin:calc(var(--default-grid-baseline)*3) 0 calc(var(--default-grid-baseline)*2) 0}.breakout-rooms-editor__error-hint[data-v-54acf4da]{color:var(--color-error);font-size:.8rem}.breakout-rooms-editor__participants-step[data-v-54acf4da]{height:100%}.breakout-rooms-editor__main[data-v-54acf4da]{height:100%;align-self:flex-start}.breakout-rooms-editor__buttons[data-v-54acf4da]{display:flex;justify-content:flex-end;gap:calc(var(--default-grid-baseline)*2);width:100%}","",{version:3,sources:["webpack://./src/components/BreakoutRoomsEditor/BreakoutRoomsEditor.vue"],names:[],mappings:"AACA,wCACC,YAAA,CACA,qBAAA,CACA,YAAA,CACA,0BAAA,CAEA,sDACC,aAAA,CACA,kDAAA,CAGD,iDACC,gBAAA,CACA,aAAA,CACA,oFAAA,CAGD,oDACC,wBAAA,CACA,eAAA,CAGD,2DACC,WAAA,CAGD,8CACC,WAAA,CACA,qBAAA,CAGD,iDACC,YAAA,CACA,wBAAA,CACA,wCAAA,CACA,UAAA",sourcesContent:[`
.breakout-rooms-editor {
	display: flex;
	flex-direction: column;
	padding: 20px;
	justify-content: flex-start;

	&__number-input {
		display: block;
		margin-bottom: calc(var(--default-grid-baseline)*4);
	}

	&__caption {
		font-weight: bold;
		display: block;
		margin: calc(var(--default-grid-baseline)*3) 0 calc(var(--default-grid-baseline)*2) 0;
	}

	&__error-hint {
		color: var(--color-error);
		font-size: 0.8rem;
	}

	&__participants-step {
		height: 100%;
	}

	&__main {
		height: 100%;
		align-self: flex-start;
	}

	&__buttons {
		display: flex;
		justify-content: flex-end;
		gap: calc(var(--default-grid-baseline) * 2);
		width: 100%;
	}
}
`],sourceRoot:""}]);const r=i}),95530:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(49349);const a=o.A}),95929:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(56754),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),95935:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("li",{key:e.roomName,staticClass:"breakout-room-item",on:{mouseenter:function(r){e.elementHoveredOrFocused=!0},mouseleave:function(r){e.elementHoveredOrFocused=!1}}},[i("div",{staticClass:"breakout-room-item__wrapper"},[i("NcButton",{attrs:{type:"tertiary","aria-label":e.toggleParticipantsListLabel},on:{focus:function(r){e.elementHoveredOrFocused=!0},blur:function(r){e.elementHoveredOrFocused=!1},click:e.toggleParticipantsVisibility},scopedSlots:e._u([{key:"icon",fn:function(){return[e.elementHoveredOrFocused?e.showParticipants?i("MenuDown",{attrs:{size:20}}):i("MenuRight",{attrs:{size:20}}):i("DotsCircle",{attrs:{size:20}})]},proxy:!0}])}),e._v(" "),i("span",{staticClass:"breakout-room-item__room-name"},[e._v(`
			`+e._s(e.roomName)+`
		`)]),e._v(" "),e.isParticipantsEditor?e._e():[e.showJoinButton?i("NcButton",{on:{click:e.joinRoom}},[e._v(`
				`+e._s(e.t("spreed","Join"))+`
			`)]):e._e(),e._v(" "),e.canModerate?i("NcActions",{attrs:{inline:e.showAssistanceButton?1:0,"force-menu":!e.showAssistanceButton}},[e.showAssistanceButton?i("NcActionButton",{on:{click:e.dismissRequestAssistance},scopedSlots:e._u([{key:"icon",fn:function(){return[i("HandBackLeft",{attrs:{size:16}})]},proxy:!0}],null,!1,2548594270)},[e._v(`
					`+e._s(e.t("spreed","Dismiss request for assistance"))+`
				`)]):e._e(),e._v(" "),i("NcActionButton",{on:{click:function(r){e.isDialogOpened=!0}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("Send",{attrs:{size:16}})]},proxy:!0}],null,!1,2211961201)},[e._v(`
					`+e._s(e.t("spreed","Send message to room"))+`
				`)])],1):e._e(),e._v(" "),e.isDialogOpened?i("SendMessageDialog",{attrs:{"dialog-title":e.dialogTitle,token:e.roomToken},on:{submit:e.sentMessageToRoom,close:function(r){e.isDialogOpened=!1}}}):e._e()]],2),e._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:e.showParticipants,expression:"showParticipants"}]},[e._t("default")],2)])},a=[]}),96366:((c,_,s)=>{"use strict";s.d(_,{A:()=>P});var o=s(61908),a=s(68051),l=s(50402),e=s(70361),i=s(80084),r=s(45987),d=s(79946),u=s(61338),m=s(53334),h=s(74095),v=s(64902),E=s(72925),p=s(50634),A=s(50123);const P={name:"VideoBottomBar",components:{AlertCircle:o.A,HandBackLeft:a.A,Microphone:l.A,MicrophoneOff:e.A,Monitor:i.A,NcButton:h.A,TransitionWrapper:v.A,VideoIcon:r.A,VideoOff:d.A},inheritAttrs:!1,props:{token:{type:String,required:!0},isSidebar:{type:Boolean,default:!1},hasShadow:{type:Boolean,default:!1},isBig:{type:Boolean,default:!1},participantName:{type:String,default:""},showVideoOverlay:{type:Boolean,default:!0},model:{type:Object,required:!0},sharedData:{type:Object,required:!0},isScreen:{type:Boolean,default:!1},isPromoted:{type:Boolean,default:!1},isSelected:{type:Boolean,default:!1}},emits:["bottom-bar-hover"],setup(){return{callViewStore:(0,p.e)()}},data(){return{mouseover:!1}},computed:{connectionStateFailedNoRestart(){return this.model.attributes.connectionState===A.K.FAILED_NO_RESTART},showRaiseHandIndicator(){return!this.connectionStateFailedNoRestart&&this.model.attributes.raisedHand.state},showStopFollowingButton(){return this.isBig&&this.callViewStore.selectedVideoPeerId!==null},showAudioIndicator(){return!this.connectionStateFailedNoRestart&&!this.isAudioButtonHidden},isAudioButtonHidden(){return this.model.attributes.audioAvailable&&!this.canFullModerate},isAudioButtonDisabled(){return!this.model.attributes.audioAvailable||!this.canFullModerate},audioButtonTitle(){return this.model.attributes.audioAvailable?(0,m.t)("spreed","Mute"):(0,m.t)("spreed","Muted")},showVideoIndicator(){return!this.connectionStateFailedNoRestart&&this.model.attributes.videoAvailable},isRemoteVideoEnabled(){return this.sharedData.remoteVideoBlocker?.isVideoEnabled()},isRemoteVideoBlocked(){return this.sharedData.remoteVideoBlocker&&!this.sharedData.remoteVideoBlocker.isVideoEnabled()},videoButtonTitle(){return this.isRemoteVideoEnabled?(0,m.t)("spreed","Disable video"):(0,m.t)("spreed","Enable video")},showScreenSharingIndicator(){return!this.connectionStateFailedNoRestart&&this.model.attributes.screen},isCurrentlyActive(){return this.isSelected||this.model.attributes.speaking},showParticipantName(){return!this.model.attributes.videoAvailable||this.isRemoteVideoBlocked||this.showVideoOverlay||this.isPromoted||this.isCurrentlyActive},participantType(){return this.$store.getters.conversation(this.token)?.participantType||(this.$store.getters.getUserId()!==null?E._z.TYPE.USER:E._z.TYPE.GUEST)},canFullModerate(){return this.participantType===E._z.TYPE.OWNER||this.participantType===E._z.TYPE.MODERATOR}},watch:{mouseover(C){this.isBig&&this.$emit("bottom-bar-hover",C)}},methods:{t:m.t,forceMute(){this.model.forceMute()},toggleVideo(){this.sharedData.remoteVideoBlocker.setVideoEnabled(!this.isRemoteVideoEnabled)},switchToScreen(){(!this.sharedData.screenVisible||!this.isBig)&&(0,u.Ic)("switch-screen-to-id",this.model.attributes.peerId)},handleStopFollowing(){this.callViewStore.stopPresentation(this.token),this.callViewStore.setSelectedVideoPeerId(null)}}}}),96556:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"wrapper",class:{"wrapper--big":e.isBig},on:{mouseover:function(r){r.stopPropagation(),e.mouseover=!0},mouseleave:function(r){r.stopPropagation(),e.mouseover=!1}}},[i("TransitionWrapper",{attrs:{name:"fade"}},[e.showRaiseHandIndicator?i("div",{staticClass:"status-indicator raiseHandIndicator"},[i("HandBackLeft",{attrs:{size:18,"fill-color":"#ffffff"}})],1):e._e()]),e._v(" "),e.isSidebar?e._e():i("div",{staticClass:"bottom-bar"},[i("TransitionWrapper",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.showParticipantName,expression:"showParticipantName"}],staticClass:"participant-name",class:{"participant-name--active":e.isCurrentlyActive,"participant-name--has-shadow":e.hasShadow}},[e._v(`
				`+e._s(e.participantName)+`
			`)])]),e._v(" "),e.isScreen?e._e():i("TransitionWrapper",{directives:[{name:"show",rawName:"v-show",value:e.showVideoOverlay,expression:"showVideoOverlay"}],staticClass:"media-indicators",attrs:{name:"fade",group:""}},[e.showAudioIndicator?i("NcButton",{key:"audioIndicator",staticClass:"audioIndicator",attrs:{title:e.audioButtonTitle,"aria-label":e.audioButtonTitle,type:"tertiary-no-background",disabled:e.isAudioButtonDisabled},on:{click:function(r){return r.stopPropagation(),e.forceMute.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.model.attributes.audioAvailable?i("Microphone",{attrs:{size:20,"fill-color":"#ffffff"}}):i("MicrophoneOff",{attrs:{size:20,"fill-color":"#ffffff"}})]},proxy:!0}],null,!1,3980758650)}):e._e(),e._v(" "),e.showVideoIndicator?i("NcButton",{key:"videoIndicator",staticClass:"videoIndicator",attrs:{title:e.videoButtonTitle,"aria-label":e.videoButtonTitle,type:"tertiary-no-background"},on:{click:function(r){return r.stopPropagation(),e.toggleVideo.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[e.isRemoteVideoEnabled?i("VideoIcon",{attrs:{size:20,"fill-color":"#ffffff"}}):i("VideoOff",{attrs:{size:20,"fill-color":"#ffffff"}})]},proxy:!0}],null,!1,408660308)}):e._e(),e._v(" "),e.showScreenSharingIndicator?i("NcButton",{key:"screenSharingIndicator",staticClass:"screenSharingIndicator",class:{"screen-visible":e.sharedData.screenVisible},attrs:{title:e.t("spreed","Show screen"),"aria-label":e.t("spreed","Show screen"),type:"tertiary-no-background"},on:{click:function(r){return r.stopPropagation(),e.switchToScreen.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[i("Monitor",{attrs:{size:20,"fill-color":"#ffffff"}})]},proxy:!0}],null,!1,1275473774)}):e._e(),e._v(" "),e.connectionStateFailedNoRestart?i("div",{key:"iceFailedIndicator",staticClass:"status-indicator iceFailedIndicator"},[i("AlertCircle",{attrs:{size:20,"fill-color":"#ffffff"}})],1):e._e()],1),e._v(" "),e.showStopFollowingButton?i("NcButton",{staticClass:"following-button",attrs:{type:"tertiary"},on:{click:e.handleStopFollowing}},[e._v(`
			`+e._s(e.t("spreed","Stop following"))+`
		`)]):e._e()],1)],1)},a=[]}),96689:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(37541),a=s(56081),l=s(276),e=s(14486),i=(0,e.A)(a.A,o.X,o.Y,!1,null,"786c7d84",null);const r=i.exports}),96693:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(53514);const a=o.A}),97007:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("label",{staticClass:"selectable-participant",attrs:{"data-nav-id":e.participantNavigationId}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.modelProxy,expression:"modelProxy"}],staticClass:"selectable-participant__checkbox",attrs:{"aria-label":e.participantAriaLabel,type:"checkbox"},domProps:{value:e.value,checked:Array.isArray(e.modelProxy)?e._i(e.modelProxy,e.value)>-1:e.modelProxy},on:{keydown:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:(r.stopPropagation(),r.preventDefault(),e.handleEnter.apply(null,arguments))},change:function(r){var d=e.modelProxy,u=r.target,m=!!u.checked;if(Array.isArray(d)){var h=e.value,v=e._i(d,h);u.checked?v<0&&(e.modelProxy=d.concat([h])):v>-1&&(e.modelProxy=d.slice(0,v).concat(d.slice(v+1)))}else e.modelProxy=m}}}),e._v(" "),i("AvatarWrapper",{attrs:{id:e.actorId,token:"new",name:e.computedName,source:e.actorType,"disable-menu":"","disable-tooltip":"","preloaded-user-status":e.preloadedUserStatus,"show-user-status":e.showUserStatus}}),e._v(" "),i("span",{staticClass:"selectable-participant__content"},[i("span",{staticClass:"selectable-participant__content-name"},[e._v(`
			`+e._s(e.computedName)+`
		`)]),e._v(" "),e.participantStatus?i("span",{staticClass:"selectable-participant__content-subname"},[e._v(`
			`+e._s(e.participantStatus)+`
		`)]):e._e()]),e._v(" "),e.isBulkSelection?i("IconCheck",{staticClass:"selectable-participant__check-icon",attrs:{size:20}}):e._e()],1)},a=[]}),97318:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon chevron-left-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),97320:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".no-video-available[data-v-420763c6]{opacity:.7}","",{version:3,sources:["webpack://./src/components/CallView/shared/LocalVideoControlButton.vue"],names:[],mappings:"AACA,qCACC,UAAA",sourcesContent:[`
.no-video-available {
	opacity: .7;
}
`],sourceRoot:""}]);const r=i}),98270:((c,_,s)=>{"use strict";s.d(_,{A:()=>d});var o=s(13188),a=s(61338),l=s(53334),e=s(57505),i=s(89362),r=s(24764);const d={name:"ReactionMenu",components:{NcActions:r.A,NcActionButton:e.A,NcActionButtonGroup:i.A,IconEmoticonOutline:o.A},props:{token:{type:String,required:!0},localCallParticipantModel:{type:Object,required:!0},supportedReactions:{type:Array,validator:u=>u.every(m=>typeof m=="string"),required:!0}},data(){return{throttleTimer:null}},computed:{reactionsInSingleRow(){return Math.ceil(this.supportedReactions.length/2)}},methods:{t:l.t,throttledSendReaction(u){this.throttleTimer||(this.sendReaction(u),this.throttleTimer=setTimeout(()=>{this.throttleTimer=null},2e3))},sendReaction(u){this.localCallParticipantModel.sendReaction(u),(0,a.Ic)("send-reaction",{model:this.localCallParticipantModel,reaction:u})}}}}),98381:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,'.not-connected video[data-v-163828b4],.not-connected .avatar-container[data-v-163828b4]{opacity:.5}.video-container-grid[data-v-163828b4]{position:relative;height:100%;width:100%;overflow:hidden;display:flex;flex-direction:column;border-radius:var(--border-radius-element, calc(var(--default-clickable-area) / 2))}.video-container-big[data-v-163828b4]{position:absolute}.video-container-big.one-to-one[data-v-163828b4]{width:calc(100% - var(--grid-gap)*2);height:calc(100% - var(--grid-gap))}.video-container-big .videoWrapper[data-v-163828b4]{margin:auto}.avatar-container[data-v-163828b4]{width:100%;height:100%;position:absolute;display:flex;justify-content:center;align-items:center}.placeholder-for-promoted[data-v-163828b4]{background:radial-gradient(146.1% 146.1% at 50% 50%, #333333 0%, #858585 100%);width:100%;height:100%;position:absolute;display:flex;justify-content:center;align-items:center;border-radius:var(--border-radius-element, calc(var(--default-clickable-area) / 2))}.videoWrapper[data-v-163828b4],.video[data-v-163828b4]{height:100%;width:100%;border-radius:var(--border-radius-element, calc(var(--default-clickable-area) / 2))}.videoWrapper.presenter-overlay>video[data-v-163828b4]{border-radius:50%}.videoWrapper.presenter-overlay>.dev-mode-video--presenter[data-v-163828b4]{position:absolute;top:0;left:0;height:100%;width:100%;object-fit:cover;border-radius:50%}.video-loading[data-v-163828b4]{position:absolute;top:0;right:0;height:100%;width:100%}.video--fit[data-v-163828b4]{object-fit:contain}.video--fill[data-v-163828b4]{object-fit:cover}.connection-message[data-v-163828b4]{width:100%;position:absolute;top:calc(50% + 50px);text-align:center;z-index:1;color:#fff;filter:drop-shadow(1px 1px 4px var(--color-box-shadow))}.connection-message.below-avatar[data-v-163828b4]{top:calc(50% + 80px)}.video-container[data-v-163828b4]::after{position:absolute;height:100%;width:100%;top:0;left:0;border-radius:var(--border-radius-element, calc(var(--default-clickable-area) / 2))}.video-container.presenter-overlay[data-v-163828b4]::after{border-radius:50%;z-index:1}.video-container.speaking[data-v-163828b4]::after{content:"";box-shadow:inset 0 0 0 2px #fff}.video-container.hover[data-v-163828b4]::after{content:"";box-shadow:inset 0 0 0 3px #fff;cursor:pointer}.presenter-icon__hide[data-v-163828b4]{position:absolute;color:#fff;left:calc(50% - var(--default-clickable-area)/2);top:calc(100% - var(--default-grid-baseline) - var(--default-clickable-area));opacity:.7;background-color:rgba(0,0,0,.5);border-radius:50%;padding:6px;width:var(--default-clickable-area);height:var(--default-clickable-area);z-index:2}.presenter-icon__hide[data-v-163828b4]:hover{cursor:pointer;opacity:.9}',"",{version:3,sources:["webpack://./src/components/CallView/shared/VideoVue.vue"],names:[],mappings:"AAEC,wFAEC,UAAA,CAIF,uCACC,iBAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,YAAA,CACA,qBAAA,CACA,mFAAA,CAGD,sCACC,iBAAA,CAEA,iDACC,oCAAA,CACA,mCAAA,CAGD,oDACC,WAAA,CAIF,mCACC,UAAA,CACA,WAAA,CACA,iBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAGD,2CACC,8EAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,mFAAA,CAGD,uDAEC,WAAA,CACA,UAAA,CACA,mFAAA,CAIA,uDACC,iBAAA,CAED,4EACC,iBAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,UAAA,CACA,gBAAA,CACA,iBAAA,CAIF,gCACC,iBAAA,CACA,KAAA,CACA,OAAA,CACA,WAAA,CACA,UAAA,CAGD,6BAEC,kBAAA,CAGD,8BAEC,gBAAA,CAGD,qCACC,UAAA,CAEA,iBAAA,CACA,oBAAA,CAEA,iBAAA,CAEA,SAAA,CAEA,UAAA,CACA,uDAAA,CAEA,kDACC,oBAAA,CAIF,yCACC,iBAAA,CACA,WAAA,CACA,UAAA,CACA,KAAA,CACA,MAAA,CACA,mFAAA,CAGD,2DACC,iBAAA,CACA,SAAA,CAGD,kDACC,UAAA,CACA,+BAAA,CAGD,+CACC,UAAA,CACA,+BAAA,CACA,cAAA,CAGD,uCACC,iBAAA,CACA,UAAA,CACA,gDAAA,CACA,6EAAA,CACA,UAAA,CACA,+BAAA,CACA,iBAAA,CACA,WAAA,CACA,mCAAA,CACA,oCAAA,CACA,SAAA,CAEA,6CACC,cAAA,CACA,UAAA",sourcesContent:[`
.not-connected {
	video,
	.avatar-container {
		opacity: 0.5;
	}
}

.video-container-grid {
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	border-radius: var(--border-radius-element, calc(var(--default-clickable-area) / 2));
}

.video-container-big {
	position: absolute;

	&.one-to-one {
		width: calc(100% - var(--grid-gap) * 2);
		height: calc(100% - var(--grid-gap));
	}

	& .videoWrapper {
		margin: auto;
	}
}

.avatar-container {
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
}

.placeholder-for-promoted {
	background: radial-gradient(146.1% 146.1% at 50% 50%, #333333 0%, #858585 100%);
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: var(--border-radius-element, calc(var(--default-clickable-area) / 2));
}

.videoWrapper,
.video {
	height: 100%;
	width: 100%;
	border-radius: var(--border-radius-element, calc(var(--default-clickable-area) / 2));
}

.videoWrapper.presenter-overlay {
	& > video {
		border-radius: 50%;
	}
	& > .dev-mode-video--presenter {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 50%;
	}
}

.video-loading {
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 100%;
}

.video--fit {
	/* Fit the frame */
	object-fit: contain;
}

.video--fill {
	/* Fill the frame */
	object-fit: cover;
}

.connection-message {
	width: 100%;

	position: absolute;
	top: calc(50% + 50px);

	text-align: center;

	z-index: 1;

	color: white;
	filter: drop-shadow(1px 1px 4px var(--color-box-shadow));

	&.below-avatar {
		top: calc(50% + 80px);
	}
}

.video-container::after {
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	border-radius: var(--border-radius-element, calc(var(--default-clickable-area) / 2));
}

.video-container.presenter-overlay::after {
	border-radius: 50%;
	z-index: 1;
}

.video-container.speaking::after {
	content: '';
	box-shadow: inset 0 0 0 2px white;
}

.video-container.hover::after {
	content: '';
	box-shadow: inset 0 0 0 3px white;
	cursor: pointer;
}

.presenter-icon__hide {
	position: absolute;
	color: white;
	left: calc(50% - var(--default-clickable-area) / 2);
	top: calc(100% - var(--default-grid-baseline) - var(--default-clickable-area));
	opacity: 0.7;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 50%;
	padding: 6px;
	width: var(--default-clickable-area);
	height: var(--default-clickable-area);
	z-index: 2; // Above video and its border

	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}

}

`],sourceRoot:""}]);const r=i}),98414:((c,_,s)=>{"use strict";s.d(_,{A:()=>r});var o=s(71354),a=s.n(o),l=s(76314),e=s.n(l),i=e()(a());i.push([c.id,".selectable-participant[data-v-21da3298]{position:relative;display:flex;align-items:center;gap:calc(2*var(--default-grid-baseline));padding:var(--default-grid-baseline);margin:var(--default-grid-baseline);border-radius:var(--border-radius-element, 32px);line-height:20px}.selectable-participant[data-v-21da3298],.selectable-participant *[data-v-21da3298]{cursor:pointer}.selectable-participant[data-v-21da3298]:hover,.selectable-participant[data-v-21da3298]:focus-within,.selectable-participant[data-v-21da3298]:has(:active),.selectable-participant[data-v-21da3298]:has(:focus-visible){background-color:var(--color-background-hover)}.selectable-participant[data-v-21da3298]:has(input:focus-visible){outline:2px solid var(--color-main-text);box-shadow:0 0 0 4px var(--color-main-background)}.selectable-participant[data-v-21da3298]:has(input:checked){background-color:var(--color-primary-light)}.selectable-participant[data-v-21da3298]:has(input:checked):hover,.selectable-participant[data-v-21da3298]:has(input:checked):focus-within,.selectable-participant[data-v-21da3298]:has(input:checked):has(:focus-visible),.selectable-participant[data-v-21da3298]:has(input:checked):has(:active){background-color:var(--color-primary-light-hover)}.selectable-participant:has(input:checked) .selectable-participant__check-icon[data-v-21da3298]{display:flex}.selectable-participant__checkbox[data-v-21da3298]{position:absolute;top:0;left:0;z-index:-1;opacity:0}.selectable-participant__content[data-v-21da3298]{display:flex;flex-direction:column;align-items:flex-start}.selectable-participant__content-name[data-v-21da3298]{font-weight:500}.selectable-participant__content-subname[data-v-21da3298]{font-weight:400;color:var(--color-text-maxcontrast)}.selectable-participant__check-icon[data-v-21da3298]{display:none;margin-left:auto;width:var(--default-clickable-area);flex-shrink:0}","",{version:3,sources:["webpack://./src/components/BreakoutRoomsEditor/SelectableParticipant.vue"],names:[],mappings:"AAEA,yCACC,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,wCAAA,CACA,oCAAA,CACA,mCAAA,CACA,gDAAA,CACA,gBAAA,CAEA,oFACC,cAAA,CAGD,wNAIC,8CAAA,CAGD,kEACC,wCAAA,CACA,iDAAA,CAGD,4DACC,2CAAA,CAEA,oSAIC,iDAAA,CAIF,gGACC,YAAA,CAGD,mDACC,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,SAAA,CAGD,kDACC,YAAA,CACA,qBAAA,CACA,sBAAA,CAEA,uDACC,eAAA,CAED,0DACC,eAAA,CACA,mCAAA,CAIF,qDACC,YAAA,CACA,gBAAA,CACA,mCAAA,CACA,aAAA",sourcesContent:[`

.selectable-participant {
	position: relative;
	display: flex;
	align-items: center;
	gap: calc(2 * var(--default-grid-baseline));
	padding: var(--default-grid-baseline);
	margin: var(--default-grid-baseline);
	border-radius: var(--border-radius-element, 32px);
	line-height: 20px;

	&, & * {
		cursor: pointer;
	}

	&:hover,
	&:focus-within,
	&:has(:active),
	&:has(:focus-visible) {
		background-color: var(--color-background-hover);
	}

	&:has(input:focus-visible) {
		outline: 2px solid var(--color-main-text);
		box-shadow: 0 0 0 4px var(--color-main-background);
	}

	&:has(input:checked) {
		background-color: var(--color-primary-light);

		&:hover,
		&:focus-within,
		&:has(:focus-visible),
		&:has(:active) {
			background-color: var(--color-primary-light-hover);
		}
	}

	&:has(input:checked) &__check-icon {
		display: flex;
	}

	&__checkbox {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		opacity: 0;
	}

	&__content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		&-name {
			font-weight: 500;
		}
		&-subname {
			font-weight: 400;
			color: var(--color-text-maxcontrast);
		}
	}

	&__check-icon {
		display: none;
		margin-left: auto;
		width: var(--default-clickable-area);
		flex-shrink: 0;
	}
}

`],sourceRoot:""}]);const r=i}),98437:((c,_,s)=>{"use strict";s.d(_,{A:()=>m});var o=s(3227),a=s(26546),l=s(87366),e=s(53334),i=s(74095),r=s(88289),d=s(72925),u=s(48729);const m={name:"EmptyCallView",components:{NcButton:i.A,NcLoadingIcon:r.A,IconAccountMultiple:o.A,IconLink:a.A,IconPhone:l.A},props:{isGrid:{type:Boolean,default:!1},isSidebar:{type:Boolean,default:!1},isSmall:{type:Boolean,default:!1}},computed:{token(){return this.$store.getters.getToken()},isConnecting(){return this.$store.getters.isConnecting(this.token)},conversation(){return this.$store.getters.conversation(this.token)},isGroupConversation(){return this.conversation&&this.conversation.type===d.si.TYPE.GROUP},isPublicConversation(){return this.conversation&&this.conversation.type===d.si.TYPE.PUBLIC},isOneToOneConversation(){return this.conversation?.type===d.si.TYPE.ONE_TO_ONE||this.conversation?.type===d.si.TYPE.ONE_TO_ONE_FORMER},isPasswordRequestConversation(){return this.conversation&&this.conversation.objectType===d.si.OBJECT_TYPE.VIDEO_VERIFICATION},isFileConversation(){return this.conversation&&this.conversation.objectType===d.si.OBJECT_TYPE.FILE},isPhoneConversation(){return this.conversation&&this.conversation.objectType===d.si.OBJECT_TYPE.PHONE},conversationDisplayName(){return this.conversation&&this.conversation.displayName},canInviteOthers(){return this.conversation&&(this.conversation.participantType===d._z.TYPE.OWNER||this.conversation.participantType===d._z.TYPE.MODERATOR)},canInviteOthersInPublicConversations(){return this.canInviteOthers||this.conversation&&this.conversation.participantType===d._z.TYPE.GUEST_MODERATOR},emptyCallViewIcon(){return this.isConnecting?r.A:this.isPhoneConversation?l.A:this.isPublicConversation?a.A:o.A},title(){return this.isConnecting?(0,e.t)("spreed","Connecting \u2026"):this.isPhoneConversation?(0,e.t)("spreed","Calling \u2026"):this.isOneToOneConversation?(0,e.t)("spreed","Waiting for {user} to join the call",{user:this.conversationDisplayName}):(0,e.t)("spreed","Waiting for others to join the call \u2026")},message(){return this.isConnecting||this.isPasswordRequestConversation||this.isFileConversation||!this.isGroupConversation&&!this.isPublicConversation||this.isGroupConversation&&!this.canInviteOthers||this.isPhoneConversation?"":this.isGroupConversation?(0,e.t)("spreed","You can invite others in the participant tab of the sidebar"):this.isPublicConversation&&this.canInviteOthersInPublicConversations?(0,e.t)("spreed","You can invite others in the participant tab of the sidebar or share this link to invite others!"):(0,e.t)("spreed","Share this link to invite others!")},showLink(){return this.isPublicConversation&&!this.isPasswordRequestConversation&&!this.isFileConversation}},methods:{t:e.t,handleCopyLink(){(0,u.EP)(this.token)}}}}),98452:((c,_,s)=>{"use strict";var o=s(85072),a=s.n(o),l=s(97825),e=s.n(l),i=s(77659),r=s.n(i),d=s(55056),u=s.n(d),m=s(10540),h=s.n(m),v=s(41113),E=s.n(v),p=s(14449),A={};A.styleTagTransform=E(),A.setAttributes=u(),A.insert=r().bind(null,"head"),A.domAPI=e(),A.insertStyleElement=h();var P=a()(p.A,A),C=p.A&&p.A.locals?p.A.locals:void 0}),99357:((c,_,s)=>{"use strict";s.d(_,{X:()=>o,Y:()=>a});var o=function(){var e=this,i=e._self._c;return i("span",e._b({staticClass:"material-design-icon record-circle-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[i("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[i("path",{attrs:{d:"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"}},[e.title?i("title",[e._v(e._s(e.title))]):e._e()])])])},a=[]}),99545:((c,_,s)=>{"use strict";s.d(_,{A:()=>a});var o=s(60294);const a=o.A})}]);})();

//# sourceMappingURL=talk-files-sidebar-call-chunk.js.map?v=b976719b28a0739737aa