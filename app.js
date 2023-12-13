const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const commands = require('./commands')
const { category, sites } = require('./keyboards')
const {
	interno,
	cryptolly,
	watch,
	balaji,
	splice,
	houseVop,
	atelier,
	himo,
	attorneyster,
} = require('./sites')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx =>
	ctx.replyWithHTML(
		`Привет <b>${
			ctx.message.from.first_name ? ctx.message.from.first_name : 'Незнакомец'
		}</b>, нажми на /projects чтобы посмотреть мои проекты`
	)
)
bot.help(ctx => ctx.reply(`Помощь по боту:\n ${commands}`))
bot.command('projects', async ctx => {
	try {
		await ctx.replyWithHTML('<b>🗂Выберите Категорию:</b>', category)
	} catch (e) {
		console.error(e)
	}
})
bot.action('sites', async ctx => {
	try {
		await ctx.replyWithHTML('<b>🌐Выберите Сайт:</b>', sites)
	} catch (e) {
		console.error(e)
	}
})
bot.action('bots', ctx => ctx.reply('Здесь пока ничего нет :('))

//Сайты
bot.action('interno', interno)
bot.action('cryptolly', cryptolly)
bot.action('attorneyster', attorneyster)
bot.action('watch', watch)
bot.action('balaji', balaji)
bot.action('splice', splice)
bot.action('houseVop', houseVop)
bot.action('atelier', atelier)
bot.action('himo', himo)

bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
