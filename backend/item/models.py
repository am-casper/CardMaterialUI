from django.db import models

class Item(models.Model):
    itemName = models.CharField(max_length=50)
    itemPrice = models.DecimalField( max_digits=10, decimal_places=2)
    itemDesc = models.TextField()
