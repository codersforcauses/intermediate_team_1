from rest_framework import serializers
from .models import ShopOrder, ShopItem, ShopSupplier
from registration.models import PetCarer


class ShopSupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShopSupplier
        fields = "__all__"


class ShopItemSerializer(serializers.ModelSerializer):
    supplier = ShopSupplierSerializer(read_only=True)
    
    class Meta:
        model = ShopItem
        fields = "__all__"


class ShopOrderSerializer(serializers.ModelSerializer):
    useFor = serializers.StringRelatedField(read_only=True)
    
    class Meta:
        model = ShopOrder
        fields = "__all__"

