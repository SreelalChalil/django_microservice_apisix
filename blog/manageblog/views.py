from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from manageblog.models import Blog
from manageblog.serializers import BlogSerializer

@api_view(['GET'])
def getData(request):
    blogs = Blog.objects.all()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addBlog(request):
    serializer = BlogSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)