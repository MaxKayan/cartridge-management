from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('cartridges', views.CartridgeViewSet)
router.register('supplies', views.SupplyViewSet)
router.register('orders', views.OrderViewSet)
router.register('chatMessage', views.ChatMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('all', views.home_data_view, name="api_home_data"),
    path('auth/', include('rest_framework.urls')),
    path('action/send-order/<int:id>', views.SendOrderView.as_view())
]
