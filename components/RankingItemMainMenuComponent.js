import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class RankingItemMainMenuComponent extends React.Component {
    render() {
      return (      
        <View style={styles.container}>
            <Text>{this.props.rank} . </Text>
            <Text>{this.props.name}  </Text>
            <TouchableOpacity onPress={() => this.props.handleIconClick({name : this.props.name, rank: this.props.rank})}>
            <Image
             style={{width: 20, height: 20}}
             source={require('../challenge.png')}/>
             </TouchableOpacity>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: 'stretch',
      flexDirection : 'row',
      backgroundColor: 'transparent',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: 15,
      borderRadius: 5,  
      borderColor: '#f5f6fa',
      marginHorizontal : 25,
      borderWidth: 2,
    },
    
  });