import io


# Imports the Google Cloud client library
from google.cloud import vision
from google.cloud.vision import types
from base64 import b64decode as decode

def call_vision(img_bin):
    # Instantiates a client
    client = vision.ImageAnnotatorClient()

    image = types.Image(content=img_bin)

    # Performs label detection on the image file
    response = client.label_detection(image=image)

    labels = response.label_annotations
    
    res=[str(x) for x in labels]
    return res