function totalItems(cartdict) {
    var sum = 0;
    for (var key in cartdict) {
        sum += cartdict[key][0]
    }
    return sum
}



const cartno = document.getElementsByClassName("cartno")
cartno[0].innerHTML = totalItems(cart)


const cartbtn = document.getElementsByClassName("cart")
console.log(cartbtn)


if (localStorage.getItem('cart') == null) {
    var cart = {}
}
else {
    cart = JSON.parse(localStorage.getItem('cart'))
    cartno[0].innerHTML = totalItems(cart)
}
console.log(cart)
cartbtn[0].addEventListener('click', function () {
    var idstr = cartbtn[0].id
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

var buybtn = document.getElementsByClassName('Buy')
var buysection = document.getElementsByClassName('buyNow')
var tempjson = {}
buybtn[0].addEventListener('click', function () {
    buysection[0].style.display = 'block'
    var pdtname = document.getElementById('pr' + cartbtn[0].id)
    var temp = cartbtn[0].id
    tempjson[temp] = [1, pdtname.innerHTML]
    var st = JSON.stringify(tempjson)
    console.log(st)
    document.getElementById('itemJson').value = JSON.stringify(tempjson)
    console.log(tempjson)
})
buysection[0].style.display = 'none'
