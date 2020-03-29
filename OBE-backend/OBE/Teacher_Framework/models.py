from django.db import models

# Create your models here.

from Accounts.models import User


class FileUpload(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, to_field='id', on_delete=models.CASCADE)
    datafile = models.FileField()
    """
     owner = models.ForeignKey(
        User, related_name="peo", on_delete=models.CASCADE, null=True)
"""
