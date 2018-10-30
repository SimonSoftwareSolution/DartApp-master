import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ToastAndroid, Image } from 'react-native';
import MainBar from '../components/MainBar';
import RankingItemMainMenuComponent from '../components/RankingItemMainMenuComponent';
import PurposedOpponentsComponent from '../components/PurposedOpponentsComponent';
import { Actions } from 'react-native-router-flux';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo';
import SearchBarComponent from '../components/SearchBarComponent';
import { connect } from 'react-redux';




class ChallengeScreen extends React.Component {

  

   handleChallenge = (item) => {
    ToastAndroid.show(item.name, ToastAndroid.SHORT);
    }

   handleSearchInput = (searchText) => {
      ToastAndroid.show(searchText, ToastAndroid.SHORT);
      Actions.SearchResult();
    }

   


    render() {
      return (
        <LinearGradient colors={['black','#019875', 'black']} style={styles.container}>
         <Image
            style={styles.image}
            source={require('../bullsLogo.png')}/>
        <View style={styles.teamScreenContainer}>
           
        <View style={styles.teamInfo}>
            <View style={styles.menuItemContainer}>
                <Text style={styles.text}>Liga</Text>
                <Image
                  style={styles.icon}
                  source={require('../chevronIcon.png')}/>
            </View>
            <View style = {styles.lineStyle} />
            <View style={styles.menuItemContainer}>
                <Text style={styles.text}>Mitspieler</Text>
                <Image
                  style={styles.icon}
                  source={require('../chevronIcon.png')}/>
            </View>
            <View style = {styles.lineStyle} />
            <View style={styles.menuItemContainer}>
                <Text style={styles.text}>Spiele</Text>
                <Image
                  style={styles.icon}
                  source={require('../chevronIcon.png')}/>
            </View>
            <View style = {styles.lineStyle} />
        </View>
        <View style={styles.toThink}>
        </View>
        </View>
        <MainBar/>
        </LinearGradient>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      matches : state.matches.matches
    }
  }

  export default connect(mapStateToProps) (ChallengeScreen)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop : 25,
    },
    teamScreenContainer : {
      marginTop : 40,
      flex : 1,
      alignItems : 'flex-start',
      justifyContent: 'center',
      alignSelf : 'stretch',
    },
    menuItemContainer : {
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'space-between',
      flex : 1,
      alignSelf : 'stretch'
    },
    image : {
      borderRadius : 50,
      borderColor : 'white',
      borderWidth : 2,
      height : 100,
      width : 100, 
      marginTop : 40,

    },
    icon : {
      width: 20,
      height: 20,
      marginRight : 40,
    },
    teamInfo : {
      flex : 3,
      alignSelf : 'stretch',
      alignItems : 'center',
      justifyContent: 'center',

    },
    lineStyle:{
      borderWidth: 0.5,
      borderColor:'white',
      margin:5,
      alignSelf : 'stretch',
    }, 
    text : {
      marginLeft: 20,
      fontSize : 15,
      color : 'white',
    }, 
    toThink : {
      flex : 3,
    }

  });


  