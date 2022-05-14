from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.TextField(500)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

