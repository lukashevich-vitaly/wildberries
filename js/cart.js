const cart = () => {
    const cartBtn = document.querySelector('.button-cart')
    const cart = document.getElementById('modal-cart')
    const closeCart = document.querySelector('.modal-close')
    const goodsContainer = document.querySelector('.long-goods-list')
    const cartTable = document.querySelector('.cart-table__goods')

    const addToCart = (id) => {
        const goods = JSON.parse(localStorage.getItem('goods'))
        const clickedGood = goods.find(good => good.id === id)
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []
        
        if (cart.some(good => good.id === clickedGood.id)) {
            cart.map(good => {
                if (good.id === clickedGood.id) {
                    good.count++
                }
                return good
            })
        } else {
            clickedGood.count = 1
            cart.push(clickedGood)
        }

        localStorage.setItem('cart', JSON.stringify(cart))
        
    }

    renderGoods = (goods) => {
        goods.forEach(good => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
                <td>${good.name}</td>
                <td>${good.price}$</td>
                <td><button class="cart-btn-minus"">-</button></td>
                <td>${good.count}</td>
                <td><button class=" cart-btn-plus"">+</button></td>
                <td>${+good.price * +good.count}$</td>
                <td><button class="cart-btn-delete"">x</button></td>
            `
            cartTable.append(tr)

            tr.addEventListener('click', (event) => {
                if (event.target.classList.contains('cart-btn-minus')) {
                    console.log('minus');
                } else if (event.target.classList.contains('cart-btn-plus')) {
                    console.log('plus');
                } else if (event.target.classList.contains('cart-btn-delete')) {
                    console.log('delete');
                }
            })
        });
    }

    cartBtn.addEventListener('click', () => {
        const cartArray = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []
        
            renderGoods(cartArray)
        cart.style.display = 'flex'
    })

    closeCart.addEventListener('click', () => {
        cart.style.display = ''
    })

    if (goodsContainer) {
        goodsContainer.addEventListener('click', (event) => {
            if (event.target.closest('.add-to-cart')){
                const buttonToCart = event.target.closest('.add-to-cart')
                const goodId = buttonToCart.dataset.id
                
                addToCart(goodId)
            }
        })
    }
}

cart()