from django.contrib import admin

from .models import Comment, Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "is_published", "published_at", "likes_count")
    list_filter = ("category", "is_published", "is_featured")
    search_fields = ("title", "subtitle", "excerpt")
    prepopulated_fields = {"slug": ("title",)}
    autocomplete_fields = []
    ordering = ("-published_at",)
    readonly_fields = ("created_at", "updated_at", "likes_count")
    fieldsets = (
        (None, {"fields": ("title", "slug", "subtitle", "excerpt", "category", "hero_image")}),
        ("Content", {"fields": ("content",)}),
        (
            "Publishing",
            {
                "fields": (
                    "is_featured",
                    "is_published",
                    "published_at",
                    "likes_count",
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ("post", "name", "email", "created_at", "is_public")
    list_filter = ("is_public", "created_at")
    search_fields = ("name", "email", "body")
