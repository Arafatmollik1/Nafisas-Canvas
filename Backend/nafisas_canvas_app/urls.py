from django.urls import path
from . import views
from .views import home, add_product, product_list, update_product, delete_product, ProductList, ProductDetail

urlpatterns = [
    path('', views.product_list, name='product_list'),  # Assuming you have a product list view
    path('add/', views.add_product, name='add_product'),  # For adding a new product
    path('update/<int:id>/', views.update_product, name='update_product'),  # For updating a product
    path('delete/<int:id>/', views.delete_product, name='delete_product'),  # For deleting a product
    path('api/products/', ProductList.as_view(), name='product-list'),
    path('api/products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    
]

