import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  FlatList
} from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { Container, Header, Title, Left, Right, Button, Body, Content, Text, Card, CardItem } from 'native-base';


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
      <Container>
        <Text>{getnombre}</Text>

      </Container>
    )

  }


}


// Los productos
class Productos extends React.Component {
  static navigationOptions = {

    title: 'Productos',
    tabBarIcon: ({ tintColor }) => (
      <Image source={require('./img/producto.png')} />
    ),


  };

  constructor() {
    super()
    this.state = {
      dataSource: []
    }
  }
  renderItem = ({ item }) => {

    return (
      <View style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}>
        <Image source={{ uri: item.picture }}
          style={{ width: 80, height: 80, margin: 5 }}
        />
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, color: 'green', marginBottom: 15}}>
            {item.name}
          </Text>
        </View>

      </View>
    )

  }



  componentDidMount() {

    const url = 'http://www.json-generator.com/api/json/get/cfRTKNAQya?indent=1';

    fetch(url).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}

        />
      </View>
    );
  }



}

// Los CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15

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
    Productos: { screen: Productos }
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
