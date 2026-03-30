from django.contrib import admin
from django.urls import path
from articles.views import (
    archive,
    get_article,
    create_post,
    user_login,
    user_register,
    user_logout,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', archive),
    path('article/new/', create_post),
    path('article/<int:article_id>/', get_article),
    path('login/', user_login),
    path('register/', user_register),
    path('logout/', user_logout),
]