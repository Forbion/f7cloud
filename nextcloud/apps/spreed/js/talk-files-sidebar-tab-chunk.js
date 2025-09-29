(()=>{(self.webpackChunktalk=self.webpackChunktalk||[]).push([["files-sidebar-tab-chunk"],{444:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".talk-tab__wrapper[data-v-46caa1d2]{display:flex;flex-direction:column;justify-content:flex-end;height:100%;padding:var(--default-grid-baseline) 0}.talk-tab__call-button[data-v-46caa1d2]{margin:0 auto calc(var(--default-grid-baseline)*2)}.talk-tab__chat-view[data-v-46caa1d2]{overflow:hidden}","",{version:3,sources:["webpack://./src/views/FilesSidebarChatView.vue"],names:[],mappings:"AAEC,oCACC,YAAA,CACA,qBAAA,CACA,wBAAA,CACA,WAAA,CACA,sCAAA,CAGD,wCACC,kDAAA,CAGD,sCACC,eAAA",sourcesContent:[`
.talk-tab {
	&__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		height: 100%;
		padding: var(--default-grid-baseline) 0;
	}

	&__call-button {
		margin: 0 auto calc(var(--default-grid-baseline) * 2);
	}

	&__chat-view {
		overflow: hidden;
	}
}
`],sourceRoot:""}]);const E=d}),603:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".media-settings[data-v-34c1e875]{padding:calc(var(--default-grid-baseline)*5);padding-bottom:0}.media-settings__preview[data-v-34c1e875]{position:relative;margin:0 auto calc(var(--default-grid-baseline)*4);display:flex;align-items:center;justify-content:center;border-radius:var(--border-radius-element, var(--border-radius-large));background-color:var(--color-loading-dark);width:100%;aspect-ratio:4/3}.media-settings__preview>.media-settings__preview-mirror[data-v-34c1e875]{position:absolute;top:calc(var(--default-grid-baseline)*2);right:calc(var(--default-grid-baseline)*2)}.media-settings__toggles[data-v-34c1e875]{display:flex;position:absolute;bottom:calc(var(--default-grid-baseline)*-2);background:var(--color-main-background);border-radius:var(--border-radius-element, calc(var(--default-clickable-area) / 2));box-shadow:0 0 var(--default-grid-baseline) var(--color-box-shadow)}.media-settings__call-buttons[data-v-34c1e875]{display:flex;z-index:1;align-items:center;justify-content:center;gap:var(--default-grid-baseline);position:sticky;bottom:0;background-color:var(--color-main-background);padding:10px 0 20px}.preview__video[data-v-34c1e875]{max-width:100%;object-fit:contain;max-height:100%;border-radius:var(--border-radius-element)}.preview__video--mirrored[data-v-34c1e875]{transform:none !important}.preview__novideo[data-v-34c1e875]{position:relative;display:flex;align-items:center;justify-content:center;overflow:hidden;width:100%;height:100%;border-radius:var(--border-radius-element)}.call-button[data-v-34c1e875]{display:flex;justify-content:center;align-items:center}.checkbox[data-v-34c1e875]{display:flex;justify-content:center;margin:calc(var(--default-grid-baseline)*2)}.checkbox--warning[data-v-34c1e875]:focus-within .checkbox-radio-switch__label,.checkbox--warning[data-v-34c1e875] .checkbox-radio-switch__label:hover{background-color:var(--note-background) !important}[data-v-34c1e875] .modal-wrapper--normal > .modal-container{max-width:500px !important}","",{version:3,sources:["webpack://./src/components/MediaSettings/MediaSettings.vue"],names:[],mappings:"AACA,iCACC,4CAAA,CACA,gBAAA,CAEA,0CACC,iBAAA,CACA,kDAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,sEAAA,CACA,0CAAA,CACA,UAAA,CACA,gBAAA,CAGD,0EACC,iBAAA,CACA,wCAAA,CACA,0CAAA,CAGD,0CACC,YAAA,CACA,iBAAA,CACA,4CAAA,CACA,uCAAA,CACA,mFAAA,CACA,mEAAA,CAGD,+CACC,YAAA,CACA,SAAA,CACA,kBAAA,CACA,sBAAA,CACA,gCAAA,CACA,eAAA,CACA,QAAA,CACA,6CAAA,CACA,mBAAA,CAKD,iCACC,cAAA,CACA,kBAAA,CACA,eAAA,CACA,0CAAA,CAEA,2CACC,yBAAA,CAIF,mCACC,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,UAAA,CACA,WAAA,CACA,0CAAA,CAIF,8BACC,YAAA,CACA,sBAAA,CACA,kBAAA,CAGD,2BACC,YAAA,CACA,sBAAA,CACA,2CAAA,CAGC,uJAEC,kDAAA,CAKH,4DACC,0BAAA",sourcesContent:[`
.media-settings {
	padding: calc(var(--default-grid-baseline) * 5);
	padding-bottom: 0;

	&__preview {
		position: relative;
		margin: 0 auto calc(var(--default-grid-baseline) * 4);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--border-radius-element, var(--border-radius-large));
		background-color: var(--color-loading-dark);
		width: 100%;
		aspect-ratio: 4/3;
	}

	&__preview > &__preview-mirror {
		position: absolute;
		top: calc(var(--default-grid-baseline) * 2);
		right: calc(var(--default-grid-baseline) * 2);
	}

	&__toggles {
		display: flex;
		position: absolute;
		bottom: calc(var(--default-grid-baseline) * -2);
		background: var(--color-main-background);
		border-radius: var(--border-radius-element, calc(var(--default-clickable-area) / 2));
		box-shadow: 0 0 var(--default-grid-baseline) var(--color-box-shadow);
	}

	&__call-buttons {
		display: flex;
		z-index: 1;
		align-items: center;
		justify-content: center;
		gap: var(--default-grid-baseline);
		position: sticky;
		bottom: 0;
		background-color: var(--color-main-background);
		padding: 10px 0 20px;
	}
}

.preview {
	&__video {
		max-width: 100%;
		object-fit: contain;
		max-height: 100%;
		border-radius: var(--border-radius-element);

		&--mirrored {
			transform: none !important;
		}
	}

	&__novideo {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		width: 100%;
		height: 100%;
		border-radius: var(--border-radius-element);
	}
}

.call-button {
	display: flex;
	justify-content: center;
	align-items: center;
}

.checkbox {
	display: flex;
	justify-content: center;
	margin: calc(var(--default-grid-baseline) * 2);

	&--warning {
		&:focus-within :deep(.checkbox-radio-switch__label),
		& :deep(.checkbox-radio-switch__label:hover) {
			background-color: var(--note-background) !important;
		}
	}
}

:deep(.modal-wrapper--normal > .modal-container) {
	max-width: 500px !important;
}
`],sourceRoot:""}]);const E=d}),1035:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".location[data-v-7c6b9a08]{display:flex;flex-direction:column;position:relative;z-index:1;white-space:initial;overflow:hidden;border-radius:var(--border-radius-large);height:300px;max-height:30vh;margin:4px;transition:outline .1s ease-in-out}.location[data-v-7c6b9a08]:hover,.location[data-v-7c6b9a08]:focus,.location[data-v-7c6b9a08]:focus-visible{outline:2px solid var(--color-primary-element)}.location.wide[data-v-7c6b9a08]{width:100%;height:100%;margin:0}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessagePart/Location.vue"],names:[],mappings:"AACA,2BACC,YAAA,CACA,qBAAA,CACA,iBAAA,CACA,SAAA,CACA,mBAAA,CACA,eAAA,CACA,wCAAA,CACA,YAAA,CACA,eAAA,CACA,UAAA,CACA,kCAAA,CAEA,2GAGC,8CAAA,CAGD,gCACC,UAAA,CACA,WAAA,CACA,QAAA",sourcesContent:[`
.location {
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 1;
	white-space: initial;
	overflow: hidden;
	border-radius: var(--border-radius-large);
	height: 300px;
	max-height: 30vh;
	margin: 4px;
	transition: outline 0.1s ease-in-out;

	&:hover,
	&:focus,
	&:focus-visible {
		outline: 2px solid var(--color-primary-element);
	}

	&.wide {
		width: 100%;
		height: 100%;
		margin: 0;
	}
}
`],sourceRoot:""}]);const E=d}),3875:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".reactions__modal[data-v-4c5bf56f]{min-height:450px;padding-bottom:calc(3*var(--default-grid-baseline))}.reactions-list__navigation[data-v-4c5bf56f]{display:flex;gap:2px;flex-wrap:wrap}.reactions-list__navigation[data-v-4c5bf56f] .button-vue{border-radius:var(--border-radius-large)}.reactions-list__navigation[data-v-4c5bf56f] .button-vue.active{background-color:var(--color-primary-element-light)}.all-reactions__button[data-v-4c5bf56f] .button-vue__text{display:inline-flex;gap:4px}.reactions-list__scrollable[data-v-4c5bf56f]{overflow-y:auto;overflow-x:hidden;height:327px}.reactions-item[data-v-4c5bf56f]{display:flex;align-items:center;gap:8px;width:100%;padding:6px 0}.reactions-item__name[data-v-4c5bf56f]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.reactions-item__emojis[data-v-4c5bf56f]{margin-left:auto;max-width:180px;direction:rtl;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;position:relative}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessagePart/ReactionsList.vue"],names:[],mappings:"AACA,mCACC,gBAAA,CACA,mDAAA,CAGD,6CACC,YAAA,CACA,OAAA,CACA,cAAA,CAEA,yDACC,wCAAA,CAEA,gEACC,mDAAA,CAKH,0DACC,mBAAA,CACA,OAAA,CAGD,6CACC,eAAA,CACA,iBAAA,CACA,YAAA,CAGD,iCACC,YAAA,CACA,kBAAA,CACA,OAAA,CACA,UAAA,CACA,aAAA,CAEA,uCACC,kBAAA,CACA,eAAA,CACA,sBAAA,CAGD,yCACC,gBAAA,CACA,eAAA,CACA,aAAA,CACA,mBAAA,CACA,oBAAA,CACA,2BAAA,CACA,eAAA,CACA,iBAAA",sourcesContent:[`
.reactions__modal {
	min-height: 450px;
	padding-bottom: calc(3 * var(--default-grid-baseline));
}

.reactions-list__navigation {
	display: flex;
	gap: 2px;
	flex-wrap: wrap;

	:deep(.button-vue) {
		border-radius: var(--border-radius-large);

		&.active {
			background-color: var(--color-primary-element-light);
		}
	}
}

.all-reactions__button :deep(.button-vue__text) {
	display: inline-flex;
	gap: 4px;
}

.reactions-list__scrollable {
	overflow-y: auto;
	overflow-x: hidden;
	height: calc(450px - 123px); // 123px is the height of the header 105px and the footer 18px
}

.reactions-item {
	display: flex;
	align-items: center;
	gap: 8px;
	width: 100%;
	padding: 6px 0;

	&__name {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	&__emojis {
		margin-left: auto;
		max-width: 180px;
		direction: rtl;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		position: relative;
	}
}
`],sourceRoot:""}]);const E=d}),13222:((D,b,n)=>{var C=n(77556);function m(h){return h==null?"":C(h)}D.exports=m}),17016:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".upload-editor[data-v-6db74a2c]{height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:calc(3*var(--default-grid-baseline))}.upload-editor__previews[data-v-6db74a2c]{display:flex;position:relative;overflow:auto;flex-wrap:wrap}.upload-editor__previews.dragging-over[data-v-6db74a2c]{outline:3px dashed var(--color-primary-element);border-radius:var(--border-radius-large)}.upload-editor__actions[data-v-6db74a2c]{display:flex;justify-content:flex-end;gap:4px;padding:12px 0}.upload-editor__textfield[data-v-6db74a2c]{padding-block:calc(var(--default-grid-baseline)*2)}.upload-editor .add-more-button[data-v-6db74a2c]{width:164px !important;height:176px !important;margin:10px}.upload-editor .add-more-button[data-v-6db74a2c] .button-vue__icon{border-radius:var(--border-radius-pill);color:var(--color-primary-element-text);background-color:var(--color-primary-element)}","",{version:3,sources:["webpack://./src/components/NewMessage/NewMessageUploadEditor.vue"],names:[],mappings:"AACA,gCACC,WAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CACA,4CAAA,CAEA,0CACC,YAAA,CACA,iBAAA,CACA,aAAA,CACA,cAAA,CAEA,wDACC,+CAAA,CACA,wCAAA,CAIF,yCACC,YAAA,CACA,wBAAA,CACA,OAAA,CACA,cAAA,CAGD,2CACC,kDAAA,CAGD,iDACC,sBAAA,CACA,uBAAA,CACA,WAAA,CAEA,mEACC,uCAAA,CACA,uCAAA,CACA,6CAAA",sourcesContent:[`
.upload-editor {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: calc(3 * var(--default-grid-baseline));

	&__previews {
		display: flex;
		position: relative;
		overflow: auto;
		flex-wrap: wrap;

		&.dragging-over {
			outline: 3px dashed var(--color-primary-element);
			border-radius: var(--border-radius-large);
		}
	}

	&__actions {
		display: flex;
		justify-content: flex-end;
		gap: 4px;
		padding: 12px 0;
	}

	&__textfield {
		padding-block: calc(var(--default-grid-baseline) * 2);
	}

	.add-more-button {
		width: 164px !important;
		height: 176px !important;
		margin: 10px;

		:deep(.button-vue__icon) {
			border-radius: var(--border-radius-pill);
			color: var(--color-primary-element-text);
			background-color: var(--color-primary-element);
		}
	}
}

`],sourceRoot:""}]);const E=d}),18765:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".modal__content[data-v-7cf6a8ac]{padding:calc(var(--default-grid-baseline)*3);background-color:var(--color-main-background)}.conversation-information[data-v-7cf6a8ac]{margin-top:5px;display:flex;flex-direction:column;align-items:center}.description[data-v-7cf6a8ac]{margin-bottom:12px;max-height:8lh;overflow-x:hidden;overflow-y:auto;text-overflow:ellipsis}.username-form__input[data-v-7cf6a8ac]{margin-bottom:20px}.submit-button[data-v-7cf6a8ac]{margin:0 auto}.login-info[data-v-7cf6a8ac]{display:flex;align-items:center;gap:calc(var(--default-grid-baseline)*2);padding-top:calc(var(--default-grid-baseline)*2)}.separator[data-v-7cf6a8ac]{margin:calc(var(--default-grid-baseline)*5) 0 var(--default-grid-baseline);border-top:1px solid}","",{version:3,sources:["webpack://./src/components/GuestWelcomeWindow.vue"],names:[],mappings:"AACA,iCACC,4CAAA,CACA,6CAAA,CAGD,2CACC,cAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CAGD,8BACC,kBAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,sBAAA,CAGD,uCACC,kBAAA,CAGD,gCACC,aAAA,CAGD,6BACC,YAAA,CACA,kBAAA,CACA,wCAAA,CACA,gDAAA,CAGD,4BACI,0EAAA,CACA,oBAAA",sourcesContent:[`
.modal__content {
	padding: calc(var(--default-grid-baseline) * 3);
	background-color: var(--color-main-background);
}

.conversation-information {
	margin-top: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.description {
	margin-bottom: 12px;
	max-height: 8lh;
	overflow-x: hidden;
	overflow-y: auto;
	text-overflow: ellipsis;
}

.username-form__input {
	margin-bottom: 20px;
}

.submit-button {
	margin: 0 auto;
}

.login-info {
	display: flex;
	align-items: center;
	gap: calc(var(--default-grid-baseline) * 2);
	padding-top: calc(var(--default-grid-baseline) * 2);
}

.separator {
    margin: calc(var(--default-grid-baseline) * 5) 0 var(--default-grid-baseline);
    border-top: 1px solid;
}
`],sourceRoot:""}]);const E=d}),19852:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".deck-card[data-v-3f8e0132]{display:flex;border:2px solid var(--color-border);border-radius:var(--border-radius-large);font-size:100%;background-color:var(--color-main-background);max-width:300px;padding:8px 16px;flex-direction:column;white-space:nowrap;transition:border-color .1s ease-in-out}.deck-card[data-v-3f8e0132]:hover,.deck-card[data-v-3f8e0132]:focus,.deck-card[data-v-3f8e0132]:focus-visible{border-color:var(--color-primary-element);outline:none}.deck-card__lineone[data-v-3f8e0132]{height:30px;display:flex;justify-content:flex-start;align-items:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.deck-card__lineone .title[data-v-3f8e0132]{margin-left:8px}.deck-card__linetwo[data-v-3f8e0132]{height:30px;color:var(--color-text-maxcontrast);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.icon-deck[data-v-3f8e0132]{opacity:.8}.wide[data-v-3f8e0132]{max-width:400px;width:100%}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessagePart/DeckCard.vue"],names:[],mappings:"AACA,4BACC,YAAA,CACA,oCAAA,CACA,wCAAA,CACA,cAAA,CACA,6CAAA,CACA,eAAA,CACA,gBAAA,CACA,qBAAA,CACA,kBAAA,CACA,uCAAA,CAEA,8GAGC,yCAAA,CACA,YAAA,CAGD,qCACC,WAAA,CACA,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAEA,4CACC,eAAA,CAIF,qCACC,WAAA,CACA,mCAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAIF,4BACC,UAAA,CAGD,uBACC,eAAA,CACA,UAAA",sourcesContent:[`
.deck-card {
	display: flex;
	border: 2px solid var(--color-border);
	border-radius: var(--border-radius-large);
	font-size: 100%;
	background-color: var(--color-main-background);
	max-width: 300px;
	padding: 8px 16px;
	flex-direction: column;
	white-space: nowrap;
	transition: border-color 0.1s ease-in-out;

	&:hover,
	&:focus,
	&:focus-visible {
		border-color: var(--color-primary-element);
		outline: none;
	}

	&__lineone {
		height: 30px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

		.title {
			margin-left: 8px;
		}
	}

	&__linetwo {
		height: 30px;
		color: var(--color-text-maxcontrast);
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
}

.icon-deck {
	opacity: .8;
}

.wide {
	max-width: 400px;
	width: 100%;
}

`],sourceRoot:""}]);const E=d}),20464:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".contact[data-v-e6c8e212]{display:flex;transition:box-shadow .1s ease-in-out;border:1px solid var(--color-border);box-shadow:0 0 2px 0 var(--color-box-shadow);border-radius:var(--border-radius-large);font-size:100%;background-color:var(--color-main-background);margin:12px 0;max-width:300px;padding:12px;white-space:nowrap;align-items:center}.contact[data-v-e6c8e212]:hover,.contact[data-v-e6c8e212]:focus{box-shadow:0 0 5px 0 var(--color-box-shadow)}.contact__image[data-v-e6c8e212]{display:inline-block;border-radius:50%;max-width:var(--clickable-area-large);max-height:var(--clickable-area-large)}.contact__icon[data-v-e6c8e212]{display:inline-block;width:var(--clickable-area-large);height:var(--clickable-area-large)}.contact__lineone[data-v-e6c8e212]{height:30px;display:flex;justify-content:flex-start;align-items:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.contact__lineone .title[data-v-e6c8e212]{margin-left:12px}.icon-contacts[data-v-e6c8e212]{opacity:.8}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessagePart/Contact.vue"],names:[],mappings:"AACA,0BACC,YAAA,CACA,qCAAA,CACA,oCAAA,CACA,4CAAA,CACA,wCAAA,CACA,cAAA,CACA,6CAAA,CACA,aAAA,CACA,eAAA,CACA,YAAA,CACA,kBAAA,CACA,kBAAA,CACA,gEAEC,4CAAA,CAED,iCACC,oBAAA,CACA,iBAAA,CACA,qCAAA,CACA,sCAAA,CAED,gCACC,oBAAA,CACA,iCAAA,CACA,kCAAA,CAED,mCACC,WAAA,CACA,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAEA,0CACC,gBAAA,CAKH,gCACC,UAAA",sourcesContent:[`
.contact {
	display: flex;
	transition: box-shadow 0.1s ease-in-out;
	border: 1px solid var(--color-border);
	box-shadow: 0 0 2px 0 var(--color-box-shadow);
	border-radius: var(--border-radius-large);
	font-size: 100%;
	background-color: var(--color-main-background);
	margin: 12px 0;
	max-width: 300px;
	padding: 12px;
	white-space: nowrap;
	align-items: center;
	&:hover,
	&:focus{
		box-shadow: 0 0 5px 0 var(--color-box-shadow);
	}
	&__image {
		display: inline-block;
		border-radius: 50%;
		max-width: var(--clickable-area-large);
		max-height: var(--clickable-area-large);
	}
	&__icon {
		display: inline-block;
		width: var(--clickable-area-large);
		height: var(--clickable-area-large);
	}
	&__lineone {
		height: 30px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

		.title {
			margin-left: 12px;
		}
	}
}

.icon-contacts {
	opacity: .8;
}

`],sourceRoot:""}]);const E=d}),21143:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".translate-dialog[data-v-f6804034] .dialog__content{position:relative;display:flex;flex-direction:column;gap:calc(var(--default-grid-baseline)*2);min-height:300px;padding-bottom:calc(var(--default-grid-baseline)*3)}.translate-dialog__wrapper[data-v-f6804034]{display:flex;align-items:center;gap:calc(var(--default-grid-baseline)*4)}.translate-dialog .translate-dialog__select[data-v-f6804034]{width:50%}.translate-dialog__button[data-v-f6804034]{flex-shrink:0;margin-left:auto}.translate-dialog__message[data-v-f6804034]{padding:calc(var(--default-grid-baseline)*2);flex-grow:1;border-radius:var(--border-radius-large)}.translate-dialog__message-source[data-v-f6804034]{color:var(--color-text-maxcontrast);border:2px solid var(--color-border)}.translate-dialog__message-translation[data-v-f6804034]{border:2px solid var(--color-primary-element)}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessageButtonsBar/MessageTranslateDialog.vue"],names:[],mappings:"AAEC,oDACC,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,wCAAA,CACA,gBAAA,CACA,mDAAA,CAGD,4CACC,YAAA,CACA,kBAAA,CACA,wCAAA,CAGD,6DACC,SAAA,CAGD,2CACC,aAAA,CACA,gBAAA,CAGD,4CACC,4CAAA,CACA,WAAA,CACA,wCAAA,CAEA,mDACC,mCAAA,CACA,oCAAA,CAGD,wDACC,6CAAA",sourcesContent:[`
.translate-dialog {
	:deep(.dialog__content) {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: calc(var(--default-grid-baseline) * 2);
		min-height: 300px;
		padding-bottom: calc(var(--default-grid-baseline) * 3);
	}

	&__wrapper {
		display: flex;
		align-items: center;
		gap: calc(var(--default-grid-baseline) * 4);
	}

	& &__select {
		width: 50%;
	}

	&__button {
		flex-shrink: 0;
		margin-left: auto;
	}

	&__message {
		padding: calc(var(--default-grid-baseline) * 2);
		flex-grow: 1;
		border-radius: var(--border-radius-large);

		&-source {
			color: var(--color-text-maxcontrast);
			border: 2px solid var(--color-border);
		}

		&-translation {
			border: 2px solid var(--color-primary-element);
		}
	}
}
`],sourceRoot:""}]);const E=d}),22489:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".tab-list[data-v-12e87af4]{display:flex;justify-content:center;align-items:center;gap:calc(var(--default-grid-baseline)*2)}.tab-panels-container[data-v-12e87af4]{display:flex;width:100%;overflow:hidden;transition:height ease var(--animation-slow)}.tab-panel[data-v-12e87af4]{width:100%;flex:1 0 100%;transition:transform ease var(--animation-slow)}","",{version:3,sources:["webpack://./src/components/MediaSettings/MediaSettingsTabs.vue"],names:[],mappings:"AACA,2BACC,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,wCAAA,CAGD,uCACC,YAAA,CACA,UAAA,CACA,eAAA,CACA,4CAAA,CAGD,4BACC,UAAA,CACA,aAAA,CACA,+CAAA",sourcesContent:[`
.tab-list {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: calc(var(--default-grid-baseline) * 2);
}

.tab-panels-container {
	display: flex;
	width: 100%;
	overflow: hidden;
	transition: height ease var(--animation-slow);
}

.tab-panel {
	width: 100%;
	flex: 1 0 100%;
	transition: transform ease var(--animation-slow);
}
`],sourceRoot:""}]);const E=d}),28255:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".scroller[data-v-c0c7b8da]{position:relative;flex:1 0;padding-top:var(--default-grid-baseline);overflow-y:scroll;overflow-x:hidden;border-bottom:1px solid var(--color-border);transition:all var(--animation-quick, 100ms) ease-in-out}.scroller--chatScrolledToBottom[data-v-c0c7b8da]{border-bottom-color:rgba(0,0,0,0)}.scroller__content[data-v-c0c7b8da]{max-width:calc(32px + 4*var(--default-grid-baseline) + 50*var(--default-font-size) + 2*var(--default-grid-baseline) + 8ch + var(--clickable-area-small, 24px) + 4*var(--default-grid-baseline));margin:0 auto}.scroller__loading[data-v-c0c7b8da]{position:relative;height:0;max-width:calc(32px + 4*var(--default-grid-baseline) + 50*var(--default-font-size) + 2*var(--default-grid-baseline) + 8ch + var(--clickable-area-small, 24px) + 4*var(--default-grid-baseline));margin:0 auto}.scroller__loading-element[data-v-c0c7b8da]{position:absolute;top:0;left:calc(2*var(--default-grid-baseline))}.messages-list__placeholder[data-v-c0c7b8da]{display:flex;flex-direction:column-reverse;overflow:hidden;height:100%}.messages-list__empty-content[data-v-c0c7b8da]{height:100%}.messages-group__date[data-v-c0c7b8da]{position:sticky;top:0;display:grid;grid-template-columns:minmax(0, calc(50 * var(--default-font-size))) calc(8ch + var(--clickable-area-small, 24px) + 4*var(--default-grid-baseline));z-index:2;margin-left:calc(32px + 4*var(--default-grid-baseline));margin-bottom:5px;padding-inline:var(--default-grid-baseline);pointer-events:none}.messages-group__date-text[data-v-c0c7b8da]{margin:0 auto;padding:var(--default-grid-baseline) calc(3*var(--default-grid-baseline));text-wrap:nowrap;color:var(--color-text-maxcontrast);background-color:var(--color-background-dark);border-radius:var(--border-radius-element, var(--border-radius-pill))}.messages-group[data-v-c0c7b8da]:last-child{margin-bottom:16px}.has-sticky .messages-group__date[data-v-c0c7b8da]{transition:opacity .3s ease-in-out;transition-delay:2s;opacity:0}.scroller--isScrolling .has-sticky .messages-group__date[data-v-c0c7b8da]{opacity:1;transition:opacity 0s}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesList.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,2BACC,iBAAA,CACA,QAAA,CACA,wCAAA,CACA,iBAAA,CACA,iBAAA,CACA,2CAAA,CACA,wDCeY,CDbZ,iDACC,iCAAA,CAGD,oCACC,+LCFwB,CDGxB,aAAA,CAGD,oCACC,iBAAA,CACA,QAAA,CACA,+LCTwB,CDUxB,aAAA,CAEA,4CACC,iBAAA,CACA,KAAA,CACA,yCAAA,CAMF,6CACC,YAAA,CACA,6BAAA,CACA,eAAA,CACA,WAAA,CAGD,+CACC,WAAA,CAKD,uCACC,eAAA,CACA,KAAA,CACA,YAAA,CACA,mJAAA,CACA,SAAA,CACA,uDAAA,CACA,iBAAA,CACA,2CAAA,CACA,mBAAA,CAGD,4CACC,aAAA,CACA,yEAAA,CACA,gBAAA,CACA,mCAAA,CACA,6CAAA,CACA,qEAAA,CAGD,4CACC,kBAAA,CAIF,mDACC,kCAAA,CACA,mBAAA,CACA,SAAA,CAGD,0EACC,SAAA,CACA,qBAAA",sourcesContent:[`
@import '../../assets/variables';

.scroller {
	position: relative;
	flex: 1 0;
	padding-top: var(--default-grid-baseline);
	overflow-y: scroll;
	overflow-x: hidden;
	border-bottom: 1px solid var(--color-border);
	transition: $transition;

	&--chatScrolledToBottom {
		border-bottom-color: transparent;
	}

	&__content {
		max-width: $messages-list-max-width;
		margin: 0 auto;
	}

	&__loading {
		position: relative;
		height: 0;
		max-width: $messages-list-max-width;
		margin: 0 auto;

		&-element {
			position: absolute;
			top: 0;
			left: calc(2 * var(--default-grid-baseline));
		}
	}
}

.messages-list {
	&__placeholder {
		display: flex;
		flex-direction: column-reverse;
		overflow: hidden;
		height: 100%;
	}

	&__empty-content {
		height: 100%;
	}
}

.messages-group {
	&__date {
		position: sticky;
		top: 0;
		display: grid;
		grid-template-columns: minmax(0, $messages-text-max-width) $messages-info-width;
		z-index: 2;
		margin-left: calc($messages-avatar-width);
		margin-bottom: 5px;
		padding-inline: var(--default-grid-baseline);
		pointer-events: none;
	}

	&__date-text {
		margin: 0 auto;
		padding: var(--default-grid-baseline) calc(3 * var(--default-grid-baseline));
		text-wrap: nowrap;
		color: var(--color-text-maxcontrast);
		background-color: var(--color-background-dark);
		border-radius: var(--border-radius-element, var(--border-radius-pill));
	}

	&:last-child {
		margin-bottom: 16px;
	}
}

.has-sticky .messages-group__date {
	transition: opacity 0.3s ease-in-out;
	transition-delay: 2s;
	opacity: 0;
}

.scroller--isScrolling .has-sticky .messages-group__date {
	opacity: 1;
	transition: opacity 0s;
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
`],sourceRoot:""}]);const E=d}),31611:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".media-devices-checker[data-v-44ae6bf3]{display:flex;gap:var(--default-grid-baseline);margin:calc(3*var(--default-grid-baseline)) 0}.media-devices-checker__icon[data-v-44ae6bf3]{display:flex;justify-content:center;align-items:center;width:var(--default-clickable-area);flex-shrink:0}.media-devices-checker .equalizer[data-v-44ae6bf3]{margin-left:8px;height:var(--default-clickable-area);display:flex;align-items:center}.media-devices-checker .equalizer__bar[data-v-44ae6bf3]{width:8px;height:100%;background:var(--color-primary-element);border-radius:4px;margin:0 2px;will-change:height;animation:equalizer-44ae6bf3 2s steps(15, end) infinite}@keyframes equalizer-44ae6bf3{0%{height:63%}4%{height:36%}8%{height:28%}12%{height:74%}16%{height:26%}20%{height:49%}24%{height:40%}28%{height:71%}32%{height:39%}36%{height:47%}40%{height:69%}44%{height:46%}48%{height:89%}52%{height:69%}56%{height:77%}60%{height:37%}}","",{version:3,sources:["webpack://./src/components/MediaSettings/MediaDevicesSpeakerTest.vue"],names:[],mappings:"AACA,wCACC,YAAA,CACA,gCAAA,CACA,6CAAA,CAEA,8CACC,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,mCAAA,CACA,aAAA,CAGD,mDACC,eAAA,CACA,oCAAA,CACA,YAAA,CACA,kBAAA,CAEA,wDACC,SAAA,CACA,WAAA,CACA,uCAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,uDAAA,CAKH,8BAEE,GAAA,UAAA,CAAA,GAAA,UAAA,CAAA,GAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA,IAAA,UAAA,CAAA",sourcesContent:[`
.media-devices-checker {
	display: flex;
	gap: var(--default-grid-baseline);
	margin: calc(3 * var(--default-grid-baseline)) 0;

	&__icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: var(--default-clickable-area);
		flex-shrink: 0;
	}

	.equalizer {
		margin-left: 8px;
		height: var(--default-clickable-area);
		display: flex;
		align-items: center;

		&__bar {
			width: 8px;
			height: 100%;
			background: var(--color-primary-element);
			border-radius: 4px;
			margin: 0 2px;
			will-change: height;
			animation: equalizer 2s steps(15, end) infinite;
		}
	}
}

@keyframes equalizer {
	@for $i from 0 through 15 {
		#{4*$i}% { height: random(70) + 20%; }
	}
}
`],sourceRoot:""}]);const E=d}),34932:(D=>{function b(n,C){for(var m=-1,h=n==null?0:n.length,y=Array(h);++m<h;)y[m]=C(n[m],m,n);return y}D.exports=b}),34960:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".edit-timestamp[data-v-5536cd4b] .action-text__longtext-wrapper{padding:0}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessageButtonsBar/MessageButtonsBar.vue"],names:[],mappings:"AACA,gEACC,SAAA",sourcesContent:[`
.edit-timestamp :deep(.action-text__longtext-wrapper) {
	padding: 0;
}
`],sourceRoot:""}]);const E=d}),43320:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".media-devices-selector[data-v-2c3d7960]{display:flex;gap:var(--default-grid-baseline);margin:calc(3*var(--default-grid-baseline)) 0}.media-devices-selector__icon[data-v-2c3d7960]{display:flex;justify-content:center;align-items:center;width:var(--default-clickable-area);flex-shrink:0}.media-devices-selector[data-v-2c3d7960] .v-select.select{width:100%}","",{version:3,sources:["webpack://./src/components/MediaSettings/MediaDevicesSelector.vue"],names:[],mappings:"AACA,yCACC,YAAA,CACA,gCAAA,CACA,6CAAA,CAEA,+CACC,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,mCAAA,CACA,aAAA,CAGD,0DACC,UAAA",sourcesContent:[`
.media-devices-selector {
	display: flex;
	gap: var(--default-grid-baseline);
	margin: calc(3 * var(--default-grid-baseline)) 0;

	&__icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: var(--default-clickable-area);
		flex-shrink: 0;
	}

	:deep(.v-select.select) {
		width: 100%;
	}
}
`],sourceRoot:""}]);const E=d}),44394:((D,b,n)=>{var C=n(72552),m=n(40346),h="[object Symbol]";function y(d){return typeof d=="symbol"||m(d)&&C(d)==h}D.exports=y}),44847:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".poll-modal[data-v-b79cf4a6]{position:relative;padding:20px}.poll-modal__header[data-v-b79cf4a6]{display:flex;align-items:flex-start;gap:8px;margin-bottom:8px;font-weight:bold;font-size:18px;white-space:normal;word-wrap:anywhere}.poll-modal__header[data-v-b79cf4a6] .material-design-icon{margin-bottom:auto}.poll-modal__summary[data-v-b79cf4a6]{color:var(--color-text-maxcontrast);margin-bottom:16px}.poll-modal__options[data-v-b79cf4a6]{display:flex;flex-direction:column;gap:4px;word-wrap:anywhere}.poll-modal__actions[data-v-b79cf4a6]{position:sticky;bottom:0;display:flex;justify-content:center;gap:8px;padding:8px 0 0;background-color:var(--color-main-background)}.poll-modal__loading[data-v-b79cf4a6]{height:200px}.results__options[data-v-b79cf4a6]{display:flex;flex-direction:column;gap:calc(4*var(--default-grid-baseline));word-wrap:anywhere;margin:8px 0 20px 0}.results__option[data-v-b79cf4a6]{display:flex;flex-direction:column}.results__option[data-v-b79cf4a6]:not(:last-child){border-bottom:1px solid var(--color-border)}.results__option__details[data-v-b79cf4a6]{display:flex;margin-bottom:8px}.results__option-subtitle[data-v-b79cf4a6]{display:flex;gap:var(--default-grid-baseline);color:var(--color-text-maxcontrast)}.results__option-progress[data-v-b79cf4a6]{margin-top:4px}.results__option-title[data-v-b79cf4a6]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px}.results__option-title .percentage[data-v-b79cf4a6]{white-space:nowrap;margin-left:16px}.critical[data-v-b79cf4a6] .action-button{color:var(--color-error) !important}","",{version:3,sources:["webpack://./src/components/PollViewer/PollViewer.vue"],names:[],mappings:"AACA,6BACC,iBAAA,CACA,YAAA,CAEA,qCACC,YAAA,CACA,sBAAA,CACA,OAAA,CACA,iBAAA,CACA,gBAAA,CACA,cAAA,CACA,kBAAA,CACA,kBAAA,CAEA,2DACC,kBAAA,CAIF,sCACC,mCAAA,CACA,kBAAA,CAGD,sCACC,YAAA,CACA,qBAAA,CACA,OAAA,CACA,kBAAA,CAGD,sCACC,eAAA,CACA,QAAA,CACA,YAAA,CACA,sBAAA,CACA,OAAA,CACA,eAAA,CACA,6CAAA,CAGD,sCACC,YAAA,CAIF,mCACC,YAAA,CACA,qBAAA,CACA,wCAAA,CACA,kBAAA,CACA,mBAAA,CAGD,kCACC,YAAA,CACA,qBAAA,CAEA,mDACC,2CAAA,CAGD,2CACC,YAAA,CACA,iBAAA,CAGD,2CACC,YAAA,CACA,gCAAA,CACA,mCAAA,CAGD,2CACC,cAAA,CAGD,wCACC,YAAA,CACA,6BAAA,CACA,sBAAA,CACA,iBAAA,CAEA,oDACC,kBAAA,CACA,gBAAA,CAKH,0CACC,mCAAA",sourcesContent:[`
.poll-modal {
	position: relative;
	padding: 20px;

	&__header {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		margin-bottom: 8px;
		font-weight: bold;
		font-size: 18px;
		white-space: normal;
		word-wrap: anywhere;

		:deep(.material-design-icon) {
			margin-bottom: auto;
		}
	}

	&__summary {
		color: var(--color-text-maxcontrast);
		margin-bottom: 16px;
	}

	&__options {
		display: flex;
		flex-direction: column;
		gap: 4px;
		word-wrap: anywhere;
	}

	&__actions {
		position: sticky;
		bottom: 0;
		display: flex;
		justify-content: center;
		gap: 8px;
		padding: 8px 0 0;
		background-color: var(--color-main-background);
	}

	&__loading {
		height: 200px;
	}
}

.results__options {
	display: flex;
	flex-direction: column;
	gap: calc(4 * var(--default-grid-baseline));
	word-wrap: anywhere;
	margin: 8px 0 20px 0;
}

.results__option {
	display: flex;
	flex-direction: column;

	&:not(:last-child) {
		border-bottom: 1px solid var(--color-border);
	}

	&__details {
		display: flex;
		margin-bottom: 8px;
	}

	&-subtitle {
		display: flex;
		gap: var(--default-grid-baseline);
		color: var(--color-text-maxcontrast);
	}

	&-progress {
		margin-top: 4px;
	}

	&-title {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 4px;

		.percentage {
			white-space: nowrap;
			margin-left: 16px;
		}
	}
}

.critical :deep(.action-button) {
	color: var(--color-error) !important;
}
`],sourceRoot:""}]);const E=d}),49735:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".background-editor[data-v-743a285e]{display:grid;grid-template-columns:repeat(4, 1fr);gap:calc(var(--default-grid-baseline)*2);margin-top:calc(var(--default-grid-baseline)*2)}.background-editor__element[data-v-743a285e]{border:none;margin:0 !important;border-radius:var(--border-radius-element, calc(var(--border-radius-large) * 1.5));height:calc(var(--default-grid-baseline)*16);display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:rgba(28,175,255,.1803921569);background-size:cover;background-position:center;flex:1 0 108px}.background-editor__element--selected[data-v-743a285e]{box-shadow:inset 0 0 0 var(--default-grid-baseline) var(--color-primary-element)}.background-editor__element[data-v-743a285e]:focus-visible{outline-offset:-2px}","",{version:3,sources:["webpack://./src/components/MediaSettings/VideoBackgroundEditor.vue"],names:[],mappings:"AACA,oCACC,YAAA,CACA,oCAAA,CACA,wCAAA,CACA,+CAAA,CAEA,6CACC,WAAA,CACA,mBAAA,CACA,kFAAA,CACA,4CAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,6CAAA,CACA,qBAAA,CACA,0BAAA,CACA,cAAA,CAEA,uDACC,gFAAA,CAGD,2DAEC,mBAAA",sourcesContent:[`
.background-editor {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: calc(var(--default-grid-baseline) * 2);
	margin-top: calc(var(--default-grid-baseline) * 2);

	&__element {
		border: none;
		margin: 0 !important;
		border-radius: var(--border-radius-element, calc(var(--border-radius-large) * 1.5));
		height: calc(var(--default-grid-baseline) * 16);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #1cafff2e;
		background-size: cover;
		background-position: center;
		flex: 1 0 108px;

		&--selected {
			box-shadow: inset 0 0 0 var(--default-grid-baseline) var(--color-primary-element);
		}

		&:focus-visible {
			// Do not overflow container
			outline-offset: -2px; // inline with server's global focus outline
		}
	}
}

`],sourceRoot:""}]);const E=d}),51844:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".message-main[data-v-41e26298]{display:grid;grid-template-columns:minmax(0, calc(50 * var(--default-font-size))) calc(8ch + var(--clickable-area-small, 24px) + 4*var(--default-grid-baseline));grid-row-gap:var(--default-grid-baseline);justify-content:space-between;align-items:flex-start;min-width:100%}.message-main__text[data-v-41e26298]{width:100%;color:var(--color-text-light)}.message-main__text>.single-emoji[data-v-41e26298]{font-size:250%;line-height:100%}.message-main__text.system-message[data-v-41e26298]{color:var(--color-text-maxcontrast);text-align:center;padding:0 20px}.message-main__text.message-highlighted[data-v-41e26298]{color:var(--color-text-light);background-color:var(--color-primary-element-light);padding:10px;border-radius:var(--border-radius-large);text-align:center}.message-main__text.deleted-message[data-v-41e26298]{display:flex;align-items:center;color:var(--color-text-maxcontrast)}.message-main__text.deleted-message[data-v-41e26298] .rich-text--wrapper{flex-grow:1;text-align:start}.message-main__text.markdown-message[data-v-41e26298]{position:relative}.message-main__text.markdown-message .message-copy-code[data-v-41e26298]{position:absolute;top:0;right:calc(4px + var(--default-clickable-area));margin-top:4px;background-color:var(--color-background-dark)}.message-main__text.markdown-message[data-v-41e26298] .rich-text--wrapper{text-align:start}.message-main__text.markdown-message[data-v-41e26298] .rich-text--wrapper h4{font-size:100%}.message-main__text.markdown-message[data-v-41e26298] .rich-text--wrapper em{font-style:italic}.message-main__text.markdown-message[data-v-41e26298] .rich-text--wrapper ul,.message-main__text.markdown-message[data-v-41e26298] .rich-text--wrapper ol{padding-left:0;padding-inline-start:15px}.message-main__text.markdown-message[data-v-41e26298] .rich-text--wrapper ul.contains-task-list,.message-main__text.markdown-message[data-v-41e26298] .rich-text--wrapper ol.contains-task-list{padding:0}.message-main__text.markdown-message[data-v-41e26298] .rich-text--wrapper input:disabled+.checkbox-content{opacity:1 !important}.message-main__text.markdown-message[data-v-41e26298] .rich-text--wrapper div:has(table){overflow-x:auto}.message-main__text.markdown-message[data-v-41e26298] .rich-text--wrapper pre{width:calc(100% - var(--default-clickable-area));padding:4px;margin:2px 0;border-radius:var(--border-radius);background-color:var(--color-background-dark);overflow-x:auto}.message-main__text.markdown-message[data-v-41e26298] .rich-text--wrapper pre code{margin:0;padding:0}.message-main__text.markdown-message[data-v-41e26298] .rich-text--wrapper code{display:inline-block;padding:2px 4px;margin:2px 0;border-radius:var(--border-radius);background-color:var(--color-background-dark)}.message-main__text.markdown-message[data-v-41e26298] .rich-text--wrapper blockquote{padding-left:0;padding-inline-start:13px;border-left:none;border-inline-start:4px solid var(--color-border)}.message-main__info[data-v-41e26298]{position:relative;user-select:none;display:flex;justify-content:flex-end;color:var(--color-text-maxcontrast);font-size:var(--default-font-size);width:calc(8ch + var(--clickable-area-small, 24px) + 4*var(--default-grid-baseline));padding-inline:calc(2*var(--default-grid-baseline))}.message-main__info .date[data-v-41e26298]{width:8ch;text-align:end}.message-main__info .date--hidden[data-v-41e26298]{pointer-events:none;opacity:0}.message-main__info .date[data-v-41e26298]:last-child{margin-right:var(--clickable-area-small, 24px)}.message-status[data-v-41e26298]{width:var(--clickable-area-small, 24px);height:var(--clickable-area-small, 24px);display:flex;justify-content:center;align-items:center}.message-status.retry-option[data-v-41e26298]{cursor:pointer}[data-v-41e26298] .rich-text--component{direction:ltr}[data-v-41e26298] .widget-default--image{max-width:240px}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessagePart/MessageBody.vue","webpack://./src/assets/markdown.scss","webpack://./src/assets/variables.scss"],names:[],mappings:"AAIA,+BACC,YAAA,CACA,mJAAA,CACA,yCAAA,CACA,6BAAA,CACA,sBAAA,CACA,cAAA,CAEA,qCACC,UAAA,CACA,6BAAA,CAEA,mDACC,cAAA,CACA,gBAAA,CAGD,oDACC,mCAAA,CACA,iBAAA,CACA,cAAA,CAGD,yDACC,6BAAA,CACA,mDAAA,CACA,YAAA,CACA,wCAAA,CACA,iBAAA,CAGD,qDACC,YAAA,CACA,kBAAA,CACA,mCAAA,CACA,yEACC,WAAA,CACA,gBAAA,CAIF,sDACC,iBAAA,CAEA,yEACC,iBAAA,CACA,KAAA,CACA,+CAAA,CACA,cAAA,CACA,6CAAA,CAGD,0EACC,gBAAA,CClDH,6EACC,cAAA,CAGD,6EACC,iBAAA,CAGD,0JAEC,cAAA,CACA,yBAAA,CAEA,gMACC,SAAA,CAIF,2GACC,oBAAA,CAGD,yFACC,eAAA,CAGD,8EACC,gDAAA,CACA,WAAA,CACA,YAAA,CACA,kCAAA,CACA,6CAAA,CACA,eAAA,CAEA,mFACC,QAAA,CACA,SAAA,CAIF,+EACC,oBAAA,CACA,eAAA,CACA,YAAA,CACA,kCAAA,CACA,6CAAA,CAGD,qFACC,cAAA,CACA,yBAAA,CACA,gBAAA,CACA,iDAAA,CDID,qCACC,iBAAA,CACA,gBAAA,CACA,YAAA,CACA,wBAAA,CACA,mCAAA,CACA,kCAAA,CACA,oFExDoB,CFyDpB,mDAAA,CAEA,2CACC,SAAA,CACA,cAAA,CAEA,mDACC,mBAAA,CACA,SAAA,CAGD,sDACC,8CAAA,CAMJ,iCACC,uCAAA,CACA,wCAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAEA,8CACC,cAAA,CAKF,wCACC,aAAA,CAID,yCACC,eAAA",sourcesContent:[`
@import '../../../../../assets/markdown';
@import '../../../../../assets/variables';

.message-main {
	display: grid;
	grid-template-columns: minmax(0, $messages-text-max-width) $messages-info-width;
	grid-row-gap: var(--default-grid-baseline);
	justify-content: space-between;
	align-items: flex-start;
	min-width: 100%;

	&__text {
		width: 100%;
		color: var(--color-text-light);

		& > .single-emoji {
			font-size: 250%;
			line-height: 100%;
		}

		&.system-message {
			color: var(--color-text-maxcontrast);
			text-align: center;
			padding: 0 20px;
		}

		&.message-highlighted {
			color: var(--color-text-light);
			background-color: var(--color-primary-element-light);
			padding: 10px;
			border-radius: var(--border-radius-large);
			text-align: center;
		}

		&.deleted-message {
			display: flex;
			align-items: center;
			color: var(--color-text-maxcontrast);
			:deep(.rich-text--wrapper) {
				flex-grow: 1;
				text-align: start;
			}
		}

		&.markdown-message {
			position: relative;

			.message-copy-code {
				position: absolute;
				top: 0;
				right: calc(4px + var(--default-clickable-area));
				margin-top: 4px;
				background-color: var(--color-background-dark);
			}

			:deep(.rich-text--wrapper) {
				text-align: start;
				@include markdown;
			}
		}
	}

	&__info {
		position: relative;
		user-select: none;
		display: flex;
		justify-content: flex-end;
		color: var(--color-text-maxcontrast);
		font-size: var(--default-font-size);
		width: $messages-info-width;
		padding-inline: calc(2 * var(--default-grid-baseline));

		.date {
			width: 8ch;
			text-align: end;

			&--hidden {
				pointer-events: none;
				opacity: 0;
			}

			&:last-child {
				margin-right: var(--clickable-area-small, 24px);
			}
		}
	}
}

.message-status {
	width: var(--clickable-area-small, 24px);
	height: var(--clickable-area-small, 24px);
	display: flex;
	justify-content: center;
	align-items: center;

	&.retry-option {
		cursor: pointer;
	}
}

// Hardcode to prevent RTL affecting on user mentions
:deep(.rich-text--component) {
	direction: ltr;
}

// Hardcode to restrict size of message images for the chat
:deep(.widget-default--image) {
	max-width: 240px;
}
`,`/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

@mixin markdown {
	// Overwrite core styles, otherwise h4 is lesser than default font-size
	h4 {
		font-size: 100%;
	}

	em {
		font-style: italic;
	}

	ul,
	ol {
		padding-left: 0;
		padding-inline-start: 15px;

		&.contains-task-list {
			padding: 0;
		}
	}

	input:disabled + .checkbox-content {
		opacity: 1 !important;
	}

	div:has(table) {
		overflow-x: auto;
	}

	pre {
		width: calc(100% - var(--default-clickable-area));
		padding: 4px;
		margin: 2px 0;
		border-radius: var(--border-radius);
		background-color: var(--color-background-dark);
		overflow-x: auto;

		& code {
			margin: 0;
			padding: 0;
		}
	}

	code {
		display: inline-block;
		padding: 2px 4px;
		margin: 2px 0;
		border-radius: var(--border-radius);
		background-color: var(--color-background-dark);
	}

	blockquote {
		padding-left: 0;
		padding-inline-start: 13px;
		border-left: none;
		border-inline-start: 4px solid var(--color-border);
	}
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
`],sourceRoot:""}]);const E=d}),57250:((D,b,n)=>{"use strict";n.r(b),n.d(b,{default:()=>au});var C=function(){var e=this,t=e._self._c;return t("div",{staticClass:"talk-tab__wrapper"},[e.isInCall?e._e():t("CallButton",{staticClass:"talk-tab__call-button"}),e._v(" "),e.connectionFailed?t("CallFailedDialog",{attrs:{token:e.token}}):e._e(),e._v(" "),t("ChatView",{staticClass:"talk-tab__chat-view",attrs:{"is-sidebar":""}}),e._v(" "),t("PollViewer"),e._v(" "),t("MediaSettings",{attrs:{"recording-consent-given":e.recordingConsentGiven},on:{"update:recordingConsentGiven":function(a){e.recordingConsentGiven=a},"update:recording-consent-given":function(a){e.recordingConsentGiven=a}}})],1)},m=[],h=function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t(a.NcModal,{attrs:{"label-id":a.connectionFailedDialogId},on:{close:a.clearConnectionFailedError}},[t(a.NcEmptyContent,{attrs:{name:a.t("spreed","Connection failed"),description:a.message},scopedSlots:e._u([{key:"icon",fn:function(){return[t(a.IconAlertOctagon)]},proxy:!0}])})],1)},y=[],d=n(85471),E=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon alert-octagon-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M13 13H11V7H13M11 15H13V17H11M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},Be=[];const G={name:"AlertOctagonIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var f=n(14486),rs=(0,f.A)(G,E,Be,!1,null,null,null);const os=rs.exports;var o=n(53334),at=n(51025),ye=n(80780),vt=n(20109);const ls=(0,d.pM)({__name:"CallFailedDialog",props:{token:{type:String,required:!0}},setup(s){const e=s,t=(0,vt.P)(),a={400:(0,o.t)("spreed","Recording consent is required"),403:(0,o.t)("spreed","This conversation is read-only"),404:(0,o.t)("spreed","Conversation not found or not joined"),412:(0,o.t)("spreed","Lobby is still active and you're not a moderator")},i=(0,d.EW)(()=>t.getters.connectionFailed(e.token)),r=`connection-failed-${e.token}`,l=(0,d.EW)(()=>{if(!i.value)return"";const v=i.value?.meta?.statuscode;return a[v]?a[v]:i.value?.data?.error?i.value.data.error:(0,o.t)("spreed","Please try to reload the page")});function u(){t.dispatch("clearConnectionFailed",e.token)}return{__sfc:!0,store:t,props:e,STATUS_ERRORS:a,connectionFailed:i,connectionFailedDialogId:r,message:l,clearConnectionFailedError:u,IconAlertOctagon:os,t:o.t,NcEmptyContent:at.A,NcModal:ye.A}}});var ds=(0,f.A)(ls,h,y,!1,null,null,null);const us=ds.exports;var cs=function(){var e=this,t=e._self._c;return t("div",{staticClass:"chatView",on:{dragover:function(a){return a.preventDefault(),e.handleDragOver.apply(null,arguments)},dragleave:function(a){return a.preventDefault(),e.handleDragLeave.apply(null,arguments)},drop:function(a){return a.preventDefault(),e.handleDropFiles.apply(null,arguments)}}},[e.isGuestWithoutDisplayName?t("GuestWelcomeWindow",{attrs:{token:e.token}}):e._e(),e._v(" "),t("TransitionWrapper",{attrs:{name:"slide-up",mode:"out-in"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isDraggingOver,expression:"isDraggingOver"}],staticClass:"dragover"},[t("div",{staticClass:"drop-hint"},[t("div",{staticClass:"drop-hint__icon",class:{"icon-upload":!e.isGuest&&!e.isReadOnly,"icon-user":e.isGuest,"icon-error":e.isReadOnly}}),e._v(" "),t("h2",{staticClass:"drop-hint__text"},[e._v(`
					`+e._s(e.dropHintText)+`
				`)])])])]),e._v(" "),t("MessagesList",{attrs:{role:"region","aria-label":e.t("spreed","Conversation messages"),token:e.token,"is-chat-scrolled-to-bottom":e.isChatScrolledToBottom,"is-visible":e.isVisible},on:{"update:isChatScrolledToBottom":function(a){e.isChatScrolledToBottom=a},"update:is-chat-scrolled-to-bottom":function(a){e.isChatScrolledToBottom=a}}}),e._v(" "),t("div",{staticClass:"scroll-to-bottom"},[t("TransitionWrapper",{attrs:{name:"fade"}},[t("NcButton",{directives:[{name:"show",rawName:"v-show",value:!e.isChatScrolledToBottom&&!e.isLoadingChat,expression:"!isChatScrolledToBottom && !isLoadingChat"}],staticClass:"scroll-to-bottom__button",attrs:{type:"secondary","aria-label":e.t("spreed","Scroll to bottom"),title:e.t("spreed","Scroll to bottom")},on:{click:e.scrollToBottom},scopedSlots:e._u([{key:"icon",fn:function(){return[t("ChevronDoubleDown",{attrs:{size:20}})]},proxy:!0}])})],1)],1),e._v(" "),t("NewMessage",{attrs:{role:"region",token:e.token,"has-typing-indicator":"","aria-label":e.t("spreed","Post message")}}),e._v(" "),t("NewMessageUploadEditor")],1)},_s=[],ps=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon chevron-double-down-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},As=[];const gs={name:"ChevronDoubleDownIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var ms=(0,f.A)(gs,ps,As,!1,null,null,null);const hs=ms.exports;var U=n(74095),Cs=function(){var e=this,t=e._self._c;return t("NcModal",{attrs:{"can-close":!1,"close-on-click-outside":!1,"label-id":e.dialogHeaderId,size:"small"}},[t("div",{staticClass:"modal__content"},[t("div",{staticClass:"conversation-information"},[t("ConversationIcon",{attrs:{item:e.conversation,"hide-user-status":""}}),e._v(" "),t("h2",{staticClass:"nc-dialog-alike-header",attrs:{id:e.dialogHeaderId}},[e._v(`
				`+e._s(e.conversationDisplayName)+`
			`)])],1),e._v(" "),t("p",{staticClass:"description"},[e._v(`
			`+e._s(e.conversationDescription)+`
		`)]),e._v(" "),t("label",{attrs:{for:"textField"}},[e._v(e._s(e.t("spreed","Enter your name")))]),e._v(" "),t("NcTextField",{staticClass:"username-form__input",attrs:{id:"textField",placeholder:e.t("spreed","Guest"),"show-trailing-button":!1,"label-outside":""},on:{keydown:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.handleChooseUserName.apply(null,arguments)}},model:{value:e.guestUserName,callback:function(a){e.guestUserName=a},expression:"guestUserName"}}),e._v(" "),t("NcButton",{staticClass:"submit-button",attrs:{type:"primary",disabled:e.invalidGuestUsername},on:{click:e.handleChooseUserName},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Check",{attrs:{size:20}})]},proxy:!0}])},[e._v(`
			`+e._s(e.t("spreed","Submit name and join"))+`
			`)]),e._v(" "),t("div",{staticClass:"separator"}),e._v(" "),t("div",{staticClass:"login-info"},[t("span",[e._v(" "+e._s(e.t("spreed","Do you already have an account?")))]),e._v(" "),t("NcButton",{attrs:{type:"secondary",href:e.getLoginUrl()}},[e._v(`
				`+e._s(e.t("spreed","Log in"))+`
			`)])],1)],1)])},fs=[],vs=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon check-bold-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},Ds=[];const ys={name:"CheckBoldIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var bs=(0,f.A)(ys,vs,Ds,!1,null,null,null);const Dt=bs.exports;var W=n(63814),Fs=n(82182),Es=n(97626),xe=n(23399),be=n(14816);const Ms={name:"GuestWelcomeWindow",components:{NcModal:ye.A,NcTextField:Fs.A,ConversationIcon:Es.A,NcButton:U.A,Check:Dt},props:{token:{type:String,required:!0}},setup(){const s=(0,be.m)(),e=(0,d.KR)(""),t=`guest-welcome-header-${(0,xe.B)()}`;return{guestNameStore:s,guestUserName:e,dialogHeaderId:t}},computed:{conversation(){return this.$store.getters.conversation(this.token)},conversationDisplayName(){return this.conversation?.displayName},conversationDescription(){return this.conversation?.description},invalidGuestUsername(){return this.guestUserName.trim()===""}},methods:{t:o.t,handleChooseUserName(){this.guestNameStore.submitGuestUsername(this.token,this.guestUserName)},getLoginUrl(){const s=window.location.pathname,e=(0,W.Jv)("/login"),t=encodeURIComponent(s);return`${e}?redirect_url=${t}`}}};var Bs=n(85072),S=n.n(Bs),xs=n(97825),T=n.n(xs),ks=n(77659),L=n.n(ks),ws=n(55056),I=n.n(ws),Ss=n(10540),O=n.n(Ss),Ts=n(41113),R=n.n(Ts),ke=n(18765),Z={};Z.styleTagTransform=R(),Z.setAttributes=I(),Z.insert=L().bind(null,"head"),Z.domAPI=T(),Z.insertStyleElement=O();var pu=S()(ke.A,Z);const Au=ke.A&&ke.A.locals?ke.A.locals:void 0;var Ls=(0,f.A)(Ms,Cs,fs,!1,null,"7cf6a8ac",null);const Is=Ls.exports;var Os=function(){var e=this,t=e._self._c;return t("div",{key:e.token,ref:"scroller",staticClass:"scroller messages-list__scroller",class:{"scroller--chatScrolledToBottom":e.isChatScrolledToBottom,"scroller--isScrolling":e.isScrolling},on:{scroll:e.onScroll,scrollend:e.endScroll}},[t("TransitionWrapper",{attrs:{name:"fade"}},[t("div",{staticClass:"scroller__loading"},[e.displayMessagesLoader?t("NcLoadingIcon",{staticClass:"scroller__loading-element",attrs:{size:32}}):e._e()],1)]),e._v(" "),e._l(e.messagesGroupedByDateByAuthor,function(a,i){return t("ul",{key:`section_${i}`,ref:`dateGroup-${e.token}`,refInFor:!0,staticClass:"scroller__content",class:{"has-sticky":i===e.stickyDate},attrs:{"data-date-timestamp":i}},[t("li",{key:e.dateSeparatorLabels[i],staticClass:"messages-group__date"},[t("span",{staticClass:"messages-group__date-text",attrs:{role:"heading","aria-level":"3"}},[e._v(`
				`+e._s(e.dateSeparatorLabels[i])+`
			`)])]),e._v(" "),e._l(a,function(r){return t(e.messagesGroupComponent(r),{key:r.id,tag:"component",staticClass:"messages-group",attrs:{token:e.token,messages:r.messages,"previous-message-id":r.previousMessageId,"next-message-id":r.nextMessageId}})})],2)}),e._v(" "),e.isMessagesListPopulated?e.showEmptyContent?t("NcEmptyContent",{staticClass:"messages-list__empty-content",attrs:{name:e.t("spreed","No messages"),description:e.t("spreed","All messages have expired or have been deleted.")},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Message",{attrs:{size:64}})]},proxy:!0}])}):e._e():[t("LoadingPlaceholder",{staticClass:"messages-list__placeholder",attrs:{type:"messages",count:15}})]],2)},Rs=[],Ps=n(17334),yt=n.n(Ps),js=n(97200),Ns=n.n(js),$s=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon message-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},Us=[];const Vs={name:"MessageIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var zs=(0,f.A)(Vs,$s,Us,!1,null,null,null);const Gs=zs.exports;var K=n(66802),H=n(61338),N=n(51651),Fe=n(88289),Ws=function(){var e=this,t=e._self._c;return t("li",{staticClass:"wrapper"},[t("div",{staticClass:"messages__avatar"},[t("AvatarWrapper",{attrs:{id:e.actorId,token:e.token,name:e.actorDisplayName,source:e.actorType,size:e.AVATAR.SIZE.SMALL,"disable-menu":e.disableMenu,"disable-tooltip":""}})],1),e._v(" "),t("ul",{staticClass:"messages"},[t("li",{staticClass:"messages__author",attrs:{"aria-level":"4"}},[e._v(`
			`+e._s(e.actorInfo)+`
		`)]),e._v(" "),e._l(e.messages,function(a,i){return t("Message",{key:a.id,attrs:{message:a,"next-message-id":e.messages[i+1]&&e.messages[i+1].id||e.nextMessageId,"previous-message-id":i>0&&e.messages[i-1].id||e.previousMessageId}})})],2)])},Hs=[],Ks=function(){var e=this,t=e._self._c;return t("li",{ref:"message",staticClass:"message",class:{"message--hovered":e.showMessageButtonsBar},attrs:{id:`message_${e.message.id}`,"data-message-id":e.message.id,"data-seen":e.seen,"data-next-message-id":e.nextMessageId,"data-previous-message-id":e.previousMessageId,tabindex:"0"},on:{animationend:e.clearHighlightedClass,mouseover:e.handleMouseover,mouseleave:e.handleMouseleave}},[t("div",{staticClass:"message-body",class:{"normal-message-body":!e.isSystemMessage&&!e.isDeletedMessage,system:e.isSystemMessage,"combined-system":e.isCombinedSystemMessage}},[t("MessageBody",{attrs:{"rich-parameters":e.richParameters,"is-deleting":e.isDeleting,"has-call":e.conversation.hasCall,message:e.message,"read-info":e.readInfo}},[Object.keys(e.message.reactions).length?t("Reactions",{attrs:{id:e.message.id,token:e.message.token,"can-react":e.canReact,"show-controls":e.isHovered||e.isFollowUpEmojiPickerOpen},on:{"emoji-picker-toggled":e.toggleFollowUpEmojiPicker}}):e._e()],1)],1),e._v(" "),t("div",{staticClass:"message-body__scroll"},[e.showMessageButtonsBar?t("MessageButtonsBar",{ref:"messageButtonsBar",staticClass:"message-buttons-bar",attrs:{"is-translation-available":e.isTranslationAvailable,"is-action-menu-open":e.isActionMenuOpen,"is-emoji-picker-open":e.isEmojiPickerOpen,"is-reactions-menu-open":e.isReactionsMenuOpen,"is-forwarder-open":e.isForwarderOpen,"can-react":e.canReact,message:e.message,"previous-message-id":e.previousMessageId,"read-info":e.readInfo},on:{"update:isActionMenuOpen":function(a){e.isActionMenuOpen=a},"update:is-action-menu-open":function(a){e.isActionMenuOpen=a},"update:isEmojiPickerOpen":function(a){e.isEmojiPickerOpen=a},"update:is-emoji-picker-open":function(a){e.isEmojiPickerOpen=a},"update:isReactionsMenuOpen":function(a){e.isReactionsMenuOpen=a},"update:is-reactions-menu-open":function(a){e.isReactionsMenuOpen=a},"update:isForwarderOpen":function(a){e.isForwarderOpen=a},"update:is-forwarder-open":function(a){e.isForwarderOpen=a},"show-translate-dialog":function(a){e.isTranslateDialogOpen=!0},reply:e.handleReply,edit:e.handleEdit,delete:e.handleDelete}}):e.showCombinedSystemMessageToggle?t("div",{staticClass:"message-buttons-bar"},[t("NcButton",{attrs:{type:"tertiary","aria-label":e.t("spreed","Show or collapse system messages"),title:e.t("spreed","Show or collapse system messages")},on:{click:e.toggleCombinedSystemMessage},scopedSlots:e._u([{key:"icon",fn:function(){return[e.isCombinedSystemMessageCollapsed?t("IconUnfoldMore"):t("IconUnfoldLess")]},proxy:!0}])})],1):e._e()],1),e._v(" "),e.isForwarderOpen?t("MessageForwarder",{attrs:{id:e.message.id,token:e.message.token},on:{close:function(a){e.isForwarderOpen=!1}}}):e._e(),e._v(" "),e.isTranslationAvailable&&e.isTranslateDialogOpen?t("MessageTranslateDialog",{attrs:{message:e.message.message,"rich-parameters":e.richParameters},on:{close:function(a){e.isTranslateDialogOpen=!1}}}):e._e(),e._v(" "),e.isLastReadMessage?t("div",{directives:[{name:"intersection-observer",rawName:"v-intersection-observer",value:e.lastReadMessageVisibilityChanged,expression:"lastReadMessageVisibilityChanged"}],staticClass:"message-unread-marker"},[t("div",{staticClass:"message-unread-marker__wrapper"},[t("span",{staticClass:"message-unread-marker__text"},[e._v(e._s(e.t("spreed","Unread messages")))]),e._v(" "),e.shouldShowSummaryOption?t("NcButton",{on:{click:e.generateSummary},scopedSlots:e._u([{key:"icon",fn:function(){return[t("IconCreation")]},proxy:!0}],null,!1,2561665)},[e._v(`
				`+e._s(e.t("spreed","Generate summary"))+`
			`)]):e._e()],1)]):e._e()],1)},Ys=[],we=n(57579),Xs=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon creation-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},Js=[];const Zs={name:"CreationIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Qs=(0,f.A)(Zs,Xs,Js,!1,null,null,null);const bt=Qs.exports;var qs=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon unfold-less-horizontal-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M16.59,5.41L15.17,4L12,7.17L8.83,4L7.41,5.41L12,10M7.41,18.59L8.83,20L12,16.83L15.17,20L16.58,18.59L12,14L7.41,18.59Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},ea=[];const ta={name:"UnfoldLessHorizontalIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var sa=(0,f.A)(ta,qs,ea,!1,null,null,null);const aa=sa.exports;var na=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon unfold-more-horizontal-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},ia=[];const ra={name:"UnfoldMoreHorizontalIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var oa=(0,f.A)(ra,na,ia,!1,null,null,null);const la=oa.exports;var P=n(85168),da=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.handleClickOutside,expression:"handleClickOutside"}]},[e.isReactionsMenuOpen?[t("NcButton",{attrs:{type:"tertiary","aria-label":e.t("spreed","Close reactions menu")},on:{click:e.closeReactionsMenu},scopedSlots:e._u([{key:"icon",fn:function(){return[t("ArrowLeft",{attrs:{size:20}})]},proxy:!0}])}),e._v(" "),e._l(e.frequentlyUsedEmojis,function(a){return t("NcButton",{key:a,attrs:{type:"tertiary","aria-label":e.t("spreed","React with {emoji}",{emoji:a})},on:{click:function(i){return e.handleReactionClick(a)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("span",[e._v(e._s(a))])]},proxy:!0}],null,!0)})}),e._v(" "),t("NcEmojiPicker",{attrs:{boundary:e.boundariesElement,placement:"auto"},on:{select:e.handleReactionClick,"after-show":e.onEmojiPickerOpen,"after-hide":e.onEmojiPickerClose}},[t("NcButton",{attrs:{type:"tertiary","aria-label":e.t("spreed","React with another emoji")},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Plus",{attrs:{size:20}})]},proxy:!0}])})],1)]:[e.canReact?t("NcButton",{attrs:{type:"tertiary","aria-label":e.t("spreed","Add a reaction to this message"),title:e.t("spreed","Add a reaction to this message")},on:{click:e.openReactionsMenu},scopedSlots:e._u([{key:"icon",fn:function(){return[t("EmoticonOutline",{attrs:{size:20}})]},proxy:!0}],null,!1,1267396848)}):e._e(),e._v(" "),e.canReply?t("NcButton",{attrs:{type:"tertiary","aria-label":e.t("spreed","Reply"),title:e.t("spreed","Reply")},on:{click:e.handleReply},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Reply",{attrs:{size:16}})]},proxy:!0}],null,!1,2449574943)}):e._e(),e._v(" "),t("NcActions",{attrs:{"force-menu":!0,placement:"bottom-end","boundaries-element":e.boundariesElement},on:{open:e.onMenuOpen,close:e.onMenuClose}},[e.submenu===null?[t("NcActionText",{scopedSlots:e._u([{key:"icon",fn:function(){return[e.readInfo.showCommonReadIcon?t("span",{attrs:{title:e.readInfo.commonReadIconTitle,"aria-label":e.readInfo.commonReadIconTitle}},[t("CheckAll",{attrs:{size:16}})],1):e.readInfo.showSentIcon?t("span",{attrs:{title:e.readInfo.sentIconTitle,"aria-label":e.readInfo.sentIconTitle}},[t("Check",{attrs:{size:16}})],1):t("ClockOutline",{attrs:{size:16}})]},proxy:!0}],null,!1,523023767)},[e._v(`
					`+e._s(e.messageDateTime)+`
				`)]),e._v(" "),e.message.lastEditTimestamp?t("NcActionText",{staticClass:"edit-timestamp",attrs:{name:e.lastEditActorLabel},scopedSlots:e._u([{key:"icon",fn:function(){return[t("ClockEditOutline",{attrs:{size:16}})]},proxy:!0}],null,!1,109138201)},[e._v(`
					`+e._s(e.editedDateTime)+`
				`)]):e._e(),e._v(" "),e.readInfo.showSilentIcon?t("NcActionText",{scopedSlots:e._u([{key:"icon",fn:function(){return[t("IconBellOff",{attrs:{size:16}})]},proxy:!0}],null,!1,3643103150)},[e._v(`
					`+e._s(e.readInfo.silentIconTitle)+`
				`)]):e._e(),e._v(" "),t("NcActionSeparator"),e._v(" "),e.supportReminders?t("NcActionButton",{attrs:{"is-menu":""},on:{click:function(a){a.stopPropagation(),e.submenu="reminder"}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("AlarmIcon",{attrs:{size:20}})]},proxy:!0}],null,!1,1813317200)},[e._v(`
					`+e._s(e.t("spreed","Set reminder"))+`
				`)]):e._e(),e._v(" "),e.isPrivateReplyable?t("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(a){return a.stopPropagation(),e.handlePrivateReply.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("AccountIcon",{attrs:{size:20}})]},proxy:!0}],null,!1,2066712834)},[e._v(`
					`+e._s(e.t("spreed","Reply privately"))+`
				`)]):e._e(),e._v(" "),e.isEditable?t("NcActionButton",{attrs:{"aria-label":e.t("spreed","Edit message"),"close-after-click":""},on:{click:function(a){return a.stopPropagation(),e.editMessage.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Pencil",{attrs:{size:20}})]},proxy:!0}],null,!1,580569589)},[e._v(`
					`+e._s(e.t("spreed","Edit message"))+`
				`)]):e._e(),e._v(" "),e.isFileShareWithoutCaption?e._e():t("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(a){return a.stopPropagation(),e.handleCopyMessageText.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("ContentCopy",{attrs:{size:20}})]},proxy:!0}],null,!1,1478045380)},[e._v(`
					`+e._s(e.t("spreed","Copy message"))+`
				`)]),e._v(" "),t("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(a){return a.stopPropagation(),e.handleCopyMessageLink.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("OpenInNewIcon",{attrs:{size:20}})]},proxy:!0}],null,!1,1266168172)},[e._v(`
					`+e._s(e.t("spreed","Copy message link"))+`
				`)]),e._v(" "),t("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(a){return a.stopPropagation(),e.handleMarkAsUnread.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("EyeOffOutline",{attrs:{size:16}})]},proxy:!0}],null,!1,3681331803)},[e._v(`
					`+e._s(e.t("spreed","Mark as unread"))+`
				`)]),e._v(" "),e.isFileShare?[t("NcActionSeparator"),e._v(" "),t("NcActionLink",{attrs:{href:e.messageFile.link},scopedSlots:e._u([{key:"icon",fn:function(){return[t("File",{attrs:{size:20}})]},proxy:!0}],null,!1,395998446)},[e._v(`
						`+e._s(e.t("spreed","Go to file"))+`
					`)]),e._v(" "),t("NcActionLink",{attrs:{href:e.linkToFileDownload,download:e.messageFile.name},scopedSlots:e._u([{key:"icon",fn:function(){return[t("IconDownload",{attrs:{size:20}})]},proxy:!0}],null,!1,2487097783)},[e._v(`
						`+e._s(e.t("spreed","Download file"))+`
					`)])]:e._e(),e._v(" "),e.canForwardMessage&&!e.isInNoteToSelf?t("NcActionButton",{attrs:{"close-after-click":""},on:{click:e.forwardToNote},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Note",{attrs:{size:16}})]},proxy:!0}],null,!1,4139916445)},[e._v(`
					`+e._s(e.t("spreed","Note to self"))+`
				`)]):e._e(),e._v(" "),e.canForwardMessage?t("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(a){return a.stopPropagation(),e.openForwarder.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Share",{attrs:{size:16}})]},proxy:!0}],null,!1,4243449760)},[e._v(`
					`+e._s(e.t("spreed","Forward message"))+`
				`)]):e._e(),e._v(" "),e.messageActions.length>0?t("NcActionSeparator"):e._e(),e._v(" "),e._l(e.messageActions,function(a){return t("NcActionButton",{key:a.label,attrs:{icon:a.icon,"close-after-click":""},on:{click:function(i){return e.handleMessageAction(a)}}},[e._v(`
					`+e._s(a.label)+`
				`)])}),e._v(" "),e.isTranslationAvailable&&!e.isFileShareWithoutCaption?t("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(a){return a.stopPropagation(),e.$emit("show-translate-dialog",!0)},close:function(a){return e.$emit("show-translate-dialog",!1)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Translate",{attrs:{size:16}})]},proxy:!0}],null,!1,3658990123)},[e._v(`
					`+e._s(e.t("spreed","Translate"))+`
				`)]):e._e(),e._v(" "),e.isDeleteable?[t("NcActionSeparator"),e._v(" "),t("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(a){return a.stopPropagation(),e.handleDelete.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("DeleteIcon",{attrs:{size:16}})]},proxy:!0}],null,!1,4498431)},[e._v(`
						`+e._s(e.t("spreed","Delete"))+`
					`)])]:e._e()]:e.supportReminders&&e.submenu==="reminder"?[t("NcActionButton",{attrs:{"aria-label":e.t("spreed","Back")},on:{click:function(a){a.stopPropagation(),e.submenu=null}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("ArrowLeft")]},proxy:!0}],null,!1,378723937)},[e._v(`
					`+e._s(e.t("spreed","Back"))+`
				`)]),e._v(" "),e.currentReminder?t("NcActionButton",{attrs:{"close-after-click":""},on:{click:function(a){return a.stopPropagation(),e.removeReminder.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("CloseCircleOutline",{attrs:{size:20}})]},proxy:!0}],null,!1,3165582732)},[e._v(`
					`+e._s(e.clearReminderLabel)+`
				`)]):e._e(),e._v(" "),t("NcActionSeparator"),e._v(" "),e._l(e.reminderOptions,function(a){return t("NcActionButton",{key:a.key,attrs:{"aria-label":a.ariaLabel,"close-after-click":""},on:{click:function(i){return i.stopPropagation(),e.setReminder(a.timestamp)}}},[e._v(`
					`+e._s(a.label)+`
				`)])}),e._v(" "),t("NcActionSeparator"),e._v(" "),t("NcActionInput",{attrs:{type:"datetime-local","is-native-picker":"",min:new Date},scopedSlots:e._u([{key:"icon",fn:function(){return[t("CalendarClock",{attrs:{size:20}})]},proxy:!0}],null,!1,1325980530),model:{value:e.customReminderDateTime,callback:function(a){e.customReminderDateTime=a},expression:"customReminderDateTime"}}),e._v(" "),t("NcActionButton",{attrs:{"aria-label":e.t("spreed","Set custom reminder"),"close-after-click":""},on:{click:function(a){return a.stopPropagation(),e.setReminder(e.customReminderTimestamp)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Check",{attrs:{size:20}})]},proxy:!0}],null,!1,4226377742)},[e._v(`
					`+e._s(e.t("spreed","Set custom reminder"))+`
				`)])]:e._e()],2)]],2)},ua=[],ca=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon account-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},_a=[];const pa={name:"AccountIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Aa=(0,f.A)(pa,ca,_a,!1,null,null,null);const ga=Aa.exports;var ma=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon alarm-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},ha=[];const Ca={name:"AlarmIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var fa=(0,f.A)(Ca,ma,ha,!1,null,null,null);const va=fa.exports;var Da=n(89654),nt=n(39284),ya=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon calendar-clock-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},ba=[];const Fa={name:"CalendarClockIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Ea=(0,f.A)(Fa,ya,ba,!1,null,null,null);const Ma=Ea.exports;var Se=n(91882),Ba=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon check-all-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M0.41,13.41L6,19L7.41,17.58L1.83,12M22.24,5.58L11.66,16.17L7.5,12L6.07,13.41L11.66,19L23.66,7M18,7L16.59,5.58L10.24,11.93L11.66,13.34L18,7Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},xa=[];const ka={name:"CheckAllIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var wa=(0,f.A)(ka,Ba,xa,!1,null,null,null);const Ft=wa.exports;var Sa=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon clock-edit-outline-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M21 13.1C20.9 13.1 20.7 13.2 20.6 13.3L19.6 14.3L21.7 16.4L22.7 15.4C22.9 15.2 22.9 14.8 22.7 14.6L21.4 13.3C21.3 13.2 21.2 13.1 21 13.1M19.1 14.9L13 20.9V23H15.1L21.2 16.9L19.1 14.9M12.5 7V12.2L16.5 14.6L15.5 15.6L11 13V7H12.5M11 21.9C5.9 21.4 2 17.1 2 12C2 6.5 6.5 2 12 2C17.3 2 21.6 6.1 22 11.3C21.7 11.2 21.4 11.1 21 11.1C20.6 11.1 20.3 11.2 20 11.3C19.6 7.2 16.2 4 12 4C7.6 4 4 7.6 4 12C4 16.1 7.1 19.5 11.1 19.9L11 20.1V21.9Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},Ta=[];const La={name:"ClockEditOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Ia=(0,f.A)(La,Sa,Ta,!1,null,null,null);const Oa=Ia.exports;var Ra=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon clock-outline-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},Pa=[];const ja={name:"ClockOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Na=(0,f.A)(ja,Ra,Pa,!1,null,null,null);const $a=Na.exports;var Ua=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon close-circle-outline-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},Va=[];const za={name:"CloseCircleOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Ga=(0,f.A)(za,Ua,Va,!1,null,null,null);const Wa=Ga.exports;var Ha=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon content-copy-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},Ka=[];const Ya={name:"ContentCopyIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Xa=(0,f.A)(Ya,Ha,Ka,!1,null,null,null);const it=Xa.exports;var Ja=n(86451),Za=n(15370),Qa=n(13188),qa=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon eye-off-outline-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},en=[];const tn={name:"EyeOffOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var sn=(0,f.A)(tn,qa,en,!1,null,null,null);const an=sn.exports;var nn=n(99788),rn=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon note-edit-outline-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M18.13 12L19.39 10.74C19.83 10.3 20.39 10.06 21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11V19.13L11.13 19H5V5H12V12H18.13M14 4.5L19.5 10H14V4.5M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},on=[];const ln={name:"NoteEditOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var dn=(0,f.A)(ln,rn,on,!1,null,null,null);const un=dn.exports;var cn=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon open-in-new-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},_n=[];const pn={name:"OpenInNewIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var An=(0,f.A)(pn,cn,_n,!1,null,null,null);const gn=An.exports;var mn=n(6513),Et=n(49954),hn=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon reply-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},Cn=[];const fn={name:"ReplyIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var vn=(0,f.A)(fn,hn,Cn,!1,null,null,null);const Dn=vn.exports;var yn=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon share-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},bn=[];const Fn={name:"ShareIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var En=(0,f.A)(Fn,yn,bn,!1,null,null,null);const Mn=En.exports;var Bn=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon translate-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},xn=[];const kn={name:"TranslateIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var wn=(0,f.A)(kn,Bn,xn,!1,null,null,null);const Sn=wn.exports;var Mt=n(21777),rt=n(57505),Tn=n(34334),Bt=n(39999),ot=n(24764),Ln=n(15502),In=n(49615),xt=n(22777),On=n(16343),lt=n(85387),F=n(72925),z=n(97876);const Rn=async function(s,e){return K.Ay.get((0,W.KT)("apps/spreed/api/v1/chat/{token}/{messageId}/reminder",{token:s,messageId:e}))},Pn=async function(s,e,t){return K.Ay.post((0,W.KT)("apps/spreed/api/v1/chat/{token}/{messageId}/reminder",{token:s,messageId:e}),{timestamp:t})},jn=async function(s,e){return K.Ay.delete((0,W.KT)("apps/spreed/api/v1/chat/{token}/{messageId}/reminder",{token:s,messageId:e}))};var Nn=n(22072),kt=n(75991),$n=n(78454);function Un(s,e=(0,Mt.HW)()?.uid){if(!e)throw new TypeError("Cannot generate /files/<user>/ URL without a user");return $n.PY+"/files/"+encodeURI(e)+"/"+encodeURI(s)}function Vn(s){return s+"/download"}var zn=n(48729),dt=n(68684);const Gn={name:"MessageButtonsBar",components:{NcActionButton:rt.A,NcActionInput:Tn.A,NcActionLink:Bt.A,NcActionSeparator:Ln.A,NcActionText:In.A,NcActions:ot.A,NcButton:U.A,NcEmojiPicker:xt.A,AccountIcon:ga,AlarmIcon:va,ArrowLeft:Da.A,IconBellOff:nt.A,CalendarClock:Ma,CloseCircleOutline:Wa,Check:Se.A,CheckAll:Ft,ClockEditOutline:Oa,ClockOutline:$a,ContentCopy:it,IconDownload:Za.A,DeleteIcon:Ja.A,EmoticonOutline:Qa.A,EyeOffOutline:an,File:nn.A,Note:un,OpenInNewIcon:gn,Pencil:mn.A,Plus:Et.A,Reply:Dn,Share:Mn,Translate:Sn},directives:{ClickOutside:we.z0},inject:["getMessagesListScroller"],props:{previousMessageId:{type:[String,Number],required:!0},message:{type:Object,required:!0},isActionMenuOpen:{type:Boolean,required:!0},isEmojiPickerOpen:{type:Boolean,required:!0},isReactionsMenuOpen:{type:Boolean,required:!0},isForwarderOpen:{type:Boolean,required:!0},canReact:{type:Boolean,required:!0},readInfo:{type:Object,required:!0},isTranslationAvailable:{type:Boolean,required:!0}},emits:["delete","update:isActionMenuOpen","update:isEmojiPickerOpen","update:isReactionsMenuOpen","update:isForwarderOpen","show-translate-dialog","reply","edit"],setup(s){const{message:e}=(0,d.QW)(s),t=(0,kt.b)(),{messageActions:a}=(0,Nn.Q)(),{isEditable:i,isDeleteable:r,isCurrentUserOwnMessage:l,isFileShare:u,isFileShareWithoutCaption:v,isConversationReadOnly:c,isConversationModifiable:_}=(0,lt.B)(e),A=(0,z.t0)(e.value.token,"remind-me-later");return{messageActions:a,supportReminders:A,reactionsStore:t,isEditable:i,isCurrentUserOwnMessage:l,isFileShare:u,isFileShareWithoutCaption:v,isDeleteable:r,isConversationReadOnly:c,isConversationModifiable:_}},data(){return{frequentlyUsedEmojis:[],submenu:null,currentReminder:null,customReminderTimestamp:(0,N.A)().add(2,"hours").minute(0).second(0).valueOf()}},computed:{conversation(){return this.$store.getters.conversation(this.message.token)},boundariesElement(){return this.getMessagesListScroller()},isPrivateReplyable(){return this.message.isReplyable&&(this.conversation.type===F.si.TYPE.PUBLIC||this.conversation.type===F.si.TYPE.GROUP)&&!this.isCurrentUserOwnMessage&&this.message.actorType===F.Rf.ACTOR_TYPE.USERS&&this.$store.getters.isActorUser()},messageFile(){const s=Object.keys(this.message.messageParameters).find(e=>e.startsWith("file"));return this.message.messageParameters[s]},linkToFileDownload(){return(0,Mt.HW)()?Un(this.messageFile.path):Vn(this.messageFile.link)},isCurrentGuest(){return this.$store.getters.isActorGuest()},isDeletedMessage(){return this.message.messageType==="comment_deleted"},isPollMessage(){return this.message.messageType==="comment"&&this.message.messageParameters?.object?.type==="talk-poll"},isInNoteToSelf(){return this.conversation.type===F.si.TYPE.NOTE_TO_SELF},canForwardMessage(){return!this.isCurrentGuest&&!this.isFileShare&&!this.isDeletedMessage&&!this.isPollMessage},messageDateTime(){return(0,N.A)(this.message.timestamp*1e3).format("lll")},editedDateTime(){return(0,N.A)(this.message.lastEditTimestamp*1e3).format("lll")},customReminderDateTime:{get(){return new Date(this.customReminderTimestamp)},set(s){s!==null&&(this.customReminderTimestamp=s.valueOf())}},reminderOptions(){const s=(0,N.A)(),e=s.hour()<17?(0,N.A)().hour(18):null,t=(0,N.A)().add(1,"days").hour(8),a=s.day()>0&&s.day()<5?(0,N.A)().day(6).hour(8):null,i=s.day()!==0?(0,N.A)().add(1,"weeks").day(1).hour(8):null;return[{key:"laterToday",timestamp:this.getTimestamp(e),label:(0,o.t)("spreed","Later today \u2013 {timeLocale}",{timeLocale:e?.format("LT")}),ariaLabel:(0,o.t)("spreed","Set reminder for later today")},{key:"tomorrow",timestamp:this.getTimestamp(t),label:(0,o.t)("spreed","Tomorrow \u2013 {timeLocale}",{timeLocale:t?.format("ddd LT")}),ariaLabel:(0,o.t)("spreed","Set reminder for tomorrow")},{key:"thisWeekend",timestamp:this.getTimestamp(a),label:(0,o.t)("spreed","This weekend \u2013 {timeLocale}",{timeLocale:a?.format("ddd LT")}),ariaLabel:(0,o.t)("spreed","Set reminder for this weekend")},{key:"nextWeek",timestamp:this.getTimestamp(i),label:(0,o.t)("spreed","Next week \u2013 {timeLocale}",{timeLocale:i?.format("ddd LT")}),ariaLabel:(0,o.t)("spreed","Set reminder for next week")}].filter(r=>r.timestamp!==null)},clearReminderLabel(){return this.currentReminder?(0,o.t)("spreed","Clear reminder \u2013 {timeLocale}",{timeLocale:(0,N.A)(this.currentReminder.timestamp*1e3).format("ddd LT")}):""},lastEditActorLabel(){return(0,o.t)("spreed","Edited by {actor}",{actor:this.message.lastEditActorDisplayName})},canReply(){return this.message.isReplyable&&!this.isConversationReadOnly&&(this.conversation.permissions&F._z.PERMISSIONS.CHAT)!==0}},watch:{submenu(s){s==="reminder"&&this.getReminder()}},methods:{t:o.t,handleReply(){this.$emit("reply")},async handlePrivateReply(){const s=await this.$store.dispatch("createOneToOneConversation",this.message.actorId);this.$router.push({name:"conversation",params:{token:s.token}}).catch(e=>console.debug(`Error while pushing the new conversation's route: ${e}`))},async handleCopyMessageText(){const s=(0,dt.X)(this.message.message,this.message.messageParameters);try{await navigator.clipboard.writeText(s),(0,P.Te)((0,o.t)("spreed","Message text copied to clipboard"))}catch{(0,P.Qg)((0,o.t)("spreed","Message text could not be copied"))}},handleCopyMessageLink(){(0,zn.EP)(this.message.token,this.message.id)},async handleMarkAsUnread(){await this.$store.dispatch("updateLastReadMessage",{token:this.message.token,id:this.previousMessageId,updateVisually:!0})},handleReactionClick(s){this.message.reactionsSelf?.includes(s)?(console.debug("user has already reacted, removing reaction"),this.reactionsStore.removeReactionFromMessage({token:this.message.token,messageId:this.message.id,selectedEmoji:s})):this.reactionsStore.addReactionToMessage({token:this.message.token,messageId:this.message.id,selectedEmoji:s}),this.closeReactionsMenu()},handleMessageAction(s){s.callback({message:this.message,metadata:this.conversation,apiVersion:"v3"})},handleDelete(){this.$emit("delete")},onMenuOpen(){this.$emit("update:isActionMenuOpen",!0)},onMenuClose(){this.$emit("update:isActionMenuOpen",!1)},onEmojiPickerOpen(){this.updateFrequentlyUsedEmojis(),this.$emit("update:isEmojiPickerOpen",!0)},onEmojiPickerClose(){this.$emit("update:isEmojiPickerOpen",!1)},openReactionsMenu(){this.updateFrequentlyUsedEmojis(),this.$emit("update:isReactionsMenuOpen",!0)},async forwardToNote(){try{await this.$store.dispatch("forwardMessage",{messageToBeForwarded:this.$store.getters.message(this.message.token,this.message.id)}),(0,P.Te)((0,o.t)("spreed",'Message forwarded to "Note to self"'))}catch(s){console.error('Error while forwarding message to "Note to self"',s),(0,P.Qg)((0,o.t)("spreed",'Error while forwarding message to "Note to self"'))}},openForwarder(){this.$emit("update:isForwarderOpen",!0)},handleClickOutside(s){s.composedPath().some(e=>e.classList?.contains("v-popper__popper--shown"))||s.composedPath().includes(this.$el)||this.closeReactionsMenu()},closeReactionsMenu(){this.$emit("update:isReactionsMenuOpen",!1)},updateFrequentlyUsedEmojis(){this.frequentlyUsedEmojis=(0,On.e)("",5).map(s=>s.native)},getTimestamp(s){return s?.minute(0).second(0).millisecond(0).valueOf()||null},async getReminder(){try{const s=await Rn(this.message.token,this.message.id);this.currentReminder=s.data.ocs.data}catch(s){console.debug(s)}},async removeReminder(){try{await jn(this.message.token,this.message.id),(0,P.Te)((0,o.t)("spreed","A reminder was successfully removed"))}catch(s){console.error(s),(0,P.Qg)((0,o.t)("spreed","Error occurred when removing a reminder"))}},async setReminder(s){try{await Pn(this.message.token,this.message.id,s/1e3),(0,P.Te)((0,o.t)("spreed","A reminder was successfully set at {datetime}",{datetime:(0,N.A)(s).format("LLL")}))}catch(e){console.error(e),(0,P.Qg)((0,o.t)("spreed","Error occurred when creating a reminder"))}},editMessage(){this.isEditable&&this.$emit("edit")}}};var Te=n(34960),Q={};Q.styleTagTransform=R(),Q.setAttributes=I(),Q.insert=L().bind(null,"head"),Q.domAPI=T(),Q.insertStyleElement=O();var Iu=S()(Te.A,Q);const Ou=Te.A&&Te.A.locals?Te.A.locals:void 0;var Wn=(0,f.A)(Gn,da,ua,!1,null,"5536cd4b",null);const Hn=Wn.exports;var Kn=function(){var e=this,t=e._self._c;return t("div",{staticClass:"message-forwarder"},[e.showForwardedConfirmation?t("NcDialog",{attrs:{name:e.dialogTitle,"close-on-click-outside":""},on:{"update:open":e.handleClose},scopedSlots:e._u([{key:"actions",fn:function(){return[t("NcButton",{attrs:{type:"tertiary"},on:{click:e.handleClose}},[e._v(`
				`+e._s(e.t("spreed","Dismiss"))+`
			`)]),e._v(" "),t("NcButton",{attrs:{type:"primary"},on:{click:e.openConversation}},[e._v(`
				`+e._s(e.t("spreed","Go to conversation"))+`
			`)])]},proxy:!0}])},[t("NcEmptyContent",{attrs:{description:e.t("spreed","The message has been forwarded to {selectedConversationName}",{selectedConversationName:e.selectedConversationName})},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Check",{attrs:{size:64}})]},proxy:!0}])})],1):t("RoomSelector",{attrs:{"show-postable-only":"","allow-federation":"","dialog-title":e.dialogTitle,"dialog-subtitle":e.dialogSubtitle},on:{select:e.setSelectedConversationToken,close:e.handleClose}})],1)},Yn=[],ut=n(94219),wt=n(23385),Xn=n(40854),Ru=n(35240),Jn=(0,f.A)(Xn.A,wt.X,wt.Y,!1,null,"767d1087",null);const Zn=Jn.exports,Qn={name:"MessageForwarder",components:{Check:Se.A,NcButton:U.A,NcDialog:ut.A,NcEmptyContent:at.A,RoomSelector:Zn},props:{token:{type:String,required:!0},id:{type:[String,Number],required:!0}},emits:["close"],setup(){const s=(0,d.KR)(null),e=(0,d.KR)(null),t=(0,d.KR)(!1),a=(0,d.KR)("");return{isTalkMainApp:(0,d.WQ)("Talk:isMainApp",!1),selectedConversationToken:s,selectedConversationName:e,showForwardedConfirmation:t,forwardedMessageID:a}},computed:{dialogTitle(){return(0,o.t)("spreed","Forward message")},dialogSubtitle(){return(0,o.t)("spreed","Choose a conversation to forward the selected message.")}},methods:{t:o.t,async setSelectedConversationToken(s){this.selectedConversationToken=s.token,this.selectedConversationName=s.displayName;try{const e=await this.$store.dispatch("forwardMessage",{targetToken:this.selectedConversationToken,messageToBeForwarded:this.$store.getters.message(this.token,this.id)});this.forwardedMessageID=e.data.ocs.data.id,this.showForwardedConfirmation=!0}catch(e){console.error("Error while forwarding message",e),(0,P.Qg)((0,o.t)("spreed","Error while forwarding message"))}},openConversation(){if(this.isTalkMainApp)this.$router.push({name:"conversation",hash:`#message_${this.forwardedMessageID}`,params:{token:`${this.selectedConversationToken}`}}).catch(s=>console.debug(`Error while pushing the new conversation's route: ${s}`));else{const s=(0,W.Jv)("/call/{token}#message_{messageId}",{token:this.selectedConversationToken,messageId:this.forwardedMessageID});window.open(s,"_blank").focus()}this.showForwardedConfirmation=!1,this.forwardedMessageID="",this.$emit("close")},handleClose(){this.$emit("close")}}};var qn=(0,f.A)(Qn,Kn,Yn,!1,null,"2936040d",null);const ei=qn.exports;var ti=function(){var e=this,t=e._self._c;return t("NcDialog",{ref:"translateDialog",staticClass:"translate-dialog",attrs:{name:e.t("spreed","Translate message"),size:"large","close-on-click-outside":""},on:{"update:open":function(a){return e.$emit("close")}},scopedSlots:e._u([e.isMounted?{key:"default",fn:function(){return[t("div",{staticClass:"translate-dialog__wrapper"},[t("NcSelect",{staticClass:"translate-dialog__select",attrs:{"input-id":"from","aria-label-combobox":e.t("spreed","Source language to translate from"),placeholder:e.t("spreed","Translate from"),options:e.optionsFrom,"no-wrap":""},model:{value:e.selectedFrom,callback:function(a){e.selectedFrom=a},expression:"selectedFrom"}}),e._v(" "),t("ArrowRight"),e._v(" "),t("NcSelect",{staticClass:"translate-dialog__select",attrs:{"input-id":"to","aria-label-combobox":e.t("spreed","Target language to translate into"),placeholder:e.t("spreed","Translate to"),options:e.optionsTo,"no-wrap":""},model:{value:e.selectedTo,callback:function(a){e.selectedTo=a},expression:"selectedTo"}}),e._v(" "),t("NcButton",{staticClass:"translate-dialog__button",attrs:{type:"primary",disabled:e.isLoading},on:{click:e.handleTranslate},scopedSlots:e._u([e.isLoading?{key:"icon",fn:function(){return[t("NcLoadingIcon")]},proxy:!0}:null],null,!0)},[e._v(`
				`+e._s(e.isLoading?e.t("spreed","Translating"):e.t("spreed","Translate"))+`
			`)])],1),e._v(" "),t("NcRichText",{staticClass:"translate-dialog__message translate-dialog__message-source",attrs:{text:e.message,arguments:e.richParameters,"reference-limit":0}}),e._v(" "),e.translatedMessage?t("NcRichText",{staticClass:"translate-dialog__message translate-dialog__message-translation",attrs:{text:e.translatedMessage,arguments:e.richParameters,"reference-limit":0}}):e._e()]},proxy:!0}:null,e.translatedMessage?{key:"actions",fn:function(){return[t("NcButton",{on:{click:e.handleCopyTranslation},scopedSlots:e._u([{key:"icon",fn:function(){return[t("ContentCopy")]},proxy:!0}],null,!1,1967269327)},[e._v(`
			`+e._s(e.t("spreed","Copy translated text"))+`
		`)])]},proxy:!0}:null],null,!0)})},si=[],ai=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon arrow-right-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},ni=[];const ii={name:"ArrowRightIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var ri=(0,f.A)(ii,ai,ni,!1,null,null,null);const oi=ri.exports;var St=n(64508),Tt=n(67607);const li=async function(s){return K.Ay.get((0,W.KT)("/translation/languages",void 0,s),s)},di=async function(s,e,t,a){return K.Ay.post((0,W.KT)("/translation/translate",void 0,a),{text:s,fromLanguage:e,toLanguage:t},a)},ui={name:"MessageTranslateDialog",components:{NcButton:U.A,NcDialog:ut.A,NcLoadingIcon:Fe.A,NcRichText:St.Ay,NcSelect:Tt.default,ArrowRight:oi,ContentCopy:it},props:{message:{type:String,required:!0},richParameters:{type:Object,required:!0}},emits:["close"],data(){return{isMounted:!1,availableLanguages:null,selectedFrom:null,selectedTo:null,isLoading:!1,translatedMessage:""}},computed:{userLanguage(){return navigator.language.substring(0,2)},sourceTree(){const s={};return Array.from(new Set(this.availableLanguages?.map(t=>t.from))).forEach(t=>{s[t]={id:t,label:this.availableLanguages?.find(a=>a.from===t)?.fromLabel,translations:this.availableLanguages?.filter(a=>a.from===t).map(a=>({id:a.to,label:a.toLabel}))}}),s},translationTree(){const s={};return Array.from(new Set(this.availableLanguages?.map(t=>t.to))).forEach(t=>{s[t]={id:t,label:this.availableLanguages?.find(a=>a.to===t)?.toLabel,sources:this.availableLanguages?.filter(a=>a.to===t).map(a=>({id:a.from,label:a.fromLabel}))}}),s},optionsFrom(){return this.selectedTo?.id?this.translationTree[this.selectedTo?.id]?.sources:Object.values(this.sourceTree).map(s=>({id:s.id,label:s.label}))},optionsTo(){return this.selectedFrom?.id?this.sourceTree[this.selectedFrom?.id]?.translations:Object.values(this.translationTree).map(s=>({id:s.id,label:s.label}))}},watch:{selectedTo(){this.translatedMessage=""},selectedFrom(){this.translatedMessage=""}},async created(){const s=await li();this.availableLanguages=s.data.ocs.data.languages},mounted(){this.selectedTo=this.optionsTo.find(s=>s.id===this.userLanguage)||null,this.selectedTo&&this.translateMessage(),this.$nextTick(()=>{this.isMounted=!!this.$refs.translateDialog.navigationId})},methods:{t:o.t,handleTranslate(){this.translateMessage(this.selectedFrom?.id)},async translateMessage(s=null){try{this.isLoading=!0;const e=await di(this.message,s,this.selectedTo?.id);this.translatedMessage=e.data.ocs.data.text}catch(e){console.error(e),(0,P.Qg)(e.response?.data?.ocs?.data?.message??(0,o.t)("spreed","The message could not be translated"))}finally{this.isLoading=!1}},async handleCopyTranslation(){try{await navigator.clipboard.writeText(this.translatedMessage),(0,P.Te)((0,o.t)("spreed","Translation copied to clipboard"))}catch{(0,P.Qg)((0,o.t)("spreed","Translation could not be copied"))}}}};var Le=n(21143),q={};q.styleTagTransform=R(),q.setAttributes=I(),q.insert=L().bind(null,"head"),q.domAPI=T(),q.insertStyleElement=O();var $u=S()(Le.A,q);const Uu=Le.A&&Le.A.locals?Le.A.locals:void 0;var ci=(0,f.A)(ui,ti,si,!1,null,"f6804034",null);const _i=ci.exports;var pi=function(){var e=this,t=e._self._c;return t("a",{staticClass:"contact",attrs:{href:e.link,"aria-label":e.contactAriaLabel,target:"_blank"}},[e.contactPhotoFromBase64?t("img",{class:{contact__image:e.contactHasPhoto,contact__icon:!e.contactHasPhoto},attrs:{alt:"",src:e.contactPhotoFromBase64}}):e._e(),e._v(" "),t("div",{staticClass:"contact__lineone"},[t("div",{staticClass:"title"},[e._v(`
			`+e._s(e.displayName)+`
		`)])])])},Ai=[];const gi={name:"Contact",props:{name:{type:String,required:!0},link:{type:String,required:!0},contactName:{type:String,default:""},contactPhoto:{type:String,default:""},contactPhotoMimetype:{type:String,default:""}},computed:{contactHasPhoto(){return this.contactPhotoMimetype&&this.contactPhoto},contactPhotoFromBase64(){return this.contactHasPhoto?"data:"+this.contactPhotoMimetype+";base64,"+this.contactPhoto:OC.MimeType.getIconUrl("text/vcard")},displayName(){return this.contactName||this.name},contactAriaLabel(){return(0,o.t)("spreed","Contact")}},methods:{t:o.t}};var Ie=n(20464),ee={};ee.styleTagTransform=R(),ee.setAttributes=I(),ee.insert=L().bind(null,"head"),ee.domAPI=T(),ee.insertStyleElement=O();var zu=S()(Ie.A,ee);const Gu=Ie.A&&Ie.A.locals?Ie.A.locals:void 0;var mi=(0,f.A)(gi,pi,Ai,!1,null,"e6c8e212",null);const hi=mi.exports;var Ci=function(){var e=this,t=e._self._c;return t("a",{staticClass:"deck-card",class:{wide:e.wide},attrs:{href:e.link,"aria-label":e.deckCardAriaLabel,target:"_blank"}},[t("div",{staticClass:"deck-card__lineone"},[t("div",{staticClass:"icon-deck"}),e._v(" "),t("div",{staticClass:"title"},[e._v(`
			`+e._s(e.name)+`
		`)])]),e._v(" "),t("div",{staticClass:"deck-card__linetwo"},[t("div",[e._v(`
			`+e._s(e.deckLocation)+`
		`)])])])},fi=[];const vi={name:"DeckCard",props:{type:{type:String,required:!0},id:{type:String,required:!0},name:{type:String,required:!0},boardname:{type:String,required:!0},stackname:{type:String,required:!0},link:{type:String,required:!0},wide:{type:Boolean,default:!1}},computed:{deckLocation(){return(0,o.t)("spreed","{stack} in {board}",{stack:this.stackname,board:this.boardname})},deckCardAriaLabel(){return(0,o.t)("spreed","Deck Card")}},methods:{t:o.t}};var Oe=n(19852),te={};te.styleTagTransform=R(),te.setAttributes=I(),te.insert=L().bind(null,"head"),te.domAPI=T(),te.insertStyleElement=O();var Hu=S()(Oe.A,te);const Ku=Oe.A&&Oe.A.locals?Oe.A.locals:void 0;var Di=(0,f.A)(vi,Ci,fi,!1,null,"3f8e0132",null);const yi=Di.exports;var bi=n(27974),Lt=n(99708),Fi=function(){var e=this,t=e._self._c;return t("a",{staticClass:"location",class:{wide:e.wide},attrs:{href:e.mapLink,target:"_blank",rel:"noopener noreferrer","aria-label":e.linkAriaLabel}},[t("LMap",{attrs:{zoom:e.previewZoom,center:e.center,options:{scrollWheelZoom:!1,zoomControl:!1,dragging:!1,attributionControl:!1}},on:{scroll:function(a){a.preventDefault()}}},[t("LTileLayer",{attrs:{url:e.url}}),e._v(" "),t("LControlAttribution",{attrs:{position:"bottomright",prefix:e.attribution}}),e._v(" "),t("LMarker",{attrs:{"lat-lng":e.center}},[t("LTooltip",{attrs:{options:{direction:"top",permanent:"true",offset:[-16,-14]}}},[e._v(`
				`+e._s(e.name)+`
			`)])],1)],1)],1)},Ei=[],j=n(53481),Mi=function(s){return!s||typeof s.charAt!="function"?s:s.charAt(0).toUpperCase()+s.slice(1)},Bi=function(s,e,t,a){var i=function(l){var u="set"+Mi(l),v=t[l].type===Object||t[l].type===Array||Array.isArray(t[l].type);t[l].custom&&s[u]?s.$watch(l,function(c,_){s[u](c,_)},{deep:v}):u==="setOptions"?s.$watch(l,function(c,_){(0,j.setOptions)(e,c)},{deep:v}):e[u]&&s.$watch(l,function(c,_){e[u](c)},{deep:v})};for(var r in t)i(r)},It=function(s){var e={};for(var t in s){var a=s[t];a!=null&&(e[t]=a)}return e},xi=function(s,e){var t=e.options&&e.options.constructor===Object?e.options:{};s=s&&s.constructor===Object?s:{};var a=It(t);s=It(s);var i=e.$options.props;for(var r in s){var l=i[r]?i[r].default&&typeof i[r].default=="function"?i[r].default.call():i[r].default:Symbol("unique"),u=!1;Array.isArray(l)?u=JSON.stringify(l)===JSON.stringify(s[r]):u=l===s[r],a[r]&&!u?(console.warn(r+" props is overriding the value passed in the options props"),a[r]=s[r]):a[r]||(a[r]=s[r])}return a},ki={props:{position:{type:String,default:"topright"}},mounted:function(){this.controlOptions={position:this.position}},beforeDestroy:function(){this.mapObject&&this.mapObject.remove()}},wi={props:{options:{type:Object,default:function(){return{}}}}},Si={name:"LControlAttribution",mixins:[ki,wi],props:{prefix:{type:[String,Boolean],default:null}},mounted:function(){var e=this,t=xi(Object.assign({},this.controlOptions,{prefix:this.prefix}),this);this.mapObject=j.control.attribution(t),Bi(this,this.mapObject,this.$options.props),this.mapObject.addTo(this.$parent.mapObject),this.$nextTick(function(){e.$emit("ready",e.mapObject)})},render:function(){return null}};function Ti(s,e,t,a,i,r,l,u,v,c){typeof l!="boolean"&&(v=u,u=l,l=!1);var _=typeof t=="function"?t.options:t;s&&s.render&&(_.render=s.render,_.staticRenderFns=s.staticRenderFns,_._compiled=!0,i&&(_.functional=!0)),a&&(_._scopeId=a);var A;if(r?(A=function(p){p=p||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!p&&typeof __VUE_SSR_CONTEXT__<"u"&&(p=__VUE_SSR_CONTEXT__),e&&e.call(this,v(p)),p&&p._registeredComponents&&p._registeredComponents.add(r)},_._ssrRegister=A):e&&(A=l?function(p){e.call(this,c(p,this.$root.$options.shadowRoot))}:function(p){e.call(this,u(p))}),A)if(_.functional){var g=_.render;_.render=function(w,k){return A.call(k),g(w,k)}}else{var B=_.beforeCreate;_.beforeCreate=B?[].concat(B,A):[A]}return t}var Li=Si,Ii=void 0,Oi=void 0,Ri=void 0,Pi=void 0,ji=Ti({},Ii,Li,Oi,Pi,Ri,!1,void 0,void 0,void 0);const Ni=ji;var $i=function(s){return!s||typeof s.charAt!="function"?s:s.charAt(0).toUpperCase()+s.slice(1)},Ui=function(s,e,t,a){var i=function(l){var u="set"+$i(l),v=t[l].type===Object||t[l].type===Array||Array.isArray(t[l].type);t[l].custom&&s[u]?s.$watch(l,function(c,_){s[u](c,_)},{deep:v}):u==="setOptions"?s.$watch(l,function(c,_){(0,j.setOptions)(e,c)},{deep:v}):e[u]&&s.$watch(l,function(c,_){e[u](c)},{deep:v})};for(var r in t)i(r)},Ot=function(s){var e={};for(var t in s){var a=s[t];a!=null&&(e[t]=a)}return e},Vi=function(s,e){var t=e.options&&e.options.constructor===Object?e.options:{};s=s&&s.constructor===Object?s:{};var a=Ot(t);s=Ot(s);var i=e.$options.props;for(var r in s){var l=i[r]?i[r].default&&typeof i[r].default=="function"?i[r].default.call():i[r].default:Symbol("unique"),u=!1;Array.isArray(l)?u=JSON.stringify(l)===JSON.stringify(s[r]):u=l===s[r],a[r]&&!u?(console.warn(r+" props is overriding the value passed in the options props"),a[r]=s[r]):a[r]||(a[r]=s[r])}return a},zi=function(s){for(var e=!1;s&&!e;)s.mapObject===void 0?s=s.$parent:e=!0;return s},Gi={props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null,custom:!0},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(e,t){var a=this.$parent.mapObject.attributionControl;a.removeAttribution(t).addAttribution(e)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(e){this.mapObject&&(e?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var e=this.mapObject?this.mapObject.getTooltip():null;e&&e.unbindTooltip()},unbindPopup:function(){var e=this.mapObject?this.mapObject.getPopup():null;e&&e.unbindPopup()},updateVisibleProp:function(e){this.$emit("update:visible",e)}}},Wi={mixins:[Gi],props:{pane:{type:String,default:"tilePane"},opacity:{type:Number,custom:!1,default:1},zIndex:{type:Number,default:1},tileSize:{type:Number,default:256},noWrap:{type:Boolean,default:!1}},mounted:function(){this.gridLayerOptions=Object.assign({},this.layerOptions,{pane:this.pane,opacity:this.opacity,zIndex:this.zIndex,tileSize:this.tileSize,noWrap:this.noWrap})}},Hi={mixins:[Wi],props:{tms:{type:Boolean,default:!1},subdomains:{type:[String,Array],default:"abc",validator:function(s){return typeof s=="string"?!0:Array.isArray(s)?s.every(function(e){return typeof e=="string"}):!1}},detectRetina:{type:Boolean,default:!1}},mounted:function(){this.tileLayerOptions=Object.assign({},this.gridLayerOptions,{tms:this.tms,subdomains:this.subdomains,detectRetina:this.detectRetina})},render:function(){return null}},Ki={props:{options:{type:Object,default:function(){return{}}}}},Yi={name:"LTileLayer",mixins:[Hi,Ki],props:{url:{type:String,default:null},tileLayerClass:{type:Function,default:j.tileLayer}},mounted:function(){var e=this,t=Vi(this.tileLayerOptions,this);this.mapObject=this.tileLayerClass(this.url,t),j.DomEvent.on(this.mapObject,this.$listeners),Ui(this,this.mapObject,this.$options.props),this.parentContainer=zi(this.$parent),this.parentContainer.addLayer(this,!this.visible),this.$nextTick(function(){e.$emit("ready",e.mapObject)})}};function Xi(s,e,t,a,i,r,l,u,v,c){typeof l!="boolean"&&(v=u,u=l,l=!1);var _=typeof t=="function"?t.options:t;s&&s.render&&(_.render=s.render,_.staticRenderFns=s.staticRenderFns,_._compiled=!0,i&&(_.functional=!0)),a&&(_._scopeId=a);var A;if(r?(A=function(p){p=p||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!p&&typeof __VUE_SSR_CONTEXT__<"u"&&(p=__VUE_SSR_CONTEXT__),e&&e.call(this,v(p)),p&&p._registeredComponents&&p._registeredComponents.add(r)},_._ssrRegister=A):e&&(A=l?function(p){e.call(this,c(p,this.$root.$options.shadowRoot))}:function(p){e.call(this,u(p))}),A)if(_.functional){var g=_.render;_.render=function(w,k){return A.call(k),g(w,k)}}else{var B=_.beforeCreate;_.beforeCreate=B?[].concat(B,A):[A]}return t}var Ji=Yi,Zi=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div")},Qi=[],qi=void 0,er=void 0,tr=void 0,sr=!1,ar=Xi({render:Zi,staticRenderFns:Qi},qi,Ji,er,sr,tr,!1,void 0,void 0,void 0);const nr=ar;var ir=function(s,e){var t,a=function(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];var l=this;t&&clearTimeout(t),t=setTimeout(function(){s.apply(l,i),t=null},e)};return a.cancel=function(){t&&clearTimeout(t)},a},rr=function(s){return!s||typeof s.charAt!="function"?s:s.charAt(0).toUpperCase()+s.slice(1)},or=function(s,e,t,a){var i=function(l){var u="set"+rr(l),v=t[l].type===Object||t[l].type===Array||Array.isArray(t[l].type);t[l].custom&&s[u]?s.$watch(l,function(c,_){s[u](c,_)},{deep:v}):u==="setOptions"?s.$watch(l,function(c,_){(0,j.setOptions)(e,c)},{deep:v}):e[u]&&s.$watch(l,function(c,_){e[u](c)},{deep:v})};for(var r in t)i(r)},Rt=function(s){var e={};for(var t in s){var a=s[t];a!=null&&(e[t]=a)}return e},lr=function(s,e){var t=e.options&&e.options.constructor===Object?e.options:{};s=s&&s.constructor===Object?s:{};var a=Rt(t);s=Rt(s);var i=e.$options.props;for(var r in s){var l=i[r]?i[r].default&&typeof i[r].default=="function"?i[r].default.call():i[r].default:Symbol("unique"),u=!1;Array.isArray(l)?u=JSON.stringify(l)===JSON.stringify(s[r]):u=l===s[r],a[r]&&!u?(console.warn(r+" props is overriding the value passed in the options props"),a[r]=s[r]):a[r]||(a[r]=s[r])}return a},dr={props:{options:{type:Object,default:function(){return{}}}}},ur={name:"LMap",mixins:[dr],props:{center:{type:[Object,Array],custom:!0,default:function(){return[0,0]}},bounds:{type:[Array,Object],custom:!0,default:null},maxBounds:{type:[Array,Object],default:null},zoom:{type:Number,custom:!0,default:0},minZoom:{type:Number,default:null},maxZoom:{type:Number,default:null},paddingBottomRight:{type:Array,custom:!0,default:null},paddingTopLeft:{type:Array,custom:!0,default:null},padding:{type:Array,custom:!0,default:null},worldCopyJump:{type:Boolean,default:!1},crs:{type:Object,custom:!0,default:function(){return j.CRS.EPSG3857}},maxBoundsViscosity:{type:Number,default:null},inertia:{type:Boolean,default:null},inertiaDeceleration:{type:Number,default:null},inertiaMaxSpeed:{type:Number,default:null},easeLinearity:{type:Number,default:null},zoomAnimation:{type:Boolean,default:null},zoomAnimationThreshold:{type:Number,default:null},fadeAnimation:{type:Boolean,default:null},markerZoomAnimation:{type:Boolean,default:null},noBlockingAnimations:{type:Boolean,default:!1}},data:function(){return{ready:!1,lastSetCenter:this.center?(0,j.latLng)(this.center):null,lastSetBounds:this.bounds?(0,j.latLngBounds)(this.bounds):null,layerControl:void 0,layersToAdd:[],layersInControl:[]}},computed:{fitBoundsOptions:function(){var e={animate:this.noBlockingAnimations?!1:null};return this.padding?e.padding=this.padding:(this.paddingBottomRight&&(e.paddingBottomRight=this.paddingBottomRight),this.paddingTopLeft&&(e.paddingTopLeft=this.paddingTopLeft)),e}},beforeDestroy:function(){this.debouncedMoveEndHandler&&this.debouncedMoveEndHandler.cancel(),this.mapObject&&this.mapObject.remove()},mounted:function(){var e=this,t=lr({minZoom:this.minZoom,maxZoom:this.maxZoom,maxBounds:this.maxBounds,maxBoundsViscosity:this.maxBoundsViscosity,worldCopyJump:this.worldCopyJump,crs:this.crs,center:this.center,zoom:this.zoom,inertia:this.inertia,inertiaDeceleration:this.inertiaDeceleration,inertiaMaxSpeed:this.inertiaMaxSpeed,easeLinearity:this.easeLinearity,zoomAnimation:this.zoomAnimation,zoomAnimationThreshold:this.zoomAnimationThreshold,fadeAnimation:this.fadeAnimation,markerZoomAnimation:this.markerZoomAnimation},this);this.mapObject=(0,j.map)(this.$el,t),this.bounds&&this.fitBounds(this.bounds),this.debouncedMoveEndHandler=ir(this.moveEndHandler,100),this.mapObject.on("moveend",this.debouncedMoveEndHandler),this.mapObject.on("overlayadd",this.overlayAddHandler),this.mapObject.on("overlayremove",this.overlayRemoveHandler),j.DomEvent.on(this.mapObject,this.$listeners),or(this,this.mapObject,this.$options.props),this.ready=!0,this.$emit("leaflet:load"),this.$nextTick(function(){e.$emit("ready",e.mapObject)})},methods:{registerLayerControl:function(e){var t=this;this.layerControl=e,this.mapObject.addControl(e.mapObject),this.layersToAdd.forEach(function(a){t.layerControl.addLayer(a)}),this.layersToAdd=[]},addLayer:function(e,t){if(e.layerType!==void 0)if(this.layerControl===void 0)this.layersToAdd.push(e);else{var a=this.layersInControl.find(function(i){return i.mapObject._leaflet_id===e.mapObject._leaflet_id});a||(this.layerControl.addLayer(e),this.layersInControl.push(e))}!t&&e.visible!==!1&&this.mapObject.addLayer(e.mapObject)},hideLayer:function(e){this.mapObject.removeLayer(e.mapObject)},removeLayer:function(e,t){e.layerType!==void 0&&(this.layerControl===void 0?this.layersToAdd=this.layersToAdd.filter(function(a){return a.name!==e.name}):(this.layerControl.removeLayer(e),this.layersInControl=this.layersInControl.filter(function(a){return a.mapObject._leaflet_id!==e.mapObject._leaflet_id}))),t||this.mapObject.removeLayer(e.mapObject)},setZoom:function(e,t){e!=null&&(this.mapObject.setZoom(e,{animate:this.noBlockingAnimations?!1:null}),this.cacheMapView())},setCenter:function(e,t){if(e!=null){var a=(0,j.latLng)(e),i=this.lastSetCenter||this.mapObject.getCenter();(i.lat!==a.lat||i.lng!==a.lng)&&(this.lastSetCenter=a,this.mapObject.panTo(a,{animate:this.noBlockingAnimations?!1:null}),this.cacheMapView(void 0,a))}},setBounds:function(e,t){if(e){var a=(0,j.latLngBounds)(e);if(a.isValid()){var i=this.lastSetBounds||this.mapObject.getBounds(),r=!i.equals(a,0);r&&(this.fitBounds(a),this.cacheMapView(a))}}},setPaddingBottomRight:function(e,t){this.paddingBottomRight=e},setPaddingTopLeft:function(e,t){this.paddingTopLeft=e},setPadding:function(e,t){this.padding=e},setCrs:function(e,t){var a=this.mapObject,i=a.getBounds();a.options.crs=e,this.fitBounds(i,{animate:!1})},fitBounds:function(e,t){this.mapObject.fitBounds(e,Object.assign({},this.fitBoundsOptions,t))},moveEndHandler:function(){this.$emit("update:zoom",this.mapObject.getZoom());var e=this.mapObject.getCenter();this.$emit("update:center",e);var t=this.mapObject.getBounds();this.$emit("update:bounds",t)},overlayAddHandler:function(e){var t=this.layersInControl.find(function(a){return a.name===e.name});t&&t.updateVisibleProp(!0)},overlayRemoveHandler:function(e){var t=this.layersInControl.find(function(a){return a.name===e.name});t&&t.updateVisibleProp(!1)},cacheMapView:function(e,t){this.lastSetBounds=e||this.mapObject.getBounds(),this.lastSetCenter=t||this.lastSetBounds.getCenter()}}};function cr(s,e,t,a,i,r,l,u,v,c){typeof l!="boolean"&&(v=u,u=l,l=!1);var _=typeof t=="function"?t.options:t;s&&s.render&&(_.render=s.render,_.staticRenderFns=s.staticRenderFns,_._compiled=!0,i&&(_.functional=!0)),a&&(_._scopeId=a);var A;if(r?(A=function(p){p=p||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!p&&typeof __VUE_SSR_CONTEXT__<"u"&&(p=__VUE_SSR_CONTEXT__),e&&e.call(this,v(p)),p&&p._registeredComponents&&p._registeredComponents.add(r)},_._ssrRegister=A):e&&(A=l?function(p){e.call(this,c(p,this.$root.$options.shadowRoot))}:function(p){e.call(this,u(p))}),A)if(_.functional){var g=_.render;_.render=function(w,k){return A.call(k),g(w,k)}}else{var B=_.beforeCreate;_.beforeCreate=B?[].concat(B,A):[A]}return t}var _r=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function pr(s){return function(e,t){return Ar(e,t)}}var ct,Pt={};function Ar(s,e){var t=_r?e.media||"default":s,a=Pt[t]||(Pt[t]={ids:new Set,styles:[]});if(!a.ids.has(s)){a.ids.add(s);var i=e.source;if(e.map&&(i+=`
/*# sourceURL=`+e.map.sources[0]+" */",i+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),a.element||(a.element=document.createElement("style"),a.element.type="text/css",e.media&&a.element.setAttribute("media",e.media),ct===void 0&&(ct=document.head||document.getElementsByTagName("head")[0]),ct.appendChild(a.element)),"styleSheet"in a.element)a.styles.push(i),a.element.styleSheet.cssText=a.styles.filter(Boolean).join(`
`);else{var r=a.ids.size-1,l=document.createTextNode(i),u=a.element.childNodes;u[r]&&a.element.removeChild(u[r]),u.length?a.element.insertBefore(l,u[r]):a.element.appendChild(l)}}}var gr=ur,mr=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"vue2leaflet-map"},[s.ready?s._t("default"):s._e()],2)},hr=[],Cr=function(s){s&&s("data-v-09f270aa_0",{source:".vue2leaflet-map{height:100%;width:100%}",map:void 0,media:void 0})},fr=void 0,vr=void 0,Dr=!1,yr=cr({render:mr,staticRenderFns:hr},Cr,gr,fr,Dr,vr,!1,pr,void 0,void 0);const br=yr;var Fr=function(s,e){var t,a=function(){for(var i=[],r=arguments.length;r--;)i[r]=arguments[r];var l=this;t&&clearTimeout(t),t=setTimeout(function(){s.apply(l,i),t=null},e)};return a.cancel=function(){t&&clearTimeout(t)},a},Er=function(s){return!s||typeof s.charAt!="function"?s:s.charAt(0).toUpperCase()+s.slice(1)},Mr=function(s,e,t,a){var i=function(l){var u="set"+Er(l),v=t[l].type===Object||t[l].type===Array||Array.isArray(t[l].type);t[l].custom&&s[u]?s.$watch(l,function(c,_){s[u](c,_)},{deep:v}):u==="setOptions"?s.$watch(l,function(c,_){(0,j.setOptions)(e,c)},{deep:v}):e[u]&&s.$watch(l,function(c,_){e[u](c)},{deep:v})};for(var r in t)i(r)},jt=function(s){var e={};for(var t in s){var a=s[t];a!=null&&(e[t]=a)}return e},Br=function(s,e){var t=e.options&&e.options.constructor===Object?e.options:{};s=s&&s.constructor===Object?s:{};var a=jt(t);s=jt(s);var i=e.$options.props;for(var r in s){var l=i[r]?i[r].default&&typeof i[r].default=="function"?i[r].default.call():i[r].default:Symbol("unique"),u=!1;Array.isArray(l)?u=JSON.stringify(l)===JSON.stringify(s[r]):u=l===s[r],a[r]&&!u?(console.warn(r+" props is overriding the value passed in the options props"),a[r]=s[r]):a[r]||(a[r]=s[r])}return a},xr=function(s){for(var e=!1;s&&!e;)s.mapObject===void 0?s=s.$parent:e=!0;return s},kr={props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null,custom:!0},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(e,t){var a=this.$parent.mapObject.attributionControl;a.removeAttribution(t).addAttribution(e)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(e){this.mapObject&&(e?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var e=this.mapObject?this.mapObject.getTooltip():null;e&&e.unbindTooltip()},unbindPopup:function(){var e=this.mapObject?this.mapObject.getPopup():null;e&&e.unbindPopup()},updateVisibleProp:function(e){this.$emit("update:visible",e)}}},wr={props:{options:{type:Object,default:function(){return{}}}}},Sr={name:"LMarker",mixins:[kr,wr],props:{pane:{type:String,default:"markerPane"},draggable:{type:Boolean,custom:!0,default:!1},latLng:{type:[Object,Array],custom:!0,default:null},icon:{type:[Object],custom:!1,default:function(){return new j.Icon.Default}},opacity:{type:Number,custom:!1,default:1},zIndexOffset:{type:Number,custom:!1,default:null}},data:function(){return{ready:!1}},beforeDestroy:function(){this.debouncedLatLngSync&&this.debouncedLatLngSync.cancel()},mounted:function(){var e=this,t=Br(Object.assign({},this.layerOptions,{icon:this.icon,zIndexOffset:this.zIndexOffset,draggable:this.draggable,opacity:this.opacity}),this);this.mapObject=(0,j.marker)(this.latLng,t),j.DomEvent.on(this.mapObject,this.$listeners),this.debouncedLatLngSync=Fr(this.latLngSync,100),this.mapObject.on("move",this.debouncedLatLngSync),Mr(this,this.mapObject,this.$options.props),this.parentContainer=xr(this.$parent),this.parentContainer.addLayer(this,!this.visible),this.ready=!0,this.$nextTick(function(){e.$emit("ready",e.mapObject)})},methods:{setDraggable:function(e,t){this.mapObject.dragging&&(e?this.mapObject.dragging.enable():this.mapObject.dragging.disable())},setLatLng:function(e){if(e!=null&&this.mapObject){var t=this.mapObject.getLatLng(),a=(0,j.latLng)(e);(a.lat!==t.lat||a.lng!==t.lng)&&this.mapObject.setLatLng(a)}},latLngSync:function(e){this.$emit("update:latLng",e.latlng),this.$emit("update:lat-lng",e.latlng)}},render:function(s){return this.ready&&this.$slots.default?s("div",{style:{display:"none"}},this.$slots.default):null}};function Tr(s,e,t,a,i,r,l,u,v,c){typeof l!="boolean"&&(v=u,u=l,l=!1);var _=typeof t=="function"?t.options:t;s&&s.render&&(_.render=s.render,_.staticRenderFns=s.staticRenderFns,_._compiled=!0,i&&(_.functional=!0)),a&&(_._scopeId=a);var A;if(r?(A=function(p){p=p||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!p&&typeof __VUE_SSR_CONTEXT__<"u"&&(p=__VUE_SSR_CONTEXT__),e&&e.call(this,v(p)),p&&p._registeredComponents&&p._registeredComponents.add(r)},_._ssrRegister=A):e&&(A=l?function(p){e.call(this,c(p,this.$root.$options.shadowRoot))}:function(p){e.call(this,u(p))}),A)if(_.functional){var g=_.render;_.render=function(w,k){return A.call(k),g(w,k)}}else{var B=_.beforeCreate;_.beforeCreate=B?[].concat(B,A):[A]}return t}var Lr=Sr,Ir=void 0,Or=void 0,Rr=void 0,Pr=void 0,jr=Tr({},Ir,Lr,Or,Pr,Rr,!1,void 0,void 0,void 0);const Nr=jr;var $r=function(s){return!s||typeof s.charAt!="function"?s:s.charAt(0).toUpperCase()+s.slice(1)},Ur=function(s,e,t,a){var i=function(l){var u="set"+$r(l),v=t[l].type===Object||t[l].type===Array||Array.isArray(t[l].type);t[l].custom&&s[u]?s.$watch(l,function(c,_){s[u](c,_)},{deep:v}):u==="setOptions"?s.$watch(l,function(c,_){(0,j.setOptions)(e,c)},{deep:v}):e[u]&&s.$watch(l,function(c,_){e[u](c)},{deep:v})};for(var r in t)i(r)},Nt=function(s){var e={};for(var t in s){var a=s[t];a!=null&&(e[t]=a)}return e},Vr=function(s,e){var t=e.options&&e.options.constructor===Object?e.options:{};s=s&&s.constructor===Object?s:{};var a=Nt(t);s=Nt(s);var i=e.$options.props;for(var r in s){var l=i[r]?i[r].default&&typeof i[r].default=="function"?i[r].default.call():i[r].default:Symbol("unique"),u=!1;Array.isArray(l)?u=JSON.stringify(l)===JSON.stringify(s[r]):u=l===s[r],a[r]&&!u?(console.warn(r+" props is overriding the value passed in the options props"),a[r]=s[r]):a[r]||(a[r]=s[r])}return a},zr=function(s){for(var e=!1;s&&!e;)s.mapObject===void 0?s=s.$parent:e=!0;return s},Gr={props:{content:{type:String,default:null,custom:!0}},mounted:function(){this.popperOptions={}},methods:{setContent:function(e){this.mapObject&&e!==null&&e!==void 0&&this.mapObject.setContent(e)}},render:function(e){return this.$slots.default?e("div",this.$slots.default):null}},Wr={props:{options:{type:Object,default:function(){return{}}}}},Hr={name:"LTooltip",mixins:[Gr,Wr],mounted:function(){var e=this,t=Vr(this.popperOptions,this);this.mapObject=(0,j.tooltip)(t),j.DomEvent.on(this.mapObject,this.$listeners),Ur(this,this.mapObject,this.$options.props),this.mapObject.setContent(this.content||this.$el),this.parentContainer=zr(this.$parent),this.parentContainer.mapObject.bindTooltip(this.mapObject),this.$nextTick(function(){e.$emit("ready",e.mapObject)})},beforeDestroy:function(){this.parentContainer&&(this.parentContainer.unbindTooltip?this.parentContainer.unbindTooltip():this.parentContainer.mapObject&&this.parentContainer.mapObject.unbindTooltip&&this.parentContainer.mapObject.unbindTooltip())}};function Kr(s,e,t,a,i,r,l,u,v,c){typeof l!="boolean"&&(v=u,u=l,l=!1);var _=typeof t=="function"?t.options:t;s&&s.render&&(_.render=s.render,_.staticRenderFns=s.staticRenderFns,_._compiled=!0,i&&(_.functional=!0)),a&&(_._scopeId=a);var A;if(r?(A=function(p){p=p||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!p&&typeof __VUE_SSR_CONTEXT__<"u"&&(p=__VUE_SSR_CONTEXT__),e&&e.call(this,v(p)),p&&p._registeredComponents&&p._registeredComponents.add(r)},_._ssrRegister=A):e&&(A=l?function(p){e.call(this,c(p,this.$root.$options.shadowRoot))}:function(p){e.call(this,u(p))}),A)if(_.functional){var g=_.render;_.render=function(w,k){return A.call(k),g(w,k)}}else{var B=_.beforeCreate;_.beforeCreate=B?[].concat(B,A):[A]}return t}var Yr=Hr,Xr=void 0,Jr=void 0,Zr=void 0,Qr=void 0,qr=Kr({},Xr,Yr,Jr,Qr,Zr,!1,void 0,void 0,void 0);const eo={name:"Location",components:{LControlAttribution:Ni,LTileLayer:nr,LMap:br,LMarker:Nr,LTooltip:qr},props:{latitude:{type:Number,required:!0},longitude:{type:Number,required:!0},name:{type:String,default:""},wide:{type:Boolean,default:!1}},data(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",previewZoom:13,linkZoom:18,attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}},computed:{center(){return[this.latitude,this.longitude]},mapLink(){return`https://www.openstreetmap.org/?mlat=${this.latitude}&mlon=${this.longitude}#map=${this.linkZoom}/${this.latitude}/${this.longitude}`},linkAriaLabel(){return(0,o.t)("spreed","Open this location in OpenStreetMap")}},methods:{t:o.t}};var Re=n(1035),se={};se.styleTagTransform=R(),se.setAttributes=I(),se.insert=L().bind(null,"head"),se.domAPI=T(),se.insertStyleElement=O();var Ju=S()(Re.A,se);const Zu=Re.A&&Re.A.locals?Re.A.locals:void 0;var to=(0,f.A)(eo,Fi,Ei,!1,null,"7c6b9a08",null);const so=to.exports;var ao=function(){var e=this,t=e._self._c;return t("span",{ref:"mention",staticClass:"mention"},[e.size?t("NcUserBubble",{key:e.isDarkTheme?"dark":"light",attrs:{"display-name":e.name,"avatar-image":e.avatarUrl,user:e.id,size:e.size,primary:e.primary}}):e._e()],1)},no=[],io=n(32981),ro=n(77764),oo=n(14436),$t=n(27393);const lo={name:"Mention",components:{NcUserBubble:ro.A},props:{token:{type:String,required:!0},type:{type:String,required:!0},id:{type:String,required:!0},name:{type:String,required:!0},server:{type:String,default:""}},setup(){return{isDarkTheme:(0,oo.u)()}},data(){return{size:null}},computed:{isMentionToAll(){return this.type===F.TR.TYPE.CALL},isGroupMention(){return[F.TR.TYPE.USERGROUP,F.TR.TYPE.GROUP].includes(this.type)},isMentionToGuest(){return this.type===F.TR.TYPE.GUEST||this.type===F.TR.TYPE.EMAIL},isRemoteUser(){return[F.TR.TYPE.USER,F.TR.TYPE.FEDERATED_USER].includes(this.type)&&this.server!==""},isCurrentGuest(){return this.$store.getters.isActorGuest()&&(this.id==="guest/"+this.$store.getters.getActorId()||this.id===this.$store.getters.getActorId())},isCurrentUser(){return this.isRemoteUser?!1:this.$store.getters.isActorUser()&&this.id===this.$store.getters.getUserId()},isCurrentUserGroup(){return this.isGroupMention&&(0,io.C)("spreed","user_group_ids",[]).includes(this.id)},primary(){return this.isMentionToAll||this.isCurrentUser||this.isGroupMention&&this.isCurrentUserGroup||this.isMentionToGuest&&this.isCurrentGuest},avatarUrl(){return this.isRemoteUser?this.token?(0,$t.FC)(this.token,this.id+"@"+this.server,this.isDarkTheme,64):"icon-user-forced-white":this.isGroupMention?"icon-group-forced-white":this.isMentionToGuest?"icon-user-forced-white":this.isMentionToAll?(0,$t.nv)(this.id,this.isDarkTheme):void 0}},mounted(){this.size=parseInt(window.getComputedStyle(this.$refs.mention).fontSize,10)*4/3}};var Pe=n(86431),ae={};ae.styleTagTransform=R(),ae.setAttributes=I(),ae.insert=L().bind(null,"head"),ae.domAPI=T(),ae.insertStyleElement=O();var qu=S()(Pe.A,ae);const ec=Pe.A&&Pe.A.locals?Pe.A.locals:void 0;var uo=(0,f.A)(lo,ao,no,!1,null,"1ed2d98b",null);const co=uo.exports;var _o=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"element-size",rawName:"v-element-size",value:[e.onResize,{width:0,height:22.5}],expression:"[onResize, { width: 0, height: 22.5 }]"},{name:"intersection-observer",rawName:"v-intersection-observer",value:e.onIntersectionObserver,expression:"onIntersectionObserver"}],ref:"messageMain",staticClass:"message-main"},[e.isSystemMessage||e.isDeletedMessage?t("div",{staticClass:"message-main__text",class:{"system-message":e.isSystemMessage&&!e.showJoinCallButton,"deleted-message":e.isDeletedMessage,"message-highlighted":e.showJoinCallButton}},[e.isDeletedMessage?t("CancelIcon",{attrs:{size:16}}):e._e(),e._v(" "),t("NcRichText",{attrs:{text:e.renderedMessage,arguments:e.richParameters,autolink:"",dir:"auto","reference-limit":0}}),e._v(" "),e.showJoinCallButton?t("CallButton"):e._e(),e._v(" "),e.showResultsButton?t("Poll",e._b({attrs:{token:e.message.token,"show-as-button":""}},"Poll",e.message.messageParameters.poll,!1)):e._e()],1):t("div",{staticClass:"message-main__text markdown-message",class:{"message-highlighted":e.isNewPollMessage},on:{mouseover:e.handleMarkdownMouseOver,mouseleave:e.handleMarkdownMouseLeave}},[e.message.parent?t("Quote",{attrs:{message:e.message.parent}}):e._e(),e._v(" "),t("NcRichText",{class:{"single-emoji":e.isSingleEmoji},attrs:{text:e.renderedMessage,arguments:e.richParameters,autolink:"",dir:"auto",interactive:e.message.markdown&&e.isEditable,"use-extended-markdown":e.message.markdown,"reference-limit":1,"reference-interactive-opt-in":""},on:{"interact:todo":e.handleInteraction}}),e._v(" "),e.containsCodeBlocks?t("NcButton",{directives:[{name:"show",rawName:"v-show",value:e.currentCodeBlock!==null,expression:"currentCodeBlock !== null"}],staticClass:"message-copy-code",style:{top:e.copyButtonOffset},attrs:{type:"tertiary","aria-label":e.t("spreed","Copy code block"),title:e.t("spreed","Copy code block")},on:{click:e.copyCodeBlock},scopedSlots:e._u([{key:"icon",fn:function(){return[t("ContentCopyIcon",{attrs:{size:16}})]},proxy:!0}],null,!1,134070762)}):e._e()],1),e._v(" "),e.isDeletedMessage?e._e():t("div",{staticClass:"message-main__info"},[t("span",{staticClass:"date",class:{"date--hidden":e.hideDate},attrs:{title:e.messageDate}},[e._v(e._s(e.messageTime))]),e._v(" "),e.message.sendingFailure?t("div",{staticClass:"message-status sending-failed",class:{"retry-option":e.sendingErrorCanRetry},attrs:{title:e.sendingErrorIconTitle,"aria-label":e.sendingErrorIconTitle,tabindex:"0"},on:{mouseover:function(a){e.showReloadButton=!0},focus:function(a){e.showReloadButton=!0},mouseleave:function(a){e.showReloadButton=!1},blur:function(a){e.showReloadButton=!1}}},[e.sendingErrorCanRetry&&e.showReloadButton?t("NcButton",{attrs:{size:"small","aria-label":e.sendingErrorIconTitle},on:{click:e.handleRetry},scopedSlots:e._u([{key:"icon",fn:function(){return[t("ReloadIcon",{attrs:{size:16}})]},proxy:!0}],null,!1,3321262167)}):t("AlertCircleIcon",{attrs:{size:16}})],1):e.showLoadingIcon?t("div",{staticClass:"icon-loading-small message-status",attrs:{title:e.loadingIconTitle,"aria-label":e.loadingIconTitle}}):e.readInfo.showCommonReadIcon?t("div",{staticClass:"message-status",attrs:{title:e.readInfo.commonReadIconTitle,"aria-label":e.readInfo.commonReadIconTitle}},[t("CheckAllIcon",{attrs:{size:16}})],1):e.readInfo.showSentIcon?t("div",{staticClass:"message-status",attrs:{title:e.readInfo.sentIconTitle,"aria-label":e.readInfo.sentIconTitle}},[t("CheckIcon",{attrs:{size:16}})],1):e.readInfo.showSilentIcon?t("div",{staticClass:"message-status",attrs:{title:e.readInfo.silentIconTitle,"aria-label":e.readInfo.silentIconTitle}},[t("IconBellOff",{attrs:{size:16}})],1):e._e()]),e._v(" "),e.isDeletedMessage?e._e():e._t("default")],2)},po=[];const Ao=(()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g);var go=n(61908),mo=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon cancel-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22 2 17.5 2 12 6.5 2 12 2M12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4M16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},ho=[];const Co={name:"CancelIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var fo=(0,f.A)(Co,mo,ho,!1,null,null,null);const Ut=fo.exports;var vo=n(54841),Vt=n(88813),Do=n(91520),_t=n(64416),Ee=n(43417),$=n(55031),zt=n(72661);const yo=Ao(),bo=/^\s*[-+*]\s.*\[[\sxX]\]/,Fo=/^\s*[-+*]\s.*\[[xX]\]/,Eo={name:"MessageBody",components:{CallButton:_t.A,NcButton:U.A,NcRichText:St.Ay,Poll:Vt.A,Quote:Do.A,AlertCircleIcon:go.A,IconBellOff:nt.A,CancelIcon:Ut,CheckIcon:Se.A,CheckAllIcon:Ft,ContentCopyIcon:it,ReloadIcon:vo.A},directives:{IntersectionObserver:we.ez,ElementSize:we.Qw},props:{message:{type:Object,required:!0},richParameters:{type:Object,required:!0},isDeleting:{type:Boolean,default:!1},hasCall:{type:Boolean,default:!1},readInfo:{type:Object,required:!0}},setup(s){const{message:e}=(0,d.QW)(s),{isEditable:t,isFileShare:a}=(0,lt.B)(e);return{isInCall:(0,Ee.J)(),pollsStore:(0,zt.v)(),isEditable:t,isFileShare:a}},data(){return{isEditing:!1,showReloadButton:!1,currentCodeBlock:null,copyButtonOffset:0,isVisible:!1,previousSize:{width:0,height:22.5}}},computed:{renderedMessage(){return this.isFileShare&&this.message.message!=="{file}"?`{file}

`+this.message.message:this.message.message},isSystemMessage(){return this.message.systemMessage!==""},isDeletedMessage(){return this.message.messageType==="comment_deleted"},isNewPollMessage(){return this.message.messageParameters?.object?.type!=="talk-poll"?!1:this.isInCall&&this.pollsStore.isNewPoll(this.message.messageParameters.object.id)},isTemporary(){return this.message.timestamp===0},hideDate(){return this.isTemporary||this.isDeleting||!!this.message.sendingFailure},messageTime(){return(0,N.A)(this.isTemporary?void 0:this.message.timestamp*1e3).format("LT")},messageDate(){return(0,N.A)(this.isTemporary?void 0:this.message.timestamp*1e3).format("LL")},isLastCallStartedMessage(){return this.message.systemMessage==="call_started"&&this.message.id===this.$store.getters.getLastCallStartedMessageId(this.message.token)},showJoinCallButton(){return this.hasCall&&!this.isInCall&&this.isLastCallStartedMessage},showResultsButton(){return this.message.systemMessage==="poll_closed"},isSingleEmoji(){if(this.isSystemMessage||this.isDeletedMessage)return;const s=this.renderedMessage.trim(),e=s.match(yo);return e!==null&&e.length===1&&e[0]===s},showLoadingIcon(){return this.isTemporary||this.isDeleting||this.isEditing},loadingIconTitle(){return(0,o.t)("spreed","Sending message")},sendingErrorCanRetry(){return["timeout","other","failed-upload"].includes(this.message.sendingFailure)},sendingErrorIconTitle(){return this.sendingErrorCanRetry?(0,o.t)("spreed","Failed to send the message. Click to try again"):this.message.sendingFailure==="quota"?(0,o.t)("spreed","Not enough free space to upload file"):this.message.sendingFailure==="failed-share"?(0,o.t)("spreed","You are not allowed to share files"):(0,o.t)("spreed","You cannot send messages to this conversation at the moment")},containsCodeBlocks(){return this.message.message.includes("```")}},watch:{showJoinCallButton(){$.l.emit("scroll-chat-to-bottom",{smooth:!0})}},mounted(){this.isEditable&&$.l.on("editing-message-processing",this.setIsEditing)},beforeDestroy(){$.l.off("editing-message-processing",this.setIsEditing)},methods:{t:o.t,getCodeBlocks(){return this.containsCodeBlocks?Array.from(this.$refs.messageMain?.querySelectorAll("pre")):null},handleMarkdownMouseOver(s){const e=this.getCodeBlocks();if(!e)return;const t=e.findIndex(a=>a.contains(s.target));if(t!==-1){this.currentCodeBlock=t;const a=e[t];this.copyButtonOffset=`${a.offsetTop}px`}},handleMarkdownMouseLeave(){this.currentCodeBlock=null,this.copyButtonOffset=0},async copyCodeBlock(){try{const s=this.getCodeBlocks()[this.currentCodeBlock].textContent;await navigator.clipboard.writeText(s),(0,P.Te)((0,o.t)("spreed","Code block copied to clipboard"))}catch{(0,P.Qg)((0,o.t)("spreed","Code block could not be copied"))}},handleRetry(){this.sendingErrorCanRetry&&(this.message.sendingFailure==="failed-upload"?this.$store.dispatch("retryUploadFiles",{token:this.message.token,uploadId:this.$store.getters.message(this.message.token,this.message.id)?.uploadId,caption:this.renderedMessage!==this.message.message?this.message.message:void 0}):($.l.emit("retry-message",this.message.id),$.l.emit("focus-chat-input")))},async handleInteraction(s){if(!this.isEditable)return;const e=s.split("-markdown-input-")[0],t=Array.from(this.$refs.messageMain.querySelectorAll(`span[id^="${e}-markdown-input-"]`)).findIndex(l=>l.id.includes(s));if(t===-1)return;let a=0;const i=this.message.message.split(`
`);for(let l=0;l<i.length;l++)if(bo.test(i[l])){if(a===t){Fo.test(i[l])?i[l]=i[l].replace(/\[[xX]\]/,"[ ]"):i[l]=i[l].replace(/\[\s\]/,"[x]");break}a++}let r=(0,dt.Y)(i.join(`
`).trim());r=(0,dt.X)(r,this.message.messageParameters);try{await this.$store.dispatch("editMessage",{token:this.message.token,messageId:this.message.id,updatedMessage:r})}catch(l){console.error(l),(0,P.Qg)((0,o.t)("spreed","Could not update the message"))}},setIsEditing({messageId:s,value:e}){s===this.message.id&&(this.isEditing=e)},onIntersectionObserver([{isIntersecting:s}]){this.isVisible=s},onResize({width:s,height:e}){const t=this.previousSize?.width,a=this.previousSize?.height;this.previousSize={width:s,height:e},this.isVisible&&(t&&t!==s||e!==0&&$.l.emit("message-height-changed",{heightDiff:e-a}))}}};var je=n(51844),ne={};ne.styleTagTransform=R(),ne.setAttributes=I(),ne.insert=L().bind(null,"head"),ne.domAPI=T(),ne.insertStyleElement=O();var ac=S()(je.A,ne);const nc=je.A&&je.A.locals?je.A.locals:void 0;var Mo=(0,f.A)(Eo,_o,po,!1,null,"41e26298",null);const Bo=Mo.exports;var xo=function(){var e=this,t=e._self._c;return e.reactionsCount&&e.reactionsSorted?t("div",{staticClass:"reactions-wrapper"},[e._l(e.reactionsSorted,function(a){return t("NcPopover",{key:a,attrs:{delay:200,"focus-trap":!1,triggers:["hover"],"popper-triggers":["hover"]},on:{"after-show":e.fetchReactions},scopedSlots:e._u([{key:"trigger",fn:function(){return[t("NcButton",{attrs:{type:e.userHasReacted(a)?"primary":"secondary",size:"small"},on:{click:function(i){return e.handleReactionClick(a)}}},[t("span",{staticClass:"reaction-emoji"},[e._v(e._s(a))]),e._v(" "+e._s(e.reactionsCount(a))+`
			`)])]},proxy:!0}],null,!0)},[e._v(" "),e.hasReactionsLoaded?t("div",{staticClass:"reaction-details"},[t("span",[e._v(e._s(e.getReactionSummary(a))+`
				`),e.reactionsCount(a)===4?t("span",[e._v(`
					`+e._s(e.remainingReactionsLabel(a))+`
				`)]):e.reactionsCount(a)>4?t("a",{staticClass:"more-reactions-button",attrs:{role:"button",tabindex:"0"},on:{click:function(i){i.preventDefault(),e.showAllReactions=!0}}},[e._v(`
					`+e._s(e.remainingReactionsLabel(a))+`
				`)]):e._e()])]):t("div",{staticClass:"details-loading"},[t("NcLoadingIcon")],1)])}),e._v(" "),e.showControls?t("NcButton",{attrs:{size:"small",title:e.t("spreed","Show all reactions")},on:{click:function(a){e.showAllReactions=!0}}},[t("HeartOutlineIcon",{attrs:{size:15}})],1):t("span",{staticClass:"reaction-button--thumbnail"}),e._v(" "),e.canReact&&e.showControls?t("NcEmojiPicker",{attrs:{"per-line":5},on:{select:e.handleReactionClick,"after-show":e.emitEmojiPickerStatus,"after-hide":e.emitEmojiPickerStatus}},[t("NcButton",{attrs:{size:"small",title:e.t("spreed","Add more reactions"),"aria-label":e.t("spreed","Add more reactions")},scopedSlots:e._u([{key:"icon",fn:function(){return[t("EmoticonPlusOutline",{attrs:{size:15}})]},proxy:!0}],null,!1,1465470732)})],1):e.canReact?t("span",{staticClass:"reaction-button--thumbnail"}):e._e(),e._v(" "),e.showAllReactions?t("ReactionsList",{attrs:{token:e.token,"detailed-reactions":e.detailedReactions,"reactions-sorted":e.reactionsSorted},on:{close:function(a){e.showAllReactions=!1}}}):e._e()],2):e._e()},ko=[],wo=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon emoticon-plus-outline-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M15 18H18V15H20V18H23V20H20V23H18V20H15V18M12 17.5C9.67 17.5 7.69 16.04 6.89 14H15.69C14.5 14.78 13.62 15.97 13.23 17.36C12.83 17.45 12.42 17.5 12 17.5M8.5 11C7.67 11 7 10.33 7 9.5C7 8.67 7.67 8 8.5 8C9.33 8 10 8.67 10 9.5C10 10.33 9.33 11 8.5 11M15.5 11C14.67 11 14 10.33 14 9.5C14 8.67 14.67 8 15.5 8C16.33 8 17 8.67 17 9.5C17 10.33 16.33 11 15.5 11M12 20L13.07 19.93C13.18 20.61 13.4 21.26 13.72 21.85C13.16 21.95 12.58 22 12 22C6.47 22 2 17.5 2 12C2 6.5 6.47 2 12 2C17.5 2 22 6.5 22 12C22 12.59 21.95 13.16 21.85 13.72C21.26 13.4 20.62 13.18 19.93 13.07L20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},So=[];const To={name:"EmoticonPlusOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Lo=(0,f.A)(To,wo,So,!1,null,null,null);const Io=Lo.exports;var Oo=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon heart-outline-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},Ro=[];const Po={name:"HeartOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var jo=(0,f.A)(Po,Oo,Ro,!1,null,null,null);const Gt=jo.exports;var Wt=n(54562),No=function(){var e=this,t=e._self._c;return t("NcDialog",{attrs:{name:e.t("spreed","Reactions"),"close-on-click-outside":""},on:{"update:open":e.closeModal}},[t("div",{staticClass:"reactions__modal"},[Object.keys(e.reactionsOverview).length>0?[t("div",{staticClass:"reactions-list__navigation"},e._l(e.reactionsMenu,function(a){return t("NcButton",{key:a,class:{active:e.reactionFilter===a,"all-reactions__button":a==="\u2661"},attrs:{type:"tertiary"},on:{click:function(i){return e.handleTabClick(a)}}},[a==="\u2661"?t("HeartOutlineIcon",{attrs:{size:15}}):t("span",[e._v(`
						`+e._s(a)+`
					`)]),e._v(`
					`+e._s(e.reactionsOverview[a].length)+`
				`)],1)}),1),e._v(" "),t("ul",{staticClass:"reactions-list__scrollable"},e._l(e.reactionsOverview[e.reactionFilter],function(a){return t("li",{key:a.actorId+a.actorType,staticClass:"reactions-item"},[t("AvatarWrapper",{attrs:{id:a.actorId,token:e.token,name:a.actorDisplayName,source:a.actorType,size:e.AVATAR.SIZE.SMALL,"disable-menu":""}}),e._v(" "),t("span",{staticClass:"reactions-item__name"},[e._v(e._s(a.actorDisplayNameWithFallback))]),e._v(" "),t("span",{staticClass:"reactions-item__emojis"},[e._v(`
						`+e._s(a.reaction?.join("")??e.reactionFilter)+`
					`)])],1)}),0)]:t("NcLoadingIcon",{attrs:{size:64}})],2)])},$o=[],Ne=n(78457),pt=n(81478);const Uo={name:"ReactionsList",components:{AvatarWrapper:Ne.A,NcButton:U.A,NcDialog:ut.A,NcLoadingIcon:Fe.A,HeartOutlineIcon:Gt},props:{token:{type:String,required:!0},detailedReactions:{type:Object,default:()=>{}},reactionsSorted:{type:Array,default:()=>[]}},emits:["close"],setup(){return{AVATAR:F.of,guestNameStore:(0,be.m)()}},data(){return{reactionFilter:"\u2661"}},computed:{reactionsOverview(){const s={},e={};return Object.entries(this.detailedReactions).forEach(([t,a])=>{e[t]=[],a.forEach(i=>{const r=`${i.actorId}-${i.actorType}`,l=this.getDisplayNameForReaction(i),u=(0,pt.G)(l,i.actorType);e[t].push({...i,actorDisplayName:l,actorDisplayNameWithFallback:u}),s[r]?s[r].reaction.push(t):s[r]={actorDisplayName:l,actorDisplayNameWithFallback:u,actorId:i.actorId,actorType:i.actorType,reaction:[t]}})}),{"\u2661":Object.values(s),...e}},reactionsMenu(){return["\u2661",...this.reactionsSorted]}},methods:{t:o.t,closeModal(){this.$emit("close")},getDisplayNameForReaction(s){return s.actorType===F.Rf.ACTOR_TYPE.GUESTS?this.guestNameStore.getGuestNameWithGuestSuffix(this.token,s.actorId):s.actorDisplayName.trim()},handleTabClick(s){this.reactionFilter=s}}};var $e=n(3875),ie={};ie.styleTagTransform=R(),ie.setAttributes=I(),ie.insert=L().bind(null,"head"),ie.domAPI=T(),ie.insertStyleElement=O();var lc=S()($e.A,ie);const dc=$e.A&&$e.A.locals?$e.A.locals:void 0;var Vo=(0,f.A)(Uo,No,$o,!1,null,"4c5bf56f",null);const zo=Vo.exports,Go={name:"Reactions",components:{NcButton:U.A,NcEmojiPicker:xt.A,NcLoadingIcon:Fe.A,NcPopover:Wt.A,ReactionsList:zo,EmoticonPlusOutline:Io,HeartOutlineIcon:Gt},props:{token:{type:String,required:!0},canReact:{type:Boolean,default:!1},id:{type:[String,Number],required:!0},showControls:{type:Boolean,default:!1}},emits:["emoji-picker-toggled"],setup(){const s=(0,be.m)(),e=(0,kt.b)();return{guestNameStore:s,reactionsStore:e}},data(){return{showAllReactions:!1}},computed:{hasReactionsLoaded(){return Object.keys(Object(this.detailedReactions)).length!==0},detailedReactions(){return this.reactionsStore.getReactions(this.token,this.id)},plainReactions(){return this.$store.getters.message(this.token,this.id).reactions},reactionsSelf(){return this.$store.getters.message(this.token,this.id).reactionsSelf},reactionsSorted(){if(this.detailedReactions)return Object.keys(this.detailedReactions).sort((s,e)=>this.detailedReactions[e].length-this.detailedReactions[s].length);if(this.plainReactions)return Object.keys(this.plainReactions).sort((s,e)=>this.plainReactions[e]-this.plainReactions[s])},hasOutdatedDetails(){const s=Object.fromEntries(Object.entries(this.detailedReactions).sort().map(([e,t])=>[e,t.length]));return this.hasReactionsLoaded&&JSON.stringify(this.plainReactions)!==JSON.stringify(s)}},methods:{t:o.t,n:o.n,fetchReactions(){(!this.hasReactionsLoaded||this.hasOutdatedDetails)&&this.reactionsStore.fetchReactions(this.token,this.id)},userHasReacted(s){return this.reactionsSelf?.includes(s)},async handleReactionClick(s){if(!this.canReact){(0,P.Qg)((0,o.t)("spreed","No permission to post reactions in this conversation"));return}this.userHasReacted(s)?this.reactionsStore.removeReactionFromMessage({token:this.token,messageId:this.id,selectedEmoji:s}):this.reactionsStore.addReactionToMessage({token:this.token,messageId:this.id,selectedEmoji:s})},getDisplayNameForReaction(s){return s.actorType===F.Rf.ACTOR_TYPE.GUESTS?this.guestNameStore.getGuestNameWithGuestSuffix(this.token,s.actorId):(0,pt.G)(s.actorDisplayName,s.actorType)},reactionsCount(s){if(!(!this.detailedReactions||!this.plainReactions))return this.detailedReactions?this.detailedReactions[s]?.length:this.plainReactions[s]},getReactionSummary(s){if(!this.hasReactionsLoaded)return"";const e=this.detailedReactions[s].slice(0,3),t=[];for(const a in e)e[a].actorType===this.$store.getters.getActorType()&&e[a].actorId===this.$store.getters.getActorId()?t.unshift((0,o.t)("spreed","You")):t.push(this.getDisplayNameForReaction(e[a]));return t.join(", ")},emitEmojiPickerStatus(){this.$emit("emoji-picker-toggled")},remainingReactionsLabel(s){return this.reactionsCount(s)===4?(0,o.t)("spreed","and {participant}",{participant:this.getDisplayNameForReaction(this.detailedReactions[s][3])}):(0,o.n)("spreed","and %n other participant","and %n other participants",this.reactionsCount(s)-3)}}};var Ue=n(86349),re={};re.styleTagTransform=R(),re.setAttributes=I(),re.insert=L().bind(null,"head"),re.domAPI=T(),re.insertStyleElement=O();var cc=S()(Ue.A,re);const _c=Ue.A&&Ue.A.locals?Ue.A.locals:void 0;var Wo=(0,f.A)(Go,xo,ko,!1,null,"021b2fec",null);const Ho=Wo.exports;var At=n(25198),Ko=n(16906);const Yo=(0,z.t0)("local","chat-summary-api"),Xo=(0,z.JR)("local","chat","summary-threshold")??0,Jo={name:"Message",components:{IconCreation:bt,IconUnfoldLess:aa,IconUnfoldMore:la,MessageBody:Bo,MessageButtonsBar:Hn,MessageForwarder:ei,MessageTranslateDialog:_i,NcButton:U.A,Reactions:Ho},directives:{IntersectionObserver:we.ez},props:{message:{type:Object,required:!0},isCombinedSystemMessage:{type:Boolean,default:!1},isCombinedSystemMessageCollapsed:{type:Boolean,default:void 0},isCollapsedSystemMessage:{type:Boolean,default:!1},lastCollapsedMessageId:{type:[String,Number],default:0},previousMessageId:{type:[String,Number],default:0},nextMessageId:{type:[String,Number],default:0}},emits:["toggle-combined-system-message"],setup(s){return{isTranslationAvailable:(0,z.JR)(s.token,"chat","has-translation-providers")??(0,z.JR)(s.token,"chat","translations")?.length>0,chatExtrasStore:(0,At.k)()}},data(){return{isHovered:!1,isDeleting:!1,seen:!1,isActionMenuOpen:!1,isEmojiPickerOpen:!1,isFollowUpEmojiPickerOpen:!1,isReactionsMenuOpen:!1,isForwarderOpen:!1,isTranslateDialogOpen:!1}},computed:{isTemporary(){return this.message.timestamp===0},isLastMessage(){return!this.nextMessageId||this.message.id===this.conversation?.lastMessage?.id},visualLastLastReadMessageId(){return this.$store.getters.getVisualLastReadMessageId(this.message.token)},isLastReadMessage(){return this.isLastMessage?!1:this.message.id===this.visualLastLastReadMessageId?!this.isCollapsedSystemMessage||this.message.id!==this.lastCollapsedMessageId:this.isCombinedSystemMessage&&this.lastCollapsedMessageId===this.visualLastLastReadMessageId},shouldShowSummaryOption(){return this.conversation.remoteServer||!Yo||this.chatExtrasStore.hasChatSummaryTaskRequested(this.message.token)?!1:this.conversation.unreadMessages>=Xo},isSystemMessage(){return this.message.systemMessage!==""},isDeletedMessage(){return this.message.messageType==="comment_deleted"},conversation(){return this.$store.getters.conversation(this.message.token)},showCommonReadIcon(){return this.conversation.lastCommonReadMessage>=this.message.id&&this.showSentIcon&&!this.isDeletedMessage},showSentIcon(){return!this.isSystemMessage&&!this.isTemporary&&!this.isDeleting&&this.message.actorType===this.$store.getters.getActorType()&&this.message.actorId===this.$store.getters.getActorId()&&!this.isDeletedMessage},richParameters(){const s={};return Object.keys(this.message.messageParameters).forEach(function(e){const t=this.message.messageParameters[e].type,a=this.message.messageParameters[e].mimetype,i=(0,Ko.$)({messageParameters:this.message.messageParameters,messageType:this.message.messageType});if(Object.values(F.TR.TYPE).includes(t))s[e]={component:co,props:{...this.message.messageParameters[e],token:this.message.token}};else if(t==="file"&&a!=="text/vcard")s[e]={component:Lt.A,props:{token:this.message.token,messageId:this.message.id,nextMessageId:this.nextMessageId,itemType:i,referenceId:this.message.referenceId,file:this.message.messageParameters[e]}};else if(t==="deck-card")s[e]={component:yi,props:this.message.messageParameters[e]};else if(t==="geo-location")s[e]={component:so,props:this.message.messageParameters[e]};else if(t==="talk-poll"&&this.message.systemMessage!=="poll_closed"){const r=Object.assign({},this.message.messageParameters[e]);r.token=this.message.token,s[e]={component:Vt.A,props:r}}else a==="text/vcard"?s[e]={component:hi,props:this.message.messageParameters[e]}:s[e]={component:bi.A,props:this.message.messageParameters[e]}}.bind(this)),s},showMessageButtonsBar(){return!this.isSystemMessage&&!this.isDeletedMessage&&!this.isTemporary&&(this.isHovered||this.isActionMenuOpen||this.isEmojiPickerOpen||this.isFollowUpEmojiPickerOpen||this.isReactionsMenuOpen||this.isForwarderOpen||this.isTranslateDialogOpen)},showCombinedSystemMessageToggle(){return this.isSystemMessage&&!this.isDeletedMessage&&!this.isTemporary&&this.isCombinedSystemMessage&&(this.isHovered||!this.isCombinedSystemMessageCollapsed)},readInfo(){return{showCommonReadIcon:this.showCommonReadIcon,commonReadIconTitle:(0,o.t)("spreed","Message read by everyone who shares their reading status"),showSentIcon:this.showSentIcon,sentIconTitle:(0,o.t)("spreed","Message sent"),showSilentIcon:this.message.silent,silentIconTitle:(0,o.t)("spreed","Sent without notification")}},canReact(){return this.conversation.readOnly!==F.si.STATE.READ_ONLY&&(this.conversation.permissions&F._z.PERMISSIONS.CHAT)!==0&&this.message.messageType!=="command"&&this.message.messageType!=="comment_deleted"}},methods:{t:o.t,lastReadMessageVisibilityChanged([{isIntersecting:s}]){s&&(this.seen=!0)},clearHighlightedClass(){this.$refs.message.classList.remove("message--highlighted")},handleMouseover(){this.isHovered||(this.isHovered=!0)},handleMouseleave(){this.isHovered&&(this.isHovered=!1)},handleReply(){this.chatExtrasStore.setParentIdToReply({token:this.message.token,id:this.message.id}),$.l.emit("focus-chat-input")},handleEdit(){this.chatExtrasStore.initiateEditingMessage({token:this.message.token,id:this.message.id,message:this.message.message,messageParameters:this.message.messageParameters})},async handleDelete(){this.isDeleting=!0;try{const s=await this.$store.dispatch("deleteMessage",{token:this.message.token,id:this.message.id,placeholder:(0,o.t)("spreed","Deleting message")});s===202?(0,P.I9)((0,o.t)("spreed","Message deleted successfully, but a bot or Matterbridge is configured and the message might already be distributed to other services"),{timeout:P.Jt*2}):s===200&&(0,P.Te)((0,o.t)("spreed","Message deleted successfully"))}catch(s){s?.response?.status===400?(0,P.Qg)((0,o.t)("spreed","Message could not be deleted because it is too old")):s?.response?.status===405?(0,P.Qg)((0,o.t)("spreed","Only normal chat messages can be deleted")):((0,P.Qg)((0,o.t)("spreed","An error occurred while deleting the message")),console.error(s)),this.isDeleting=!1;return}this.isDeleting=!1},toggleCombinedSystemMessage(){this.$emit("toggle-combined-system-message")},toggleFollowUpEmojiPicker(){this.isFollowUpEmojiPickerOpen=!this.isFollowUpEmojiPickerOpen},async generateSummary(){await this.chatExtrasStore.requestChatSummary(this.message.token,this.message.id)}}};var Ve=n(93233),oe={};oe.styleTagTransform=R(),oe.setAttributes=I(),oe.insert=L().bind(null,"head"),oe.domAPI=T(),oe.insertStyleElement=O();var Ac=S()(Ve.A,oe);const gc=Ve.A&&Ve.A.locals?Ve.A.locals:void 0;var Zo=(0,f.A)(Jo,Ks,Ys,!1,null,"16f46db6",null);const Ht=Zo.exports,Qo={name:"MessagesGroup",components:{AvatarWrapper:Ne.A,Message:Ht},inheritAttrs:!1,props:{token:{type:String,required:!0},messages:{type:Array,required:!0},previousMessageId:{type:[String,Number],default:0},nextMessageId:{type:[String,Number],default:0}},setup(s){const{messages:e}=(0,d.QW)(s),t=(0,d.EW)(()=>e.value[0]),{remoteServer:a,lastEditor:i,actorDisplayName:r,actorDisplayNameWithFallback:l}=(0,lt.B)(t),u=(0,d.EW)(()=>[l.value,a.value,i.value].filter(v=>v).join(" "));return{AVATAR:F.of,guestNameStore:(0,be.m)(),actorDisplayName:r,actorInfo:u}},computed:{actorId(){return this.messages[0].actorId},actorType(){return this.messages[0].actorType},disableMenu(){return this.$store.getters.isActorGuest()||this.actorType===F.Rf.ACTOR_TYPE.BRIDGED}},methods:{t:o.t}};var ze=n(84211),le={};le.styleTagTransform=R(),le.setAttributes=I(),le.insert=L().bind(null,"head"),le.domAPI=T(),le.insertStyleElement=O();var hc=S()(ze.A,le);const Cc=ze.A&&ze.A.locals?ze.A.locals:void 0;var qo=(0,f.A)(Qo,Ws,Hs,!1,null,"35cea0d8",null);const el=qo.exports;var tl=function(){var e=this,t=e._self._c;return t("li",{staticClass:"wrapper wrapper--system"},e._l(e.messagesGroupedBySystemMessage,function(a){return t("div",{key:a.id,staticClass:"messages-group__system"},[a.messages?.length>1?t("ul",{staticClass:"messages"},[t("Message",{attrs:{"is-combined-system-message":"","is-combined-system-message-collapsed":a.collapsed,"next-message-id":e.getNextMessageId(a.messages.at(-1)),"previous-message-id":e.getPrevMessageId(a.messages.at(0)),"last-collapsed-message-id":a.lastId,message:e.createCombinedSystemMessage(a)},on:{"toggle-combined-system-message":function(i){return e.toggleCollapsed(a)}}})],1):e._e(),e._v(" "),t("ul",{directives:[{name:"show",rawName:"v-show",value:a.messages?.length===1||!a.collapsed,expression:"messagesCollapsed.messages?.length === 1 || !messagesCollapsed.collapsed"}],staticClass:"messages",class:{"messages--collapsed":a.messages?.length>1}},e._l(a.messages,function(i){return t("Message",{key:i.id,attrs:{message:i,"is-collapsed-system-message":a.messages?.length>1,"last-collapsed-message-id":a.lastId,"next-message-id":e.getNextMessageId(i),"previous-message-id":e.getPrevMessageId(i)}})}),1)])}),0)},sl=[],al=n(88055),nl=n.n(al);function il(){const s=(0,vt.P)();function e(r){return r.actorId===s.getters.getActorId()&&r.actorType===s.getters.getActorType()}function t(r){return r.messageParameters.actor.id===s.getters.getActorId()&&r.messageParameters.actor.type+"s"===s.getters.getActorType()}function a(r){return r.messageParameters.user.id===s.getters.getActorId()&&r.messageParameters.user.type+"s"===s.getters.getActorType()}function i({id:r,messages:l,type:u,collapsed:v}){const c=nl()(l[0]);if(c.id=l[0].id+"_combined",u==="call_reconnected")return t(c)?c.message=(0,o.t)("spreed","You reconnected to the call"):c.message=(0,o.t)("spreed","{actor} reconnected to the call"),c;const _=l[0].messageParameters.actor;c.messageParameters={actor:_};const A=_.id==="guest/cli"&&_.type==="guest";let g=0,B=!1,p=0;if(u==="user_added"&&(l.forEach(w=>{a(w)?B=!0:(c.messageParameters[`user${p}`]=w.messageParameters.user,p++),g++}),e(c)?g===2?c.message=(0,o.t)("spreed","You added {user0} and {user1}"):c.message=(0,o.n)("spreed","You added {user0}, {user1} and %n more participant","You added {user0}, {user1} and %n more participants",g-2):B?g===2?c.message=A?(0,o.t)("spreed","An administrator added you and {user0}"):(0,o.t)("spreed","{actor} added you and {user0}"):c.message=A?(0,o.n)("spreed","An administrator added you, {user0} and %n more participant","An administrator added you, {user0} and %n more participants",g-2):(0,o.n)("spreed","{actor} added you, {user0} and %n more participant","{actor} added you, {user0} and %n more participants",g-2):g===2?c.message=A?(0,o.t)("spreed","An administrator added {user0} and {user1}"):(0,o.t)("spreed","{actor} added {user0} and {user1}"):c.message=A?(0,o.n)("spreed","An administrator added {user0}, {user1} and %n more participant","An administrator added {user0}, {user1} and %n more participants",g-2):(0,o.n)("spreed","{actor} added {user0}, {user1} and %n more participant","{actor} added {user0}, {user1} and %n more participants",g-2)),u==="user_removed"&&(l.forEach(w=>{a(w)?B=!0:(c.messageParameters[`user${p}`]=w.messageParameters.user,p++),g++}),e(c)?g===2?c.message=(0,o.t)("spreed","You removed {user0} and {user1}"):c.message=(0,o.n)("spreed","You removed {user0}, {user1} and %n more participant","You removed {user0}, {user1} and %n more participants",g-2):B?g===2?c.message=A?(0,o.t)("spreed","An administrator removed you and {user0}"):(0,o.t)("spreed","{actor} removed you and {user0}"):c.message=A?(0,o.n)("spreed","An administrator removed you, {user0} and %n more participant","An administrator removed you, {user0} and %n more participants",g-2):(0,o.n)("spreed","{actor} removed you, {user0} and %n more participant","{actor} removed you, {user0} and %n more participants",g-2):g===2?c.message=A?(0,o.t)("spreed","An administrator removed {user0} and {user1}"):(0,o.t)("spreed","{actor} removed {user0} and {user1}"):c.message=A?(0,o.n)("spreed","An administrator removed {user0}, {user1} and %n more participant","An administrator removed {user0}, {user1} and %n more participants",g-2):(0,o.n)("spreed","{actor} removed {user0}, {user1} and %n more participant","{actor} removed {user0}, {user1} and %n more participants",g-2)),u==="call_joined"||u==="call_left"){const w=[];if(l.forEach(k=>{const De=`${k.messageParameters.actor.id}_${k.messageParameters.actor.type}`;w.includes(De)||(t(k)?B=!0:(c.messageParameters[`user${p}`]=k.messageParameters.actor,p++),w.push(De),g++)}),g===1)return c.message=l[0].message,c;u==="call_joined"?B?g===2?c.message=(0,o.t)("spreed","You and {user0} joined the call"):c.message=(0,o.n)("spreed","You, {user0} and %n more participant joined the call","You, {user0} and %n more participants joined the call",g-2):g===2?c.message=(0,o.t)("spreed","{user0} and {user1} joined the call"):c.message=(0,o.n)("spreed","{user0}, {user1} and %n more participant joined the call","{user0}, {user1} and %n more participants joined the call",g-2):u==="call_left"&&(B?g===2?c.message=(0,o.t)("spreed","You and {user0} left the call"):c.message=(0,o.n)("spreed","You, {user0} and %n more participant left the call","You, {user0} and %n more participants left the call",g-2):g===2?c.message=(0,o.t)("spreed","{user0} and {user1} left the call"):c.message=(0,o.n)("spreed","{user0}, {user1} and %n more participant left the call","{user0}, {user1} and %n more participants left the call",g-2))}return u==="moderator_promoted"&&(l.forEach(w=>{a(w)?B=!0:(c.messageParameters[`user${p}`]=w.messageParameters.user,p++),g++}),e(c)?g===2?c.message=(0,o.t)("spreed","You promoted {user0} and {user1} to moderators"):c.message=(0,o.n)("spreed","You promoted {user0}, {user1} and %n more participant to moderators","You promoted {user0}, {user1} and %n more participants to moderators",g-2):B?g===2?c.message=A?(0,o.t)("spreed","An administrator promoted you and {user0} to moderators"):(0,o.t)("spreed","{actor} promoted you and {user0} to moderators"):c.message=A?(0,o.n)("spreed","An administrator promoted you, {user0} and %n more participant to moderators","An administrator promoted you, {user0} and %n more participants to moderators",g-2):(0,o.n)("spreed","{actor} promoted you, {user0} and %n more participant to moderators","{actor} promoted you, {user0} and %n more participants to moderators",g-2):g===2?c.message=A?(0,o.t)("spreed","An administrator promoted {user0} and {user1} to moderators"):(0,o.t)("spreed","{actor} promoted {user0} and {user1} to moderators"):c.message=A?(0,o.n)("spreed","An administrator promoted {user0}, {user1} and %n more participant to moderators","An administrator promoted {user0}, {user1} and %n more participants to moderators",g-2):(0,o.n)("spreed","{actor} promoted {user0}, {user1} and %n more participant to moderators","{actor} promoted {user0}, {user1} and %n more participants to moderators",g-2)),u==="moderator_demoted"&&(l.forEach(w=>{a(w)?B=!0:(c.messageParameters[`user${p}`]=w.messageParameters.user,p++),g++}),e(c)?g===2?c.message=(0,o.t)("spreed","You demoted {user0} and {user1} from moderators"):c.message=(0,o.n)("spreed","You demoted {user0}, {user1} and %n more participant from moderators","You demoted {user0}, {user1} and %n more participants from moderators",g-2):B?g===2?c.message=A?(0,o.t)("spreed","An administrator demoted you and {user0} from moderators"):(0,o.t)("spreed","{actor} demoted you and {user0} from moderators"):c.message=A?(0,o.n)("spreed","An administrator demoted you, {user0} and %n more participant from moderators","An administrator demoted you, {user0} and %n more participants from moderators",g-2):(0,o.n)("spreed","{actor} demoted you, {user0} and %n more participant from moderators","{actor} demoted you, {user0} and %n more participants from moderators",g-2):g===2?c.message=A?(0,o.t)("spreed","An administrator demoted {user0} and {user1} from moderators"):(0,o.t)("spreed","{actor} demoted {user0} and {user1} from moderators"):c.message=A?(0,o.n)("spreed","An administrator demoted {user0}, {user1} and %n more participant from moderators","An administrator demoted {user0}, {user1} and %n more participants from moderators",g-2):(0,o.n)("spreed","{actor} demoted {user0}, {user1} and %n more participant from moderators","{actor} demoted {user0}, {user1} and %n more participants from moderators",g-2)),c}return{createCombinedSystemMessage:i}}const rl={name:"MessagesSystemGroup",components:{Message:Ht},inheritAttrs:!1,props:{token:{type:String,required:!0},messages:{type:Array,required:!0},previousMessageId:{type:[String,Number],default:0},nextMessageId:{type:[String,Number],default:0}},setup(){const{createCombinedSystemMessage:s}=il();return{createCombinedSystemMessage:s}},data(){return{groupIsCollapsed:{},messagesGroupedBySystemMessage:[]}},computed:{lastReadMessageId(){return this.$store.getters.conversation(this.token)?.lastReadMessage}},watch:{messages:{deep:!0,immediate:!0,handler(s){this.messagesGroupedBySystemMessage=this.groupMessages(s),this.updateCollapsedState()}},lastReadMessageId(){this.updateCollapsedState()}},methods:{messagesShouldBeGrouped(s,e){return e?s.systemMessage==="call_joined"&&s.systemMessage===e.systemMessage?"call_joined":s.systemMessage==="call_left"&&s.systemMessage===e.systemMessage?"call_left":s.actorId!==e.actorId||s.actorType!==e.actorType?"":s.systemMessage==="call_joined"&&e.systemMessage==="call_left"&&s.timestamp-e.timestamp<60*1e3?"call_reconnected":s.systemMessage==="user_added"&&s.systemMessage===e.systemMessage?"user_added":s.systemMessage==="user_removed"&&s.systemMessage===e.systemMessage?"user_removed":(s.systemMessage==="moderator_promoted"||s.systemMessage==="guest_moderator_promoted")&&(e.systemMessage==="moderator_promoted"||e.systemMessage==="guest_moderator_promoted")?"moderator_promoted":(s.systemMessage==="moderator_demoted"||s.systemMessage==="guest_moderator_demoted")&&(e.systemMessage==="moderator_demoted"||e.systemMessage==="guest_moderator_demoted")?"moderator_demoted":"":""},updateCollapsedState(){for(const s of this.messagesGroupedBySystemMessage)this.lastReadMessageId>=s.id&&this.lastReadMessageId<s.lastId?s.collapsed=!1:this.groupIsCollapsed[s.id]!==void 0?s.collapsed=this.groupIsCollapsed[s.id]:s.collapsed=s.messages.length>1},groupMessages(s){const e=[];let t=null,a=!1;for(const i of s){const r=this.messagesShouldBeGrouped(i,t);!r||a?(e.push({id:i.id,lastId:i.id,messages:[i],type:"",collapsed:void 0}),a=!1):(r==="call_reconnected"&&(e.push({id:i.id,lastId:i.id,messages:[e.at(-1).messages.pop()],type:"",collapsed:void 0}),e.at(-1).lastId=e.at(-1).messages.at(-1).id,a=!0),e.at(-1).messages.push(i),e.at(-1).lastId=i.id,e.at(-1).type=r),t=i}return e},toggleCollapsed(s){this.$set(s,"collapsed",!s.collapsed),this.groupIsCollapsed[s.id]=s.collapsed},getNextMessageId(s){return this.messages[this.messages.findIndex(t=>t.id===s.id)+1]?.id||this.nextMessageId},getPrevMessageId(s){return this.messages[this.messages.findIndex(t=>t.id===s.id)-1]?.id||this.previousMessageId}}};var Ge=n(99358),de={};de.styleTagTransform=R(),de.setAttributes=I(),de.insert=L().bind(null,"head"),de.domAPI=T(),de.insertStyleElement=O();var vc=S()(Ge.A,de);const Dc=Ge.A&&Ge.A.locals?Ge.A.locals:void 0;var ol=(0,f.A)(rl,tl,sl,!1,null,"78dd728a",null);const ll=ol.exports;var dl=n(25943),gt=n(64902),ul=n(49583),V=n(29876);const Kt=10,cl={name:"MessagesList",components:{LoadingPlaceholder:dl.A,Message:Gs,NcEmptyContent:at.A,NcLoadingIcon:Fe.A,TransitionWrapper:gt.A},provide(){return{getMessagesListScroller:()=>this.$refs.scroller}},props:{token:{type:String,required:!0},isChatScrolledToBottom:{type:Boolean,default:!0},isVisible:{type:Boolean,default:!0}},emits:["update:is-chat-scrolled-to-bottom"],setup(s){const e=(0,ul.f)(),t=(0,d.EW)(()=>e.value&&s.isVisible);return{isInCall:(0,Ee.J)(),chatExtrasStore:(0,At.k)(),isChatVisible:t}},data(){return{messagesGroupedByDateByAuthor:{},viewId:Ns()("messagesList"),displayMessagesLoader:!1,previousScrollTopValue:null,pollingErrorTimeout:1,loadingOldMessages:!1,isInitialisingMessages:!1,isFocusingMessage:!1,destroying:!1,expirationInterval:null,debounceUpdateReadMarkerPosition:()=>{},debounceHandleScroll:()=>{},stopFetchingOldMessages:!1,isScrolling:null,stickyDate:null,dateSeparatorLabels:{},endScrollTimeout:()=>{}}},computed:{visualLastReadMessageId(){return this.$store.getters.getVisualLastReadMessageId(this.token)},messagesList(){return this.$store.getters.messagesList(this.token)},isMessagesListPopulated(){return this.$store.getters.isMessagesListPopulated(this.token)},chatLoadedIdentifier(){return this.token+":"+this.isMessagesListPopulated},showEmptyContent(){return!this.messagesList.length},isSticky(){return this.isChatScrolledToBottom&&!this.isInitialisingMessages},hasMoreMessagesToLoad(){return this.$store.getters.hasMoreMessagesToLoad(this.token)},isParticipant(){return this.conversation?!!this.$store.getters.findParticipant(this.token,this.conversation)?.attendeeId:!1},isInLobby(){return this.$store.getters.isInLobby},conversation(){return this.$store.getters.conversation(this.token)},chatIdentifier(){return this.token+":"+this.isParticipant+":"+this.viewId},currentDay(){return(0,N.A)().startOf("day").unix()},isChatBeginningReached(){return this.stopFetchingOldMessages||this.messagesList?.[0]?.messageType==="system"&&["conversation_created","history_cleared"].includes(this.messagesList[0].systemMessage)}},watch:{isChatVisible(s){s&&this.onWindowFocus()},chatIdentifier:{immediate:!0,handler(s,e){e&&this.$store.dispatch("cancelLookForNewMessages",{requestId:e}),this.handleStartGettingMessagesPreconditions(this.token),this.removeExpiredMessagesFromStore()}},token(s,e){this.$store.dispatch("easeMessageList",{token:e})},messagesList:{immediate:!0,handler(s,e){const t=this.prepareMessagesGroups(s);!e||e?.length&&s.length&&s[0].token!==e?.at(0)?.token?this.messagesGroupedByDateByAuthor=t:this.softUpdateByDateGroups(this.messagesGroupedByDateByAuthor,t),this.scrollToBottom({smooth:!1}),this.conversation?.type===F.si.TYPE.NOTE_TO_SELF&&this.$nextTick(()=>{this.updateTasksCount()})}},chatLoadedIdentifier(){this.stickyDate=null,this.stopFetchingOldMessages=!1,this.$refs.scroller&&this.$refs.scroller.removeEventListener("wheel",this.handleWheelEvent),this.isMessagesListPopulated&&this.$nextTick(()=>{this.checkSticky();const s=this.$refs.scroller.scrollHeight>this.$refs.scroller.clientHeight;!this.isChatBeginningReached&&!s&&this.$refs.scroller.addEventListener("wheel",this.handleWheelEvent,{passive:!0})})}},mounted(){this.debounceUpdateReadMarkerPosition=yt()(this.updateReadMarkerPosition,1e3),this.debounceHandleScroll=yt()(this.handleScroll,50),$.l.on("scroll-chat-to-bottom",this.scrollToBottom),$.l.on("focus-message",this.focusMessage),$.l.on("route-change",this.onRouteChange),$.l.on("message-height-changed",this.onMessageHeightChanged),(0,H.B1)("networkOffline",this.handleNetworkOffline),(0,H.B1)("networkOnline",this.handleNetworkOnline),window.addEventListener("focus",this.onWindowFocus),this.expirationInterval=window.setInterval(()=>{this.removeExpiredMessagesFromStore()},3e4)},beforeDestroy(){this.debounceUpdateReadMarkerPosition.clear?.(),this.debounceHandleScroll.clear?.(),window.removeEventListener("focus",this.onWindowFocus),$.l.off("scroll-chat-to-bottom",this.scrollToBottom),$.l.off("focus-message",this.focusMessage),$.l.off("route-change",this.onRouteChange),$.l.off("message-height-changed",this.onMessageHeightChanged),this.$store.dispatch("cancelLookForNewMessages",{requestId:this.chatIdentifier}),this.destroying=!0,(0,H.al)("networkOffline",this.handleNetworkOffline),(0,H.al)("networkOnline",this.handleNetworkOnline),this.expirationInterval&&(clearInterval(this.expirationInterval),this.expirationInterval=null)},methods:{t:o.t,n:o.n,prepareMessagesGroups(s){let e=null;const t={};let a=null,i=null,r=null;for(const l of s)this.messagesShouldBeGrouped(l,a)?t[e.date][e.groupId].messages.push(l):(i=l.id,l.timestamp===0?r=this.currentDay:r=(0,N.A)(l.timestamp*1e3).startOf("day").unix(),this.dateSeparatorLabels[r]||this.$set(this.dateSeparatorLabels,r,this.generateDateSeparator(r)),t[r]||(t[r]={}),t[r][i]={id:l.id,messages:[l],token:this.token,dateTimestamp:r,previousMessageId:a?.id||0,nextMessageId:0,isSystemMessagesGroup:l.systemMessage.length!==0},e&&(t[e.date][e.groupId].nextMessageId=l.id),e={date:r,groupId:l.id}),a=l;return t},softUpdateByDateGroups(s,e){new Set([...Object.keys(s),...Object.keys(e)]).forEach(a=>{e[a]?s[a]?this.softUpdateAuthorGroups(s[a],e[a],a):this.$set(this.messagesGroupedByDateByAuthor,a,e[a]):this.$delete(this.messagesGroupedByDateByAuthor,a)})},softUpdateAuthorGroups(s,e,t){new Set([...Object.keys(s),...Object.keys(e)]).forEach(i=>{s[i]&&!e[i]?this.$delete(this.messagesGroupedByDateByAuthor[t],i):(e[i]&&!s[i]||!this.areGroupsIdentical(e[i],s[i]))&&this.$set(this.messagesGroupedByDateByAuthor[t],i,e[i])})},areGroupsIdentical(s,e){return s.messages.length!==e.messages.length||s.dateSeparator!==e.dateSeparator||s.previousMessageId!==e.previousMessageId||s.nextMessageId!==e.nextMessageId?!1:s.messages.every((t,a)=>e.messages[a].id===t.id&&JSON.stringify(e.messages[a])===JSON.stringify(t))},removeExpiredMessagesFromStore(){this.$store.dispatch("removeExpiredMessages",{token:this.token})},messagesShouldBeGrouped(s,e){if(!e||s.lastEditTimestamp||e.lastEditTimestamp||s.actorType===F.Rf.ACTOR_TYPE.BOTS&&s.actorId!==F.Rf.CHANGELOG_BOT_ID)return!1;const t=s.systemMessage.length!==0,a=e.systemMessage.length!==0;return t!==a||!t&&(s.actorType!==e.actorType||s.actorId!==e.actorId||s.actorType===F.Rf.ACTOR_TYPE.BRIDGED&&s.actorDisplayName!==e.actorDisplayName)||this.messagesHaveDifferentDate(s,e)?!1:this.getDateOfMessage(s).diff(this.getDateOfMessage(e))<300*1e3},messagesHaveDifferentDate(s,e){return!e||this.getDateOfMessage(s).format("YYYY-MM-DD")!==this.getDateOfMessage(e).format("YYYY-MM-DD")},getRelativePrefix(s,e){switch(e){case 0:return(0,o.t)("spreed","Today");case 1:return(0,o.t)("spreed","Yesterday");case 7:return(0,o.t)("spreed","A week ago");default:return(0,o.n)("spreed","%n day ago","%n days ago",e)}},generateDateSeparator(s){const e=N.A.unix(s).startOf("day"),t=(0,N.A)().startOf("day").diff(e,"days");return t<=7?(0,o.t)("spreed","{relativeDate}, {absoluteDate}",{relativeDate:this.getRelativePrefix(e,t),absoluteDate:e.format("LL")},void 0,{escape:!1}):e.format("LL")},getDateOfMessage(s){return s.id.toString().startsWith("temp-")?(0,N.A)():N.A.unix(s.timestamp)},getMessageIdFromHash(s=void 0){return s?parseInt(s.slice(9),10):this.$route?.hash?.startsWith("#message_")?parseInt(this.$route.hash.slice(9),10):null},scrollToFocusedMessage(s){let e=null;if(s){this.focusMessage(s);return}if(this.visualLastReadMessageId&&(e=this.focusMessage(this.visualLastReadMessageId,!1,!1)),!e){const t=this.$store.getters.getFirstDisplayableMessageIdBeforeReadMarker(this.token,this.visualLastReadMessageId);t&&(e=this.focusMessage(t,!1,!1)),e?this.$store.dispatch("setVisualLastReadMessageId",{token:this.token,id:t}):this.scrollToBottom({smooth:!1,force:!0})}this.debounceUpdateReadMarkerPosition()},async handleStartGettingMessagesPreconditions(s){if(s&&this.isParticipant&&!this.isInLobby){this.isInitialisingMessages=!0;const e=this.getMessageIdFromHash();if(this.$store.dispatch("setVisualLastReadMessageId",{token:s,id:this.conversation.lastReadMessage}),!this.$store.getters.getFirstKnownMessageId(s))try{const t=e!==null?e:this.conversation.lastReadMessage;if(!t)throw new Error(`[DEBUG] spreed: context message ID is ${t}`);this.$store.dispatch("setFirstKnownMessageId",{token:s,id:t}),this.$store.dispatch("setLastKnownMessageId",{token:s,id:t}),await this.getMessageContext(s,t!==F.w5.CHAT_BEGIN_ID?t:0)}catch(t){console.debug(t),this.$store.dispatch("setFirstKnownMessageId",{token:s,id:null}),this.$store.dispatch("setLastKnownMessageId",{token:s,id:null});return}this.$nextTick(()=>{this.scrollToFocusedMessage(e)}),this.isInitialisingMessages=!1,await this.lookForNewMessages(s)}else this.$store.dispatch("cancelLookForNewMessages",{requestId:this.chatIdentifier})},async lookForNewMessages(s){if(this._isBeingDestroyed||this._isDestroyed){console.debug("Prevent getting new messages on a destroyed MessagesList");return}await this.getNewMessages(s)},async getMessageContext(s,e){this.loadingOldMessages=!0;try{V.l.start(`${s} | get context`),await this.$store.dispatch("getMessageContext",{token:s,messageId:e,minimumVisible:F.VR.MINIMUM_VISIBLE}),V.l.end(`${s} | get context`,"status 200"),this.loadingOldMessages=!1}catch(t){if(K.Ay.isCancel(t))throw console.debug("The request has been canceled",t),V.l.end(`${s} | get context`,"cancelled"),this.loadingOldMessages=!1,t;t?.response?.status===304&&t?.response?.data===""&&(V.l.end(`${s} | get context`,"status 304"),this.$store.dispatch("loadedMessagesOfConversation",{token:this.token}),this.stopFetchingOldMessages=!0)}this.loadingOldMessages=!1},async getOldMessages(s){if(!this.isChatBeginningReached){this.loadingOldMessages=!0;try{V.l.start(`${this.token} | fetch history`),await this.$store.dispatch("fetchMessages",{token:this.token,lastKnownMessageId:this.$store.getters.getFirstKnownMessageId(this.token),includeLastKnown:s,minimumVisible:F.VR.MINIMUM_VISIBLE}),V.l.end(`${this.token} | fetch history`,"status 200")}catch(e){K.Ay.isCancel(e)&&(V.l.end(`${this.token} | fetch history`,"cancelled"),console.debug("The request has been canceled",e)),e?.response?.status===304&&(V.l.end(`${this.token} | fetch history`,"status 304"),this.stopFetchingOldMessages=!0)}this.loadingOldMessages=!1}},async getNewMessages(s){if(!this.destroying){if(this.token!==s){console.debug(`token has changed to ${this.token}, breaking the loop for ${s}`);return}try{V.l.start(`${s} | long polling`),this.pollingErrorTimeout=1,await this.$store.dispatch("lookForNewMessages",{token:s,lastKnownMessageId:this.$store.getters.getLastKnownMessageId(s),requestId:this.chatIdentifier}),V.l.end(`${s} | long polling`,"status 200")}catch(e){if(K.Ay.isCancel(e)){V.l.end(`${s} | long polling`,"cancelled"),console.debug("The request has been canceled",e);return}if(e?.response?.status===304){V.l.end(`${s} | long polling`,"status 304"),this.pollingErrorTimeout=1,setTimeout(()=>{this.getNewMessages(s)},500);return}this.pollingErrorTimeout<30&&(this.pollingErrorTimeout+=5),V.l.end(`${s} | long polling`,`status ${e?.response?.status}`),console.debug("Error happened while getting chat messages. Trying again in ",this.pollingErrorTimeout,e),setTimeout(()=>{this.getNewMessages(s)},this.pollingErrorTimeout*1e3);return}setTimeout(()=>{this.getNewMessages(s)},500)}},checkSticky(){const s=this.$refs["dateGroup-"+this.token];if(!s)return;const e=this.$refs.scroller.getBoundingClientRect();s.forEach(t=>{const a=t.getBoundingClientRect();a.top<=e.top&&a.bottom>=e.top&&(this.stickyDate=t.getAttribute("data-date-timestamp"))})},onScroll(s){this.isScrolling&&clearTimeout(this.endScrollTimeout),this.isScrolling=this.previousScrollTopValue>s.target.scrollTop?"up":"down",this.previousScrollTopValue=s.target.scrollTop,this.endScrollTimeout=setTimeout(this.endScroll,3e3),this.$refs.scroller.scrollTop===0?this.stickyDate=null:this.checkSticky(),this.debounceHandleScroll()},async handleScroll({skipHeightCheck:s=!1}={}){if(!this.$refs.scroller)return;if(!this.$store.getters.getFirstKnownMessageId(this.token)){console.debug("Ignoring handleScroll as the messages history is empty");return}if(this.isInitialisingMessages){console.debug("Ignore handleScroll as we are initialising the message history");return}if(this.isFocusingMessage){console.debug("Ignore handleScroll as we are programmatically scrolling to focus a message");return}const{scrollHeight:e,scrollTop:t,clientHeight:a}=this.$refs.scroller,i=e-t;if(Math.abs(i-a)<Kt&&!this.hasMoreMessagesToLoad&&t>0){this.setChatScrolledToBottom(!0),this.displayMessagesLoader=!1,this.debounceUpdateReadMarkerPosition();return}if(this.setChatScrolledToBottom(!1),e>a&&t<800&&this.isScrolling==="up"||s){if(this.loadingOldMessages||this.isChatBeginningReached)return;this.displayMessagesLoader=!0,await this.getOldMessages(!1),this.displayMessagesLoader=!1,this.$refs.scroller.scrollHeight!==e&&this.$refs.scroller.scrollTo({top:t+(this.$refs.scroller.scrollHeight-e)}),this.setChatScrolledToBottom(!1,{auto:!0})}this.debounceUpdateReadMarkerPosition()},endScroll(){this.debounceHandleScroll.flush?.(),this.isScrolling=null,clearTimeout(this.endScrollTimeout)},findFirstVisibleMessage(s){if(!this.$refs.scroller)return;let e=s;if(!e||e.offsetParent===null){const i=this.$store.getters.getFirstDisplayableMessageIdAfterReadMarker(this.token,this.conversation.lastReadMessage);e=document.getElementById("message_"+i)}let t=e;const{scrollTop:a}=this.$refs.scroller;for(;e;){if(e.offsetTop-a>=0)return t;t=e,e=document.getElementById("message_"+e.getAttribute("data-next-message-id"))}return t},refreshReadMarkerPosition(){this.conversation&&(console.debug("setVisualLastReadMessageId token="+this.token+" id="+this.conversation.lastReadMessage),this.$store.dispatch("setVisualLastReadMessageId",{token:this.token,id:this.conversation.lastReadMessage}))},getVisualLastReadMessageElement(){let s=document.getElementById("message_"+this.visualLastReadMessageId);return s&&(s=s.closest(".message"),(s===null||s.offsetParent===null)&&(s=document.querySelector(".message-unread-marker"),s?s=s.closest(".message"):console.warn("Visual last read message element not found"))),s},updateReadMarkerPosition(){if(!this.conversation)return;if(this.conversation.lastReadMessage===0){console.debug("clearLastReadMessage because lastReadMessage was 0 token="+this.token),this.$store.dispatch("clearLastReadMessage",{token:this.token,updateVisually:!0});return}if(this.conversation.lastReadMessage===this.conversation.lastMessage?.id)return;const s=this.getVisualLastReadMessageElement();if(s&&s.getAttribute("data-seen")!=="true")return;if(this.isSticky&&!this.hasMoreMessagesToLoad){console.debug("clearLastReadMessage because of isSticky token="+this.token),this.$store.dispatch("clearLastReadMessage",{token:this.token});return}if(s&&this.$refs.scroller&&s.offsetTop-this.$refs.scroller.scrollTop>0)return;const e=this.findFirstVisibleMessage(s);if(!e){console.warn("First visible message not found: ",e);return}const t=parseInt(e.getAttribute("data-message-id"),10);t<=this.conversation.lastReadMessage||(console.debug("updateLastReadMessage token="+this.token+" messageId="+t),this.$store.dispatch("updateLastReadMessage",{token:this.token,id:t,updateVisually:!1}))},scrollToBottom(s={}){this.$nextTick(()=>{if(!this.$refs.scroller||this.isFocusingMessage)return;let e;if(s?.force)e=this.$refs.scroller.scrollHeight,this.setChatScrolledToBottom(!0);else if(this.isSticky)if(this.isChatVisible)e=this.$refs.scroller.scrollHeight,this.setChatScrolledToBottom(!0);else{const a=this.$refs.scroller.scrollHeight-this.$refs.scroller.scrollTop-this.$refs.scroller.offsetHeight<40?10:40;e=this.$refs.scroller.scrollTop+a,this.setChatScrolledToBottom(!1)}else return;this.$refs.scroller.scrollTo({top:e,behavior:s?.smooth?"smooth":"auto"})})},focusMessage(s,e=!0,t=!0){const a=document.getElementById(`message_${s}`);if(!a)return console.warn("Message to focus not found in DOM",s),!1;let i=a;return this.isChatVisible&&i.offsetParent===null&&(console.debug("Message to focus is hidden, scrolling to its nearest visible parent",s),i=i.closest('ul[style="display: none;"]').parentElement),console.debug("Scrolling to a focused message programmatically"),this.isFocusingMessage=!0,i.scrollIntoView({behavior:e?"smooth":"auto",block:"center",inline:"nearest"}),this.$refs.scroller&&!e&&(this.$refs.scroller.scrollTop+=this.$refs.scroller.offsetHeight/4),this.$refs.scroller&&this.$refs.scroller.clientHeight===this.$refs.scroller.scrollHeight&&this.setChatScrolledToBottom(!0),t&&i===a&&a.classList.add("message--highlighted"),this.isFocusingMessage=!1,!0},getLastKnownMessageId(){let s=this.messagesList.length-1;for(;s>=0;){if(!this.messagesList[s].id.toString().startsWith("temp-"))return this.messagesList[s].id;s--}return"0"},getFirstKnownMessageId(){return this.messagesList[0].id.toString()},handleNetworkOffline(){console.debug("Canceling message request as we are offline"),this.cancelLookForNewMessages&&this.$store.dispatch("cancelLookForNewMessages",{requestId:this.chatIdentifier})},handleNetworkOnline(){console.debug("Restarting polling of new chat messages"),this.getNewMessages(this.token)},async onRouteChange({from:s,to:e}){if(s.name==="conversation"&&e.name==="conversation"&&s.params.token===e.params.token&&s.hash!==e.hash&&e.hash&&e.hash.startsWith("#message_")){const t=this.getMessageIdFromHash(e.hash);this.messagesList.find(a=>a.id===t)?window.setTimeout(()=>{this.focusMessage(t,!0)},2):(this.$store.dispatch("setFirstKnownMessageId",{token:this.token,id:t}),this.$store.dispatch("setLastKnownMessageId",{token:this.token,id:t}),await this.getMessageContext(this.token,t),this.focusMessage(t,!0))}},setChatScrolledToBottom(s,{auto:e=!1}={}){let t=s;if(e){const a=this.$refs.scroller.scrollHeight-this.$refs.scroller.scrollTop;t=Math.abs(a-this.$refs.scroller.clientHeight)<Kt}this.$emit("update:is-chat-scrolled-to-bottom",t),t&&this.debounceUpdateReadMarkerPosition()},onWindowFocus(){setTimeout(()=>{this.refreshReadMarkerPosition(),Object.keys(this.dateSeparatorLabels).forEach(s=>{this.$set(this.dateSeparatorLabels,s,this.generateDateSeparator(s))})},2)},messagesGroupComponent(s){return s.isSystemMessagesGroup?ll:el},onMessageHeightChanged({heightDiff:s}){this.$refs.scroller.scrollTop+=s},updateTasksCount(){if(!this.$refs.scroller)return;const s=this.$refs.scroller.querySelectorAll(".checkbox-content__icon--checked")?.length,e=this.$refs.scroller.querySelectorAll(".task-list-item")?.length;this.chatExtrasStore.setTasksCounters({tasksCount:e,tasksDoneCount:s})},handleWheelEvent(s){if(s.deltaY<0){if(this.isChatBeginningReached){this.$refs.scroller.removeEventListener("wheel",this.handleWheelEvent);return}this.debounceHandleScroll({skipHeightCheck:!0})}}}};var We=n(28255),ue={};ue.styleTagTransform=R(),ue.setAttributes=I(),ue.insert=L().bind(null,"head"),ue.domAPI=T(),ue.insertStyleElement=O();var bc=S()(We.A,ue);const Fc=We.A&&We.A.locals?We.A.locals:void 0;var _l=(0,f.A)(cl,Os,Rs,!1,null,"c0c7b8da",null);const pl=_l.exports;var Yt=n(87681),Al=function(){var e=this,t=e._self._c;return e.showModal?t("NcModal",{ref:"modal",attrs:{size:e.isVoiceMessage?"small":"normal","close-on-click-outside":!1,"label-id":e.dialogHeaderId},on:{close:e.handleDismiss}},[t("div",{staticClass:"upload-editor",on:{dragover:function(a){return a.preventDefault(),e.handleDragOver.apply(null,arguments)},dragleave:function(a){return a.preventDefault(),e.handleDragLeave.apply(null,arguments)},drop:function(a){return a.preventDefault(),e.handleDropFiles.apply(null,arguments)}}},[e.isVoiceMessage?[t("AudioPlayer",{attrs:{name:e.voiceMessageName,"local-url":e.voiceMessageLocalURL}})]:[t("h2",{staticClass:"hidden-visually",attrs:{id:e.dialogHeaderId}},[e._v(`
				`+e._s(e.t("spreed","Upload from device"))+`
			`)]),e._v(" "),t("input",{ref:"fileUploadInput",staticClass:"hidden-visually",attrs:{id:"file-upload",multiple:"",type:"file"},on:{change:e.handleFileInput}}),e._v(" "),t("TransitionWrapper",{staticClass:"upload-editor__previews",class:{"dragging-over":e.isDraggingOver},attrs:{name:"fade",tag:"div",group:""}},[e._l(e.files,function(a){return[t("FilePreview",{key:a[1].temporaryMessage.id,attrs:{token:e.token,"is-upload-editor":"",file:a[1].temporaryMessage.messageParameters.file},on:{"remove-file":e.handleRemoveFileFromSelection}})]}),e._v(" "),t("NcButton",{key:"add-more",staticClass:"add-more-button",attrs:{"aria-label":e.addMoreAriaLabel,type:"tertiary",size:"large"},on:{click:e.clickImportInput},scopedSlots:e._u([{key:"icon",fn:function(){return[t("Plus",{attrs:{size:48}})]},proxy:!0}],null,!1,1550548444)})],2)],e._v(" "),e.supportMediaCaption?t("NewMessage",{ref:"newMessage",staticClass:"upload-editor__textfield",attrs:{role:"region",upload:"",dialog:"",token:e.token,container:e.modalContainerId,"aria-label":e.t("spreed","Post message")},on:{submit:e.handleUpload,dismiss:e.handleDismiss}}):t("div",{staticClass:"upload-editor__actions"},[t("NcButton",{attrs:{type:"tertiary"},on:{click:e.handleDismiss}},[e._v(`
				`+e._s(e.t("spreed","Dismiss"))+`
			`)]),e._v(" "),t("NcButton",{ref:"submitButton",attrs:{type:"primary"},on:{click:e.handleLegacyUpload}},[e._v(`
				`+e._s(e.t("spreed","Send"))+`
			`)])],1)],2)]):e._e()},gl=[],ml=n(37479);const hl={name:"NewMessageUploadEditor",components:{NcModal:ye.A,FilePreview:Lt.A,Plus:Et.A,AudioPlayer:ml.A,NcButton:U.A,NewMessage:Yt.A,TransitionWrapper:gt.A},setup(){const s=(0,d.KR)(null),e=(0,d.KR)(!1),t=`new-message-upload-${(0,xe.B)()}`;return{modalContainerId:s,isDraggingOver:e,dialogHeaderId:t}},computed:{token(){return this.$store.getters.getToken()},supportMediaCaption(){return(0,z.t0)(this.token,"media-caption")},currentUploadId(){return this.$store.getters.currentUploadId},files(){return this.$store.getters.getInitialisedUploads(this.currentUploadId)},showModal(){return!!this.currentUploadId},addMoreAriaLabel(){return(0,o.t)("spreed","Add more files")},firstFile(){return this.files?.at(0)?.at(1)},isVoiceMessage(){return this.firstFile?this.firstFile.temporaryMessage.messageType==="voice-message":!1},voiceMessageName(){return this.firstFile?.file?.name?this.firstFile.file.name:""},voiceMessageLocalURL(){return this.$store.getters.getLocalUrl(this.firstFile.temporaryMessage.referenceId)}},watch:{async showModal(s){s&&(await this.$nextTick(),this.modalContainerId=`#modal-description-${this.$refs.modal.randId}`,this.supportMediaCaption?this.$refs.newMessage.focusInput():this.$refs.submitButton.$el.focus())}},methods:{t:o.t,handleDismiss(){this.$store.dispatch("discardUpload",this.currentUploadId)},handleLegacyUpload(){this.$store.dispatch("uploadFiles",{token:this.token,uploadId:this.currentUploadId,caption:null,options:null})},async handleUpload({token:s,temporaryMessage:e,options:t}){if(this.files.length)await this.$store.dispatch("uploadFiles",{token:s,uploadId:this.currentUploadId,caption:e.message,options:t});else if(this.$store.dispatch("discardUpload",this.currentUploadId),e.message.trim())try{await this.$store.dispatch("postNewMessage",{token:s,temporaryMessage:e,options:t})}catch(a){console.error(a)}},clickImportInput(){this.$refs.fileUploadInput.click()},handleFileInput(s){const e=Object.values(s.target.files);this.$store.dispatch("initialiseUpload",{files:e,token:this.token,uploadId:this.currentUploadId}),this.$refs.fileUploadInput.value=null},handleRemoveFileFromSelection(s){this.$store.dispatch("removeFileFromSelection",s)},handleDragOver(s){s.dataTransfer.types.includes("Files")&&(this.isDraggingOver=!0)},handleDragLeave(s){s.currentTarget.contains(s.relatedTarget)||(this.isDraggingOver=!1)},handleDropFiles(s){if(!this.isDraggingOver)return;this.isDraggingOver=!1;const e=Object.values(s.dataTransfer.files);this.$store.dispatch("initialiseUpload",{files:e,token:this.token,uploadId:this.currentUploadId})}}};var He=n(17016),ce={};ce.styleTagTransform=R(),ce.setAttributes=I(),ce.insert=L().bind(null,"head"),ce.domAPI=T(),ce.insertStyleElement=O();var Mc=S()(He.A,ce);const Bc=He.A&&He.A.locals?He.A.locals:void 0;var Cl=(0,f.A)(hl,Al,gl,!1,null,"6db74a2c",null);const fl=Cl.exports,vl={name:"ChatView",components:{NcButton:U.A,ChevronDoubleDown:hs,MessagesList:pl,NewMessage:Yt.A,NewMessageUploadEditor:fl,TransitionWrapper:gt.A,GuestWelcomeWindow:Is},props:{isVisible:{type:Boolean,default:!0},isSidebar:{type:Boolean,default:!1}},setup(){return{chatExtrasStore:(0,At.k)()}},data(){return{isChatScrolledToBottom:!0,isDraggingOver:!1}},computed:{isGuest(){return this.$store.getters.isActorGuest()},isGuestWithoutDisplayName(){return!this.$store.getters.getDisplayName()&&this.isGuest},canUploadFiles(){return(0,z.JR)(this.token,"attachments","allowed")&&this.$store.getters.getUserId()&&this.$store.getters.getAttachmentFolderFreeSpace()!==0&&this.conversation.permissions&F._z.PERMISSIONS.CHAT&&!this.conversation.remoteServer},isDragAndDropBlocked(){return this.chatExtrasStore.getMessageIdToEdit(this.token)!==void 0||!this.canUploadFiles},dropHintText(){return this.isGuest?(0,o.t)("spreed","You need to be logged in to upload files"):this.isReadOnly?(0,o.t)("spreed","This conversation is read-only"):(0,o.t)("spreed","Drop your files to upload")},isReadOnly(){if(this.conversation)return this.conversation.readOnly===F.si.STATE.READ_ONLY},token(){return this.$store.getters.getToken()},conversation(){return this.$store.getters.conversation(this.token)},isLoadingChat(){return!this.$store.getters.isMessagesListPopulated(this.token)}},methods:{t:o.t,handleDragOver(s){s.dataTransfer.types.includes("Files")&&!this.isDragAndDropBlocked&&(this.isDraggingOver=!0)},handleDragLeave(s){s.currentTarget.contains(s.relatedTarget)||(this.isDraggingOver=!1)},handleDropFiles(s){if(!this.isDraggingOver||this.isDragAndDropBlocked||(this.isDraggingOver=!1,this.isGuest||this.isReadOnly))return;const e=Object.values(s.dataTransfer.files),t=new Date().getTime();this.$store.dispatch("initialiseUpload",{files:e,token:this.token,uploadId:t})},scrollToBottom(){$.l.emit("scroll-chat-to-bottom",{smooth:!1,force:!0})}}};var Ke=n(87592),_e={};_e.styleTagTransform=R(),_e.setAttributes=I(),_e.insert=L().bind(null,"head"),_e.domAPI=T(),_e.insertStyleElement=O();var kc=S()(Ke.A,_e);const wc=Ke.A&&Ke.A.locals?Ke.A.locals:void 0;var Dl=(0,f.A)(vl,cs,_s,!1,null,"4a54452d",null);const yl=Dl.exports;var bl=function(){var e=this,t=e._self._c;return e.modal?t("NcModal",{attrs:{"label-id":e.dialogHeaderId},on:{close:e.closeModal}},[t("div",{staticClass:"media-settings"},[t("h2",{staticClass:"media-settings__title nc-dialog-alike-header",attrs:{id:e.dialogHeaderId}},[e._v(`
			`+e._s(e.t("spreed","Media settings"))+`
		`)]),e._v(" "),t("div",{staticClass:"media-settings__preview"},[t("video",{directives:[{name:"show",rawName:"v-show",value:e.showVideo,expression:"showVideo"}],ref:"video",class:["preview__video",{"preview__video--mirrored":e.isMirrored}],attrs:{disablePictureInPicture:"",tabindex:"-1"}}),e._v(" "),e.showVideo?t("NcButton",{staticClass:"media-settings__preview-mirror",attrs:{type:"secondary",title:e.mirrorToggleLabel,"aria-label":e.mirrorToggleLabel},on:{click:function(a){e.isMirrored=!e.isMirrored}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("IconReflectHorizontal",{attrs:{size:20}})]},proxy:!0}],null,!1,1245179250)}):e._e(),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.showVideo,expression:"!showVideo"}],staticClass:"preview__novideo"},[t("VideoBackground",{attrs:{"display-name":e.displayName,user:e.userId}}),e._v(" "),t("AvatarWrapper",{attrs:{id:e.userId,token:e.token,name:e.displayName,source:e.actorType,size:e.AVATAR.SIZE.EXTRA_LARGE,"disable-menu":"","disable-tooltip":""}})],1),e._v(" "),t("div",{staticClass:"media-settings__toggles"},[t("NcButton",{attrs:{type:"tertiary",title:e.audioButtonTitle,"aria-label":e.audioButtonTitle,disabled:!e.audioPreviewAvailable},on:{click:e.toggleAudio},scopedSlots:e._u([{key:"icon",fn:function(){return[t("VolumeIndicator",{attrs:{"audio-preview-available":e.audioPreviewAvailable,"audio-enabled":e.audioOn,"current-volume":e.currentVolume,"volume-threshold":e.currentThreshold,"overlay-muted-color":"#888888"}})]},proxy:!0}],null,!1,1973535079)}),e._v(" "),t("NcButton",{attrs:{type:"tertiary",title:e.videoButtonTitle,"aria-label":e.videoButtonTitle,disabled:!e.videoPreviewAvailable},on:{click:e.toggleVideo},scopedSlots:e._u([{key:"icon",fn:function(){return[e.videoOn?t("IconVideo",{attrs:{size:20}}):t("IconVideoOff",{attrs:{size:20}})]},proxy:!0}],null,!1,427690725)})],1)],1),e._v(" "),t("MediaSettingsTabs",{attrs:{active:e.tabContent,tabs:e.tabs},on:{"update:active":function(a){e.tabContent=a}},scopedSlots:e._u([{key:"tab-panel:devices",fn:function(){return[t("MediaDevicesSelector",{attrs:{kind:"audioinput",devices:e.devices,"device-id":e.audioInputId},on:{refresh:e.updateDevices,"update:deviceId":e.handleAudioInputIdChange}}),e._v(" "),t("MediaDevicesSelector",{attrs:{kind:"videoinput",devices:e.devices,"device-id":e.videoInputId},on:{refresh:e.updateDevices,"update:deviceId":e.handleVideoInputIdChange}}),e._v(" "),t("MediaDevicesSpeakerTest")]},proxy:!0},{key:"tab-panel:backgrounds",fn:function(){return[t("VideoBackgroundEditor",{staticClass:"media-settings__tab",attrs:{token:e.token,"skip-blur-virtual-background":e.skipBlurVirtualBackground},on:{"update-background":e.handleUpdateVirtualBackground}})]},proxy:!0}],null,!1,3392937221)}),e._v(" "),e.isPublicShareAuthSidebar?e._e():t("NcCheckboxRadioSwitch",{staticClass:"checkbox",attrs:{"model-value":e.showMediaSettings||e.showRecordingWarning,disabled:e.showRecordingWarning},on:{"update:model-value":e.setShowMediaSettings}},[e._v(`
			`+e._s(e.t("spreed","Always show preview for this conversation"))+`
		`)]),e._v(" "),!e.hasCall&&e.canModerateRecording?t("NcCheckboxRadioSwitch",{staticClass:"checkbox",model:{value:e.isRecordingFromStart,callback:function(a){e.isRecordingFromStart=a},expression:"isRecordingFromStart"}},[e._v(`
			`+e._s(e.t("spreed","Start recording immediately with the call"))+`
		`)]):e._e(),e._v(" "),e.showRecordingWarning?t("NcNoteCard",{attrs:{type:"warning"}},[e.isCurrentlyRecording?t("p",[t("strong",[e._v(e._s(e.t("spreed","The call is being recorded.")))])]):t("p",[t("strong",[e._v(e._s(e.t("spreed","The call might be recorded.")))])]),e._v(" "),e.isRecordingConsentRequired?[t("p",[e._v(`
					`+e._s(e.t("spreed","The recording might include your voice, video from camera, and screen share. Your consent is required before joining the call."))+`
				`)]),e._v(" "),t("NcCheckboxRadioSwitch",{staticClass:"checkbox--warning",attrs:{"model-value":e.recordingConsentGiven},on:{"update:model-value":e.setRecordingConsentGiven}},[e._v(`
					`+e._s(e.t("spreed","Give consent to the recording of this call"))+`
				`)])]:e._e()],2):e._e(),e._v(" "),t("div",{staticClass:"media-settings__call-buttons"},[e.showSilentCallOption?t("NcActions",{attrs:{"force-menu":""}},[e.silentCall?t("NcActionButton",{attrs:{name:e.t("spreed","Normal call"),"close-after-click":""},on:{click:function(a){return e.setSilentCall(!1)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("IconBell",{attrs:{size:16}})]},proxy:!0}],null,!1,1012025185)},[e._v(`
					`+e._s(e.t("spreed","The conversation participants will be notified about this call"))+`
				`)]):t("NcActionButton",{attrs:{name:e.t("spreed","Call without notification"),"close-after-click":""},on:{click:function(a){return e.setSilentCall(!0)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t("IconBellOff",{attrs:{size:16}})]},proxy:!0}],null,!1,3643103150)},[e._v(`
					`+e._s(e.t("spreed","The conversation participants will not be notified about this call"))+`
					`)])],1):e._e(),e._v(" "),e.isInCall?e.showUpdateChangesButton?t("NcButton",{on:{click:e.closeModalAndApplySettings}},[e._v(`
				`+e._s(e.t("spreed","Apply settings"))+`
			`)]):e._e():t("CallButton",{staticClass:"call-button",attrs:{"is-media-settings":"","is-recording-from-start":e.isRecordingFromStart,disabled:e.isRecordingConsentRequired&&!e.recordingConsentGiven,"recording-consent-given":e.recordingConsentGiven,"silent-call":e.silentCall}})],1)],1)]):e._e()},Fl=[],El=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon bell-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},Ml=[];const Bl={name:"BellIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var xl=(0,f.A)(Bl,El,Ml,!1,null,null,null);const kl=xl.exports;var wl=n(35527),Sl=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon reflect-horizontal-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M22,20H14A1,1 0 0,1 13,19V4.97C13,4.5 13.31,4.12 13.74,4C14.19,3.88 14.65,4.08 14.87,4.47L22.89,18.5C23.07,18.81 23.07,19.19 22.89,19.5C22.71,19.81 22.38,20 22,20M2,20C1.62,20 1.29,19.81 1.11,19.5C0.93,19.19 0.93,18.81 1.11,18.5L9.13,4.47C9.35,4.08 9.81,3.88 10.26,4C10.69,4.12 11,4.5 11,4.97V19A1,1 0 0,1 10,20H2M9,18V8.74L3.71,18H9Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},Tl=[];const Ll={name:"ReflectHorizontalIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var Il=(0,f.A)(Ll,Sl,Tl,!1,null,null,null);const Ol=Il.exports;var mt=n(45987),Rl=n(79946),Xt=n(32073),Pl=n(31133),jl=function(){var e=this,t=e._self._c;return t("div",{staticClass:"media-devices-selector"},[t(e.deviceIcon,{tag:"component",staticClass:"media-devices-selector__icon",attrs:{title:"",size:16}}),e._v(" "),t("NcSelect",{attrs:{"input-id":e.deviceSelectorId,options:e.deviceOptions,label:"label","aria-label-combobox":e.t("spreed","Select a device"),clearable:!1,placeholder:e.deviceSelectorPlaceholder,disabled:!e.enabled||!e.deviceOptionsAvailable},model:{value:e.deviceSelectedOption,callback:function(a){e.deviceSelectedOption=a},expression:"deviceSelectedOption"}}),e._v(" "),t("NcButton",{attrs:{type:"tertiary",title:e.t("spreed","Refresh devices list"),"aria-lebel":e.t("spreed","Refresh devices list")},on:{click:function(a){return e.$emit("refresh")}}},[t("IconRefresh",{attrs:{size:20}})],1)],1)},Nl=[],Jt=n(50402),$l=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon refresh-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},Ul=[];const Vl={name:"RefreshIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var zl=(0,f.A)(Vl,$l,Ul,!1,null,null,null);const Gl=zl.exports,Wl={name:"MediaDevicesSelector",components:{NcButton:U.A,NcSelect:Tt.default,IconMicrophone:Jt.A,IconRefresh:Gl,IconVideo:mt.A},props:{kind:{validator(s){return["audioinput","videoinput"].includes(s)},required:!0},devices:{type:Array,required:!0},deviceId:{type:String,default:void 0},enabled:{type:Boolean,default:!0}},emits:["refresh","update:deviceId"],data(){return{deviceSelectedOption:null}},computed:{deviceSelectorId(){return"device-selector-"+this.kind},deviceIcon(){switch(this.kind){case"audioinput":return Jt.A;case"videoinput":return mt.A;default:return null}},deviceOptionsAvailable(){return this.deviceOptions.length>1},deviceSelectorPlaceholder(){return this.kind==="audioinput"?this.audioInputSelectorPlaceholder:this.kind==="videoinput"?this.videoInputSelectorPlaceholder:null},audioInputSelectorPlaceholder(){return this.deviceOptionsAvailable?(0,o.t)("spreed","Select microphone"):(0,o.t)("spreed","No microphone available")},videoInputSelectorPlaceholder(){return this.deviceOptionsAvailable?(0,o.t)("spreed","Select camera"):(0,o.t)("spreed","No camera available")},deviceOptions(){const s=this.devices.filter(e=>e.kind===this.kind).map(e=>({id:e.deviceId,label:e.label?e.label:e.fallbackLabel}));return s.push({id:null,label:(0,o.t)("spreed","None")}),s},deviceSelectedOptionFromDeviceId(){return this.deviceOptions.find(s=>s.id===this.deviceId)}},watch:{deviceSelectedOptionFromDeviceId:{handler(s){this.deviceSelectedOption=s},immediate:!0},deviceSelectedOption(s,e){if(!(s&&e&&s.id===e.id)&&!(e&&e.id&&!this.deviceOptions.find(t=>t.id===e.id))&&!(typeof e?.id>"u")){if(s&&s.id===null){this.$emit("update:deviceId",null);return}this.$emit("update:deviceId",s?s.id:void 0)}}},methods:{t:o.t}};var Ye=n(43320),pe={};pe.styleTagTransform=R(),pe.setAttributes=I(),pe.insert=L().bind(null,"head"),pe.domAPI=T(),pe.insertStyleElement=O();var Oc=S()(Ye.A,pe);const Rc=Ye.A&&Ye.A.locals?Ye.A.locals:void 0;var Hl=(0,f.A)(Wl,jl,Nl,!1,null,"2c3d7960",null);const Kl=Hl.exports;var Yl=function(){var e=this,t=e._self._c;return t("div",{staticClass:"media-devices-checker"},[t("IconVolumeHigh",{staticClass:"media-devices-checker__icon",attrs:{size:16}}),e._v(" "),t("NcButton",{attrs:{type:"secondary"},on:{click:e.playTestSound}},[e._v(`
		`+e._s(e.buttonLabel)+`
	`)]),e._v(" "),e.isPlayingTestSound?t("div",{staticClass:"equalizer"},e._l(e.equalizerBars,function(a){return t("div",{key:a.key,staticClass:"equalizer__bar",style:a.style})}),0):e._e()],1)},Xl=[],Jl=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon volume-high-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},Zl=[];const Ql={name:"VolumeHighIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var ql=(0,f.A)(Ql,Jl,Zl,!1,null,null,null);const ed=ql.exports;var td=n(6355);const sd={name:"MediaDevicesSpeakerTest",components:{IconVolumeHigh:ed,NcButton:U.A},setup(){return{soundsStore:(0,td.L)()}},computed:{isPlayingTestSound(){return this.soundsStore.audioObjectsPromises.wait!==null},buttonLabel(){return this.isPlayingTestSound?(0,o.t)("spreed","Playing \u2026"):(0,o.t)("spreed","Test speakers")},equalizerBars(){return Array.from(Array(4).keys()).map(s=>({key:s,style:{height:Math.random()*100+"%",animationDelay:Math.random()*-2+"s"}}))}},beforeDestroy(){this.soundsStore.pauseAudio("wait")},methods:{t:o.t,playTestSound(){this.isPlayingTestSound?this.soundsStore.pauseAudio("wait"):this.soundsStore.playAudio("wait")}}};var Xe=n(31611),Ae={};Ae.styleTagTransform=R(),Ae.setAttributes=I(),Ae.insert=L().bind(null,"head"),Ae.domAPI=T(),Ae.insertStyleElement=O();var Nc=S()(Xe.A,Ae);const $c=Xe.A&&Xe.A.locals?Xe.A.locals:void 0;var ad=(0,f.A)(sd,Yl,Xl,!1,null,"44ae6bf3",null);const nd=ad.exports;var id=function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t("div",{staticClass:"tabs"},[t("div",{staticClass:"tab-list",attrs:{role:"tablist"}},e._l(e.tabs,function(i){return t(a.NcButton,{key:i.id,attrs:{id:a.getRefId("tab",i.id),wide:"",role:"tab",type:a.isSelected(i.id)?"secondary":"tertiary","aria-selected":a.isSelected(i.id)?"true":"false","aria-controls":a.getRefId("panel",i.id)},on:{click:function(r){return r.stopPropagation(),a.handleTabClick(i.id)}},scopedSlots:e._u([{key:"icon",fn:function(){return[t(i.icon,{tag:"component",attrs:{size:20}})]},proxy:!0}],null,!0)},[e._v(`
			`+e._s(i.label)+`
		`)])}),1),e._v(" "),t(a.TransitionExpand,{attrs:{show:a.isOpen,direction:"vertical"},on:{"after-leave":a.handleTabsAfterClosed}},[t("div",{staticClass:"tab-panels-container"},e._l(e.tabs,function(i){return t("div",{key:i.id,staticClass:"tab-panel",style:a.activeIndex!==-1?`transform: translateX(${-a.activeIndex*100}%)`:"",attrs:{id:a.getRefId("panel",i.id),role:"tabpanel",inert:!a.isActive(i.id),"aria-hidden":!a.isActive(i.id),"aria-labelledby":a.getRefId("tab",i.id)}},[e._t(`tab-panel:${i.id}`)],2)}),0)])],1)},rd=[],od=n(90495);const ld=(0,d.pM)({__name:"MediaSettingsTabs",props:{tabs:null,active:null},emits:["update:active"],setup(s,{emit:e}){const t=s,a=(0,d.KR)(!!t.active),i=Math.random().toString(36).substring(7),r=(A,g)=>`tab-${i}-${A}-${g}`,l=(0,d.EW)(()=>t.tabs.findIndex(A=>A.id===t.active));function u(A){return A===t.active}function v(A){return a.value&&u(A)}function c(A){u(A)?a.value=!a.value:(e("update:active",A),a.value=!0)}function _(){e("update:active",void 0)}return{__sfc:!0,props:t,emit:e,isOpen:a,randomId:i,getRefId:r,activeIndex:l,isActive:u,isSelected:v,handleTabClick:c,handleTabsAfterClosed:_,NcButton:U.A,TransitionExpand:od.A}}});var Je=n(22489),ge={};ge.styleTagTransform=R(),ge.setAttributes=I(),ge.insert=L().bind(null,"head"),ge.domAPI=T(),ge.insertStyleElement=O();var Vc=S()(Je.A,ge);const zc=Je.A&&Je.A.locals?Je.A.locals:void 0;var dd=(0,f.A)(ld,id,rd,!1,null,"12e87af4",null);const ud=dd.exports;var cd=function(){var e=this,t=e._self._c;return t("div",{staticClass:"background-editor"},[t("button",{key:"clear",staticClass:"background-editor__element",class:{"background-editor__element--selected":e.selectedBackground==="none"},on:{click:function(a){return e.handleSelectBackground("none")}}},[t("IconCancel",{attrs:{size:20}}),e._v(`
		`+e._s(e.t("spreed","None"))+`
	`)],1),e._v(" "),t("button",{key:"blur",staticClass:"background-editor__element",class:{"background-editor__element--selected":e.selectedBackground==="blur"},on:{click:function(a){return e.handleSelectBackground("blur")}}},[t("IconBlur",{attrs:{size:20}}),e._v(`
		`+e._s(e.t("spreed","Blur"))+`
	`)],1),e._v(" "),e.predefinedBackgrounds?.length?[e.canUploadBackgrounds?[t("button",{staticClass:"background-editor__element",on:{click:e.clickImportInput}},[t("IconUpload",{attrs:{size:20}}),e._v(`
				`+e._s(e.t("spreed","Upload"))+`
			`)],1),e._v(" "),t("button",{staticClass:"background-editor__element",class:{"background-editor__element--selected":e.isCustomBackground},on:{click:function(a){e.showFilePicker=!0}}},[t("IconFolder",{attrs:{size:20}}),e._v(`
				`+e._s(e.t("spreed","Files"))+`
			`)],1)]:e._e(),e._v(" "),e._l(e.predefinedBackgroundsURLs,function(a){return t("button",{key:a,staticClass:"background-editor__element",class:{"background-editor__element--selected":e.selectedBackground===a},style:{"background-image":"url("+a+")"},attrs:{"aria-label":e.ariaLabelForPredefinedBackground(a),title:e.ariaLabelForPredefinedBackground(a)},on:{click:function(i){return e.handleSelectBackground(a)}}},[e.selectedBackground===a?t("IconCheckBold",{attrs:{size:40,"fill-color":"#fff"}}):e._e()],1)})]:e._e(),e._v(" "),t("input",{ref:"fileUploadInput",staticClass:"hidden-visually",attrs:{id:"custom-background-file",multiple:"",type:"file",tabindex:"-1","aria-hidden":"true"},on:{change:e.handleFileInput}}),e._v(" "),e.showFilePicker?t("FilePickerVue",{attrs:{name:e.t("spreed","Select a file"),path:e.relativeBackgroundsFolderPath,container:".media-settings",buttons:e.filePickerButtons,multiselect:!1},on:{close:function(a){e.showFilePicker=!1}}}):e._e()],2)},_d=[],pd=n(1077),Ad=n(39574),gd=n(24509),md=n(8184),x=n(24140),Zt=n(97029),Qt=n(31310),hd=n(88459);const Cd={"1_office":(0,o.t)("spreed","Select virtual office background"),"2_home":(0,o.t)("spreed","Select virtual home background"),"3_abstract":(0,o.t)("spreed","Select virtual abstract background"),"4_beach":(0,o.t)("spreed","Select virtual beach background"),"5_park":(0,o.t)("spreed","Select virtual park background"),"6_theater":(0,o.t)("spreed","Select virtual theater background"),"7_library":(0,o.t)("spreed","Select virtual library background"),"8_space_station":(0,o.t)("spreed","Select virtual space station background")},fd={name:"VideoBackgroundEditor",components:{FilePickerVue:md.Z,IconBlur:pd.A,IconCancel:Ut,IconCheckBold:Dt,IconFolder:Ad.A,IconUpload:gd.A},props:{token:{type:String,required:!0},skipBlurVirtualBackground:{type:Boolean,default:!1}},emits:["update-background"],setup(){return{canUploadBackgrounds:(0,z.JR)("local","call","can-upload-background"),predefinedBackgrounds:(0,z.JR)("local","call","predefined-backgrounds"),settingsStore:(0,Qt.C)()}},data(){return{selectedBackground:void 0,showFilePicker:!1}},computed:{isCustomBackground(){return this.selectedBackground!=="none"&&this.selectedBackground!=="blur"&&!this.predefinedBackgroundsURLs.includes(this.selectedBackground)},predefinedBackgroundsURLs(){return this.predefinedBackgrounds.map(s=>(0,W.d0)("spreed","backgrounds/"+s))},relativeBackgroundsFolderPath(){return this.$store.getters.getAttachmentFolder()+"/Backgrounds"},filePickerButtons(){return[{label:(0,o.t)("spreed","Confirm"),callback:s=>this.handleFileChoose(s),type:"primary"}]}},async mounted(){if(this.loadBackground(),this.$store.getters.getUserId()===null){console.debug("Skip Talk backgrounds folder check and setup for participants that are not logged in");return}const e="/files/"+this.$store.getters.getUserId()+this.relativeBackgroundsFolderPath;try{const t=(0,Zt.p)();await t.exists(e)===!1&&await t.createDirectory(e)}catch(t){console.debug(t)}},methods:{t:o.t,handleSelectBackground(s){this.$emit("update-background",s),this.selectedBackground=s},clickImportInput(){this.$refs.fileUploadInput.click()},async handleFileInput(s){const e=s.target.files[0];s.target.value="";const t="/files/"+this.$store.getters.getUserId(),a=this.$store.getters.getAttachmentFolder()+"/Backgrounds/"+e.name,i=(0,Zt.p)(),{uniquePath:r}=await(0,hd.a7)(i,t,a);try{const l=await new Blob([e]).arrayBuffer();await i.putFileContents(t+r,l,{contentLength:e.size});const u=await(0,W.Jv)("/core/preview.png?file={path}&x=-1&y={height}&a=1",{path:a,height:1080});this.handleSelectBackground(u)}catch(l){console.debug(l),(0,P.Qg)((0,o.t)("spreed","Error while uploading the file"))}},handleFileChoose(s){const e=s[0]?.path;if(!e)return;if(!e.startsWith("/"))throw new Error((0,o.t)("files","Invalid path selected"));const t=(0,W.Jv)("/core/preview.png?file={path}&x=-1&y={height}&a=1",{path:e,height:1080});this.handleSelectBackground(t)},loadBackground(){x.A.getItem("virtualBackgroundEnabled_"+this.token)==="true"?x.A.getItem("virtualBackgroundType_"+this.token)===F.Ju.BACKGROUND_TYPE.BLUR?this.selectedBackground="blur":x.A.getItem("virtualBackgroundType_"+this.token)===F.Ju.BACKGROUND_TYPE.IMAGE?this.selectedBackground=x.A.getItem("virtualBackgroundUrl_"+this.token):this.selectedBackground="none":this.settingsStore.blurVirtualBackgroundEnabled&&!this.skipBlurVirtualBackground?this.selectedBackground="blur":this.selectedBackground="none"},ariaLabelForPredefinedBackground(s){const e=s.split("/").pop().split(".").shift();return Cd[e]??(0,o.t)("spreed","Select virtual background from file {fileName}",{fileName:e})}}};var Ze=n(49735),me={};me.styleTagTransform=R(),me.setAttributes=I(),me.insert=L().bind(null,"head"),me.domAPI=T(),me.insertStyleElement=O();var Wc=S()(Ze.A,me);const Hc=Ze.A&&Ze.A.locals?Ze.A.locals:void 0;var vd=(0,f.A)(fd,cd,_d,!1,null,"743a285e",null);const Dd=vd.exports;var yd=n(7789),bd=n(45261),Fd=n(66885),Ed=n.n(Fd),Md=n(21625),Bd=n(19894),xd=n(31775),Y=n(92608);function kd(s,e){let t=!1,a=0,i=0;const r=(0,d.KR)(null),l=(0,d.KR)(null),u=(0,d.Kh)(Y.Dh);window.OCA.Talk.mediaDevicesManager=Y.Dh;const v=(0,d.KR)(-100),c=(0,d.KR)(-100),_=(0,d.KR)(null),A=(0,d.KR)(null),g=(0,d.KR)(null),B=(0,d.KR)(null),p=(0,d.KR)(null),w=(0,d.EW)(()=>u.attributes.devices),k=(0,d.EW)({get(){return u.attributes.audioInputId},set(M){u.set("audioInputId",M)}}),De=(0,d.EW)(()=>!!k.value&&!!A.value),Me=(0,d.EW)(()=>{if(!A.value)return null;const M=A.value.getAudioTracks();return M.length<1?null:M[0].getSettings().deviceId}),X=(0,d.EW)({get(){return u.attributes.videoInputId},set(M){u.set("videoInputId",M)}}),ht=(0,d.EW)(()=>!!X.value&&!!B.value),qt=(0,d.EW)(()=>{if(!B.value)return null;const M=B.value.getVideoTracks();return M.length<1?null:M[0].getSettings().deviceId});(0,d.wB)(k,()=>{t&&Ct()}),(0,d.wB)(X,()=>{t&&ft()}),(0,d.sV)(()=>{_.value=new xd.A,_.value.setEnabled(!1),l.value=new Bd.A,l.value.addInputTrackSlot("video"),_.value.connectTrackSink("default",l.value,"video"),e&&es()}),(0,d.xo)(()=>{ts()});function es(){t||(t=!0,u.isSupported()||(g.value={message:"MediaDevicesManager is not supported",name:"NotSupportedError"},p.value={message:"MediaDevicesManager is not supported",name:"NotSupportedError"}),u.enableDeviceEvents(),Ct(),ft())}function nu(){u._updateDevices()}function iu(M){u.updatePreferences(M)}function ts(){if(t)t=!1;else return;as(),is(),u.disableDeviceEvents()}function ss(M){A.value=M,M&&(r.value=Ed()(M),r.value.on("volume_change",(J,lu)=>{v.value=J,c.value=lu}))}function as(){A.value&&(A.value.getTracks().forEach(M=>M.stop()),A.value=null,g.value=null,r.value&&(r.value.off("volume_change"),r.value.stop(),r.value=null))}function ru(){const M=a>1;a=0,M&&Ct()}function Ct(){if(u.isSupported()&&!(Me.value&&Me.value===k.value)){if(a){a++;return}as(),!(k.value===null||k.value===void 0)&&(a=1,u.getUserMedia({audio:!0}).then(M=>{t?ss(M):M.getTracks().forEach(J=>J.stop())}).catch(M=>{console.error("Error getting audio stream: "+M.name+": "+M.message),g.value=M,ss(null)}).finally(()=>{ru()}))}}function ns(M){if(B.value=M,!s.value)return;if(!M){_.value._setInputTrack("default",null);return}_.value._setInputTrack("default",B.value.getVideoTracks()[0]);const J={autoplay:!0,mirror:!0,muted:!0};(0,Md.A)(l.value.getStream(),s.value,J)}function is(){_.value._setInputTrack("default",null),B.value&&(B.value.getTracks().forEach(M=>M.stop()),B.value=null,p.value=null,s.value&&(s.value.srcObject=null))}function ou(){const M=i>1;i=0,M&&ft()}function ft(){if(u.isSupported()&&!(qt.value&&qt.value===X.value)){if(i){i++;return}is(),!(X.value===null||X.value===void 0)&&(i=1,u.getUserMedia({video:!0}).then(M=>{t?ns(M):M.getTracks().forEach(J=>J.stop())}).catch(M=>{console.error("Error getting video stream: "+M.name+": "+M.message),p.value=M,ns(null)}).finally(()=>{ou()}))}}return{devices:w,updateDevices:nu,currentVolume:v,currentThreshold:c,audioPreviewAvailable:De,videoPreviewAvailable:ht,audioInputId:k,videoInputId:X,audioStream:A,audioStreamError:g,videoStream:B,videoStreamError:p,initializeDevices:es,updatePreferences:iu,stopDevices:ts,virtualBackground:_}}const wd={name:"MediaSettings",components:{AvatarWrapper:Ne.A,CallButton:_t.A,MediaDevicesSelector:Kl,MediaDevicesSpeakerTest:nd,MediaSettingsTabs:ud,NcActionButton:rt.A,NcActions:ot.A,NcButton:U.A,NcCheckboxRadioSwitch:Xt.A,NcModal:ye.A,NcNoteCard:Pl.A,VideoBackground:yd.A,VideoBackgroundEditor:Dd,VolumeIndicator:bd.A,IconBell:kl,IconBellOff:nt.A,IconReflectHorizontal:Ol,IconVideo:mt.A,IconVideoOff:Rl.A},props:{recordingConsentGiven:{type:Boolean,default:!1}},emits:["update:recording-consent-given"],setup(){const s=(0,d.KR)(null),e=(0,Ee.J)(),t=(0,be.m)(),a=(0,Qt.C)(),i=`media-settings-header-${(0,xe.B)()}`,{devices:r,updateDevices:l,updatePreferences:u,currentVolume:v,currentThreshold:c,audioPreviewAvailable:_,videoPreviewAvailable:A,audioInputId:g,videoInputId:B,initializeDevices:p,stopDevices:w,virtualBackground:k}=kd(s,!1),De=(0,d.EW)(()=>k.value.isAvailable()),Me={id:"devices",label:(0,o.t)("spreed","Devices"),icon:(0,d.IG)(wl.A)},X={id:"backgrounds",label:(0,o.t)("spreed","Backgrounds"),icon:(0,d.IG)(bt)},ht=(0,d.EW)(()=>De.value?[Me,X]:[Me]);return{AVATAR:F.of,isInCall:e,guestNameStore:t,settingsStore:a,video:s,devices:r,updateDevices:l,updatePreferences:u,currentVolume:v,currentThreshold:c,audioPreviewAvailable:_,videoPreviewAvailable:A,audioInputId:g,videoInputId:B,initializeDevices:p,stopDevices:w,virtualBackground:k,model:Y.PR,tabs:ht,dialogHeaderId:i}},data(){return{modal:!1,tabContent:void 0,audioOn:void 0,videoOn:void 0,silentCall:!1,updatedBackground:void 0,audioDeviceStateChanged:!1,videoDeviceStateChanged:!1,isRecordingFromStart:!1,isPublicShareAuthSidebar:!1,isMirrored:!1,skipBlurVirtualBackground:!1}},computed:{displayName(){return this.$store.getters.getDisplayName()},guestName(){return this.guestNameStore.getGuestName(this.$store.getters.getToken(),this.$store.getters.getActorId())},userId(){return this.$store.getters.getUserId()},actorType(){return this.$store.getters.getActorType()},token(){return this.$store.getters.getToken()},showMediaSettings(){return this.settingsStore.getShowMediaSettings(this.token)},blurVirtualBackgroundEnabled(){return this.settingsStore.blurVirtualBackgroundEnabled},showVideo(){return this.videoPreviewAvailable&&this.videoOn},audioButtonTitle(){return this.audioPreviewAvailable?this.audioOn?(0,o.t)("spreed","Mute audio"):(0,o.t)("spreed","Unmute audio"):(0,o.t)("spreed","No audio")},videoButtonTitle(){return this.videoPreviewAvailable?this.videoOn?(0,o.t)("spreed","Disable video"):(0,o.t)("spreed","Enable video"):(0,o.t)("spreed","No camera")},mirrorToggleLabel(){return this.isMirrored?(0,o.t)("spreed","Display video as you will see it (mirrored)"):(0,o.t)("spreed","Display video as others will see it")},conversation(){return this.$store.getters.conversation(this.token)||this.$store.getters.dummyConversation},hasCall(){return this.conversation.hasCall},isCurrentlyRecording(){return[F.XV.RECORDING.VIDEO_STARTING,F.XV.RECORDING.AUDIO_STARTING,F.XV.RECORDING.VIDEO,F.XV.RECORDING.AUDIO].includes(this.conversation.callRecording)},canFullModerate(){return this.conversation.participantType===F._z.TYPE.OWNER||this.conversation.participantType===F._z.TYPE.MODERATOR},isInLobby(){return this.$store.getters.isInLobby},canModerateRecording(){return this.canFullModerate&&((0,z.JR)(this.token,"call","recording")||!1)},recordingConsent(){return(0,z.JR)(this.token,"call","recording-consent")},isRecordingConsentRequired(){return this.recordingConsent===F.PI.RECORDING_CONSENT.REQUIRED||this.recordingConsent===F.PI.RECORDING_CONSENT.OPTIONAL&&this.conversation.recordingConsent===F.XV.RECORDING_CONSENT.ENABLED},showRecordingWarning(){return!this.isInCall&&(this.isCurrentlyRecording||this.isRecordingConsentRequired)},showSilentCallOption(){return!(this.hasCall&&!this.isInLobby)&&!this.isPublicShareAuthSidebar},showUpdateChangesButton(){return this.updatedBackground||this.audioDeviceStateChanged||this.videoDeviceStateChanged},connectionFailed(){return this.$store.getters.connectionFailed(this.token)}},watch:{modal(s){s?(this.settingsStore.startWithoutMedia?(this.audioOn=!1,x.A.setItem("audioDisabled_"+this.token,"true"),this.videoOn=!1,x.A.setItem("videoDisabled_"+this.token,"true")):(this.audioOn=!x.A.getItem("audioDisabled_"+this.token),this.videoOn=!x.A.getItem("videoDisabled_"+this.token)),this.silentCall=!!x.A.getItem("silentCall_"+this.token),x.A.getItem("virtualBackgroundEnabled_"+this.token)==="true"?x.A.getItem("virtualBackgroundType_"+this.token)===F.Ju.BACKGROUND_TYPE.BLUR?this.blurVirtualBackground():x.A.getItem("virtualBackgroundType_"+this.token)===F.Ju.BACKGROUND_TYPE.IMAGE&&this.setVirtualBackgroundImage(x.A.getItem("virtualBackgroundUrl_"+this.token)):this.blurVirtualBackgroundEnabled&&!this.skipBlurVirtualBackground?this.blurVirtualBackground():this.clearVirtualBackground(),this.initializeDevices()):this.stopDevices()},audioInputId(s){this.tabContent==="devices"&&s&&!this.audioOn&&this.toggleAudio()},videoInputId(s){this.tabContent==="devices"&&s&&!this.videoOn&&this.toggleVideo()},isRecordingFromStart(s){this.setRecordingConsentGiven(s)},isInCall(s){if(s){const e=x.A.getItem("virtualBackgroundEnabled_"+this.token)==="true";this.blurVirtualBackgroundEnabled&&!this.skipBlurVirtualBackground&&!e&&this.blurBackground(!0)}else this.skipBlurVirtualBackground=!1},connectionFailed(s){s&&(this.skipBlurVirtualBackground=!1)}},beforeMount(){(0,H.B1)("talk:media-settings:show",this.showModal),(0,H.B1)("talk:media-settings:hide",this.closeModalAndApplySettings),x.A.getItem("devicesPreferred")&&x.A.removeItem("devicesPreferred")},beforeDestroy(){(0,H.al)("talk:media-settings:show",this.showModal),(0,H.al)("talk:media-settings:hide",this.closeModalAndApplySettings)},methods:{t:o.t,showModal(s){this.modal=!0,s==="video-verification"&&(this.isPublicShareAuthSidebar=!0),(!x.A.getItem("audioInputDevicePreferred")||!x.A.getItem("videoInputDevicePreferred"))&&(this.tabContent="devices")},closeModal(){this.modal=!1,this.updatedBackground=void 0,this.audioDeviceStateChanged=!1,this.videoDeviceStateChanged=!1,this.isPublicShareAuthSidebar=!1,this.isRecordingFromStart=!1,this.isMirrored=!1,this.updatePreferences("audioinput"),this.updatePreferences("videoinput")},toggleAudio(){this.audioOn?(x.A.setItem("audioDisabled_"+this.token,"true"),this.audioOn=!1):(x.A.removeItem("audioDisabled_"+this.token),this.audioOn=!0),this.audioDeviceStateChanged=!this.audioDeviceStateChanged},toggleVideo(){this.videoOn?(x.A.setItem("videoDisabled_"+this.token,"true"),this.videoOn=!1):(x.A.removeItem("videoDisabled_"+this.token),this.videoOn=!0),this.videoDeviceStateChanged=!this.videoDeviceStateChanged},setSilentCall(s){this.silentCall=s,s?x.A.setItem("silentCall_"+this.token,"true"):x.A.removeItem("silentCall_"+this.token)},closeModalAndApplySettings(){this.updatedBackground&&this.handleUpdateBackground(this.updatedBackground),this.audioDeviceStateChanged&&(0,H.Ic)("local-audio-control-button:toggle-audio"),this.videoDeviceStateChanged&&(0,H.Ic)("local-video-control-button:toggle-video"),this.closeModal()},handleUpdateBackground(s){this.blurVirtualBackgroundEnabled&&s!=="blur"&&(this.skipBlurVirtualBackground=!0),s==="none"?this.clearBackground():s==="blur"?this.blurBackground(this.blurVirtualBackgroundEnabled):this.setBackgroundImage(s)},handleUpdateVirtualBackground(s){this.updatedBackground=s,s==="none"?this.clearVirtualBackground():s==="blur"?this.blurVirtualBackground():this.setVirtualBackgroundImage(s)},clearVirtualBackground(){this.virtualBackground.setEnabled(!1)},clearBackground(){this.isInCall?Y.PR.disableVirtualBackground():x.A.removeItem("virtualBackgroundEnabled_"+this.token)},blurVirtualBackground(){this.virtualBackground.setEnabled(!0),this.virtualBackground.setVirtualBackground({backgroundType:F.Ju.BACKGROUND_TYPE.BLUR,blurValue:F.Ju.BLUR_STRENGTH.DEFAULT})},blurBackground(s=!1){this.isInCall?(Y.PR.enableVirtualBackground(),Y.PR.setVirtualBackgroundBlur(F.Ju.BLUR_STRENGTH.DEFAULT,s)):s||(this.skipBlurVirtualBackground=!0,x.A.setItem("virtualBackgroundEnabled_"+this.token,"true"),x.A.setItem("virtualBackgroundType_"+this.token,F.Ju.BACKGROUND_TYPE.BLUR),x.A.setItem("virtualBackgroundBlurStrength_"+this.token,F.Ju.BLUR_STRENGTH.DEFAULT))},setVirtualBackgroundImage(s){this.virtualBackground.setEnabled(!0),this.virtualBackground.setVirtualBackground({backgroundType:F.Ju.BACKGROUND_TYPE.IMAGE,virtualSource:s})},setBackgroundImage(s){this.isInCall?(Y.PR.enableVirtualBackground(),Y.PR.setVirtualBackgroundImage(s)):(x.A.setItem("virtualBackgroundEnabled_"+this.token,"true"),x.A.setItem("virtualBackgroundType_"+this.token,F.Ju.BACKGROUND_TYPE.IMAGE),x.A.setItem("virtualBackgroundUrl_"+this.token,s))},setShowMediaSettings(s){this.settingsStore.setShowMediaSettings(this.token,s)},setRecordingConsentGiven(s){this.$emit("update:recording-consent-given",s)},handleAudioInputIdChange(s){this.audioInputId=s,this.updatePreferences("audioinput")},handleVideoInputIdChange(s){this.videoInputId=s,this.updatePreferences("videoinput")}}};var Qe=n(603),he={};he.styleTagTransform=R(),he.setAttributes=I(),he.insert=L().bind(null,"head"),he.domAPI=T(),he.insertStyleElement=O();var Yc=S()(Qe.A,he);const Xc=Qe.A&&Qe.A.locals?Qe.A.locals:void 0;var Sd=(0,f.A)(wd,bl,Fl,!1,null,"34c1e875",null);const Td=Sd.exports;var Ld=function(){var e=this,t=e._self._c;return e.id?t("NcModal",{attrs:{size:"small","label-id":e.dialogHeaderId},on:{close:e.dismissModal}},[e.poll?t("div",{staticClass:"poll-modal"},[t("div",{staticClass:"poll-modal__header"},[t("IconPoll",{attrs:{size:20}}),e._v(" "),t("span",{attrs:{id:e.dialogHeaderId,role:"heading","aria-level":"2"}},[e._v(`
				`+e._s(e.name)+`
			`)])],1),e._v(" "),t("p",{staticClass:"poll-modal__summary"},[e._v(`
			`+e._s(e.pollSummaryText)+`
		`)]),e._v(" "),e.modalPage==="voting"?t("div",{staticClass:"poll-modal__options"},e._l(e.poll.options,function(a,i){return t("NcCheckboxRadioSwitch",{key:"option-"+i,attrs:{value:i.toString(),type:e.isMultipleAnswers?"checkbox":"radio",name:"answerType"},model:{value:e.checked,callback:function(r){e.checked=r},expression:"checked"}},[e._v(`
				`+e._s(a)+`
			`)])}),1):e.modalPage==="results"?t("div",{staticClass:"results__options"},e._l(e.poll.options,function(a,i){return t("div",{key:i,staticClass:"results__option"},[t("div",{staticClass:"results__option-title"},[t("p",[e._v(e._s(a))]),e._v(" "),e.hasVotesToDisplay?t("p",{staticClass:"percentage"},[e._v(`
						`+e._s(e.votePercentage[i]+"%")+`
					`)]):e._e()]),e._v(" "),e.getFilteredDetails(i).length>0||e.selfHasVotedOption(i)?t("div",{staticClass:"results__option__details"},[e.poll.details?t("PollVotersDetails",{attrs:{token:e.token,details:e.getFilteredDetails(i)}}):e._e(),e._v(" "),e.selfHasVotedOption(i)?t("p",{staticClass:"results__option-subtitle"},[t("IconCheck",{attrs:{size:16}}),e._v(`
						`+e._s(e.t("spreed","You voted for this option"))+`
					`)],1):e._e()],1):e._e(),e._v(" "),e.hasVotesToDisplay?t("NcProgressBar",{staticClass:"results__option-progress",attrs:{value:e.votePercentage[i],size:"medium"}}):e._e()],1)}),0):e._e(),e._v(" "),e.isPollOpen?t("div",{staticClass:"poll-modal__actions"},[e.modalPage==="voting"?t("NcButton",{attrs:{type:"primary",disabled:e.disabled},on:{click:e.submitVote}},[e._v(`
				`+e._s(e.t("spreed","Submit vote"))+`
			`)]):t("NcButton",{attrs:{type:"secondary"},on:{click:function(a){e.modalPage="voting"}}},[e._v(`
				`+e._s(e.t("spreed","Change your vote"))+`
			`)]),e._v(" "),e.canEndPoll?t("NcActions",{attrs:{"force-menu":""}},[e.supportPollDrafts&&e.isModerator?t("NcActionButton",{on:{click:e.createPollDraft},scopedSlots:e._u([{key:"icon",fn:function(){return[t("IconFileEdit",{attrs:{size:20}})]},proxy:!0}],null,!1,332626905)},[e._v(`
					`+e._s(e.t("spreed","Save as draft"))+`
				`)]):e._e(),e._v(" "),e.supportPollDrafts?t("NcActionLink",{attrs:{href:e.exportPollURI,download:e.exportPollFileName},scopedSlots:e._u([{key:"icon",fn:function(){return[t("IconFileDownload",{attrs:{size:20}})]},proxy:!0}],null,!1,722742481)},[e._v(`
					`+e._s(e.t("spreed","Export draft to file"))+`
				`)]):e._e(),e._v(" "),t("NcActionButton",{staticClass:"critical",on:{click:e.endPoll},scopedSlots:e._u([{key:"icon",fn:function(){return[t("IconFileLock",{attrs:{size:20}})]},proxy:!0}],null,!1,995290382)},[e._v(`
					`+e._s(e.t("spreed","End poll"))+`
					`)])],1):e._e()],1):e.supportPollDrafts&&e.selfIsOwnerOrModerator?t("div",{staticClass:"poll-modal__actions"},[t("NcActions",{attrs:{"force-menu":""}},[e.isModerator?t("NcActionButton",{on:{click:e.createPollDraft},scopedSlots:e._u([{key:"icon",fn:function(){return[t("IconFileEdit",{attrs:{size:20}})]},proxy:!0}],null,!1,332626905)},[e._v(`
					`+e._s(e.t("spreed","Save as draft"))+`
				`)]):e._e(),e._v(" "),t("NcActionLink",{attrs:{href:e.exportPollURI,download:e.exportPollFileName},scopedSlots:e._u([{key:"icon",fn:function(){return[t("IconFileDownload",{attrs:{size:20}})]},proxy:!0}],null,!1,722742481)},[e._v(`
					`+e._s(e.t("spreed","Export draft to file"))+`
				`)])],1)],1):e._e()]):t("NcLoadingIcon",{staticClass:"poll-modal__loading"})],1):e._e()},Id=[],Od=n(13660),Rd=n(27680),Pd=function(){var e=this,t=e._self._c;return t("span",e._b({staticClass:"material-design-icon file-lock-icon",attrs:{"aria-hidden":e.title?null:"true","aria-label":e.title,role:"img"},on:{click:function(a){return e.$emit("click",a)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M18 13C16.6 13 15.2 14.1 15.2 15.5V17C14.6 17 14 17.6 14 18.2V21.7C14 22.4 14.6 23 15.2 23H20.7C21.4 23 22 22.4 22 21.8V18.3C22 17.6 21.4 17 20.8 17V15.5C20.8 14.1 19.4 13 18 13M18 14.2C18.8 14.2 19.5 14.7 19.5 15.5V17H16.5V15.5C16.5 14.7 17.2 14.2 18 14.2M6 2C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H12V18.2C12 17.2 12.4 16.5 13 16C13.1 15.9 13.2 15.9 13.2 15.8V15.5C13.2 12.8 15.6 11 18 11C18.7 11 19.4 11.2 20 11.4V8L14 2H6M13 3.5L18.5 9H13V3.5Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},jd=[];const Nd={name:"FileLockIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var $d=(0,f.A)(Nd,Pd,jd,!1,null,null,null);const Ud=$d.exports;var Vd=n(90201),zd=n(51858),Gd=function(){var e=this,t=e._self._c;return t("NcPopover",{staticClass:"poll-voters-details",attrs:{trigger:"hover"},scopedSlots:e._u([{key:"trigger",fn:function(){return[t("NcButton",{staticClass:"poll-voters-details__button",attrs:{type:"tertiary-no-background","aria-label":e.t("spreed","Voted participants")},scopedSlots:e._u([{key:"icon",fn:function(){return e._l(e.details.slice(0,8),function(a,i){return t("AvatarWrapper",{key:i,attrs:{id:a.actorId,token:e.token,name:e.getDisplayName(a),source:a.actorType,size:e.AVATAR.SIZE.EXTRA_SMALL,condensed:"","disable-menu":"","disable-tooltip":""}})})},proxy:!0}])})]},proxy:!0}])},[e._v(" "),t("div",{staticClass:"poll-voters-details__popover",attrs:{tabindex:"0"}},e._l(e.details,function(a,i){return t("div",{key:i,staticClass:"poll-voters-details__list-item"},[t("AvatarWrapper",{attrs:{id:a.actorId,token:e.token,name:a.actorDisplayName.trim(),source:a.actorType,size:e.AVATAR.SIZE.EXTRA_SMALL,"disable-menu":""}}),e._v(" "),t("p",{staticClass:"poll-voters-details__display-name"},[e._v(`
				`+e._s(e.getDisplayName(a))+`
			`)])],1)}),0)])},Wd=[];const Hd={name:"PollVotersDetails",components:{AvatarWrapper:Ne.A,NcButton:U.A,NcPopover:Wt.A},props:{token:{type:String,required:!0},details:{type:Array,required:!0}},setup(){return{AVATAR:F.of}},methods:{t:o.t,getDisplayName(s){return(0,pt.G)(s.actorDisplayName,s.actorType)}}};var qe=n(70869),Ce={};Ce.styleTagTransform=R(),Ce.setAttributes=I(),Ce.insert=L().bind(null,"head"),Ce.domAPI=T(),Ce.insertStyleElement=O();var Qc=S()(qe.A,Ce);const qc=qe.A&&qe.A.locals?qe.A.locals:void 0;var Kd=(0,f.A)(Hd,Gd,Wd,!1,null,"d8babac4",null);const Yd=Kd.exports;function Xd(s){let e=0;const t=[];for(let a=0;a<s.length;a++)s[a]>e?(e=s[a],t.length=0,t.push(a)):s[a]===e&&t.push(a);return t}function Jd(s,e){if(!e)return s;const t=[],a=[],i=[];let r=0,l=0;for(const u in s){const v=s[u]/e*100;t.push(Math.round(v)),a.push(Math.floor(v)),i.push(Math.round(v%1*1e3)),r+=t[u],l+=a[u]}if(r===100)return t;for(let u=100-l;u>0;){const v=Xd(i);if(v.length>u)return a;for(const c of v)a[c]++,i[c]=0,u--}return a}var Zd=n(16506);const Qd={name:"PollViewer",components:{NcActions:ot.A,NcActionButton:rt.A,NcActionLink:Bt.A,NcCheckboxRadioSwitch:Xt.A,NcLoadingIcon:Fe.A,NcModal:ye.A,NcButton:U.A,NcProgressBar:zd.A,PollVotersDetails:Yd,IconCheck:Se.A,IconFileLock:Ud,IconFileDownload:Od.A,IconFileEdit:Rd.A,IconPoll:Vd.A},setup(){const s=(0,d.KR)([]),e=(0,d.KR)(""),t=(0,d.KR)(!1),a=`guest-welcome-header-${(0,xe.B)()}`,i=(0,zt.v)(),r=(0,d.EW)(()=>i.activePoll),l=(0,d.EW)(()=>r.value?.name),u=(0,d.EW)(()=>r.value?.id),v=(0,d.EW)(()=>r.value?.token),c=(0,d.EW)(()=>i.getPoll(v.value,u.value)),_=(0,d.EW)(()=>(0,z.t0)(v.value,"talk-polls-drafts")),A=(0,d.EW)(()=>(0,Zd.t)({question:c.value.question,options:c.value.options,resultMode:c.value.resultMode,maxVotes:c.value.maxVotes})),g=`Talk Poll ${new Date().toISOString().slice(0,10)}`;return{isInCall:(0,Ee.J)(),pollsStore:i,voteToSubmit:s,modalPage:e,loading:t,dialogHeaderId:a,name:l,id:u,token:v,poll:c,supportPollDrafts:_,exportPollURI:A,exportPollFileName:g}},computed:{selfHasVoted(){return this.poll?.votedSelf?.length>0},isPollPublic(){return this.poll?.resultMode===F.eE.MODE.PUBLIC},isPollOpen(){return this.poll?.status===F.eE.STATUS.OPEN},isPollClosed(){return this.poll?.status===F.eE.STATUS.CLOSED},isMultipleAnswers(){return this.poll?.maxVotes===F.eE.ANSWER_TYPE.MULTIPLE},checked:{get(){return this.voteToSubmit},set(s){this.voteToSubmit=Array.isArray(s)?s:[s]}},disabled(){return this.loading||this.voteToSubmit.length===0},isModerator(){return this.$store.getters.isModerator},selfIsOwnerOrModerator(){return this.isModerator||this.poll?.actorType===this.$store.getters.getActorType()&&this.poll?.actorId===this.$store.getters.getActorId()},pollSummaryText(){return this.isPollClosed?(0,o.n)("spreed","Poll results \u2022 %n vote","Poll results \u2022 %n votes",this.poll?.numVoters):this.isPollPublic&&(this.selfIsOwnerOrModerator||this.selfHasVoted)?(0,o.n)("spreed","Open poll \u2022 %n vote","Open poll \u2022 %n votes",this.poll?.numVoters):!this.isPollPublic&&this.selfHasVoted?(0,o.t)("spreed","Open poll \u2022 You voted already"):(0,o.t)("spreed","Open poll")},canEndPoll(){return this.isPollOpen&&this.selfIsOwnerOrModerator},hasVotesToDisplay(){return Object.keys(Object(this.poll?.votes)).length!==0},votePercentage(){const s=Object.keys(Object(this.poll?.options)).map(e=>this.poll?.votes["option-"+e]??0);return Jd(s,this.poll.numVoters)}},watch:{modalPage(s){s==="voting"&&this.setVoteData()},id(s){this.pollsStore.hidePollToast(s)},isInCall(s){s||this.pollsStore.hideAllPollToasts()},poll:{immediate:!0,handler(s){s?this.selfHasVoted||this.isPollClosed?this.modalPage="results":this.modalPage="voting":this.modalPage=""}}},mounted(){$.l.on("talk:poll-added",this.showPollToast)},beforeDestroy(){$.l.off("talk:poll-added",this.showPollToast)},methods:{t:o.t,n:o.n,getPollData(){this.poll||this.pollsStore.getPollData({token:this.token,pollId:this.id})},setVoteData(){this.voteToSubmit=this.selfHasVoted?this.poll?.votedSelf.map(s=>s.toString()):[]},showPollToast({token:s,message:e}){this.isInCall&&this.pollsStore.addPollToast({token:s,message:e})},dismissModal(){this.pollsStore.removeActivePoll(),this.voteToSubmit=[]},async submitVote(){this.loading=!0;try{await this.pollsStore.submitVote({token:this.token,pollId:this.id,optionIds:this.voteToSubmit.map(s=>+s)}),this.modalPage="results"}catch(s){console.error(s),this.modalPage="voting"}this.loading=!1},async endPoll(){this.loading=!0;try{await this.pollsStore.endPoll({token:this.token,pollId:this.id}),this.modalPage="results"}catch(s){console.error(s)}this.loading=!1},async createPollDraft(){await this.pollsStore.createPollDraft({token:this.token,form:this.poll})},selfHasVotedOption(s){return this.poll?.votedSelf.includes(s)},getFilteredDetails(s){return(this.poll?.details||[]).filter(e=>e.optionId===s)}}};var et=n(44847),fe={};fe.styleTagTransform=R(),fe.setAttributes=I(),fe.insert=L().bind(null,"head"),fe.domAPI=T(),fe.insertStyleElement=O();var t_=S()(et.A,fe);const s_=et.A&&et.A.locals?et.A.locals:void 0;var qd=(0,f.A)(Qd,Ld,Id,!1,null,"b79cf4a6",null);const eu=qd.exports,tu={name:"FilesSidebarChatView",components:{CallButton:_t.A,CallFailedDialog:us,ChatView:yl,MediaSettings:Td,PollViewer:eu},setup(){return{isInCall:(0,Ee.J)()}},data(){return{recordingConsentGiven:!1}},computed:{token(){return this.$store.getters.getToken()},connectionFailed(){return this.$store.getters.connectionFailed(this.token)}}};var tt=n(444),ve={};ve.styleTagTransform=R(),ve.setAttributes=I(),ve.insert=L().bind(null,"head"),ve.domAPI=T(),ve.insertStyleElement=O();var n_=S()(tt.A,ve);const i_=tt.A&&tt.A.locals?tt.A.locals:void 0;var su=(0,f.A)(tu,C,m,!1,null,"46caa1d2",null);const au=su.exports}),70869:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".poll-voters-details[data-v-d8babac4]{max-width:30%;margin-right:8px}.poll-voters-details .poll-voters-details__button[data-v-d8babac4],.poll-voters-details__button[data-v-d8babac4] .button-vue__icon{min-height:auto;height:auto;min-width:auto;width:auto !important;flex-wrap:wrap;justify-content:flex-start;border-radius:0;overflow:visible}.poll-voters-details__popover[data-v-d8babac4]{padding:8px;max-height:400px;overflow-y:scroll}.poll-voters-details__display-name[data-v-d8babac4]{margin-left:4px}.poll-voters-details__list-item[data-v-d8babac4]{display:flex;justify-content:flex-start;align-items:center;min-width:150px;height:32px;margin-bottom:var(--margin-small)}","",{version:3,sources:["webpack://./src/components/PollViewer/PollVotersDetails.vue"],names:[],mappings:"AAEA,sCACC,aAAA,CACA,gBAAA,CAEA,mIAEC,eAAA,CACA,WAAA,CACA,cAAA,CACA,qBAAA,CACA,cAAA,CACA,0BAAA,CACA,eAAA,CACA,gBAAA,CAGD,+CACC,WAAA,CACA,gBAAA,CACA,iBAAA,CAGD,oDACE,eAAA,CAGF,iDACC,YAAA,CACA,0BAAA,CACA,kBAAA,CACA,eAAA,CACA,WAAA,CACA,iCAAA",sourcesContent:[`

.poll-voters-details {
	max-width: 30%;
	margin-right: 8px;

	& &__button,
	&__button :deep(.button-vue__icon) {
		min-height: auto;
		height: auto;
		min-width: auto;
		width: auto !important;
		flex-wrap: wrap;
		justify-content: flex-start;
		border-radius: 0;
		overflow: visible;
	}

	&__popover {
		padding: 8px;
		max-height: 400px;
		overflow-y: scroll;
	}

	&__display-name {
			margin-left: 4px;
		}

	&__list-item {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		min-width: 150px;
		height: 32px;
		margin-bottom: var(--margin-small);
	}
}

`],sourceRoot:""}]);const E=d}),77556:((D,b,n)=>{var C=n(51873),m=n(34932),h=n(56449),y=n(44394),d=1/0,E=C?C.prototype:void 0,Be=E?E.toString:void 0;function st(G){if(typeof G=="string")return G;if(h(G))return m(G,st)+"";if(y(G))return Be?Be.call(G):"";var f=G+"";return f=="0"&&1/G==-d?"-0":f}D.exports=st}),84211:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".wrapper[data-v-35cea0d8]{display:flex;align-items:flex-start;width:100%;padding:0}.wrapper[data-v-35cea0d8]:focus{background-color:rgba(47,47,47,.068)}.messages[data-v-35cea0d8]{flex:auto;display:flex;padding:var(--default-grid-baseline) 0;flex-direction:column;width:100%;min-width:0}.messages__avatar[data-v-35cea0d8]{position:sticky;top:0;padding:calc(2*var(--default-grid-baseline));margin-top:calc(2*var(--default-grid-baseline))}.messages__author[data-v-35cea0d8]{max-width:calc(50*var(--default-font-size));padding-left:var(--default-grid-baseline);color:var(--color-text-maxcontrast);flex-shrink:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/MessagesGroup.vue","webpack://./src/assets/variables.scss"],names:[],mappings:"AAGA,0BACC,YAAA,CACA,sBAAA,CACA,UAAA,CACA,SAAA,CAEA,gCACC,oCAAA,CAIF,2BACC,SAAA,CACA,YAAA,CACA,sCAAA,CACA,qBAAA,CACA,UAAA,CACA,WAAA,CAEA,mCACC,eAAA,CACA,KAAA,CACA,4CAAA,CACA,+CAAA,CAGD,mCACC,2CClBwB,CDmBxB,yCAAA,CACA,mCAAA,CACA,aAAA,CACA,kBAAA,CACA,eAAA,CACA,sBAAA",sourcesContent:[`
@import '../../../assets/variables';

.wrapper {
	display: flex;
	align-items: flex-start;
	width: 100%;
	padding: 0;

	&:focus {
		background-color: rgba(47, 47, 47, 0.068);
	}
}

.messages {
	flex: auto;
	display: flex;
	padding: var(--default-grid-baseline) 0;
	flex-direction: column;
	width: 100%;
	min-width: 0;

	&__avatar {
		position: sticky;
		top: 0;
		padding: calc(2 * var(--default-grid-baseline));
		margin-top: calc(2 * var(--default-grid-baseline));
	}

	&__author {
		max-width: $messages-text-max-width;
		padding-left: var(--default-grid-baseline);
		color: var(--color-text-maxcontrast);
		flex-shrink: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
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
`],sourceRoot:""}]);const E=d}),86349:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,'.reactions-wrapper[data-v-021b2fec]{--minimal-button-width: 48px;--font-family-emoji: "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji";display:flex;flex-wrap:wrap;gap:var(--default-grid-baseline)}.reactions-wrapper[data-v-021b2fec] .button-vue{min-width:var(--minimal-button-width)}.reactions-wrapper[data-v-021b2fec] .button-vue__text{font-weight:normal}.reactions-wrapper .reaction-emoji[data-v-021b2fec]{font-family:var(--font-family-emoji)}.reactions-wrapper .reaction-button--thumbnail[data-v-021b2fec]{height:var(--clickable-area-small);width:var(--minimal-button-width);pointer-events:none}.reaction-details[data-v-021b2fec]{padding:8px;max-width:250px}.details-loading[data-v-021b2fec]{display:flex;justify-content:center;width:38px}.more-reactions-button[data-v-021b2fec]{text-decoration:underline}.more-reactions-button[data-v-021b2fec]:hover{text-decoration:none}',"",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessagePart/Reactions.vue"],names:[],mappings:"AACA,oCACC,4BAAA,CACA,mKAAA,CAEA,YAAA,CACA,cAAA,CACA,gCAAA,CAGA,gDACC,qCAAA,CAED,sDACC,kBAAA,CAGD,oDACC,oCAAA,CAGD,gEACC,kCAAA,CACA,iCAAA,CACA,mBAAA,CAIF,mCACC,WAAA,CACA,eAAA,CAGD,kCACC,YAAA,CACA,sBAAA,CACA,UAAA,CAGD,wCACC,yBAAA,CACA,8CACC,oBAAA",sourcesContent:[`
.reactions-wrapper {
	--minimal-button-width: 48px;
	--font-family-emoji: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI', 'Apple Color Emoji', 'Twemoji Mozilla', 'Noto Color Emoji', 'EmojiOne Color', 'Android Emoji';

	display: flex;
	flex-wrap: wrap;
	gap: var(--default-grid-baseline);

	// Overwrite NcButton styles
	:deep(.button-vue) {
		min-width: var(--minimal-button-width);
	}
	:deep(.button-vue__text) {
		font-weight: normal;
	}

	.reaction-emoji {
		font-family: var(--font-family-emoji);
	}

	.reaction-button--thumbnail {
		height: var(--clickable-area-small);
		width: var(--minimal-button-width);
		pointer-events: none;
	}
}

.reaction-details {
	padding: 8px;
	max-width: 250px;
}

.details-loading {
	display: flex;
	justify-content: center;
	width: 38px;
}

.more-reactions-button {
	text-decoration: underline;
	&:hover {
		text-decoration: none;
	}
}
`],sourceRoot:""}]);const E=d}),86431:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".mention[data-v-1ed2d98b]{display:contents;white-space:nowrap}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/MessagePart/Mention.vue"],names:[],mappings:"AACA,0BACC,gBAAA,CACA,kBAAA",sourcesContent:[`
.mention {
	display: contents;
	white-space: nowrap;
}
`],sourceRoot:""}]);const E=d}),87592:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".chatView[data-v-4a54452d]{width:100%;height:100%;display:flex;flex-direction:column;flex-grow:1;min-height:0}.dragover[data-v-4a54452d]{position:absolute;top:10%;left:10%;width:80%;height:80%;background:var(--color-primary-element-light);z-index:11;display:flex;box-shadow:0 0 36px var(--color-box-shadow);border-radius:var(--border-radius);opacity:90%;pointer-events:none}.drop-hint[data-v-4a54452d]{margin:auto}.drop-hint__icon[data-v-4a54452d]{background-size:48px;height:48px;margin-bottom:16px}.scroll-to-bottom[data-v-4a54452d]{position:relative;height:0}.scroll-to-bottom__button[data-v-4a54452d]{position:absolute !important;bottom:8px;right:24px;z-index:2}","",{version:3,sources:["webpack://./src/components/ChatView.vue"],names:[],mappings:"AACA,2BACC,UAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,WAAA,CACA,YAAA,CAGD,2BACC,iBAAA,CACA,OAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,6CAAA,CACA,UAAA,CACA,YAAA,CACA,2CAAA,CACA,kCAAA,CACA,WAAA,CACA,mBAAA,CAGD,4BACC,WAAA,CACA,kCACC,oBAAA,CACA,WAAA,CACA,kBAAA,CAIF,mCACC,iBAAA,CACA,QAAA,CAEA,2CACC,4BAAA,CACA,UAAA,CACA,UAAA,CACA,SAAA",sourcesContent:[`
.chatView {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	min-height: 0;
}

.dragover {
	position: absolute;
	top: 10%;
	left: 10%;
	width: 80%;
	height: 80%;
	background: var(--color-primary-element-light);
	z-index: 11;
	display: flex;
	box-shadow: 0 0 36px var(--color-box-shadow);
	border-radius: var(--border-radius);
	opacity: 90%;
	pointer-events: none;
}

.drop-hint {
	margin: auto;
	&__icon {
		background-size: 48px;
		height: 48px;
		margin-bottom: 16px;
	}
}

.scroll-to-bottom {
	position: relative;
	height: 0;

	&__button {
		position: absolute !important;
		bottom: 8px;
		right: 24px;
		z-index: 2;
	}
}
`],sourceRoot:""}]);const E=d}),93233:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,'.message[data-v-16f46db6]{position:relative}.message:hover .normal-message-body[data-v-16f46db6],.message:hover .combined-system[data-v-16f46db6],.message--hovered .normal-message-body[data-v-16f46db6]{border-radius:8px;background-color:var(--color-background-hover)}.message-body[data-v-16f46db6]{padding:var(--default-grid-baseline);font-size:var(--default-font-size);line-height:var(--default-line-height);position:relative}.message-body__scroll[data-v-16f46db6]{position:absolute;top:0;right:0;width:fit-content;height:100%;padding:8px 8px 0 0}.message--highlighted[data-v-16f46db6]{animation:highlight-animation-16f46db6 5s 1;border-radius:8px}@keyframes highlight-animation-16f46db6{0%{background-color:var(--color-background-hover)}50%{background-color:var(--color-background-hover)}100%{background-color:rgba(var(--color-background-hover), 0)}}.message-unread-marker[data-v-16f46db6]{position:relative;margin:calc(4*var(--default-grid-baseline))}.message-unread-marker[data-v-16f46db6]::before{content:"";width:100%;border-top:1px solid var(--color-border-maxcontrast);position:absolute;top:50%;z-index:-1}.message-unread-marker__wrapper[data-v-16f46db6]{display:flex;justify-content:center;align-items:center;gap:calc(3*var(--default-grid-baseline));margin-inline:auto;padding-inline:calc(3*var(--default-grid-baseline));width:fit-content;border-radius:var(--border-radius);background-color:var(--color-main-background)}.message-unread-marker__text[data-v-16f46db6]{text-align:center;white-space:nowrap;font-weight:bold;color:var(--color-main-text)}.message-buttons-bar[data-v-16f46db6]{display:flex;right:14px;top:0;position:sticky;background-color:var(--color-main-background);border-radius:var(--border-radius-element, calc(var(--default-clickable-area) / 2));box-shadow:0 0 4px 0 var(--color-box-shadow);height:var(--default-clickable-area);z-index:1}.message-buttons-bar h6[data-v-16f46db6]{margin-left:auto}',"",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/Message/Message.vue"],names:[],mappings:"AACA,0BACC,iBAAA,CAEA,8JAGC,iBAAA,CACA,8CAAA,CAIF,+BACC,oCAAA,CACA,kCAAA,CACA,sCAAA,CACA,iBAAA,CAEA,uCACC,iBAAA,CACA,KAAA,CACA,OAAA,CACA,iBAAA,CACA,WAAA,CACA,mBAAA,CAIF,uCACC,2CAAA,CACA,iBAAA,CAGD,wCACC,GAAA,8CAAA,CACA,IAAA,8CAAA,CACA,KAAA,uDAAA,CAAA,CAGD,wCACC,iBAAA,CACA,2CAAA,CAEA,gDACC,UAAA,CACA,UAAA,CACA,oDAAA,CACA,iBAAA,CACA,OAAA,CACA,UAAA,CAGD,iDACC,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,wCAAA,CACA,kBAAA,CACA,mDAAA,CACA,iBAAA,CACA,kCAAA,CACA,6CAAA,CAGD,8CACC,iBAAA,CACA,kBAAA,CACA,gBAAA,CACA,4BAAA,CAIF,sCACC,YAAA,CACA,UAAA,CACA,KAAA,CACA,eAAA,CACA,6CAAA,CACA,mFAAA,CACA,4CAAA,CACA,oCAAA,CACA,SAAA,CAEA,yCACC,gBAAA",sourcesContent:[`
.message {
	position: relative;

	&:hover .normal-message-body,
	&:hover .combined-system,
	&--hovered .normal-message-body {
		border-radius: 8px;
		background-color: var(--color-background-hover);
	}
}

.message-body {
	padding: var(--default-grid-baseline);
	font-size: var(--default-font-size);
	line-height: var(--default-line-height);
	position: relative;

	&__scroll {
		position: absolute;
		top: 0;
		right: 0;
		width: fit-content;
		height: 100%;
		padding: 8px 8px 0 0;
	}
}

.message--highlighted {
	animation: highlight-animation 5s 1;
	border-radius: 8px;
}

@keyframes highlight-animation {
	0% { background-color: var(--color-background-hover); }
	50% { background-color: var(--color-background-hover); }
	100% { background-color: rgba(var(--color-background-hover), 0); }
}

.message-unread-marker {
	position: relative;
	margin: calc(4 * var(--default-grid-baseline));

	&::before {
		content: '';
		width: 100%;
		border-top: 1px solid var(--color-border-maxcontrast);
		position: absolute;
		top: 50%;
		z-index: -1;
	}

	&__wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: calc(3 * var(--default-grid-baseline));
		margin-inline: auto;
		padding-inline: calc(3 * var(--default-grid-baseline));
		width: fit-content;
		border-radius: var(--border-radius);
		background-color: var(--color-main-background);
	}

	&__text {
		text-align: center;
		white-space: nowrap;
		font-weight: bold;
		color: var(--color-main-text);
	}
}

.message-buttons-bar {
	display: flex;
	right: 14px;
	top: 0;
	position: sticky;
	background-color: var(--color-main-background);
	border-radius: var(--border-radius-element, calc(var(--default-clickable-area) / 2));
	box-shadow: 0 0 4px 0 var(--color-box-shadow);
	height: var(--default-clickable-area);
	z-index: 1;

	& h6 {
		margin-left: auto;
	}
}
`],sourceRoot:""}]);const E=d}),97200:((D,b,n)=>{var C=n(13222),m=0;function h(y){var d=++m;return C(y)+d}D.exports=h}),99358:((D,b,n)=>{"use strict";n.d(b,{A:()=>E});var C=n(71354),m=n.n(C),h=n(76314),y=n.n(h),d=y()(m());d.push([D.id,".messages-group__system[data-v-78dd728a]{display:flex;flex-direction:column}.wrapper[data-v-78dd728a]{display:flex;width:100%;padding:0}.wrapper--system[data-v-78dd728a]{flex-direction:column;padding-left:calc(32px + 4*var(--default-grid-baseline))}.wrapper[data-v-78dd728a]:focus{background-color:rgba(47,47,47,.068)}.messages[data-v-78dd728a]{flex:auto;display:flex;flex-direction:column;width:100%;min-width:0}.messages--collapsed[data-v-78dd728a]{border-radius:var(--border-radius-large);background-color:var(--color-background-hover)}","",{version:3,sources:["webpack://./src/components/MessagesList/MessagesGroup/MessagesSystemGroup.vue"],names:[],mappings:"AAGA,yCACC,YAAA,CACA,qBAAA,CAGD,0BACC,YAAA,CACA,UAAA,CACA,SAAA,CACA,kCACC,qBAAA,CACA,wDAAA,CAED,gCACC,oCAAA,CAIF,2BACC,SAAA,CACA,YAAA,CACA,qBAAA,CACA,UAAA,CACA,WAAA,CAEA,sCACC,wCAAA,CACA,8CAAA",sourcesContent:[`
@import '../../../assets/variables';

.messages-group__system {
	display: flex;
	flex-direction: column;
}

.wrapper {
	display: flex;
	width: 100%;
	padding: 0;
	&--system {
		flex-direction: column;
		padding-left: calc($messages-avatar-width);
	}
	&:focus {
		background-color: rgba(47, 47, 47, 0.068);
	}
}

.messages {
	flex: auto;
	display: flex;
	flex-direction: column;
	width: 100%;
	min-width: 0;

	&--collapsed {
		border-radius: var(--border-radius-large);
		background-color: var(--color-background-hover);
	}
}
`],sourceRoot:""}]);const E=d})}]);})();

//# sourceMappingURL=talk-files-sidebar-tab-chunk.js.map?v=b6af458b22e032b8baab