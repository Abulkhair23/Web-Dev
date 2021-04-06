from django.urls import path, re_path
from api.views import *

urlpatterns = [
    path('products/', products),
    path('categories/', categories),
    path('products/<int:product_id>', product_detail),
    path('categories/<int:category_id>', category_detail)
]