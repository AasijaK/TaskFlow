from django.shortcuts import render

# Create your views here.
def Index(request):
    return render(request, 'index.html')

def Loginview(request):
    return render(request, 'login.html')

def Registerview(request):
    return render(request, 'register.html')

def Dashboardview(request):
    return render(request, 'dashboard.html')

def Tasksview(request):
    return render(request, 'tasks.html')

def TaskFormView(request):
    return render(request, 'task-form.html')

def TaskDetail(request):
    return render(request, 'task-detail.html')

def SettingView(request):
    return render(request, 'settings.html')

def CategoryView(request):
    return render(request, 'categories.html')

