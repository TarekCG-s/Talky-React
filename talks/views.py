from django.shortcuts import render
from .models import Talk
from rest_framework import viewsets, permissions
from .serializers import TalkSerializer

class TalkViewset(viewsets.ModelViewSet):
    queryset = Talk.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TalkSerializer
