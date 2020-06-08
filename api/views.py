# from mailbox import Message

from constance import config
from django_mailbox.models import Message
from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView

from api.serializers import CartridgeSerializer, SupplySerializer, OrderSerializer, ChatMessageSerializer
from chat.models import ChatMessage
from main.models import Cartridge, Supply, Order


class CartridgeViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Cartridge.objects.all()
    serializer_class = CartridgeSerializer


class SupplyViewSet(viewsets.ModelViewSet):
    queryset = Supply.objects.select_related('cartridge')
    serializer_class = SupplySerializer

    def initialize_request(self, request, *args, **kwargs):
        # print(request, '\n', request.headers, request.body)
        return super().initialize_request(request, *args, **kwargs)


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    # def initialize_request(self, request, *args, **kwargs):
    #     # print(request, '\n', request.headers, request.body)
    #     return super().initialize_request(request, *args, **kwargs)
    #
    # def get_object(self):
    #     print("get_object")
    #     return super().get_object()
    #
    # def retrieve(self, request, *args, **kwargs):
    #     print("retrieve")
    #     return super().retrieve(request, *args, **kwargs)

    # def update(self, request, *args, **kwargs):
    #     partial = kwargs.pop('partial', False)
    #     instance = self.get_object()
    #     serializer = self.get_serializer(instance, data=request.data, partial=partial)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_update(serializer)


class MailViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = OrderSerializer


class ChatMessageViewSet(viewsets.ModelViewSet):
    queryset = ChatMessage.objects.all()
    serializer_class = ChatMessageSerializer


@api_view(["GET"])
# @permission_classes([permissions.AllowAny])
def home_data_view(request):
    return Response({
        "cartridges": CartridgeSerializer(Cartridge.objects.all(), many=True, context={"request": request}).data,
        "supplies": SupplySerializer(Supply.objects.select_related('cartridge'), many=True,
                                     context={"request": request}).data,
        "orders": OrderSerializer(Order.objects.all(), many=True, context={"request": request}).data,
        "chatMessage": ChatMessageSerializer(ChatMessage.objects.all()[:50], many=True,
                                             context={"request": request}).data
    })


class SendOrderView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, order_pk):
        try:
            order = Order.objects.get(pk=order_pk)
            if not order.email or config.EMAIL_ALLOW_RESEND:
                order.send_to([config.EMAIL_MANAGER_ADDRESS])
                return Response({"result": "sent"})
            return Response({"result": "Email already sent"}, status=400)
        except Order.DoesNotExist:
            return Response({"result": f"Order with pk = {order_pk} does not exist."}, status=400)
