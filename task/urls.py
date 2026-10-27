from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index, name='Home'),
    path('dashboard/', views.Dashboardview, name='Dashboard'),
    
]