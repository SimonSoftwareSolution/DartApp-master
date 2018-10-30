import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class PurposedOpponentsComponent extends React.Component {
    render() {
      return (   
        <View style={styles.container}>
                <View style={styles.leftContainer}>
                        <View style={styles.purposedOpponent}>
                            <Text>{this.props.rank}</Text>
                            <Text>{this.props.name}</Text>
                            <TouchableOpacity onPress={() => this.props.handleIconClick({name : this.props.name, rank: this.props.rank})}>
                            <Image
                            style={{width: 20, height: 20}}
                            source={require('../challenge.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.purposedOpponent}>
                            <Text>{this.props.rank} . </Text>
                            <Text>{this.props.name}  </Text>
                            <TouchableOpacity onPress={() => this.props.handleIconClick({name : this.props.name, rank: this.props.rank})}>
                            <Image
                            style={{width: 20, height: 20}}
                            source={require('../challenge.png')}/>
                            </TouchableOpacity>
                        </View>
                </View>
                <View style={styles.rightContainer}>
                        <View style={styles.purposedOpponent}>
                                    <Text>{this.props.rank} . </Text>
                                    <Text>{this.props.name}  </Text>
                                    <TouchableOpacity onPress={() => this.props.handleIconClick({name : this.props.name, rank: this.props.rank})}>
                                    <Image
                                    style={{width: 20, height: 20}}
                                    source={require('../challenge.png')}/>
                                    </TouchableOpacity>
                        </View>
                        <View style={styles.purposedOpponent}>
                            <Text>{this.props.rank}  </Text>
                            <Text>{this.props.name}  </Text>
                            <TouchableOpacity onPress={() => this.props.handleIconClick({name : this.props.name, rank: this.props.rank})}>
                            <Image
                            style={{width: 20, height: 20}}
                            source={require('../challenge.png')}/>
                            </TouchableOpacity>
                        </View>
                </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: 'stretch',

      alignItems: 'center',
      justifyContent: 'center',
     
    },
    leftContainer : {
        flex : 1,
        flexDirection : 'row',
        alignSelf : 'stretch',
        alignItems : 'center'
    },
    rightContainer : {
        flex : 1,
        flexDirection : 'row',
        alignSelf : 'stretch',
        alignItems : 'center'
    },
    purposedOpponent : {
        flex : 1,
        backgroundColor: '#0be881',
        borderWidth: 1,
        borderRadius: 15,  
        margin : 2,
        borderColor: '#f5f6fa',
        alignSelf : 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'center',
    }

    
  });