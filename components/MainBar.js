import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class MainBar extends React.Component {
     handleHomeButtonClick = () => {
       Actions.Main();
     }
     handleChallengeButtonClick = () => {
       Actions.Challenge();
     }
     handleTeamButtonClick = () => {
       Actions.Challenge();
     }
     handleRankingButtonClick = () => {
       Actions.Challenge();
     }
     handleTeamButtonClick = () => {
       Actions.Team();
     }

    render() {
      return ( 
        <View style = {styles.container}>     
          <View style={styles.mainBar}>
              <TouchableOpacity
                style={styles.mainBarButton}
                onPress={this.handleHomeButtonClick}>
              <Image
              style={{width: 20, height: 20}}
              source={require('../home.png')}/>
              </TouchableOpacity>
            
              <TouchableOpacity
                style={styles.mainBarButton}
                onPress={this.handleChallengeButtonClick}>
              <Image
              style={{width: 20, height: 20}}
              source={require('../challenge.png')}/>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.mainBarButton}
                onPress={this.handleTeamButtonClick}>
              <Image
              style={{width: 20, height: 20}}
              source={require('../teamIcon.png')}/>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.mainBarButton}
                onPress={this.handleClick}>
              <Image
              style={{width: 20, height: 20}}
              source={require('../rankingIcon.png')}/>
              </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      alignSelf : 'stretch', 
      backgroundColor: '#20bf6b',
      maxHeight : 50,
    },
   
    mainBar: {
      backgroundColor: 'white',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    mainScreenContainer: {
      backgroundColor: '#fed330',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      flex : 14
    },
    mainBarButton: {
      margin: 20,
      
    }
  });