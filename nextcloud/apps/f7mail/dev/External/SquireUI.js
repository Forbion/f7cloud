/* eslint max-len: 0 */

(doc => {

const
	i18n = (str, def) => rl.i18n(str) || def,

	ctrlKey = shortcuts.getMetaKey() + ' + ',

	createElement = name => doc.createElement(name),

	tpl = createElement('template'),

	trimLines = html => html.trim().replace(/^(<div>\s*<br\s*\/?>\s*<\/div>)+/, '').trim(),
	htmlToPlain = html => rl.Utils.htmlToPlain(html).trim(),
	plainToHtml = text => rl.Utils.plainToHtml(text),

	forEachObjectValue = (obj, fn) => Object.values(obj).forEach(fn),

	SquireDefaultConfig = {
/*
		addLinks: true // allow_smart_html_links
*/
		sanitizeToDOMFragment: (html, isPaste/*, squire*/) => {
			html = (html||'')
				.replace(/<\/?(BODY|HTML)[^>]*>/gi,'')
				.replace(/<!--[^>]+-->/g,'')
				.replace(/<span[^>]*>\s*<\/span>/gi,'')
				.trim();
			tpl.innerHTML =  isPaste ? rl.Utils.cleanHtml(html).html : html;
			return tpl.content;
		}
	};

class SquireUI
{
	constructor(container) {
		const
			clr = createElement('input'),
			doClr = name => input => {
				// https://github.com/the-djmaze/snappymail/issues/826
				clr.style.left = (input.offsetLeft + input.parentNode.offsetLeft) + 'px';
				clr.style.width = input.offsetWidth + 'px';

				clr.value = '';
				clr.onchange = () => squire.setStyle({[name]:clr.value});
				// Chrome 110+ https://github.com/the-djmaze/snappymail/issues/1199
//				clr.oninput = () => squire.setStyle({[name]:clr.value});
				setTimeout(()=>clr.click(),1);
			},

			actions = {
				mode: {
					plain: {
//						html: '〈〉',
//						cmd: () => this.setMode('plain' == this.mode ? 'wysiwyg' : 'plain'),
						select: [
							[i18n('SETTINGS_GENERAL/EDITOR_HTML'),'wysiwyg'],
							[i18n('SETTINGS_GENERAL/EDITOR_PLAIN'),'plain']
						],
						cmd: s => this.setMode('plain' == s.value ? 'plain' : 'wysiwyg')
					}
				},
				font: {
					fontFamily: {
						select: {
							'sans-serif': {
								Arial: "'Nimbus Sans L', 'Liberation sans', 'Arial Unicode MS', Arial, Helvetica, Garuda, Utkal, FreeSans, sans-serif",
								Tahoma: "'Luxi Sans', Tahoma, Loma, Geneva, Meera, sans-serif",
								Trebuchet: "'DejaVu Sans Condensed', Trebuchet, 'Trebuchet MS', sans-serif",
								Lucida: "'Lucida Sans Unicode', 'Lucida Sans', 'DejaVu Sans', 'Bitstream Vera Sans', 'DejaVu LGC Sans', sans-serif",
								Verdana: "'DejaVu Sans', Verdana, Geneva, 'Bitstream Vera Sans', 'DejaVu LGC Sans', sans-serif"
							},
							monospace: {
								Courier: "'Liberation Mono', 'Courier New', FreeMono, Courier, monospace",
								Lucida: "'DejaVu Sans Mono', 'DejaVu LGC Sans Mono', 'Bitstream Vera Sans Mono', 'Lucida Console', Monaco, monospace"
							},
							sans: {
								Times: "'Nimbus Roman No9 L', 'Times New Roman', Times, FreeSerif, serif",
								Palatino: "'Bitstream Charter', 'Palatino Linotype', Palatino, Palladio, 'URW Palladio L', 'Book Antiqua', Times, serif",
								Georgia: "'URW Palladio L', Georgia, Times, serif"
							}
						},
						cmd: s => squire.setStyle({ fontFamily: s.value })
					},
					fontSize: {
						select: [['Размер',''],'11pt','13pt','16pt','20pt','24pt','30pt'],
						defaultValueIndex: 0,
						cmd: s => squire.setStyle({ fontSize: s.value })
						// TODO: maybe consider using https://developer.mozilla.org/en-US/docs/Web/CSS/font-size#values
						// example:
						// select: ['','xx-small', 'x-small',' small',' medium', 'large', 'x-large', 'xx-large', 'xxx-large'],
						// defaultValueIndex: 0,
					},
// 					dir: {
// 						select: [
// 							[i18n('EDITOR/DIR_LTR', 'LTR'),'ltr'],
// 							[i18n('EDITOR/DIR_RTL', 'RTL'),'rtl'],
// 							[i18n('EDITOR/DIR_AUTO', 'Auto'),'auto'],
// 							['',''],
// 						],
// 						cmd: s => {
// 							squire.setAttribute('dir', s.value || null);
// //							squire.setStyle({ 'unicode-bidi': 'plaintext' });
// 						}
// 					}
				},
				// dir: {
				// 	dir_ltr: {
				// 		html: '⁋',
				// 		cmd: () => squire.setTextDirection('ltr')
				// 	},
				// 	dir_rtl: {
				// 		html: '¶',
				// 		cmd: () => squire.setTextDirection('rtl')
				// 	}
				// },
				colors: {
					backgroundColor: {
						html: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<g clip-path="url(#clip0_8409_45302)">\n' +
							'<g clip-path="url(#clip1_8409_45302)">\n' +
							'<path d="M1.75 4H7.75M1.75 8H14.25M1.75 12H7.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'<path d="M9.75 12L12.5603 3.56921C12.621 3.38687 12.879 3.38687 12.9397 3.56921L15.75 12" stroke="black" stroke-width="1.5" stroke-linecap="round"/>\n' +
							'</g>\n' +
							'</g>\n' +
							'<defs>\n' +
							'<clipPath id="clip0_8409_45302">\n' +
							'<rect width="16" height="16" fill="white" transform="translate(0.75)"/>\n' +
							'</clipPath>\n' +
							'<clipPath id="clip1_8409_45302">\n' +
							'<rect width="16" height="16" fill="white" transform="translate(0.75)"/>\n' +
							'</clipPath>\n' +
							'</defs>\n' +
							'</svg>\n', /* 🎨 ▧ */
						cmd: doClr('backgroundColor')
					},
					textColor: {
						html: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<g clip-path="url(#clip0_8409_45314)">\n' +
							'<path d="M6.875 8H9.875" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'<path d="M3.09375 13.249H13.6279" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'<path d="M5.375 11L8.18526 2.56921C8.24604 2.38687 8.50396 2.38687 8.56474 2.56921L11.375 11" stroke="black" stroke-width="1.5" stroke-linecap="round"/>\n' +
							'</g>\n' +
							'<defs>\n' +
							'<clipPath id="clip0_8409_45314">\n' +
							'<rect width="16" height="16" fill="white" transform="translate(0.375)"/>\n' +
							'</clipPath>\n' +
							'</defs>\n' +
							'</svg>\n',
						cmd: doClr('color')
					},
				},
				inline: {
					bold: {
						html: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<g clip-path="url(#clip0_8610_19644)">\n' +
							'<g clip-path="url(#clip1_8610_19644)">\n' +
							'<path d="M5.08594 2.28125H9.33594C9.8982 2.28145 10.4489 2.44126 10.9238 2.74219C11.3988 3.04315 11.7783 3.47312 12.0186 3.98145C12.2588 4.48986 12.3502 5.05617 12.2812 5.61426C12.2123 6.17233 11.9857 6.6992 11.6289 7.13379L11.6055 7.16309L11.6387 7.18066C12.2638 7.52523 12.756 8.06841 13.0391 8.72363C13.3221 9.37903 13.3799 10.1103 13.2021 10.8018C13.0244 11.493 12.6215 12.1054 12.0576 12.543C11.4935 12.9805 10.7998 13.2184 10.0859 13.2188H5.08594C4.89531 13.2188 4.71292 13.1426 4.57812 13.0078C4.44333 12.873 4.36719 12.6906 4.36719 12.5V3C4.36719 2.80938 4.44333 2.62698 4.57812 2.49219C4.71292 2.3574 4.89531 2.28125 5.08594 2.28125ZM5.80469 11.7812H10.0859C10.5584 11.7812 11.0117 11.5938 11.3457 11.2598C11.6798 10.9257 11.8672 10.4724 11.8672 10C11.8672 9.52758 11.6798 9.07428 11.3457 8.74023C11.0117 8.40618 10.5584 8.21875 10.0859 8.21875H5.80469V11.7812ZM5.80469 6.78125H9.33594C9.74205 6.78125 10.1318 6.62017 10.4189 6.33301C10.7061 6.04584 10.8672 5.65611 10.8672 5.25C10.8672 4.84389 10.7061 4.45416 10.4189 4.16699C10.1318 3.87983 9.74205 3.71875 9.33594 3.71875H5.80469V6.78125Z" fill="black" stroke="black" stroke-width="0.0625"/>\n' +
							'</g>\n' +
							'</g>\n' +
							'<defs>\n' +
							'<clipPath id="clip0_8610_19644">\n' +
							'<rect width="16" height="16" fill="white" transform="translate(0.0859375)"/>\n' +
							'</clipPath>\n' +
							'<clipPath id="clip1_8610_19644">\n' +
							'<rect width="16" height="16" fill="white" transform="translate(0.0859375)"/>\n' +
							'</clipPath>\n' +
							'</defs>\n' +
							'</svg>\n',
						cmd: () => this.doAction('bold'),
						key: 'B',
						matches: 'B,STRONG'
					},
					italic: {
						html: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<g clip-path="url(#clip0_8610_33226)">\n' +
							'<g clip-path="url(#clip1_8610_33226)">\n' +
							'<path d="M6.08594 13L10.5859 3" stroke="black" stroke-width="1.5" stroke-linecap="round"/>\n' +
							'<path d="M8.08594 3H12.5859" stroke="black" stroke-width="1.5" stroke-linecap="round"/>\n' +
							'<path d="M4.08594 13H8.58594" stroke="black" stroke-width="1.5" stroke-linecap="round"/>\n' +
							'</g>\n' +
							'</g>\n' +
							'<defs>\n' +
							'<clipPath id="clip0_8610_33226">\n' +
							'<rect width="16" height="16" fill="white" transform="translate(0.0859375)"/>\n' +
							'</clipPath>\n' +
							'<clipPath id="clip1_8610_33226">\n' +
							'<rect width="16" height="16" fill="white" transform="translate(0.0859375)"/>\n' +
							'</clipPath>\n' +
							'</defs>\n' +
							'</svg>\n',
						cmd: () => this.doAction('italic'),
						key: 'I',
						matches: 'I'
					},
					underline: {
						html: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<g clip-path="url(#clip0_8610_35440)">\n' +
							'<path d="M3.80022 2.42871V8.643C3.80022 9.67537 4.25175 10.313 5.05548 10.9158C5.85921 11.5186 6.9493 11.8573 8.08594 11.8573C9.22258 11.8573 10.3127 11.5186 11.1164 10.9158C11.9201 10.313 12.3717 9.49548 12.3717 8.643V2.42871M2.08594 14.4287H14.0859" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'</g>\n' +
							'<defs>\n' +
							'<clipPath id="clip0_8610_35440">\n' +
							'<rect width="16" height="16" fill="white" transform="translate(0.0859375)"/>\n' +
							'</clipPath>\n' +
							'</defs>\n' +
							'</svg>',
						cmd: () => this.doAction('underline'),
						key: 'U',
						matches: 'U'
					},
					strike: {
						html: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<path d="M2.08594 8.00086H14.0859M11.5145 3.28657C11.3202 2.90939 10.8747 2.57655 10.2515 2.34286C9.62832 2.10916 8.86454 1.98854 8.08594 2.00086H7.22879C6.43315 2.00086 5.67008 2.31693 5.10747 2.87954C4.54487 3.44215 4.22879 4.20521 4.22879 5.00086C4.22879 5.79651 4.54487 6.55957 5.10747 7.12218C5.67008 7.68479 6.43315 8.00086 7.22879 8.00086H8.94308C9.73873 8.00086 10.5018 8.31693 11.0644 8.87954C11.627 9.44215 11.9431 10.2052 11.9431 11.0009C11.9431 11.7965 11.627 12.5596 11.0644 13.1222C10.5018 13.6848 9.73873 14.0009 8.94308 14.0009H7.65737C6.87877 14.0132 6.11499 13.8926 5.49179 13.6589C4.8686 13.4252 4.42315 13.0923 4.22879 12.7151" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'</svg>\n',
						cmd: () => this.doAction('strikethrough'),
						key: 'Shift + 7',
						matches: 'S'
					},
					sub: {
						html: '<svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<path d="M1.0791 0.448242C1.16784 0.448251 1.24183 0.46759 1.30762 0.503906C1.37295 0.539983 1.42376 0.590011 1.46484 0.658203L1.46777 0.662109L3.52148 3.97461L3.62988 4.14941H4.11719L4.22559 3.97363L6.26074 0.660156L6.2627 0.657227C6.30088 0.593585 6.35176 0.54539 6.42188 0.508789C6.50342 0.466313 6.57826 0.448611 6.64941 0.448242C6.76194 0.448335 6.83752 0.471736 6.89062 0.50293C6.94297 0.5338 6.99523 0.585281 7.04199 0.674805C7.12618 0.836172 7.1256 0.980401 7.02148 1.15527L4.65332 4.85645L4.52539 5.05664L4.65332 5.25586L7.27637 9.35645V9.35742C7.33463 9.45317 7.355 9.53227 7.35645 9.59863C7.35785 9.66456 7.34138 9.74139 7.28906 9.83398C7.19307 10.0038 7.07414 10.0712 6.88965 10.0713C6.80041 10.0713 6.72612 10.0518 6.66016 10.0156C6.59611 9.98053 6.54504 9.93209 6.50391 9.86328L6.5 9.85645L4.22363 6.22949L4.11426 6.05566H3.63086L3.52246 6.22949L1.24609 9.85645L1.24219 9.8623C1.20382 9.92624 1.15277 9.97554 1.08203 10.0127C1.0012 10.0551 0.926904 10.0715 0.857422 10.0713H0.856445C0.74338 10.0713 0.665264 10.0482 0.609375 10.0156C0.554146 9.98344 0.499813 9.93002 0.450195 9.83887C0.362126 9.67702 0.362312 9.53577 0.46582 9.36328L3.0752 5.25488L3.20117 5.05566L3.07422 4.85742L0.706055 1.1377C0.649508 1.04883 0.629075 0.974937 0.626953 0.912109C0.624868 0.849334 0.639935 0.773864 0.69043 0.680664C0.741015 0.587437 0.795691 0.533533 0.848633 0.501953C0.901511 0.470413 0.974029 0.448242 1.0791 0.448242Z" fill="black" stroke="black" stroke-width="0.740259"/>\n' +
							'</svg>\n',
						cmd: () => this.doAction('subscript'),
						key: 'Shift + 5',
						matches: 'SUB'
					},
					sup: {
						html: '<img src="themes/forbios/images/sup.png" style="width: 16px; height: 16px;">',
						cmd: () => this.doAction('superscript'),
						key: 'Shift + 6',
						matches: 'SUP'
					}
				},
				block: {
					ol: {
						html: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<g clip-path="url(#clip0_8610_9125)">\n' +
							'<path d="M3.5 6V2L2 3.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'<path d="M8 4L15 4" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'<path d="M2 10.2206C2 8.5246 4 8.66312 4 10.2206C4 11.3966 2.64 12.3584 2 13C2 13 3.5 13 4.5 13" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'<path d="M8 11H15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'</g>\n' +
							'<defs>\n' +
							'<clipPath id="clip0_8610_9125">\n' +
							'<rect width="16" height="16" fill="white"/>\n' +
							'</clipPath>\n' +
							'</defs>\n' +
							'</svg>\n',
						cmd: () => this.doList('OL'),
						key: 'Shift + 8',
						matches: 'OL'
					},
					ul: {
						html: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<g clip-path="url(#clip0_8610_40737)">\n' +
							'<circle cx="2" cy="4" r="1" fill="black"/>\n' +
							'<path d="M5 4L14 4L5 4Z" fill="black"/>\n' +
							'<path d="M5 4L14 4" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'<circle cx="2" cy="8" r="1" fill="black"/>\n' +
							'<path d="M5 8L14 8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'<circle cx="2" cy="12" r="1" fill="black"/>\n' +
							'<path d="M5 12L14 12" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'</g>\n' +
							'<defs>\n' +
							'<clipPath id="clip0_8610_40737">\n' +
							'<rect width="16" height="16" fill="white"/>\n' +
							'</clipPath>\n' +
							'</defs>\n' +
							'</svg>\n',
						cmd: () => this.doList('UL'),
						key: 'Shift + 9',
						matches: 'UL'
					},
					quote: {
						html: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<path d="M4.75 3.78125H6.8125C7.086 3.78125 7.3486 3.88961 7.54199 4.08301C7.73539 4.2764 7.84375 4.539 7.84375 4.8125V8.9375C7.84375 9.95149 7.57769 10.7639 7.08496 11.3818C6.5915 12.0005 5.84596 12.4549 4.83398 12.708L4.83105 12.709C4.78717 12.7203 4.74116 12.7232 4.69629 12.7168C4.6515 12.7104 4.60824 12.695 4.56934 12.6719C4.53039 12.6487 4.49679 12.6174 4.46973 12.5811C4.44277 12.5448 4.42313 12.5038 4.41211 12.46C4.40109 12.416 4.39855 12.37 4.40527 12.3252C4.41201 12.2803 4.42772 12.2371 4.45117 12.1982C4.47461 12.1595 4.50549 12.1254 4.54199 12.0986C4.57851 12.0719 4.62008 12.0527 4.66406 12.042H4.66602C5.4773 11.8391 6.11221 11.4952 6.54004 10.9629C6.96912 10.4289 7.15625 9.74732 7.15625 8.9375V7.90625H4.75L4.65332 7.90137C4.42835 7.88028 4.21584 7.78569 4.04883 7.63086C3.88194 7.4761 3.77147 7.27141 3.7334 7.04883L3.72168 6.95215L3.71875 6.86328V4.8125C3.71875 4.539 3.82711 4.2764 4.02051 4.08301C4.2139 3.88961 4.4765 3.78125 4.75 3.78125ZM10.9375 3.78125H13C13.2735 3.78125 13.5361 3.88961 13.7295 4.08301C13.9229 4.2764 14.0312 4.539 14.0312 4.8125V8.9375C14.0312 9.95149 13.7652 10.7639 13.2725 11.3818C12.779 12.0005 12.0335 12.4549 11.0215 12.708L11.0186 12.709C10.9747 12.7203 10.9287 12.7232 10.8838 12.7168C10.839 12.7104 10.7957 12.695 10.7568 12.6719C10.7179 12.6487 10.6843 12.6174 10.6572 12.5811C10.6303 12.5448 10.6106 12.5038 10.5996 12.46C10.5886 12.416 10.586 12.37 10.5928 12.3252C10.5995 12.2803 10.6152 12.2371 10.6387 12.1982C10.6621 12.1595 10.693 12.1254 10.7295 12.0986C10.766 12.0719 10.8076 12.0527 10.8516 12.042H10.8535C11.6648 11.8391 12.2997 11.4952 12.7275 10.9629C13.1566 10.4289 13.3438 9.74732 13.3438 8.9375V7.90625H10.9375L10.8408 7.90137C10.6158 7.88028 10.4033 7.78569 10.2363 7.63086C10.0694 7.4761 9.95897 7.27141 9.9209 7.04883L9.90918 6.95215L9.90625 6.86328V4.8125C9.90625 4.539 10.0146 4.2764 10.208 4.08301C10.4014 3.88961 10.664 3.78125 10.9375 3.78125Z" fill="black" stroke="black" stroke-width="0.6875"/>\n' +
							'</svg>\n',
						cmd: () => {
							let parent = squire.getSelectionClosest('UL,OL,BLOCKQUOTE')?.nodeName;
							('BLOCKQUOTE' == parent) ? squire.decreaseQuoteLevel() : squire.increaseQuoteLevel();
						},
						matches: 'BLOCKQUOTE'
					},
					indentDecrease: {
						html: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<path d="M13.8346 4H9.16797M13.8346 8H7.83464M13.8346 12H9.16797M5.83464 5.33333L3.16797 8L5.83464 10.6667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'</svg>\n',
						cmd: () => squire.changeIndentationLevel('decrease'),
						key: ']'
					},
					indentIncrease: {
						html: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<path d="M13.4596 4H6.1263M13.4596 8H8.79297M13.4596 12H6.1263M2.79297 5.33333L5.45964 8L2.79297 10.6667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'</svg>',
						cmd: () => squire.changeIndentationLevel('increase'),
						key: '['
					}
				},
				targets: {
					link: {
						html: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<g clip-path="url(#clip0_8610_29689)">\n' +
							'<g clip-path="url(#clip1_8610_29689)">\n' +
							'<path d="M5.95 7.8H11.55M6.65 5H4.55C3.80739 5 3.0952 5.295 2.5701 5.8201C2.045 6.3452 1.75 7.05739 1.75 7.8C1.75 8.54261 2.045 9.2548 2.5701 9.7799C3.0952 10.305 3.80739 10.6 4.55 10.6H6.65M10.85 5H12.95C13.6926 5 14.4048 5.295 14.9299 5.8201C15.455 6.3452 15.75 7.05739 15.75 7.8C15.75 8.54261 15.455 9.2548 14.9299 9.7799C14.4048 10.305 13.6926 10.6 12.95 10.6H10.85" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'</g>\n' +
							'</g>\n' +
							'<defs>\n' +
							'<clipPath id="clip0_8610_29689">\n' +
							'<rect width="16" height="16" fill="white" transform="translate(0.75)"/>\n' +
							'</clipPath>\n' +
							'<clipPath id="clip1_8610_29689">\n' +
							'<rect width="16" height="16" fill="white" transform="translate(0.75)"/>\n' +
							'</clipPath>\n' +
							'</defs>\n' +
							'</svg>\n',
						cmd: () => {
							let node = squire.getSelectionClosest('A'),
								url = prompt("Link", node?.href || "https://");
							if (url != null) {
								url.length ? squire.makeLink(url) : (node && squire.removeLink());
							}
						},
						matches: 'A'
					},
					imageUrl: {
						html: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<path d="M10.7083 4.88889H10.7161M1.375 3.33333C1.375 2.7145 1.62083 2.121 2.05842 1.68342C2.496 1.24583 3.0895 1 3.70833 1H13.0417C13.6605 1 14.254 1.24583 14.6916 1.68342C15.1292 2.121 15.375 2.7145 15.375 3.33333V12.6667C15.375 13.2855 15.1292 13.879 14.6916 14.3166C14.254 14.7542 13.6605 15 13.0417 15H3.70833C3.0895 15 2.496 14.7542 2.05842 14.3166C1.62083 13.879 1.375 13.2855 1.375 12.6667V3.33333Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'<path d="M1.375 11.111L5.26389 7.22209C5.98567 6.52753 6.87544 6.52753 7.59722 7.22209L11.4861 11.111" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'<path d="M9.92969 9.55553L10.7075 8.77775C11.4292 8.0832 12.319 8.0832 13.0408 8.77775L15.3741 11.1111" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'</svg>',
						cmd: () => {
							let node = squire.getSelectionClosest('IMG'),
								src = prompt("Image", node?.src || "https://");
							src?.length ? squire.insertImage(src) : node?.remove();
						},
						matches: 'IMG'
					},
					imageUpload: {
						html: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<path d="M15 4.72274V12.6619C15 13.4009 14.4009 14 13.6619 14H2.33813C1.5991 14 1 13.4009 1 12.6619L1 3.33812C1 2.5991 1.5991 2 2.33813 2H8.17409C8.55792 2 8.92327 2.16483 9.17728 2.45259L9.60049 2.93203C9.8545 3.21979 10.2199 3.38462 10.6037 3.38462H13.6619C14.4009 3.38462 15 3.98371 15 4.72274Z" stroke="black" stroke-width="1.5"/>\n' +
							'<path d="M1 8.74989V12.6619C1 13.4009 1.5991 14 2.33813 14H13.6619C14.4009 14 15 13.4009 15 12.6619V7.33812C15 6.5991 14.4009 6 13.6619 6H6.86607C6.52921 6 6.20475 6.12705 5.95745 6.35578L5.20044 7.05598C4.95315 7.28472 4.62868 7.41176 4.29183 7.41176H2.33812C1.5991 7.41176 1 8.01086 1 8.74989Z" stroke="black" stroke-width="1.5"/>\n' +
							'</svg>\n',
						cmd: () => browseImage.click(),
						matches: 'IMG'
					}
				},
/*
				table: {
					// TODO
				},
*/
				changes: {
					undo: {
						html: '\n' +
							'<svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<path d="M3.63544 0.885742L1.42188 3.70301L3.63544 6.52023" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'<path d="M1.42188 3.70312H9.30786C11.7026 3.70312 13.6696 6.11082 13.7629 9.15633C13.8616 12.3745 11.8384 15.0519 9.30786 15.0519H3.50883" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'</svg>\n',
						cmd: () => squire.undo(),
						key: 'Z'
					},
					redo: {
						html: '\n' +
							'<svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<path d="M11.989 1.57324L14.2344 4.43094L11.989 7.28859" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'<path d="M14.2344 4.43066H6.23521C3.80613 4.43066 1.81087 6.87291 1.71621 9.96213C1.61615 13.2265 3.66839 15.9423 6.23521 15.9423H12.1175" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'</svg>\n',
						cmd: () => squire.redo(),
						key: 'Y'
					},
					source: {
						html: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<g clip-path="url(#clip0_8600_37557)">\n' +
							'<path d="M1.95233 8.93701C1.771 8.68834 1.68033 8.56367 1.61767 8.32367C1.57536 8.10997 1.57536 7.89005 1.61767 7.67634C1.68033 7.43567 1.771 7.31101 1.95233 7.06301C2.945 5.69967 5.121 3.33301 8.25233 3.33301C11.3837 3.33301 13.5597 5.69967 14.5523 7.06234C14.7337 7.31101 14.8243 7.43567 14.887 7.67567C14.9293 7.88938 14.9293 8.1093 14.887 8.32301C14.8243 8.56367 14.7337 8.68834 14.5523 8.93634C13.5597 10.2997 11.3837 12.6663 8.25233 12.6663C5.121 12.6663 2.945 10.2997 1.95233 8.93701Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'<path d="M8.2474 9.33366C8.60102 9.33366 8.94016 9.19318 9.1902 8.94313C9.44025 8.69309 9.58073 8.35395 9.58073 8.00033C9.58073 7.6467 9.44025 7.30757 9.1902 7.05752C8.94016 6.80747 8.60102 6.66699 8.2474 6.66699C7.89377 6.66699 7.55464 6.80747 7.30459 7.05752C7.05454 7.30757 6.91406 7.6467 6.91406 8.00033C6.91406 8.35395 7.05454 8.69309 7.30459 8.94313C7.55464 9.19318 7.89377 9.33366 8.2474 9.33366Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'</g>\n' +
							'<defs>\n' +
							'<clipPath id="clip0_8600_37557">\n' +
							'<rect width="16" height="16" fill="white" transform="translate(0.25)"/>\n' +
							'</clipPath>\n' +
							'</defs>\n' +
							'</svg>\n',
						cmd: btn => {
							this.setMode('source' == this.mode ? 'wysiwyg' : 'source');
							btn.classList.toggle('active', 'source' == this.mode);
						}
					}
				},

				clear: {
					removeStyle: {
						html: '<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<path d="M13.7972 13.6499H6.38173L3.40849 10.6131C3.27696 10.4808 3.20313 10.3018 3.20312 10.1152C3.20313 9.92861 3.27696 9.74962 3.40849 9.6173L10.4708 2.55498C10.6031 2.42344 10.7821 2.34961 10.9687 2.34961C11.1553 2.34961 11.3343 2.42344 11.4666 2.55498L14.9978 6.08614C15.1293 6.21846 15.2031 6.39745 15.2031 6.58403C15.2031 6.77061 15.1293 6.9496 14.9978 7.08192L8.50042 13.6499M13.0909 8.91813L8.64167 4.46886" stroke="black" stroke-width="1.41246" stroke-linecap="round" stroke-linejoin="round"/>\n' +
							'</svg>\n',
						cmd: () => squire.setStyle()
					}
				}
			},

			plain = createElement('textarea'),
			wysiwyg = createElement('div'),
			toolbar = createElement('div'),
			browseImage = createElement('input'),
			squire = new Squire(wysiwyg, SquireDefaultConfig);

		clr.type = 'color';
		toolbar.append(clr);
		// Chrome https://github.com/the-djmaze/snappymail/issues/1199
		let clrid = 'squire-colors',
			colorlist = doc.getElementById(clrid),
			add = hex => colorlist.append(new Option(hex));
		if (!colorlist) {
			colorlist = createElement('datalist');
			colorlist.id = clrid;
			// Color blind safe Tableau 10 by Maureen Stone
			// add('#4E79A7');
			// add('#F28E2B');
			// add('#E15759');
			// add('#76B7B2');
			// add('#59A14F');
			// add('#EDC948');
			// add('#B07AA1');
			// add('#FF9DA7');
			// add('#9C755F');
			// add('#BAB0AC');



			add('rgba(0,0,0,0)');

			add('#11161F');
			add('#31393C');
			add('#747F81');
			add('#BFCDCE');
			add('#FFFFFF');

			add('#D74642');
			add('#F59524');
			add('#F6E120');
			add('#99DD57');
			add('#70B62B');

			add('#37B760');
			add('#39D5DA');
			add('#0E8BEF');
			add('#1B54EC');
			add('#7454E3');


			doc.body.append(colorlist);
		}
		clr.setAttribute('list', clrid);

		browseImage.type = 'file';
		browseImage.accept = 'image/*';
		browseImage.style.display = 'none';
		browseImage.onchange = () => {
			if (browseImage.files.length) {
				let reader = new FileReader();
				reader.readAsDataURL(browseImage.files[0]);
				reader.onloadend = () => reader.result && squire.insertImage(reader.result);
			}
		}

		plain.className = 'squire-plain';
		wysiwyg.className = 'squire-wysiwyg';
		wysiwyg.dir = 'auto';
		this.mode = ''; // 'plain' | 'wysiwyg'
		this.container = container;
		this.squire = squire;
		this.plain = plain;
		this.wysiwyg = wysiwyg;

		dispatchEvent(new CustomEvent('squire-toolbar', {detail:{squire:this,actions:actions}}));

		toolbar.className = 'squire-toolbar btn-toolbar';
		let group, action/*, touchTap*/;
		for (group in actions) {
			let toolgroup = createElement('div');
			toolgroup.className = 'btn-group';
			toolgroup.id = 'squire-toolgroup-'+group;
			for (action in actions[group]) {
				let cfg = actions[group][action], input, ev = 'click';
				if (cfg.input) {
					input = createElement('input');
					input.type = cfg.input;
					ev = 'change';
				} else if (cfg.select) {
					input = createElement('select');
					input.className = 'btn';
					if (Array.isArray(cfg.select)) {
						cfg.select.forEach(value => {
							value = Array.isArray(value) ? value : [value, value];
							var option = new Option(value[0], value[1]);
							option.style[action] = value[1];
							input.append(option);
						});
					} else {
						if(group == 'font') {
							input.add(new Option('Шрифт', ''));
						} else {
							input.add(new Option(i18n('GLOBAL/DEFAULT'), ''));
						}
						Object.entries(cfg.select).forEach(([label, options]) => {
							let group = createElement('optgroup');
							group.label = label;
							Object.entries(options).forEach(([text, value]) => {
								var option = new Option(text, value);
								option.style[action] = value;
								group.append(option);
							});
							input.add(group);
						});
					}
					ev = 'input';
				} else {
					input = createElement('button');
					input.type = 'button';
					input.className = 'btn';
					input.innerHTML = cfg.html;
					input.action_cmd = cfg.cmd;
/*
					input.addEventListener('pointerdown', () => touchTap = input, {passive:true});
					input.addEventListener('pointermove', () => touchTap = null, {passive:true});
					input.addEventListener('pointercancel', () => touchTap = null);
					input.addEventListener('pointerup', e => {
						if (touchTap === input) {
							e.preventDefault();
							cfg.cmd(input);
						}
						touchTap = null;
					});
*/
				}
				input.addEventListener(ev, () => cfg.cmd(input));
				cfg.hint = i18n('EDITOR/' + action.toUpperCase());
				if (cfg.hint) {
					input.title = cfg.key ? cfg.hint + ' (' + ctrlKey + cfg.key + ')' : cfg.hint;
				} else if (cfg.key) {
					input.title = ctrlKey + cfg.key;
				}
				input.dataset.action = action;
				input.tabIndex = -1;
				cfg.input = input;
				toolgroup.append(input);
			}
			toolgroup.children.length && toolbar.append(toolgroup);
		}

		this.modeSelect = actions.mode.plain.input;

		let changes = actions.changes;
		changes.undo.input.disabled = changes.redo.input.disabled = true;
		squire.addEventListener('undoStateChange', e => {
			changes.undo.input.disabled = !e.detail.canUndo;
			changes.redo.input.disabled = !e.detail.canRedo;
		});

		squire.addEventListener('pasteImage', e => {
			const items = e.detail.clipboardData.items;
			let l = items.length;
			while (l--) {
				const item = items[l];
				if (/^image\/(png|jpeg|webp)/.test(item.type)) {
					let reader = new FileReader();
					reader.onload = event => {
						let img = createElement("img"),
							canvas = createElement("canvas"),
							ctx = canvas.getContext('2d');
						img.onload = ()=>{
							ctx.drawImage(img, 0, 0);
							let width = img.width, height = img.height;
							if (width > height) {
								// Landscape
								if (width > 1024) {
									height = height * 1024 / width;
									width = 1024;
								}
							} else if (height > 1024) {
								// Portrait
								width = width * 1024 / height;
								height = 1024;
							}
							canvas.width = width;
							canvas.height = height;
							ctx.drawImage(img, 0, 0, width, height);
							squire.insertHTML('<img alt="" style="width:100%;max-width:'+width+'px" src="'+canvas.toDataURL()+'">', true);
						};
						img.src = event.target.result;
					}
					reader.readAsDataURL(item.getAsFile());
					break;
				}
			}
		});

		actions.font.fontSize.input.selectedIndex = actions.font.fontSize.defaultValueIndex;

//		squire.addEventListener('focus', () => shortcuts.off());
//		squire.addEventListener('blur', () => shortcuts.on());

		container.append(toolbar, wysiwyg, plain);

		/**
		 * @param {string} fontName
		 * @return {string}
		 */
		const normalizeFontName = (fontName) => fontName.trim().replace(/(^["']*|["']*$)/g, '').trim().toLowerCase();

		/** @type {string[]} - lower cased array of available font families*/
		const fontFamiliesLowerCase = Object.values(actions.font.fontFamily.input.options).map(option => option.value.toLowerCase());

		/**
		 * A theme might have CSS like div.squire-wysiwyg[contenteditable="true"] {
		 * font-family: 'Times New Roman', Times, serif; }
		 * so let's find the best match squire.getRoot()'s font
		 * it will also help to properly handle generic font names like 'sans-serif'
		 * @type {number}
		 */
		let defaultFontFamilyIndex = 0;
		const squireRootFonts = getComputedStyle(squire.getRoot()).fontFamily.split(',').map(normalizeFontName);
		fontFamiliesLowerCase.some((family, index) => {
			const matchFound = family.split(',').some(availableFontName => {
				const normalizedFontName = normalizeFontName(availableFontName);
				return squireRootFonts.some(squireFontName => squireFontName === normalizedFontName);
			});
			if (matchFound) {
				defaultFontFamilyIndex = index;
			}
			return matchFound;
		});

		/**
		 * Instead of comparing whole 'font-family' strings,
		 * we are going to look for individual font names, because we might be
		 * editing a Draft started in another email client for example
		 *
		 * @type {Object.<string,number>}
		 */
		const fontNamesMap = {};
		/**
		 * @param {string} fontFamily
		 * @param {number} index
		 */
		const processFontFamilyString = (fontFamily, index) => {
			fontFamily.split(',').forEach(fontName => {
				const key = normalizeFontName(fontName);
				if (fontNamesMap[key] === undefined) {
					fontNamesMap[key] = index;
				}
			});
		};
		// first deal with the default font family
		processFontFamilyString(fontFamiliesLowerCase[defaultFontFamilyIndex], defaultFontFamilyIndex);
		// and now with the rest of the font families
		fontFamiliesLowerCase.forEach((fontFamily, index) => {
			if (index !== defaultFontFamilyIndex) {
				processFontFamilyString(fontFamily, index);
			}
		});

		// -----

		squire.addEventListener('pathChange', () => {

			const squireRoot = squire.getRoot();
			let range = squire.getSelection(),
				collapsed = range.collapsed,
				elm = collapsed ? range.endContainer : range?.commonAncestorContainer;
			if (elm && !(elm instanceof Element)) {
				elm = elm.parentElement;
			}
			forEachObjectValue(actions, entries => {
				forEachObjectValue(entries, cfg => {
					// Check if selection has a matching parent or contains a matching element
					cfg.matches && cfg.input.classList.toggle('active', !!(elm && (
						(!collapsed && [...elm.querySelectorAll(cfg.matches)].some(node => range.intersectsNode(node)))
						 || elm.closestWithin(cfg.matches, squireRoot)
					)));
				});
			});

			if (elm) {
				// try to find font-family and/or font-size and set "select" elements' values

				let sizeSelectedIndex = actions.font.fontSize.defaultValueIndex;
				let familySelectedIndex = defaultFontFamilyIndex;

				let familyFound = false;
				let sizeFound = false;
				do {
					if (!familyFound && elm.style.fontFamily) {
						familyFound = true;
						familySelectedIndex = -1; // show empty select if we don't know the font
						const fontNames = elm.style.fontFamily.split(',');
						for (let i = 0; i < fontNames.length; i++) {
							const index = fontNamesMap[normalizeFontName(fontNames[i])];
							if (index !== undefined) {
								familySelectedIndex = index;
								break;
							}
						}
					}

					if (!sizeFound && elm.style.fontSize) {
						sizeFound = true;
						// -1 is ok because it will just show a black <select>
						sizeSelectedIndex = actions.font.fontSize.select.indexOf(elm.style.fontSize);
					}

					elm = elm.parentElement;
				} while ((!familyFound || !sizeFound) && elm && elm !== squireRoot);

				actions.font.fontFamily.input.selectedIndex = familySelectedIndex;
				actions.font.fontSize.input.selectedIndex = sizeSelectedIndex;
			}
		});
/*
		squire.addEventListener('cursor', e => {
			console.dir({cursor:e.detail.range});
		});
		squire.addEventListener('select', e => {
			console.dir({select:e.detail.range});
		});
*/
	}

	doAction(name) {
		this.squire[name]();
		this.squire.focus();
	}

	doList(type) {
		let parent = this.squire.getSelectionClosest('UL,OL')?.nodeName,
			fn = {UL:'makeUnorderedList',OL:'makeOrderedList'};
		(parent == type) ? this.squire.removeList() : this.squire[fn[type]]();
	}
/*
	testPresenceinSelection(format, validation) {
		return validation.test(this.squire.getPath()) || this.squire.hasFormat(format);
	}
*/
	setMode(mode) {
		if (this.mode != mode) {
			let cl = this.container.classList, source = 'source' == this.mode;
			cl.remove('squire-mode-'+this.mode);
			if ('plain' == mode) {
				this.plain.value = htmlToPlain(source ? this.plain.value : this.squire.getHTML(), true);
			} else if ('source' == mode) {
				this.plain.value = this.squire.getHTML();
			} else {
				this.setData(source ? this.plain.value : plainToHtml(this.plain.value, true));
				mode = 'wysiwyg';
			}
			this.mode = mode; // 'wysiwyg' or 'plain'
			cl.add('squire-mode-'+mode);
			this.onModeChange?.();
			setTimeout(()=>this.focus(),1);
		}
		this.modeSelect.selectedIndex = 'plain' == this.mode ? 1 : 0;
	}

	on(type, fn) {
		if ('mode' == type) {
			this.onModeChange = fn;
		} else {
			this.squire.addEventListener(type, fn);
			this.plain.addEventListener(type, fn);
		}
	}

	execCommand(cmd, cfg) {
		if ('insertSignature' == cmd) {
			cfg = Object.assign({
				clearCache: false,
				isHtml: false,
				insertBefore: false,
				signature: ''
			}, cfg);

			if (cfg.clearCache) {
				this._prev_txt_sig = null;
			} else try {
				const signature = cfg.isHtml ? htmlToPlain(cfg.signature) : cfg.signature;
				if ('plain' === this.mode) {
					let
						text = this.plain.value,
						prevSignature = this._prev_txt_sig;
					if (prevSignature) {
						text = text.replace(prevSignature, '').trim();
					}
					this.plain.value = cfg.insertBefore ? '\n\n' + signature + '\n\n' + text : text + '\n\n' +  signature;
				} else {
					const squire = this.squire,
						root = squire.getRoot(),
						br = createElement('br'),
						div = createElement('div');
					div.className = 'rl-signature';
					div.innerHTML = cfg.isHtml ? cfg.signature : plainToHtml(cfg.signature);
					root.querySelectorAll('div.rl-signature').forEach(node => node.remove());
					cfg.insertBefore ? root.prepend(div) : root.append(div);
					// Move cursor above signature
					div.before(br);
					div.before(br.cloneNode());
//					squire._docWasChanged();
				}
				this._prev_txt_sig = signature;
			} catch (e) {
				console.error(e);
			}
		}
	}

	getData() {
		return 'source' == this.mode ? this.plain.value : trimLines(this.squire.getHTML());
	}

	setData(html) {
//		this.plain.value = html;
		const squire = this.squire;
		squire.setHTML(trimLines(html));
		const node = squire.getRoot(),
			range = squire.getSelection();
		range.setStart(node, 0);
		range.setEnd(node, 0);
		squire.setSelection( range );
	}

	getPlainData() {
		return this.plain.value;
	}

	setPlainData(text) {
		this.plain.value = text;
	}

	blur() {
		this.squire.blur();
	}

	focus() {
		if ('plain' == this.mode) {
			this.plain.focus();
			this.plain.setSelectionRange(0, 0);
		} else {
			this.squire.focus();
		}
	}
}

this.SquireUI = SquireUI;

})(document);
