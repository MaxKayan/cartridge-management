from django.urls import path, include

from main import views

urlpatterns = {
    path('', views.view, name="main_page")
}
