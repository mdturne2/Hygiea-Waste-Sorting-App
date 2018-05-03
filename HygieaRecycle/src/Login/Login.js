import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import firebase from './Firebase/firebaseComponet';

import {
    StackNavigator,
} from 'react-navigation';


export default class Login extends React.Component {

    static navigationOptions = {
        header: null
    }

    state = {
        email: '',
        password: '',
        authenticating: false,
        user: null,
        error: '',

    }

    constructor(props) {
        super(props)

    }


    onPressSignIn() {

        const {navigate} = this.props.navigation;

        this.setState({
            authenticating: true,
        });

        const {email, password} = this.state; // gets the user email and password


            firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {


                this.setState({
                    authenticating: false,
                    user: user,
                    error: '',
                });

                navigate('Home', {email: firebase.auth().currentUser.email}) 

            }).catch((error) => {
                alert('Login failed: ' + error);

            });


        


    }


    render() {
        const {goBack} = this.props.navigation;

        const {navigate} = this.props.navigation;


        return (
                <View style={styles.container}>
                   

                    <View style={styles.loginContainer}>

                        <TextInput
                            placeholder="Email"
                            underlineColorAndroid="transparent"
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={email => this.setState({email})}
                            style={styles.input}
                        />

                        <TextInput
                            placeholder="Password"
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            returnKeyType="go"
                            secureTextEntry
                            style={styles.input}
                            onChangeText={password => this.setState({password})}
                        />

                        

                    </View>

                    <View style={styles.loginButton}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => this.onPressSignIn()}>
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>

                  
                </View>
           

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: 300,
        height: 50,
        alignItems: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 10
    },
    loginButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1
    },
    buttonStyle: {
        backgroundColor: 'rgb(0,25,88)',
        width: 300,
        height: 45,
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '100'
    },
    altLoginContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

});
