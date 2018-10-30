import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ToastAndroid, Image } from 'react-native';
import MainBar from '../components/MainBar';
import RankingItemMainMenuComponent from '../components/RankingItemMainMenuComponent';
import { LinearGradient } from 'expo';

export default class MainScreen extends React.Component {

   handleChallenge = (item) => {
    ToastAndroid.show(item.name, ToastAndroid.SHORT);
   }

    render() {
      const data = [
        {name: 'Richy', position: 1, key: '1'},
        {name: 'Manu', position: 2,key:'2'},
        {name: 'Chris', position: 3, key: '3'},
        {name: 'Simon', position: 4, key: '4'},
      ]

      return (
        <LinearGradient colors={['black','#019875', 'black']} style={styles.container}>
        <View style={styles.mainScreenContainer}>
          <View style ={styles.rankingTextView}>
          <Text style={styles.text}> Hello Simon !</Text>
          <Text> Your current position in the ladder: 4</Text>
          <Text> Challenge an opponent to improve your ranking!</Text>
          </View>
          <View style={styles.rankingList}>
          <FlatList
             data={data}
            renderItem={({item}) => <RankingItemMainMenuComponent style={styles.ranking} rank={item.position} name={item.name} handleIconClick={this.handleChallenge}/>}
          />
          </View>
          <View style ={styles.TeamView}>
          <Image
             style={{resizeMode: 'contain', flex : 1 }}
             source={require('../bullsLogo.png')}/>
           
            <View style={styles.teamTextView}>
                <Text style={styles.text}>Your team : Bulls</Text>
                <Text>Your position: 1</Text>
                <Text>You league: GoldenDivision!</Text>
           </View>
          </View>
        </View>
          <MainBar/>
        </LinearGradient>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
    },rankingTextView: {
      flex : 2,
      padding: 15,
      borderWidth: 2,
      borderRadius: 5,  
      alignSelf: 'stretch',
      borderColor: '#f5f6fa',
      marginHorizontal : 25,
      marginBottom : 10,
      alignItems: 'center',
      justifyContent : 'center',
    }, teamTextView : {
      alignItems: 'flex-start',
      justifyContent : 'center',
      flex : 2,
      marginLeft: 15,
    },
    TeamView : {
      flex : 2,
      padding: 15,
      flexDirection : 'row',
      borderWidth: 2,
      borderRadius: 5,  
      alignSelf: 'stretch',
      borderColor: '#f5f6fa',
      marginHorizontal : 25,
      marginBottom : 15,
      alignItems: 'center',
      justifyContent : 'center',
    },
    ranking  : {
      flex: 1,
     
    },
    text : {
      fontSize: 20,

    },
    rankingList: {
      marginTop : 10,
      flex: 3,
      alignSelf: 'stretch',
    },
    mainBar: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignSelf: 'stretch',
    },
    mainScreenContainer: {
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      flex : 12
    },
    mainBarButton: {
      margin: 20,

    }
  });