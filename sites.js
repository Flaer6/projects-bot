const { Telegraf, Markup } = require('telegraf')

const interno = ctx =>
	ctx.replyWithHTML(
		`
<b>INTERNO</b>

<b>Тип:</b> Лендинг
<b>Стек:</b> HTML, JS, SCSS
`,
		Markup.inlineKeyboard([
			[
				Markup.button.url(
					'GitHub Репозиторий',
					'https://github.com/Flaer6/Interno'
				),
				Markup.button.url(
					'Перейти на сайт',
					'https://flaer6.github.io/Interno/'
				),
			],
		])
	)
const cryptolly = ctx =>
	ctx.replyWithHTML(
		`
<b>CRYPTOLLY</b>

<b>Тип:</b> Лендинг
<b>Стек:</b> React, CSS, Swiper, Axios
`,
		Markup.inlineKeyboard([
			[
				Markup.button.url(
					'GitHub Репозиторий',
					'https://github.com/Flaer6/Cryptolly'
				),
				Markup.button.url(
					'Перейти на сайт',
					'https://cryptolly-beta.vercel.app/'
				),
			],
		])
	)
const attorneyster = ctx =>
	ctx.replyWithHTML(
		`
<b>ATTORNEYSTER</b>

<b>Тип:</b> Лендинг
<b>Стек:</b> HTML, CSS, JS
`,
		Markup.inlineKeyboard([
			[
				Markup.button.url(
					'GitHub Репозиторий',
					'https://github.com/Flaer6/attorneyster'
				),
				Markup.button.url(
					'Перейти на сайт',
					'https://flaer6.github.io/attorneyster/'
				),
			],
		])
	)
const watch = ctx =>
	ctx.replyWithHTML(
		`
<b>WATCH</b>

<b>Тип:</b> Лендинг
<b>Стек:</b> HTML, JS, SCSS
`,
		Markup.inlineKeyboard([
			[
				Markup.button.url(
					'GitHub Репозиторий',
					'https://github.com/Flaer6/watch'
				),
				Markup.button.url('Перейти на сайт', 'https://flaer6.github.io/watch/'),
			],
		])
	)
const balaji = ctx =>
	ctx.replyWithHTML(
		`
<b>BALAJI</b>

<b>Тип:</b> Лендинг
<b>Стек:</b> HTML, JS, SCSS
`,
		Markup.inlineKeyboard([
			[
				Markup.button.url(
					'GitHub Репозиторий',
					'https://github.com/Flaer6/balaji'
				),
				Markup.button.url(
					'Перейти на сайт',
					'https://flaer6.github.io/balaji/'
				),
			],
		])
	)
const splice = ctx =>
	ctx.replyWithHTML(
		`
<b>SPLICE</b>

<b>Тип:</b> Лендинг
<b>Стек:</b> HTML, CSS, JS
`,
		Markup.inlineKeyboard([
			[
				Markup.button.url(
					'GitHub Репозиторий',
					'https://github.com/Flaer6/splice'
				),
				Markup.button.url(
					'Перейти на сайт',
					'https://flaer6.github.io/splice/'
				),
			],
		])
	)
const houseVop = ctx =>
	ctx.replyWithHTML(
		`
<b>HouseVop</b>

<b>Тип:</b> Лендинг
<b>Стек:</b> HTML, CSS, JS, Stylus
`,
		Markup.inlineKeyboard([
			[
				Markup.button.url(
					'GitHub Репозиторий',
					'https://github.com/Flaer6/HouseVop'
				),
				Markup.button.url(
					'Перейти на сайт',
					'https://flaer6.github.io/HouseVop/'
				),
			],
		])
	)
const atelier = ctx =>
	ctx.replyWithHTML(
		`
<b>ATELIER</b>

<b>Тип:</b> Лендинг
<b>Стек:</b> HTML, JS, SCSS
`,
		Markup.inlineKeyboard([
			[
				Markup.button.url(
					'GitHub Репозиторий',
					'https://github.com/Flaer6/Atelier'
				),
				Markup.button.url(
					'Перейти на сайт',
					'https://flaer6.github.io/Atelier/'
				),
			],
		])
	)
const himo = ctx =>
	ctx.replyWithHTML(
		`
<b>XiaomiHimo</b>

<b>Тип:</b> Лендинг
<b>Стек:</b> HTML, CSS, JS, Slick js
`,
		Markup.inlineKeyboard([
			[
				Markup.button.url(
					'GitHub Репозиторий',
					'https://github.com/Flaer6/XiaomiHimo'
				),
				Markup.button.url(
					'Перейти на сайт',
					'https://flaer6.github.io/XiaomiHimo/'
				),
			],
		])
	)

module.exports = {
	interno,
	cryptolly,
	watch,
	balaji,
	splice,
	houseVop,
	atelier,
	himo,
	attorneyster,
}
