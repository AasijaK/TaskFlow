from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index, name='Home'),
    path('login/', views.Loginview, name='Login'),
    path('register/', views.Registerview, name='Register'),
    path('dashboard/', views.Dashboardview, name='Dashboard'),
    path('tasks/', views.Tasksview, name='Tasks'),
    path('taskform/', views.TaskFormView, name='Taskform'),
    path('taskdetail/', views.TaskDetail, name='Taskdetail'),
    path('settings/', views.SettingView, name='Setting'),
    path('categories/', views.CategoryView, name='Category'),
]