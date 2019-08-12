const galleryItems = document.querySelectorAll('.gallery-item-shell')
const modal = document.querySelector(".modal")
const modalImage = document.querySelector(".modal-content")
const modalClose = document.querySelector(".modal-close")
const bodyTag = document.querySelector('.js-body')

galleryItems.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = 'block'
        event.preventDefault()

        let galleryItem = this.querySelector('.gallery-item')
        let ratioBox = galleryItem.querySelector('.gallery-image-ratio-box')
        let imgTag = ratioBox.querySelector('img')
        imgSrc = imgTag.getAttribute('src')

        console.log(imgSrc)

        modalImage.innerHTML = `<img src="${imgSrc}">`
    })
})

modalClose.addEventListener("click", function() {
    closeModal()
})

modal.addEventListener("click", function() {
    closeModal()
})

document.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode == 27) {
        closeModal()
    }
}

function closeModal() {
    modal.style.display = "none"
}

