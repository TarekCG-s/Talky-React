from rest_framework import routers
from .views import TalkViewset
from django.urls import path, include
router = routers.DefaultRouter()
router.register('api/talks', TalkViewset)

urlpatterns = [
    path('', include(router.urls))
]
