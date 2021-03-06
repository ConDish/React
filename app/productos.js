import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    FlatList,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { Container, Header, Title, Left, Right, Button, Body, Content, Text, Card, CardItem } from 'native-base';
import Logeado from './index.js';


export default class Productos extends React.Component {
    static navigationOptions = {

        title: 'Productos',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('./img/producto.png')} />
        ),


    };

    constructor() {

        super()
        this.state = {
            dataSource: [],
            producto: ''
        }

    }

    onDetalles(nombre, tipo, precio) {
        Alert.alert(
            nombre,
            'Tipo del producto: ' + tipo + '\n' + 'Valor: ' + precio,
            [
                 {text: 'OK'},
            ],
            { cancelable: false }
        )
    }

    renderItem = ({ item }) => {


        if (item.nulo == "true") {
            return (
                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}>


                </View>

            )

        } else {
            return (

                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 3 }}>
                    <TouchableOpacity
                    onPress={() => this.onDetalles(item.nombre, item.tipo_producto, item.precio)}
                    >
                    <Image source={{ uri: item.imagen }}
                        style={{ width: 80, height: 80, margin: 5 }}
                    />
                    </TouchableOpacity>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, color: 'green', marginBottom: 15 }}>
                            {item.nombre}
                        </Text>
                    </View>

                </View>

            )
        }





    }

    // Funcion Buscar
    onBuscar() {



        const producto = {
            producto: this.state.producto
        }

        const url = 'https://samioff15.000webhostapp.com/?op=1&producto=' + producto.producto;

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



    // Es el primer llamado de los productos
    componentDidMount() {

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

    }

    render() {
        return (


            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                    <TextInput
                        placeholder="Producto"
                        style={{ width: "60%" }}
                        onChangeText={(producto) => this.setState({ producto })}
                    />
                    <Button bordered info
                        onPress={() => this.onBuscar()}
                    >
                        <Text>Buscar</Text>
                    </Button>
                </View>

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

