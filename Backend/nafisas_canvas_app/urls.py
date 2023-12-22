from django.urls import path
from . import views

urlpatterns = [
    path('', views.product_list, name='product_list'),  # Assuming you have a product list view
    path('add/', views.add_product, name='add_product'),  # For adding a new product
    path('update/<int:id>/', views.update_product, name='update_product'),  # For updating a product
    path('delete/<int:id>/', views.delete_product, name='delete_product'),  # For deleting a product
]

