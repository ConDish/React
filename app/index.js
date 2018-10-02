import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  FlatList
} from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { Container, Header, Title, Left, Right, Button, Body, Content, Text, Card, CardItem } from 'native-base';
import Productos from './productos.js';
import Contactame from './contactame.js';
import Thread from './thread.js'

// Cuando la persona se logea
class Logeado extends React.Component {
  static navigationOptions = {

    title: 'Inicio',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('./img/home.png')}

      />
    ),


  };

  render() {

    const { navigation } = this.props;
    const getnombre = navigation.getParam('nombre');
    return (
      <Container style={styles.container}>

        <Text style={{ fontFamily: 'nozstudio', textAlign: 'center' }}>Welcome to my project!</Text>
        <Image source={require('./img/corazon.png')}
          
        />

      </Container>
    )

  }


}

// Los CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center', 
    alignItems: 'center'

  },
  colorIcon: {
    paddingRight: 10,
    color: '#fff',
  }
})


// El Tab Navigator
export default createMaterialTopTabNavigator(
  {
    Home: { screen: Logeado },
    Productos: { screen: Productos },
    Contactame: { screen: Contactame },
    Thread: { screen: Thread }
  },
  {
    // Agregar estilos o iconos a mi tabnavigator


    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#FFF',
      labelStyle: {
        fontSize: 9,

      },
      style: {
        backgroundColor: 'grey',
      },
      indicatorStyle: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2,
      },

    },



  });
