import React from 'react';
import {
    View,
    Text,
    Image,
    WebView
} from 'react-native';
import WebViewBridge from 'react-native-webview-bridge';




export default class Thread extends React.Component {
    static navigationOptions = {

        title: 'Hilo',
        tabBarIcon: ({ tintColor }) => (
            <Image source={require('./img/hilo.png')} />
        ),


    };
    constructor() {
        super()
        this.state = {
            numero : 0
        }

    }


    componentDidMount(){


    }

    

    render() {
        return (
           <View style={{ flex: 1}}>
                <WebView
                    automaticallyAdjustContentInsets={false}
                    javaScriptEnabled={true}
                    // Recibir datos del html
                    onMessage={(event) => console.log('onMessage:', event.nativeEvent.data)}
                    source={require('./thread.html')}
                />
            </View>

            
        )
    }
} 
