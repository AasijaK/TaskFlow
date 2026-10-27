from django.shortcuts import render

# Create your views here.
def Index(request):
    return render(request, 'index.html')

def Loginview(request):
    return render(request, 'login.html')

def Registerview(request):
    return render(request, 'register.html')
