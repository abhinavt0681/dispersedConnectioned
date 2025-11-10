from django.db.models import F, Q
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.views.decorators.http import require_POST

from .models import Post


def post_list(request):
    posts = Post.objects.published()
    search_term = request.GET.get("q", "").strip()
    category_filter = request.GET.get("category", "").strip()

    if search_term:
        posts = posts.filter(
            Q(title__icontains=search_term)
            | Q(subtitle__icontains=search_term)
            | Q(excerpt__icontains=search_term)
        )

    if category_filter:
        posts = posts.filter(category__iexact=category_filter)

    featured_post = posts.filter(is_featured=True).first()
    post_list = posts
    if featured_post:
        post_list = posts.exclude(pk=featured_post.pk)

    categories = (
        Post.objects.published()
        .exclude(category="")
        .values_list("category", flat=True)
        .distinct()
    )

    context = {
        "featured_post": featured_post,
        "posts": post_list,
        "search_term": search_term,
        "category_filter": category_filter,
        "categories": categories,
    }
    return render(request, "blog/post_list.html", context)


def post_detail(request, slug):
    post = get_object_or_404(Post.objects.published(), slug=slug)
    related_posts = (
        Post.objects.published()
        .exclude(pk=post.pk)
        .filter(category__iexact=post.category)
        [:3]
    )

    context = {
        "post": post,
        "related_posts": related_posts,
    }
    return render(request, "blog/post_detail.html", context)


@require_POST
def like_post(request, slug):
    post = get_object_or_404(Post.objects.published(), slug=slug)
    liked_posts = request.session.get("liked_posts", [])
    if slug in liked_posts:
        return JsonResponse({"likes": post.likes_count, "already_liked": True})

    Post.objects.filter(pk=post.pk).update(likes_count=F("likes_count") + 1)
    post.refresh_from_db(fields=["likes_count"])
    liked_posts.append(slug)
    request.session["liked_posts"] = liked_posts
    request.session.modified = True
    return JsonResponse({"likes": post.likes_count, "already_liked": False})
