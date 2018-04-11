import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  App(){
    var username = '';
    var password = '';
  }
  
  
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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

function askForResult() {
    return fetch('https://www.ourBackEndServer.com/', {
      credentials: 'omit'
    })
      .then(function(response) {
        return response.json();
      })
}

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