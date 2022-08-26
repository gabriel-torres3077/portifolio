from django.urls import path, include
from .views import (
    UserDetailView
)

urlpatterns = [
    path('api', UserDetailView.as_view()),
]