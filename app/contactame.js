import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    PermissionsAndroid,
    Linking
} from 'react-native';
import Communications from 'react-native-communications';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Container, Header, Title, Left, Right, Button, Body, Content, Text, Card, CardItem } from 'native-base';


async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': 'Cool Photo App Camera Permission',
          'message': 'Cool Photo App needs access to your camera ' +
                     'so you can take awesome pictures.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera")
      } else {
        console.log("Camera permission denied")
      }
    } catch (err) {
      console.warn(err)
    }
  }

export default class Contactame extends React.Component {



    static navigationOptions = {

        title: 'Contactame',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('./img/contacto.png')} />
        ),


    };

    constructor() {
        super()
        this.state = {
            initialPosition: 'unknown',
            lastPosition: 'unknown',
        }


    }

    callNumber = (url) => {

        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
        
    }


    render() {
        return (
            <View>
                 <Text onPress={() => this.callNumber('tel:+573206323470')}
                    style={[styles.value, { marginLeft: 5, textDecorationLine: 'underline' }]}>
                    {'+57 3206323470'}
                </Text>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: 39.7390,
                        longitude: -104.9908,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.16516
                    }}
                />

               
            </View>



        )
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
    },

    map: {
        height: 400,
        marginTop: 80
    }
})