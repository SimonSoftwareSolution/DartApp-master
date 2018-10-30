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
      Actions.SearchResult(text = {searchText});
    }

    
   


    render() {
      const data = [
        {name: 'Richy', position: 1, key: '1'},
        {name: 'Manu', position: 2,key:'2'},
        {name: 'Chris', position: 3, key: '3'},
       
      ]

      return (
        <LinearGradient colors={['black','#019875', 'black']} style={styles.container}>
        <SearchBarComponent handleSearchInput={this.handleSearchInput} />
        <View style={styles.mainScreenContainer}>
        <View style ={styles.YourMatchesView}>
                  <View style ={styles.yourMatchesHeader}>
                    <Text style={styles.matchHeaderText}>Last matches </Text>
                  </View>
                  <View style={styles.matchList}>
                  <FlatList
                    data={data}
                    renderItem={({item}) => <RankingItemMainMenuComponent style={styles.ranking} rank={item.position} name={item.name} handleIconClick={this.handleChallenge}/>}
                  />
                  </View>
            </View>
            <View style ={styles.YourMatchesView}>
                  <View style ={styles.yourMatchesHeader}>
                    <Text style={styles.matchHeaderText}>Your matches </Text>
                  </View>
                  <View style={styles.matchList}>
                  <FlatList
                    data={this.props.matches}
                    renderItem={({item}) => <RankingItemMainMenuComponent style={styles.ranking} rank={item.position} name={item.name} handleIconClick={this.handleChallenge}/>}
                  />
                  </View>
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
    textInputStyle : {
      flex: 10,
      alignSelf : 'stretch',
      marginLeft : 10,
    },
    searchBarContainer : {
      flex : 1.5,
      alignSelf: 'stretch',
    },
    searchBar : {
      flex: 1,
      flexDirection : 'row',
      backgroundColor : 'white',
      alignSelf: 'stretch',
      marginTop: 25,
      alignItems : 'center',
      justifyContent : 'center'
    },
    
    yourMatchesHeader: {
      flex : 1,
      padding: 15,
      borderWidth: 2,
      borderRadius: 5,  
      alignSelf: 'stretch',
      backgroundColor : '#ffffff70',
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
    YourMatchesView : {
      flex : 3,
      padding: 15,
      borderWidth: 2,
      borderRadius: 5,  
      alignSelf: 'stretch',
      borderColor: 'transparent',
      marginHorizontal : 25,
      marginBottom : 15,
      alignItems: 'center',
      justifyContent : 'center',
    },
    ranking  : {
      flex: 1,
      backgroundColor : 'transparent'
    },
    text : {
      fontSize: 20,

    },
    matchHeaderText : {
      fontSize: 20,
      opacity : 1,
    },
    rankingList: {
      marginTop : 10,
      flex: 7,
      alignSelf: 'stretch',
      backgroundColor : 'transparent',
    },
    matchList: {
      marginTop : 10,
      flex: 6,
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
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'stretch',
      flex : 12
    },
    mainBarButton: {
      margin: 20,

    }
  });


  