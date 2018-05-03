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
  Dimensions,
  Image
} from 'react-native';


type Props = {};
export default class Home extends Component<Props> {
  
  
  
  render() {

        // <Image source={require('./assets/logo.png')} style={{width: 300, height: 200}}/>
        // <Text>v0.0.0.0001</Text>
      //  <div>
      //  <form encType="multipart/form-data" action="">
      //    <input id="id-for-upload-file" onChange={this.addFile.bind(this)} type="file"/>
      //  </form>
      //  </div>
      //  <Text style={styles.capture} onPress={this.sendPhoto.bind(this)}>
      //    [SendRequest]
      //  </Text>
    return (
      <View style={styles.container}>
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
    var pic = this.camera.capture()
       .then((data) => console.log(data))
       .catch(err => console.error(err));
    this.sendPhoto(pic);
  }

  //Sends a file to the fetch location, and prints out a response in the form of a json
  //Hoping to test these functions out more once there's an actual photo to send and an actual server to send to.
  sendPhoto(pic) {
    var form = new FormData();
  
    form.append('username', 'realUser');
    form.append('picture', pic);
    console.log(Object.prototype.toString.call(pic));

    fetch('https://89c3dd76-a7cb-491c-9233-02a5ba4e8049.mock.pstmn.io/PathedWell', {
      cache: 'no-cache',
      credentials: 'same-origin',
      method: 'POST',
      headers: {'Content-Type':'multipart/form-data'},
      body: form,
      mode:'cors',
      redirect: 'follow',
      referrer: 'no-referrer'
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', Object.prototype.toString.call(pic)))
    .then(response => console.log('Success:', response));
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
    return fetch('https://f6d06b5a-e8ce-4ecc-b597-d24738c10709.mock.pstmn.io/PathedWell', {
      credentials: 'omit'
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
}