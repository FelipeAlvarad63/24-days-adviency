import './style.css';
import updateListHtml from './update-gifts-list';

// Datos iniciales
let giftList = [
  { id: 1, name: 'Medias' },
  { id: 2, name: 'Caramelos' },
  { id: 3, name: 'Vino' },
];

// Renderiza la aplicación principal
function renderApp() {
  document.querySelector('#app').innerHTML = `
    <main class="container__adviency">
      <h1 class="title">Regalos</h1>
      <form class="container__form">
        <input id="input-add-gift" type="text" placeholder="Agregar regalo..."/>
        <button type="submit">Agregar</button>
      </form>
      <ul class="container__gifts">
        ${updateListHtml(giftList)}
      </ul>
    </main>
  `;
}

// Actualiza la lista de regalos en el DOM
function updateGiftList() {
  const contGiftList = document.querySelector('.container__gifts');
  contGiftList.innerHTML = updateListHtml(giftList);
}

// Maneja el evento de agregar regalo
function handleFormSubmit(event) {
  event.preventDefault();
  const inputAddGift = document.querySelector('#input-add-gift');
  const newGift = inputAddGift.value.trim();
  if (newGift) {
    giftList.push({ id: Date.now(), name: newGift });
    updateGiftList();
    inputAddGift.value = '';
  }
}

function handleRemoveGift(event) {
  if (event.target.classList.contains('btn-remove-gift')) {
    const giftItem = event.target.closest('.gift-item')
    if (giftItem) {
      giftList.splice(giftList.findIndex(gift => gift.id === parseInt(giftItem.dataset.id)), 1);
      updateGiftList()
    }
  }
}

// Inicializa la app y los eventos
function init() {
  renderApp();
  const form = document.querySelector('.container__form');
  form.addEventListener('submit', handleFormSubmit);

  const contGiftList = document.querySelector('.container__gifts');
  contGiftList.addEventListener('click', handleRemoveGift)
}

init();