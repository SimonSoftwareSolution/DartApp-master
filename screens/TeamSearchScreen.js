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
      const data = [
        {name: 'Richy', position: 1, key: '1'},
        {name: 'Manu', position: 2,key:'2'},
        {name: 'Chris', position: 3, key: '3'},
       
      ]

      return (
        <LinearGradient colors={['black','#019875', 'black']} style={styles.container}>
        <Text> YOUR TEAM </Text>
        <MainBar/>
        </LinearGradient>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      matches : state.matchReducer.matches
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
    
  });


  