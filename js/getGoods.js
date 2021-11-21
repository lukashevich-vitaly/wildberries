const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')
    
    getData = () => {
        fetch('https://testwildberries-d5c12-default-rtdb.firebaseio.com/db.json')
        .then((response) => response.json())
        .then((data) => console.log(data))
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            getData()
        })
    })

    localStorage.setItem('goods', JSON.stringify({ name: 'all' }))
    const goods = JSON.parse(localStorage.getItem('goods'))
    console.log(localStorage);


    localStorage.removeItem('goods')
    console.log(localStorage);
}

getGoods()