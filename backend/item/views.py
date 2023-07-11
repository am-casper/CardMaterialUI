from django.http import JsonResponse
from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser

from item.models import Item
from item.serializers import ItemSerializer

class UserItemView(APIView):
    def get(self, request, id):
        if id!=0:
            post = Item.objects.get(id=id)
            data = ItemSerializer(post).data
            return Response(data)
        else:
            post = Item.objects.count()
            # data = ItemSerializer(post).data
            print(post)
            return Response(post)
        
    def put(self, request):
        data = JSONParser().parse(request)
        serializer= ItemSerializer(data=data)
        if(serializer.is_valid()): 
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
        
    def patch(self, request, id, format=None):
        item = Item.objects.get(id=id)
        serializer = ItemSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
    def delete(self, request, id, format=None):
        item = Item.objects.get(id=id)
        item.delete()
        return Response(status=204)
    
