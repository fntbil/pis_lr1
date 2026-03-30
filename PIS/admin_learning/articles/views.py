from django.shortcuts import render, get_object_or_404, redirect
from django.http import Http404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User

from .models import Article
from .forms import ArticleForm, LoginForm, RegistrationForm


def archive(request):
    return render(request, 'archive.html', {"posts": Article.objects.all()})


def get_article(request, article_id):
    post = get_object_or_404(Article, id=article_id)
    return render(request, 'article.html', {"post": post})


def create_post(request):
    if request.user.is_anonymous:
        raise Http404

    if request.method == 'POST':
        form = ArticleForm(request.POST)
        if form.is_valid():
            Article.objects.create(
                title=form.cleaned_data['title'],
                text=form.cleaned_data['text'],
                author=request.user
            )
            return redirect('/')
    else:
        form = ArticleForm()

    return render(request, 'create_post.html', {'form': form})


def user_login(request):
    if request.user.is_authenticated:
        return redirect('/')

    form = LoginForm(request.POST or None)

    if request.method == 'POST' and form.is_valid():
        user = authenticate(
            request,
            username=form.cleaned_data['username'],
            password=form.cleaned_data['password']
        )
        if user is not None:
            login(request, user)
            return redirect('/')
        else:
            form.add_error(None, 'Неверный логин или пароль.')

    return render(request, 'login.html', {'form': form})


def user_register(request):
    if request.user.is_authenticated:
        return redirect('/')

    form = RegistrationForm(request.POST or None)

    if request.method == 'POST' and form.is_valid():
        user = User.objects.create_user(
            username=form.cleaned_data['username'],
            email=form.cleaned_data['email'],
            password=form.cleaned_data['password']
        )
        login(request, user)
        return redirect('/')

    return render(request, 'register.html', {'form': form})


def user_logout(request):
    logout(request)
    return redirect('/')