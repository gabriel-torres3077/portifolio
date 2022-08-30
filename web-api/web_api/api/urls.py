from django.urls import path, include
from .views import (
    UserDetailView,
    UserListView
)

urlpatterns = [
    path('user/<int:pk>', UserDetailView.as_view()),
    path('user/', UserListView.as_view()),
]