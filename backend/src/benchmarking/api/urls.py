from django.urls import path

from .views import BankListView, BankDetailView


urlpatterns = [
    path('', BankListView.as_view()),
    path('<pk>', BankDetailView.as_view())
]