const { Markup } = require('telegraf')

const category = Markup.inlineKeyboard([
	[
		Markup.button.callback('🌐Сайты', 'sites'),
		Markup.button.callback('🤖Боты', 'bots'),
	],
])
const sites = Markup.inlineKeyboard([
	[
		Markup.button.callback('Interno', 'interno'),
		Markup.button.callback('Cryptolly', 'cryptolly'),
		Markup.button.callback('Attorneyster', 'attorneyster'),
	],
	[
		Markup.button.callback('Watch', 'watch'),
		Markup.button.callback('Balaji', 'balaji'),
		Markup.button.callback('Splice', 'splice'),
	],
	[
		Markup.button.callback('HouseVop', 'houseVop'),
		Markup.button.callback('Atelier', 'atelier'),
		Markup.button.callback('XiaomiHimo', 'himo'),
	],
])

module.exports = { category, sites }
