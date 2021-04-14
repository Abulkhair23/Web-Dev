from django.urls import path, re_path

from api import views

urlpatterns = [
    path('api/companies', views.company_list),
    path('api/companies/<int:company_id>/', views.company_detail),
    path('api/vacancies', views.vacancy_list),
    path('api/vacancies/<int:vacancy_id>/', views.vacancy_detail),
    path('api/vacancies/top_ten/', views.vacancy_topten ),
    path('api/companies/<int:company_id>/vacancies', views.company_vacancy)
]