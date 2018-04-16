/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Camera from 'react-native-camera';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  
  
  
  render() {
    return (
      <View style={styles.container}>

        <Image source={require('HygieaRecycle/assets/logo.png')} style={{width: 300, height: 200}}/>
        <Text>v0.0.0.0001</Text>

        <Camera
   ref={(cam) => {
       this.camera = cam;
    }}
    style={styles.preview}
    aspect={Camera.constants.Aspect.fill}>
        <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
           [CAPTURE]
        </Text>
      </Camera>

      </View>
    );
  }

  takePicture() {
    this.camera.capture()
       .then((data) => console.log(data))
       .catch(err => console.error(err));
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
 },
 capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
 }
});

//Basic "send a request and ask for a result"-type function
//returns the response as a json and also prints it to the console.
function askForResult() {
    return fetch('https://www.ourBackEndServer.com/', {
      credentials: 'omit'
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
}

//Sends a file to the fetch location, and prints out a response in the form of a json
//Hoping to test these functions out more once there's an actual photo to send and an actual server to send to.
function sendPhoto() {
  var form = new FormData();
  var fileField = document.querySelector("input[type='file']"); //Picture?
  
  //form.append(username, password);
  form.append('picture', fileField.files[0]);

  fetch('https://www.ourBackendServer.com/postData', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}