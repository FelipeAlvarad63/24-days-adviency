import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

function render() {
  document.querySelector("#app").innerHTML = `
    <main class="container__adviency">
      <h1 class="title">Regalos</h1>
    </main>
  `
}

function init() {
  render()
}

init()
