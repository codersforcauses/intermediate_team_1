from django.contrib import admin
from .models import ShopItem, ShopOrder, ShopSupplier
# Register your models here.
admin.site.register(ShopOrder)
admin.site.register(ShopItem)
admin.site.register(ShopSupplier)