from django.urls import path,include
from rest_framework import routers
from .views import NoteViewSet

router = routers.SimpleRouter()
router.register('',NoteViewSet,basename='note')

urlpatterns = [
#put urls here 
    path('note/',include(router.urls)),

]
