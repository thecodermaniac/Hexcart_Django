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


// console.log(jsonodr)
var id = document.getElementsByTagName('h2')
console.log(id[0].innerHTML)
for (let ls in id) {
    ordId = id[ls].innerHTML
    var odritm = document.getElementById(ordId)
    var jsonodr = JSON.parse(odritm.innerHTML)
    odritm.innerHTML = ''
    for (item in jsonodr) {
        var qty = document.createElement('p')
        var pdtname = document.createElement('p')
        qty.innerHTML = 'Quantity: ' + jsonodr[item][0]
        pdtname.innerHTML = 'Product Name: ' + jsonodr[item][1]
        odritm.appendChild(qty)
        odritm.appendChild(pdtname)
    }
}

