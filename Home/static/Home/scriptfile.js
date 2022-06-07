console.log("fuck you ")
localStorage.setItem('lol', 'aritra')
const cartbtn = document.getElementsByClassName("cart")
console.log(cartbtn)
const cartno = document.getElementsByClassName("cartno")

function totalItems(cartdict) {
    var sum = 0;
    for (var key in cartdict) {
        sum += cartdict[key][0]
    }
    return sum
}

if (localStorage.getItem('cart') == null) {
    var cart = {}
}
else {
    cart = JSON.parse(localStorage.getItem('cart'))
    cartno[0].innerHTML = totalItems(cart)
}



for (let i = 0; i < cartbtn.length; i++) {
    cartbtn[i].addEventListener('click', function () {
        console.log('clicked')
        var idstr = cartbtn[i].id
        console.log(idstr)
        if (cart[idstr] != undefined) {
            var qty = cart[idstr][0] + 1
            var name = document.getElementById('pr' + idstr).innerHTML
            cart[idstr] = [qty, name]
        }
        else {
            qty = 1
            var name = document.getElementById('pr' + idstr).innerHTML
            console.log('pr' + idstr)
            console.log(name)
            cart[idstr] = [qty, name]
        }
        console.log(cart)
        localStorage.setItem('cart', JSON.stringify(cart))
        cartno[0].innerHTML = totalItems(cart)
    })
}
