from rest_framework import serializers
from .models import Talk

class TalkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Talk
        fields = ('id', 'title', 'message', 'created_date')
