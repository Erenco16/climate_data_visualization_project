from django.shortcuts import render
from django.http import HttpResponse
import requests
# Create your views here.
def generateAccessToken(request):
    tenant_id = 'your_tenant_id'
    client_id = 'your_client_id'
    client_secret = 'your_client_secret'
    resource = 'https://analysis.windows.net/powerbi/api'

    url = f'https://login.microsoftonline.com/{tenant_id}/oauth2/v2.0/token'
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    data = {
        'grant_type': 'client_credentials',
        'client_id': client_id,
        'client_secret': client_secret,
        'scope': resource + '/.default'
    }

    response = requests.post(url, headers=headers, data=data)
    access_token = response.json().get('access_token')
    return access_token