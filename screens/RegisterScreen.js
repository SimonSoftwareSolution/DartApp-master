import React from 'react';
import { dispatch } from 'react-redux'
import { StyleSheet, Text, View , Button, TextInput, Image, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import registerUserActionCreator from '../actions/registerUserActionCreator'
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';

class RegisterScreen extends React.Component {

    handleClick()  {
        this.props.registerUser({loginName : 'Simon'});
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
            <Text style={styles.signInText}> Register </Text>
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
                <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
          </View>
          <View style={{borderBottomColor: 'white',borderBottomWidth: 1, alignSelf: 'stretch', marginHorizontal : 50, opacity : 0.5, }}/>
          <View style={{flexDirection: 'row' , marginBottom : 50}}>
          <Text style={styles.accountText}> Please dont use your casual password here as its only light encrypted!  </Text>
          </View>        
        </LinearGradient>
      );
    }
  }

  function mapStateToProps(state){
    return {
    }
  };

  function mapDispatchToProps(dispatch) {
    return {
      registerUser : (user) => {
        dispatch(registerUser(user));
      }
    }
  };

  export default connect(mapStateToProps, mapDispatchToProps) (RegisterScreen)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf : 'stretch',
      alignItems : 'center'
    },
    logoContainer: {
    marginTop : 60,
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
        flex : 2,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButtonContainer: {
        minWidth: 200,
        flex : 0.5,
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