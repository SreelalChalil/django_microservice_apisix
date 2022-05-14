from dataclasses import fields
import imp
from rest_framework import serializers
from manageblog.models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'
