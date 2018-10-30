import React from 'react';
import { StyleSheet, Text, View , Button, TextInput, Image, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';

export default class LoginScreen extends React.Component {

    handleClick()  {
      
        Actions.Main();
    }

    handleRegisterClick = () => {
        Actions.Register();
    }

    render() {
      return (
        <LinearGradient colors={['black','#019875', 'black']} style={styles.container}>
          <View style={styles.logoContainer}>
          <Image
             style={{width: 150, height: 150, opacity : 0.7,}}
             source={require('../loginLogo.png')}/>
            </View>
            <Text style={styles.signInText}> Sign In </Text>
          <View style={styles.usernameContainer}>
            <View style={styles.buttonView}>
                <View style={styles.textInputWrapper} >
                      <Image style={{width: 20, height: 20, opacity : 0.7,}} source={require('../userLoginIcon.png')}/>
                      <TextInput style={styles.TextInput} underlineColorAndroid='transparent' placeholder="Username" placeholderTextColor='white'/>
                </View>
                <View style={styles.textInputWrapper} > 
                      <Image style={{width: 20, height: 20, opacity : 0.7,}} source={require('../lockIcon.png')}/>
                      <TextInput style={styles.TextInput} underlineColorAndroid='transparent' placeholder="Password" placeholderTextColor='white'/> 
                </View>
            </View>
          </View>
          <View style={styles.loginButtonContainer}>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={this.handleClick}>
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
          </View>
          <View style={{borderBottomColor: 'white',borderBottomWidth: 1, alignSelf: 'stretch', marginHorizontal : 50, opacity : 0.5, }}/>
          <View style={{flexDirection: 'row' , marginBottom : 50}}>
          <Text style={styles.accountText}> Don't have an account? </Text>
          <TouchableOpacity onPress={this.handleRegisterClick} >
            <Text style={styles.registerText}> Register here </Text>   
          </TouchableOpacity>
          </View>        
        </LinearGradient>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf : 'stretch',
      alignItems : 'center'
    },
    logoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    },
    loginButton : {
      minWidth: 200,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderColor: '#f5f6fa',
        borderWidth: 2,
        opacity : 0.5,
    },
    buttonView : {
        maxWidth: 400,
        minWidth: 200,
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'center',
    },
    usernameContainer: {
        flex : 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    passwordContainer: {
        flex : 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    loginButtonContainer: {
        minWidth: 200,
        flex : 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    TextInput: {
      marginLeft : 15,
      flex : 1,
      opacity : 0.5,
      alignSelf : 'stretch'
    },
    textInputWrapper: {
      flexDirection : 'row',
      opacity : 0.5,
      margin: 10,
      borderWidth: 2,
      borderColor: '#f5f6fa',
      backgroundColor: 'transparent',
      borderRadius: 20,
      padding: 10,
      alignItems : 'center',
      justifyContent : 'center',
    },
    buttonText : {
      color : 'white',
    },
    signInText : {
      marginTop : 20,
      color : 'white',
      fontSize : 30,
    },
    accountText : {
      marginTop : 20,
      color : 'white',
      fontSize : 10,
      opacity : 0.5,
    },
    registerText : {
      marginTop : 20,
      color : 'white',
      fontSize : 10,
      opacity : 0.8,
    },
  });