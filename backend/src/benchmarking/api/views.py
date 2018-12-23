from rest_framework.generics import ListAPIView, RetrieveAPIView

from benchmarking.models import Bank
from .serializers import BankSerializer


class BankListView(ListAPIView):
    queryset = Bank.objects.all()
    serializer_class = BankSerializer

class BankDetailView(RetrieveAPIView):
    queryset = Bank.objects.all()
    serializer_class = BankSerializer