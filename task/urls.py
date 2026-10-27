from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index, name='Home'),
    path('login/', views.Loginview, name='Login'),
    path('register/', views.Registerview, name='Register'),
    
]