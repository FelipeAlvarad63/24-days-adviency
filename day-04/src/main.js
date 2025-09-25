import './style.css'

const giftList = [
  { "id": 1, "name": "Medias" },
  { "id": 2, "name": "Caramelos" },
  { "id": 3, "name": "Vino" }
]

document.querySelector('#app').innerHTML = `
  <main class="container__adviency">
    <h1 class="title">Regalos</h1>
    <ul class="container__gifts">
      <!-- Gifts will be rendered here -->
      ${giftList.map(gift => `
        <li class="gift-item" data-id="${gift.id}">
          <p>${gift.name}</p>
          <button class="btn-remove-gift">x</button>
        </li>
      `).join('')}
    </ul>

    <form class="container__form">
      <input id="input-add-gift" type="text" placeholder="Agregar regalo..."/>
      <button type="submit">Agregar</button>
    </form>
  </main>
`

const form = document.querySelector('.container__form');

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const inputAddGift = document.querySelector('.input-add-gift')
  const newGift = inputAddGift.value.trim();

  if (newGift) {
    const giftList = document.querySelector('.container__gifts');
    const li = document.createElement('li');
    li.textContent = newGift;
    giftList.appendChild(li);
    inputAddGift.value = '';
  }
})

