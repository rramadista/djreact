from rest_framework import serializers
from benchmarking.models import Bank


class BankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bank
        fields = ('institution_name', 'bank_name', 'category')
