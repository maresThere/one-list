if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const main = () => {
const button = document.querySelector('button')
const input = document.querySelector('input')
const list = document.querySelector('ul.toDoLIst')
const form = document.querySelector('form')

function addItem() {
let item = input.value
const li = document.createElement('li')
li.textContent = item
list.appendChild(li)

}

button.addEventListener('click', (event) => {
  event.preventDefault()
  let item = input.value
  const li = document.createElement('li')
  li.textContent = item
  list.appendChild(li)
  form.reset()
  let dblclk = false
  li.addEventListener('click', ()=> {
    setTimeout(() => {
      if (!dblclk) {
        li.style.textDecoration = 'line-through'
      }
    }, 300)
  })
  li.addEventListener('dblclick', (event) => {
    dblclk = true
    list.removeChild(li)
  })
})

}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
