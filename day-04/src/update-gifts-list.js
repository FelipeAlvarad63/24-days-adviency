const updateListHtml = function(obj) {
  let list = obj

  if (!list) return `<p>No hay regalos</p>`

  return list.map(gift =>
    `<li class="gift-item" data-id="${gift.id}">
        <p>${gift.name}</p>
        <button class="btn-remove-gift">x</button>
      </li>`
  ).join("")
}

export default updateListHtml