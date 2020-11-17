from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

from rest_framework import routers
from todo import views as todoViews

router = routers.DefaultRouter()
router.register(r"todos", todoViews.TodoView, "todo")

urlpatterns = [
    path("", TemplateView.as_view(template_name="index.html")),
    path("api/", include(router.urls)),
    path("api/auth/", include("accounts.urls")),
    path("admin/", admin.site.urls),
]
