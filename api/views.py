from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def photos_api_overview(request):

    api_urls = {
        'List all photos': '/api/photos/',
        'Upload a new photo': '/api/photos/',
        'Retrieve a specific photo': '/api/photos/{photo_id}/',
        'Update a specific photo': '/api/photos/{photo_id}/',
        'Delete a specific photo': '/api/photos/{photo_id}/',
    }

    return Response(api_urls)
