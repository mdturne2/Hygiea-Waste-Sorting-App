import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';
import Login from './Login/Login';
import firebase from './Firebase/firebaseStorage';


export default class SignUp extends React.Component {

    constructor(props) {
        super(props)
    }


    static navigationOptions = {
        title: 'SignUp',
        header: null
    };
   
    state = {
        email: '',
        password: '',
        authenticating: false,
        user: null,
        error: '',
        fname: '',
        lname: '',
    };


    onPressSignUp() {
        const {email, password, fname, lname} = this.state;
        const {navigate} = this.props.navigation;

   
                    // add the user email and password to the database
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(user => this.setState({
                            authenticating: false,
                            user,
                            error: '',
                        })).catch(() => this.setState({
                        authenticating: false,
                        user: null,
                        error: 'Sign Up Failure',
                    }));

    
                    // if the register is success
                    if (this.state.error == '') {
                        navigate('Login'); 
                    }
                }

  

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <View style={styles.fNameContainer}>
                    <TextInput
                        placeholder="Full name"
                        underlineColorAndroid="transparent"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={fname => this.setState({fname})}
                        style={styles.fullName}
                    />
                </View>
                <View style={styles.emailContainer}>
                    <TextInput
                        placeholder="Email Address"
                        underlineColorAndroid="transparent"
                        returnKeyType="next"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={email => this.setState({email})}
                        style={styles.email}
                    />
                </View>
                <View style={styles.passwordContainer}>
                    <TextInput
                        placeholder="Password"
                        underlineColorAndroid="transparent"
                        secureTextEntry
                        style={styles.password}
                        onChangeText={password => this.setState({password})}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.onPressSignUp()}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
      
        )
    }
}


const styles = StyleSheet.create({
    fNameContainer: {
        width: '100%',
        height: '11%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%'
    },
    fullName: {
        height: '100%',
        width: '90%',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    emailContainer: {
        width: '100%',
        height: '11%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%'
    },
    email: {
        height: '100%',
        width: '90%',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    passwordContainer: {
        width: '100%',
        height: '11%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%'
    },
    password: {
        height: '100%',
        width: '90%',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 10
    },
    buttonContainer: {
        height: '13%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(0,25,88)',
        borderRadius: 9,
        width: '80%',
        height: '60%'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '100',
        fontSize: 15
    },
});
