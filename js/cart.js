const cart = () => {
    const cartBtn = document.querySelector('.button-cart')
    const cart = document.getElementById('modal-cart')
    const closeCart = document.querySelector('.modal-close')

    cartBtn.addEventListener('click', () => {
        cart.style.display = 'flex'
    })

    closeCart.addEventListener('click', () => {
        cart.style.display = ''
    })
}

cart()