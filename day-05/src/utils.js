export function updateListHtml(obj) {
    let list = obj

    if (!list || list.length < 1) return `<p>No hay regalos</p>`

    console.log(list);

    return list.map(gift =>
        `<li class="gift-item" data-id="${gift.id}">
            <p>${gift.name}</p>
            <button class="btn-remove-gift">X</button>
        </li>`
    ).join('')
}