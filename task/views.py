
from django.shortcuts import render, redirect
from .models import LoginCreds,RegiCreds


def Index(request):
    return render(request, "index.html")

def Dashboardview(request):
    return render(request, "dashboard.html")

