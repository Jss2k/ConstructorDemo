import image from './assets/dima.png'
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks.js'
import {css} from './utils'
const text = `
	Ну здесь допустим пусть будет описание происходящего на странице, каакая-нибудь ну очень интересная и помогающая информация
`

export const model = [
	new TitleBlock('Первый заголовочек', {
		tag: 'h2',
		styles:  css({
			padding: '10px', 
			color: '#616161', 
			background: '#bababa',
			'text-shadow': '#e0e0e0 1px 1px 0',
			'text-align': 'center'
			})
	}),
	new ImageBlock(image,  {
		styles: 'padding: 0; display: flex; justify-content: center;',
		alt: 'image',
		imageStyles: 'width: 400px; height: 500px;'
	}),
	new TextBlock(text,  {
		styles: 'position: relative; padding: 20px; overflow: hidden; border: none; color: rgba(255,255,255,1); text-align: center; -o-text-overflow: ellipsis; text-overflow: ellipsis; background: -webkit-linear-gradient(-90deg, rgba(131,226,131,0.7) 0, rgba(124,188,10,1) 100%); background: -moz-linear-gradient(180deg, rgba(131,226,131,0.7) 0, rgba(124,188,10,1) 100%); background: linear-gradient(180deg, rgba(131,226,131,0.7) 0, rgba(124,188,10,1) 100%); background-position: 50% 50%; -webkit-background-origin: padding-box; background-origin: padding-box; -webkit-background-clip: border-box; background-clip: border-box; -webkit-background-size: auto auto; background-size: auto auto; -webkit-box-shadow: 2px 1px 1px 0 rgba(0,0,0,0.3) ; box-shadow: 2px 1px 1px 0 rgba(0,0,0,0.3) ; text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;'
	}),
	new TextColumnsBlock([
		'здесь немного информации по каждому блоку отдельно',
		'и здесь немного информации по каждому блоку отдельно',
		'и ещё здесь немного информации по каждому блоку отдельно'
	], {
		styles: 'padding: 10px; box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);'
	})
]