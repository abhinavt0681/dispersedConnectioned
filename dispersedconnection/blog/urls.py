from django.urls import path

from . import views

urlpatterns = [
    path("", views.post_list, name="list"),
    path("<slug:slug>/", views.post_detail, name="detail"),
    path("<slug:slug>/like/", views.like_post, name="like"),
]
