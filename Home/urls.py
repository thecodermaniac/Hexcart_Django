from django.urls import path
from . import views

urlpatterns = [
    path("",views.index),
    path("AboutUs",views.AboutUs,name='about us'),
    path("Products/<int:myid>",views.productView,name='product view'),
    path("Cart",views.checkout),
    path("search/",views.search),
    path("ContactUs",views.contacts),
    path("Tracker",views.tracker)
]