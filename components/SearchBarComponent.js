import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

export default class SearchBarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
      }

      onChangeText = (searchText) => {
        this.setState({text : searchText});
      }


    render() {
      return (      
        <View style={styles.searchBar}>
        <Image style={{width: 20, height: 20, opacity : 0.7,marginLeft : 15}} source={require('../lupeIcon.png')}/>
          <TouchableOpacity>
          </TouchableOpacity>
          <TextInput style={styles.textInputStyle} underlineColorAndroid='transparent' placeholder="  Search opponent" onChangeText={(text) => this.onChangeText(text)} placeholderTextColor='black' onSubmitEditing={() => this.props.handleSearchInput(this.state.text)} />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    textInputStyle : {
        flex: 1,
        alignSelf : 'stretch',
        marginLeft : 10,
      },
      searchBar : {
        flex: 1,
        flexDirection : 'row',
        backgroundColor : 'white',
        alignSelf: 'stretch',
        alignItems : 'center',
        justifyContent : 'center'
      },
    
  });