from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny
from rest_framework.generics import CreateAPIView
from .Serializers.serializer import SignupSerializer

class SignupView(CreateAPIView):
    # model = get_user_model()
    serializer_class = SignupSerializer
    permissio_classes = [
        AllowAny,
    ]