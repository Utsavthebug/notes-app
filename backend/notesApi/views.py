from django.db import models
from django.shortcuts import render
from .serializer import NotesSerializer
from .models import note
from rest_framework.viewsets import ModelViewSet

class NoteViewSet(ModelViewSet):
    serializer_class  = NotesSerializer

    def get_queryset(self):
        return note.objects.all().order_by('-updated_at')

