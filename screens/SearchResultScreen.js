import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ToastAndroid, Image } from 'react-native';
import MainBar from '../components/MainBar';
import { Actions } from 'react-native-router-flux';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo';
import SearchBarComponent from '../components/SearchBarComponent';

export default class SearchResultScreen extends React.Component {
  handleSearchInput = (searchText) => {
    ToastAndroid.show(searchText, ToastAndroid.SHORT);
  }
   
    render() {
      const data = [
        {name: 'Richy', position: 1, key: '1', mmr : 4000},
        {name: 'Manu', position: 2,key:'2', mmr : 4000},
        {name: 'Chris', position: 3, key: '3', mmr : 4000},
       
      ]


      return (
        <LinearGradient colors={['black','#019875', 'black']} style={styles.gradient}>
            <View style={styles.container}>
          <SearchBarComponent handleSearchInput={this.handleSearchInput}/> 
          <View style={styles.listView}>
            <FlatList style = {styles.List}
             data={data}
                renderItem={({item}) => 
              <View style={styles.rankingItem}>
                  <View style = {styles.innerRankingItem}>
                      <Image
                      style={{width: 20, height: 20}}
                      source={require('../bullsLogo.png')}/>
                      <View style={styles.rankingText}>
                        <Text style={styles.Text}>{item.name}</Text>
                        <Text style={styles.Text}>MMR : {item.mmr} </Text>
                      </View>
                    
                      <TouchableOpacity onPress={() => this.props.handleIconClick({name : this.props.name, rank: this.props.rank})}>
                      <Image
                      style={{width: 20, height: 20}}
                      source={require('../challenge.png')}/>
             </TouchableOpacity>
                  </View>
                  
                  <View style={{borderBottomColor: 'white',borderBottomWidth: 2, alignSelf: 'stretch', opacity : 0.5, minWidth : 200,  }}/>
              </View>
              
            }
          />
          </View>
            </View>
          <MainBar/>
        </LinearGradient>
      );
    }
  }

  const styles = StyleSheet.create({
    gradient: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    listView : {
      flex : 12,
      alignSelf : 'stretch',
    },
    
    container: {
      marginTop : 25,
      flex: 13.5,
      alignSelf : 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
    },
    rankingItem  : {
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight : 50,  
      margin : 10,    
    },
    innerRankingItem  : {
      flex: 1,
      alignSelf: 'stretch',
      minHeight : 50,
      flexDirection : 'row',
      alignItems : 'stretch',
      justifyContent : 'space-between',
      alignItems: 'center',
      
    },List :{
      marginVertical: 50,
      flex: 10,
      alignSelf : 'stretch',
      marginHorizontal : 30,
    
    }, Text : {
      color : 'white',
      opacity : 0.7,
      marginBottom : 5,
    } ,
    rankingText : {
      flex : 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginHorizontal : 30,
     
    }
    
  });