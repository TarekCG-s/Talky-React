from django.db import models

class Talk(models.Model):
    title = models.CharField(max_length=64)
    message = models.CharField(max_length=1000)
    created_date = models.TimeField(auto_now_add=True)

    def __str__(self):
        return self.title
