import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    FlatList
  } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { Circle, G } from 'react-native-svg';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { Container, Header, Title, Left, Right, Button, Body, Content, Text, Card, CardItem } from 'native-base';
import Logeado from './index.js';


class Grafica extends React.Component {
    static navigationOptions = {

        title: 'Grafica',
        // tabBarIcon: ({ tintColor }) => (
        //   <Image source={require('./img/home.png')}
    
        //   />
        // ),
      };

      constructor(){
          super()
          this.state = {
            dataSource: [],

          }
      }

      componentDidMount(){
          
        const url = 'https://samioff15.000webhostapp.com/';

        fetch(url).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataSource: responseJson
                })
            })
            .catch((error) => {
                console.log(error)
            })

        console.log(this.state.dataSource);
      }

      render() {

        const data = [
            {
                key: 1,
                value: 50,
                svg: { fill: '#600080' },
                arc: { outerRadius: '130%', cornerRadius: 10,  }
            },
            {
                key: 2,
                value: 50,
                svg: { fill: '#9900cc' }
            },
            {
                key: 3,
                value: 40,
                svg: { fill: '#c61aff' }
            },
            {
                key: 4,
                value: 95,
                svg: { fill: '#d966ff' }
            },
            {
                key: 5,
                value: 35,
                svg: { fill: '#ecb3ff' }
            }
        ]


        return (
            <PieChart
                style={{ height: 500 }}
                outerRadius={'70%'}
                innerRadius={10}
                data={data}
            />
        )
    }

}




// Los estilos









// Exportando clase
export default Grafica