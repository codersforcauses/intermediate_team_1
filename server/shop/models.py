from django.db import models
from registration.models import PetCarer
# Create your models here.
class ShopOrder(models.Model):
    useFor = models.ForeignKey(PetCarer, on_delete=models.CASCADE)
    product_name = models.CharField(max_length=100)
    itemOrdered = models.CharField(max_length=100)
    dateOrdered = models.DateTimeField(auto_now_add=True)
    amountSpent = models.DecimalField(max_digits=10, decimal_places=2)
    def __str__(self):
        return f"Order {self.order_id}: {self.product_name} (x{self.quantity})"

class ShopItem(models.Model):
    itemName = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    inStock = models.IntegerField()
    supplier = models.ForeignKey('ShopSupplier', on_delete=models.CASCADE)
    supplierPrice = models.DecimalField(max_digits=10, decimal_places=2) 
    def __str__(self):
        return self.itemName

class ShopSupplier(models.Model):
    phoneNumber = models.CharField(max_length=15)
    email = models.EmailField()
    streetNo = models.CharField(max_length=10)
    streetNome = models.CharField(max_length=100)
    suburb = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    postcode = models.CharField(max_length=10)
    country = models.CharField(max_length=100)
    def __str__(self):
        return self.name