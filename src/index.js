// document.querySelector('h1').style.color = 'green'
import {model} from './model'
import {Sidebar} from './classes/sidebar'
import {Site} from './classes/site'
import './styles/main.css'

const site = new Site('#site')

const updateCallback = newBlock => {
	model.push(newBlock)
	site.render(model)
}

new Sidebar('#panel', updateCallback)

site.render(model)

// console.log(templates['text'])
// console.log(model)
// model.forEach(block => {
// 	site.insertAdjacentHTML('beforeend', block.toHTML())
	// const generate = templates[block.type]
	// if (generate) {
	// 	const html = generate(block)
	// 	site.insertAdjacentHTML('beforeend', html)
	// }
// })

