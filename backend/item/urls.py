from django.contrib import admin
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    # path('blog/<int:id>/',views.UserPostView.as_view()),
    # path('post/<str:username>',views.UserPostsView.as_view()),
    path('item/',views.UserItemView.as_view()),
    path('item/<int:id>/',views.UserItemView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)