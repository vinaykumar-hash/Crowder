from django.urls import path
from . import views
urlpatterns = [
    path('register',views.register_startup,name="register"),
    path('regs',views.list_startups,name="Listing all"),
    path('latest',views.get_latest,name="latestAdded"),
    path('last5',views.get_last_5_records,name="last_5_record")
]