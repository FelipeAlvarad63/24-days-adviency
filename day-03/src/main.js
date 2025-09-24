import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="container__adviency">
    <h1 class="title">Regalos</h1>
    <ul class="container__gifts">
      <li>Medias</li>
      <li>Caramelos</li>
      <li>Vino</li>
    </ul>

    <form class="container__form">
      <input class="input-add-gift" type="text" placeholder="Añadir regalo..."/>
      <button type="submit">Añadir</button>
    </form>
  </main>
`;

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