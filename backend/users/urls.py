from django.urls import path
from .views import signup, login, get, create, profile

urlpatterns = [
    path('signup/', signup),
    path('login/', login),
    path('get/', get),
    path('create/', create),
    path("profile/<str:email>/", profile),


]
