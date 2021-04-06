from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse

# Create your views here.

products_list =[{
    'id':1,
    'name':'iPhone 12 Pro Max',
    'price':560000,
    'category':'Phones'
},
{
    'id':2,
    'name':'iPhone 12',
    'price':445000,
    'category':'Phones'
},
{
    'id':3,
    'name':'iPhone 11',
    'price':340000,
    'category':'Phones'
},
{
    'id':4,
    'name':'Apple Watch Series 6',
    'price':224000,
    'category':'Smart Watch'
},
{
    'id':5,
    'name':'Apple Watch Series 3',
    'price':102000,
    'category':'Smart Watch'
},
{
    'id':6,
    'name':'Apple Watch Series 4',
    'price':168000,
    'category':'Smart Watch'
}
]
category_list = [{
    'id':1,
    'category_name':'Phones',
    'number_of_items':3
},
{
    'id':2,
    'category_name':'Smart Watch',
    'number_of_items':3
}
]
def products(request):
    return JsonResponse(products_list, safe = False)

def product_detail(request, product_id):
    for product in products_list:
        if product['id'] == product_id:
            return JsonResponse(product)
    return JsonResponse({'message': 'Product not found'})

def categories(request):
    return JsonResponse(category_list, safe = False)

def category_detail(request, category_id):
    for category in category_list:
        if category['id'] == category_id:
             return JsonResponse(category)
    return JsonResponse({'message': 'Category not found'})
    