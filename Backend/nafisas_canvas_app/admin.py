from django.contrib import admin

from django.contrib import admin
from .models import Category, Product, Order, OrderItem, Cart, CartItem, Payment

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Payment)

