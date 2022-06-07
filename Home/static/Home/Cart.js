function totalItems(cartdict) {
    var sum = 0;
    for (var key in cartdict) {
        sum += cartdict[key][0]
    }
    return sum
}

const cartno = document.getElementsByClassName("cartno")
cart = JSON.parse(localStorage.getItem('cart'))
cartno[0].innerHTML = totalItems(cart)

var container = document.getElementsByClassName('carts')

for (var key in cart) {
    var pdtcontainer = document.createElement('div')
    pdtcontainer.classList.add('pdts')
    var nameplc = document.createElement('p')
    var qtyplc = document.createElement('p')
    nameplc.innerHTML = 'Product Name :-' + cart[key][1]
    qtyplc.innerHTML = 'Quantity :-' + cart[key][0]

    pdtcontainer.appendChild(nameplc)
    pdtcontainer.appendChild(qtyplc)
    container[0].appendChild(pdtcontainer)
}
var clrBtn = document.getElementsByClassName('clr')
clrBtn[0].addEventListener('click', function () {
    localStorage.clear()
    window.location.reload()
})
var odrbtn=document.getElementsByClassName('orderbtn')
odrbtn[0].addEventListener('click',function(){
    alert('Order Placed ')
    localStorage.clear()
})
document.getElementById('itemJson').value=JSON.stringify(cart)


