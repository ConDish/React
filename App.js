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
import md5 from 'md5';
import Logeado from './app/index.js';
import Toast, { DURATION } from 'react-native-easy-toast';


export default class App extends React.Component {
  render() {
    return <MyNavigator />;
  }
}


class Primera extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      usuario: '',
      contra: '',
    }
  }
  static navigationOptions = {

    title: 'Inicio',

  };

  // Para poder cambiar los campos
  changeUsuario = (usuario) => {
    this.setState({ usuario: usuario })
  }

  changeContra = (contra) => {
    this.setState({ contra: contra })
  }

  envioData() {

    const { navigate } = this.props.navigation;

    const Arraydata = [];

    const data = {

      nombre: this.state.usuario,
      contra: md5(this.state.contra)

    }
    Arraydata.push(data);

    // Validar el usuario y la contraseña
    if (Arraydata[0].nombre == "admin" && Arraydata[0].contra == md5('123456')) {

      navigate('ir', { nombre: Arraydata[0].nombre });

    } else {
      // Borrar todo lo que haya escrito en los inputs de logeo
      this.changeUsuario('');
      this.changeContra('');

      // Mostrar el toast por datos incorrectos
      this.refs.toast.show(<Text style={{ textAlign: "center", color: "#FFF"}}>Datos Incorrectos!</Text>);
    }

  }


  render() {



    return (
      <View style={styles.container}>

        <TextInput
          style={styles.inputTop}
          placeholder="Usuario"
          value={this.state.usuario}
          onChangeText={this.changeUsuario}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={this.state.contra}
          onChangeText={this.changeContra}
        />


        <TouchableOpacity
          style={styles.boton}
          onPress={() => this.envioData()}
          underlayColor='#fff'>
          <Text style={styles.textboton}>Enviar</Text>
        </TouchableOpacity>
        
          <Toast ref="toast" style={styles.toast}/>
        
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15

  },

  inputTop: {

    height: 40,
    borderWidth: 0,
    marginBottom: 20,
    marginTop: 100,
    paddingLeft: 5,
    paddingRight: 5,

  },

  input: {

    height: 40,
    marginTop: 20,
    marginBottom: 40,
    paddingLeft: 5,
    paddingRight: 5,

  },

  boton: {
    height: 40,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    paddingTop: 5,
    paddingBottom: 10,
  },

  textboton: {
    color: "#fff",
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18
  },
  toast: {
    backgroundColor: '#FFC300',
    width: '100%',
    
  },

});

const MyNavigator = createStackNavigator(
  {
    send: Primera,
    ir: Logeado
  }

)