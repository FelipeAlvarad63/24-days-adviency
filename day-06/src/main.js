import './style.css'
import { updateListHtml } from './utils'

const giftList = [
  {id: 1, name: "Medias"}
]

function render() {
  document.querySelector("#app").innerHTML = `
    <main class="container__adviency">
      <h1 class="title">Regalos</h1>
      <form class="container__form">
        <input id="input-add-gift" type="text" placeholder="Agregar regalo..." />
        <button type="submit">Agregar</button>
      </form>

      <ul class="container__gifts">
        ${updateListHtml(giftList)}
      </ul>
    </main>
  `
}

function updateGiftList() {
  const contGifts = document.querySelector(".container__gifts")
  contGifts.innerHTML = updateListHtml(giftList)
}

function handleFormSubmit(event) {
  event.preventDefault()
  const inputAddGift = document.getElementById('input-add-gift')
  const newGift = inputAddGift.value.trim()

  if (newGift) {
    giftList.push({id: Date.now(), name: newGift})
    updateGiftList(giftList)
    inputAddGift.value = ""
  }
}

function handleRemoveGift(event) {
  if (event.target.classList.contains("btn-remove-gift")) {
    console.log(event);
    const giftItem = event.target.closest('.gift-item')
    giftList.splice(giftList.findIndex(gift => gift.id == parseInt(giftItem.dataset.id)), 1)
    updateGiftList(giftList)
    console.log(giftList);
  }
}

function init() {
  render()
  const form = document.querySelector(".container__form")
  form.addEventListener('submit', handleFormSubmit)

  const contGifts = document.querySelector(".container__gifts")
  contGifts.addEventListener('click', handleRemoveGift)
}

init()
