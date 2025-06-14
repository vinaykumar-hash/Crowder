# projects/models.py
from django.db import models
# from django.contrib.auth.models import AbstractUser
class Startup(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=200)
    founder_name = models.CharField(max_length=200)
    startup_description = models.TextField()
    intro_video = models.URLField(blank=True)
    website = models.URLField(blank=True)
    # registered_on = models.DateTimeField(auto_now_add=True)
    pitch_deck = models.FileField(upload_to='pitch/', blank=True, null=True)
    funded = models.DecimalField(blank=True, decimal_places=3,max_digits=10)
    cover = models.URLField()
    

