export function updateListHtml(obj) {
    const list = obj

    if (!list || list.length < 1) return `<li>No hay regalos</li>`

    return list.map(gift =>
        `<li class="gift-item" date-id="${gift.id}">
            <p>${gift.name}</p>
            <button class="btn-remove-gift">x</button>
        </li>`
    ).join('')
}