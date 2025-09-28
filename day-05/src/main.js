import './style.css'
import { updateListHtml } from "./utils"

const giftList = [
  {id: 1, name: "Medias"}
]

function render() {
  document.querySelector('#app').innerHTML = `
  <main class="container__adviency">
    <h1 class="title">Regalos</h1>
    <form class="container__form">
      <input id="input-add-gift" type="text" placeholder="Agregar regalo..."/>
      <button >Agregar</button>
    </form>
    <ul class="container__gifts">
      ${updateListHtml(giftList)}
    </ul>
    <button id="btn-remove-all">Borrar todo</button>
  </main>
`
}

function updateGiftList() {
  const contGiftList = document.querySelector(".container__gifts")
  contGiftList.innerHTML = updateListHtml(giftList)
}

function handleFormSubmit(event) {
  event.preventDefault()
  const btnAddGift = document.querySelector("#input-add-gift")
  const newGift = btnAddGift.value.trim()

  if (newGift) {
    giftList.push({id: Date.now(), name: newGift})
    updateGiftList(giftList)
    btnAddGift.value = ""
  }
}

function handleRemoveGift(event) {
  if (event.target.classList.contains('btn-remove-gift')) {
    const giftItem = event.target.closest(".gift-item")
    if (giftItem) {
      giftList.splice(giftList.findIndex(gift => gift.id === parseInt(giftItem.dataset.id)), 1)
      updateGiftList(giftList)
    }
  }
}

function handleRemoveAllGifts() {
  giftList.splice(0, giftList.length)
  updateGiftList(giftList)
}

function init() {
  render()
  const form = document.querySelector('.container__form')
  form.addEventListener('submit', handleFormSubmit)

  const contGiftList = document.querySelector(".container__gifts")
  contGiftList.addEventListener('click', handleRemoveGift)

  const btnRemoveAll = document.getElementById("btn-remove-all")
  btnRemoveAll.addEventListener("click", handleRemoveAllGifts)
}

init();