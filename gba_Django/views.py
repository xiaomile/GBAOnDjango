from django.shortcuts import render
from django.shortcuts import HttpResponse
import json


def index(request):
    return render(request,"index.html")

def loadgbabios(request):
    with open('static/roms/gba_bios.bin','rb') as f:
        resp = {'data':[i for i in f.read()]}
        return HttpResponse(json.dumps(resp), content_type="application/json")
        #return HttpResponse(f.read(),content_type='application/octet-stream')


