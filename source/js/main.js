const galleryItems = document.querySelectorAll('.gallery-item-shell')
const modal = document.querySelector(".modal")
const modalImage = document.querySelector(".modal-content")
const modalClose = document.querySelector(".modal-close")
const bodyTag = document.querySelector('.js-body')

    const loader = document.querySelector('.js-loader')
    const main = document.querySelector('.js-main')

galleryItems.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = 'block'
        event.preventDefault()

        let galleryItem = this.querySelector('.gallery-item')
        let ratioBox = galleryItem.querySelector('.gallery-image-ratio-box')
        let imgTag = ratioBox.querySelector('img')
        imgSrc = imgTag.getAttribute('src')

        console.log(imgSrc)

        modalImage.innerHTML = `<img src="${imgSrc}" style="object-fit:cover; width:100%;">`
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

window.addEventListener('load', () => {
    loader.style.animationPlayState = 'running';
})

loader.addEventListener('animationend', () => {
    main.style.opacity = '1';
})

