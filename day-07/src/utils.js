export function updateListHtml(obj) {
    const list = obj

    if (!list || list.length < 1) return `<li class="label-no-gifts">No hay regalos! Agregá algo!</li>`

    return list.map(gift => `
        <li class="gift-item" data-id="${gift.id}">
            <p>${gift.name}</p>
            <button id="btn-remove-gift">x</button> 
        </li>
    `).join('')
}