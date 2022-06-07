from unicodedata import category
from django.shortcuts import render
from django.shortcuts import HttpResponse
from .models import Order, Product, Contact

# Create your views here.


def index(request):
    allpdt = Product.objects.all()
    allprod = []

    catprod = Product.objects.values("category")
    cats = {item["category"] for item in catprod}
    # print(cats)
    for cat in cats:
        temp = Product.objects.filter(category=cat)
        allprod.append(temp)
    print(allprod)
    pdt = {"product": allprod}
    # print(allpdt)
    return render(request, "Home/index.html", pdt)


def tracker(request):
    count=0
    orders_items=Order.objects.all()
    odr={'Orders':orders_items,'count':count}
    
    print(odr)
    return render(request, "Home/Tracker.html",odr)


def contacts(request):
    if request.method == "POST":
        name = request.POST.get("name", "")
        email = request.POST.get("email", "")
        Expmsg = request.POST.get("Messages",'')
        contact = Contact(name=name, email=email, msg=Expmsg)
        contact.save()

    return render(request, "Home/ContactUs.html")


def search(request):
    return HttpResponse("search Page")


def checkout(request):
    allpdt = Product.objects.all()
    pdt = {"product": allpdt}
    if request.method == "POST":
        itemJSoN=request.POST.get("itemJson", "")
        name = request.POST.get("name", "")
        email = request.POST.get("email", "")
        address=request.POST.get("address", "")
        city=request.POST.get("city", "")
        state=request.POST.get("state", "")
        zip_code=request.POST.get("zipCode", "")
        order = Order(name=name, email=email,address=address,Zip_code=zip_code,city=city,state=state,items_json=itemJSoN)
        order.save()
    return render(request,"Home/Cart.html",pdt)


def productView(request, myid):
    pdts = Product.objects.filter(id=myid)
    print(pdts)
    return render(request, "Home/ProductView.html", {"onepdts": pdts})


def AboutUs(request):
    return render(request, "Home/AboutUs.html")
