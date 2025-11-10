from django.db import models
from django.urls import reverse
from django.utils import timezone
from django.utils.text import slugify
from ckeditor_uploader.fields import RichTextUploadingField


class PostQuerySet(models.QuerySet):
    def published(self):
        now = timezone.now()
        return self.filter(is_published=True, published_at__lte=now)


class Post(models.Model):
    title = models.CharField(max_length=220)
    slug = models.SlugField(unique=True, max_length=255)
    subtitle = models.CharField(max_length=260, blank=True)
    excerpt = models.TextField(blank=True)
    category = models.CharField(max_length=80, blank=True)
    hero_image = models.ImageField(upload_to="blog/hero/", blank=True, null=True)
    content = RichTextUploadingField()
    likes_count = models.PositiveIntegerField(default=0)
    is_featured = models.BooleanField(default=False)
    is_published = models.BooleanField(default=True)
    published_at = models.DateTimeField(default=timezone.now)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = PostQuerySet.as_manager()

    class Meta:
        ordering = ["-published_at"]
        indexes = [
            models.Index(fields=["slug"]),
            models.Index(fields=["-published_at", "is_published"]),
        ]

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("blog:detail", kwargs={"slug": self.slug})

    @property
    def reading_time_minutes(self):
        words = len(self.content.replace("<", " ").split())
        minutes = max(1, round(words / 220))
        return minutes


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")
    name = models.CharField(max_length=120)
    email = models.EmailField()
    body = models.TextField()
    is_public = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["created_at"]

    def __str__(self):
        return f"Comment by {self.name}"
