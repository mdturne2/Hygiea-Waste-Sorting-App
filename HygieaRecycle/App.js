import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, Button } from 'react-native';

export default class App extends React.Component {
  //A constructor for a username and password
  //planning stuff for when we actually have to keep track of who is using the app
  App(){
    var username = '';
    var password = '';
  }
  
  //The basic renderer stuff, just has the basic text on it right now
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('HygieaRecycle/assets/logo.png')} style={{width: 300, height: 200}}/>
        <Text>v0.0.0.0001</Text>
        <Button
          onPress={sendPhoto}
          title="Take a picture?"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  var fileField = document.querySelector("input[type='file']");
  
  //form.append(username, password);
  form.append('picture', fileField.files[0]);

  fetch('https://www.ourBackendServer.com/putData', {
    method: 'PUT',
    body: formData
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
}