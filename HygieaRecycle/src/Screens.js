
import React, { Component } from 'react';

import {
    StackNavigator
} from 'react-navigation';

//importing the the classes
import Cam from './Home/Home';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';


// adding all the classes ti navigator
const Home = StackNavigator({
    Login: { screen: Login },
    Home: { screen: cam },
    SignUp: { screen: SignUp },
},
    { headerMode: 'screen' });

export default Home;
