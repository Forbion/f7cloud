import babel from 'rollup-plugin-babel';
import includePaths from 'rollup-plugin-includepaths';
import externalGlobals from "rollup-plugin-external-globals";
import html from 'rollup-plugin-html';
import { terser } from "rollup-plugin-terser";
import resolve from '@rollup/plugin-node-resolve'; // Добавляем плагин
import commonjs from '@rollup/plugin-commonjs'; // Добавляем плагин

let includePathOptions = {
	include: {},
	paths: ['dev'],
	external: [],
	extensions: ['.js', '.html']
};

let babelConfig = {
	exclude: 'node_modules/**',
	babelrc: false,
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {"chrome": "60"},
				loose: true,
				modules: false
			}
		]
	],
	plugins: [
		[
			'@babel/plugin-proposal-decorators',
			{
				legacy: true
			}
		],
		'@babel/plugin-proposal-class-properties'
	]
};

let terserConfig = {
	output: {
		comments: false
	},
	keep_classnames: true,
	compress: {
		ecma: 2020,
		drop_console: true
	}
};

export default [{
	external: ['ko', '@nextcloud/axios'], // Добавляем в external
	input: 'dev/admin.js',
	output: [
		{file: 'snappymail/v/0.0.0/static/js/admin.js', format: 'iife', globals: {
				'ko': 'ko',
				'@nextcloud/axios': 'axios' // Добавляем глобальную переменную
			}},
		{file: 'snappymail/v/0.0.0/static/js/min/admin.min.js', format: 'iife', plugins: [terser(terserConfig)], globals: {
				'ko': 'ko',
				'@nextcloud/axios': 'axios'
			}}
	],
	plugins: [
		resolve(), // Добавляем плагин resolve
		commonjs(), // Добавляем плагин commonjs
		babel(babelConfig),
		includePaths(includePathOptions),
		externalGlobals({
			ko: 'ko',
			'@nextcloud/axios': 'axios' // Добавляем глобальную переменную
		})
	],
}, {
	external: ['ko', '@nextcloud/axios'], // Добавляем в external
	input: 'dev/app.js',
	output: [
		{file: 'snappymail/v/0.0.0/static/js/app.js', format: 'iife', globals: {
				'ko': 'ko',
				'@nextcloud/axios': 'axios'
			}},
		{file: 'snappymail/v/0.0.0/static/js/min/app.min.js', format: 'iife', plugins: [terser(terserConfig)], globals: {
				'ko': 'ko',
				'@nextcloud/axios': 'axios'
			}}
	],
	plugins: [
		resolve(), // Добавляем плагин resolve
		commonjs(), // Добавляем плагин commonjs
		babel(babelConfig),
		includePaths(includePathOptions),
		externalGlobals({
			ko: 'ko',
			'@nextcloud/axios': 'axios' // Добавляем глобальную переменную
		}),
		html({
			include: '**/*.html'
		})
	]
}];