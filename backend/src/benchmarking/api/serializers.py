from rest_framework import serializers
from benchmarking.models import Bank


class BankSerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField()

    class Meta:
        model = Bank
        fields = ('institution_name', 'bank_name', 'category')

    def get_category(self, object):
        return object.get_category_display()
