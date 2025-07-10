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
						select: [['15pt','15pt'],'11pt','13pt','16pt','20pt','24pt','30pt'],
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
					textColor: {
						html: '<svg width="57" height="36" viewBox="0 0 57 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '<g clip-path="url(#clip0_8409_45307)">\n' +
                            '<path d="M14.875 18H17.875" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                            '<path d="M11.0938 23.249H21.6279" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                            '<path d="M13.375 21L16.1853 12.5692C16.246 12.3869 16.504 12.3869 16.5647 12.5692L19.375 21" stroke="black" stroke-width="1.5" stroke-linecap="round"/>\n' +
                            '</g>\n' +
                            '<g clip-path="url(#clip1_8409_45307)">\n' +
                            '<g clip-path="url(#clip2_8409_45307)">\n' +
                            '<path d="M45.1281 15.0839C45.4222 14.7952 45.8946 14.7997 46.1831 15.0939C46.4714 15.3879 46.467 15.8599 46.1732 16.1484L40.9063 21.32C40.8134 21.4118 40.7032 21.4843 40.5822 21.5334C40.4611 21.5824 40.3315 21.6071 40.2009 21.6058C40.0703 21.6046 39.9413 21.5776 39.8211 21.5263C39.701 21.475 39.5922 21.4005 39.501 21.307L34.3284 16.0382C34.04 15.7444 34.0443 15.2724 34.3382 14.984C34.632 14.6956 35.1039 14.7 35.3923 14.9937L40.2152 19.9063L45.1281 15.0839Z" fill="black"/>\n' +
                            '</g>\n' +
                            '</g>\n' +
                            '<defs>\n' +
                            '<clipPath id="clip0_8409_45307">\n' +
                            '<rect width="16" height="16" fill="white" transform="translate(8.375 10)"/>\n' +
                            '</clipPath>\n' +
                            '<clipPath id="clip1_8409_45307">\n' +
                            '<rect width="16" height="16" fill="white" transform="translate(32.375 10)"/>\n' +
                            '</clipPath>\n' +
                            '<clipPath id="clip2_8409_45307">\n' +
                            '<rect width="11.9347" height="16" fill="white" transform="translate(48.4844 12.1484) rotate(90.5324)"/>\n' +
                            '</clipPath>\n' +
                            '</defs>\n' +
                            '</svg>\n',
						cmd: doClr('color')
					},
					backgroundColor: {
						html: '<svg width="56" height="36" viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
							'<rect x="8" y="10" width="16" height="16" rx="4" fill="#D74642"/>\n' +
							'<g clip-path="url(#clip0_8391_43987)">\n' +
							'<g clip-path="url(#clip1_8391_43987)">\n' +
							'<path d="M44.7531 15.0839C45.0472 14.7952 45.5196 14.7997 45.8081 15.0939C46.0964 15.3879 46.092 15.8599 45.7982 16.1484L40.5313 21.32C40.4384 21.4118 40.3282 21.4843 40.2072 21.5334C40.0861 21.5824 39.9565 21.6071 39.8259 21.6058C39.6953 21.6046 39.5663 21.5776 39.4461 21.5263C39.326 21.475 39.2172 21.4005 39.126 21.307L33.9534 16.0382C33.665 15.7444 33.6693 15.2724 33.9632 14.984C34.257 14.6956 34.7289 14.7 35.0173 14.9937L39.8402 19.9063L44.7531 15.0839Z" fill="black"/>\n' +
							'</g>\n' +
							'</g>\n' +
							'<defs>\n' +
							'<clipPath id="clip0_8391_43987">\n' +
							'<rect width="16" height="16" fill="white" transform="translate(32 10)"/>\n' +
							'</clipPath>\n' +
							'<clipPath id="clip1_8391_43987">\n' +
							'<rect width="11.9347" height="16" fill="white" transform="translate(48.1094 12.1484) rotate(90.5324)"/>\n' +
							'</clipPath>\n' +
							'</defs>\n' +
							'</svg>\n', /* 🎨 ▧ */
						cmd: doClr('backgroundColor')
					},
				},
				inline: {
					bold: {
						html: 'B',
						cmd: () => this.doAction('bold'),
						key: 'B',
						matches: 'B,STRONG'
					},
					italic: {
						html: 'I',
						cmd: () => this.doAction('italic'),
						key: 'I',
						matches: 'I'
					},
					underline: {
						html: '<u>U</u>',
						cmd: () => this.doAction('underline'),
						key: 'U',
						matches: 'U'
					},
					strike: {
						html: '<s>S</s>',
						cmd: () => this.doAction('strikethrough'),
						key: 'Shift + 7',
						matches: 'S'
					},
					sub: {
						html: 'Xₙ',
						cmd: () => this.doAction('subscript'),
						key: 'Shift + 5',
						matches: 'SUB'
					},
					sup: {
						html: 'Xⁿ',
						cmd: () => this.doAction('superscript'),
						key: 'Shift + 6',
						matches: 'SUP'
					}
				},
				block: {
					ol: {
						html: '#',
						cmd: () => this.doList('OL'),
						key: 'Shift + 8',
						matches: 'OL'
					},
					ul: {
						html: '⋮',
						cmd: () => this.doList('UL'),
						key: 'Shift + 9',
						matches: 'UL'
					},
					quote: {
						html: '"',
						cmd: () => {
							let parent = squire.getSelectionClosest('UL,OL,BLOCKQUOTE')?.nodeName;
							('BLOCKQUOTE' == parent) ? squire.decreaseQuoteLevel() : squire.increaseQuoteLevel();
						},
						matches: 'BLOCKQUOTE'
					},
					indentDecrease: {
						html: '⇤',
						cmd: () => squire.changeIndentationLevel('decrease'),
						key: ']'
					},
					indentIncrease: {
						html: '⇥',
						cmd: () => squire.changeIndentationLevel('increase'),
						key: '['
					}
				},
				targets: {
					link: {
						html: '🔗',
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
						html: '🖼️',
						cmd: () => {
							let node = squire.getSelectionClosest('IMG'),
								src = prompt("Image", node?.src || "https://");
							src?.length ? squire.insertImage(src) : node?.remove();
						},
						matches: 'IMG'
					},
					imageUpload: {
						html: '📂️',
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
			add('#4E79A7');
			add('#F28E2B');
			add('#E15759');
			add('#76B7B2');
			add('#59A14F');
			add('#EDC948');
			add('#B07AA1');
			add('#FF9DA7');
			add('#9C755F');
			add('#BAB0AC');
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
