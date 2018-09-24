import React from 'react';
import {
   StyleSheet,
   Text,
    View,
    Button,
    TouchableOpacity,
    TextInput
   } from 'react-native';
import { createStackNavigator } from 'react-navigation';


class Prueba extends React.Component{
  static navigationOptions = {

    title: 'Segunda',

  };
  
  render(){
    const {navigation} = this.props;
    const getnombre = navigation.getParam('nombre');
    return(
      <View style={styles.container}>
        <Text>{JSON.stringify(getnombre)}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15
   
  }
})