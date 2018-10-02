import React from 'react';
import {
    View,
    Text,
    WebView
} from 'react-native';




export default class Thread extends React.Component {
    constructor() {
        super()
        this.state = {
            numero : 0
        }

    }


    prueba(){
        setTimeout(() => {
            this.state.numero++;
        }, 3000)
    }

    componentWillUnmount(){

        // while(this.state.numero < 5){
        //     this.prueba();
        //     console.log(this.state.numero);
        // }

        console.log('holi');

    }

    

    render() {
        return (
            <WebView
                originWhitelist={['*']}
                source={{ html: '<h1>Hello world</h1>' }}
                onMessage={this.handleMessage}
            />
        )
    }
} 
