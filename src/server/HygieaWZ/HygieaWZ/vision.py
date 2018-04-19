import io


# Imports the Google Cloud client library
from google.cloud import vision
from google.cloud.vision import types

def call_vision(img_binary):
    # Instantiates a client
    client = vision.ImageAnnotatorClient()

    # The name of the image file to annotate
    file_name =r'C:\Users\Alec\Pictures\beachamp_wedding\20171202_165556.jpg'

    image = types.Image(content=img_binary)

    # Performs label detection on the image file
    response = client.label_detection(image=image)
    labels = response.label_annotations
    return str(labels)