const button = document.querySelector('.jsModalButton')
button.addEventListener('click', event => {
    document.body.classList.add('modal-is-open')
})

const closeButton = document.querySelector('.jsModalClose')
closeButton.addEventListener('click', event => {
    document.body.classList.remove('modal-is-open')
})

