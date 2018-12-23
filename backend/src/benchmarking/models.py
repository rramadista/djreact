from django.db import models


class Bank(models.Model):
    OWNERSHIP = (
        ('1', 'Stated Owned Bank'),
        ('2', 'Regional Bank'),
        ('3', 'Private Forex Bank'),
        ('4', 'Private Non-Forex Bank'),
        ('5', 'Joint Venture Bank'),
        ('6', 'Foreign Bank'),
    )
    institution_name = models.CharField('Institution Name', max_length=100, blank=True, null=True)
    bank_name = models.CharField('Bank Name', max_length=50)
    category = models.CharField(max_length=1, choices=OWNERSHIP, blank=True, null=True)

    def __str__(self):
        return self.bank_name
