from datetime import timedelta
from django.db.models import Q
from django.utils import timezone
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny
from .models import Post
from .serializers import PostSerializer


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    # permission_classes = [AllowAny]  # FIXME: 인증적용
    def get_queryset(self):
        timesince = timezone.now() - timedelta(days=3)
        qs = super().get_queryset()
        qs = qs.filter(
            Q(author=self.request.user) | # 작성자 이거나
            Q(author__in=self.request.user.follower_set.all()) # 작성자가 팔로잉 한 글을 필터링
        )
        qs = qs.filter(created_at__gte=timesince)
        return qs
