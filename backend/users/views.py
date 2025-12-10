from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User
from .serializers import UserSerializer
from rest_framework import status

@api_view(['GET'])
def get(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response({
            "message": "User created successfully!",
            "user": UserSerializer(user).data
        })
    return Response({
        "message": "User creation failed",
        "errors": serializer.errors
    }, status=400)

@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Signup successful!", "user": serializer.data}, status=status.HTTP_201_CREATED)
    else:
        return Response({"message": "Signup failed", "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    email = request.data.get("email")
    password = request.data.get("password")
    name = request.data.get("name")

    if not email or not password:
        return Response({"message": "Email and password required"}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.get(email=email)
        if (user.password == password and user.name == name):  # simple comparison
            return Response({
                "message": "Login successful!",
                "user": {"name": user.name, "email": user.email}
            })
        else:
            return Response({"message": "Incorrect password or username"}, status=status.HTTP_400_BAD_REQUEST)

    except User.DoesNotExist:
        return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)