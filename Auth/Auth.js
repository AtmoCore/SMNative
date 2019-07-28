  import React, { Fragment, Component } from 'react';
  import { SafeAreaView, StyleSheet, AsyncStorage, PixelRatio, Text, TouchableOpacity, View, Button, TextInput } from 'react-native';
  import { Colors } from 'react-native/Libraries/NewAppScreen';
  import axios from "axios";
  import { throwStatement } from '@babel/types';


  this.email = "";
  this.password = "";


  const Register = () => {
      return(
        <Fragment>
          <View style={styles.loginDiv}>
          <TextInput style={styles.loginInput} placeholder={"Email Address"} />
          <TextInput style={styles.loginInput} placeholder={"Email Again"} />
          <TextInput style={styles.loginInput} placeholder={"Nickname"} />
          <TextInput style={styles.loginInput} placeholder={"Full Name"} />
          <TextInput style={styles.loginInput} secureTextEntry={true} placeholder={"Password"} />
          <TextInput style={styles.loginInput} secureTextEntry={true} placeholder={"Password"} />
          </View>
          <TouchableOpacity onPress={this.tryRegister} style={styles.loginButton}>
          <Text>Register!</Text>
         </TouchableOpacity>
        </Fragment>
      );
  }

  tryLogin = () => {
    axios.post("http://smapi.trofixsrv.com/auth/login", {
      email: this.email.toLowerCase(),
      password: this.password
    }).then((response) => {
      if(response.data.success){
      //alert("Successfully logged in, "+response.data.user.username)
      AsyncStorage.setItem("userdata", JSON.stringify(response.data.user))
      AsyncStorage.setItem("token", response.data.token)
      AsyncStorage.getItem('token', (err, result) => {
       result;
      })
    }else{
      alert("Error logging in")
      AsyncStorage.removeItem("token")
    }
    })
  }

  const Login = () => {
    return(
      <Fragment>
        <View style={styles.loginDiv}>
        <TextInput style={styles.loginInput} onChangeText={(el) => {this.email = el}} placeholder={"Email Address"} />
        <TextInput style={styles.loginInput} secureTextEntry={true} onChangeText={el => this.password = el} placeholder={"Password"} />
        </View>
        <TouchableOpacity onPress={this.tryLogin} style={styles.loginButton}>
          <Text>Login!</Text>
        </TouchableOpacity>
      </Fragment>
    );
  }

class Auth extends Component {
  constructor(props){
    super(props);
    if(AsyncStorage.getItem("token") !== null && AsyncStorage.getItem("token") !== undefined){
      AsyncStorage.getItem("token").then((err, result) => {
          alert("You are already logged in!, ",result.username)
      })
    }
    this.state = ({currentView: <Login></Login>});
  }

  pressedLogin = () => {
    this.setState({currentView: <Login></Login>});
  }

  pressedRegister = () => {
    this.setState({currentView: <Register></Register>});
  }

  render(){
    return (
      <Fragment>
        <SafeAreaView>
          <View>
            <Text style={styles.loginHeader}>Please Log in/Register</Text>
          </View>
      <View style={styles.contents}>
          <View style={styles.authDiv}>
            <View style={styles.authOption}>
              <TouchableOpacity onPress={this.pressedLogin} style={styles.authOptionButton}>
                <Text>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.pressedRegister} style={styles.authOptionButton}>
                <Text>Register</Text>
              </TouchableOpacity>
            </View>
            {this.state.currentView}
          </View>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  };
  }

  const styles = StyleSheet.create({
    loginHeader: {
      textAlign: "center", fontWeight: "bold", fontSize: 30
    },
    authDiv: {
      width: "85%", maxHeight: "100%", minHeight:"50%", backgroundColor: "#efefef", top:0,
       borderColor: Colors.black, borderStyle: "solid",
      borderRadius: 3, borderWidth: 0.5, marginTop:"10%", paddingBottom: 20
    },
    authOptionButton: {
      width: "50%", height: 40, backgroundColor: Colors.white, position: "relative",
       alignItems: "center",justifyContent: "center", zIndex: 5, 
      borderColor: "black", borderWidth: 1, top:0
    },
    authOption: {
      flexDirection: "row", height:10, marginBottom:20
    },
    loginDiv: {
      width:"100%", alignItems: "center", position: "relative", top:0,
      paddingBottom:20, marginTop:20, paddingTop:0
    },
    contents:{
      justifyContent: "center", alignItems: "center", alignContent:"center"
    },
    loginInput: {
      alignSelf: "center",
      width:"75%", top: 0,height:40, marginTop:20,  
       borderColor:Colors.black, borderWidth: 1, flexDirection: "column",
      backgroundColor: Colors.white, borderRadius: 10, padding:5
    },
    loginButton:{
      width: "40%", height:30, borderColor: Colors.black, borderWidth: 1, marginTop:10, backgroundColor: Colors.white,
      justifyContent: "center", alignItems: "center", alignSelf: "center", position: "absolute", bottom: 0
    }

  });

  export default Auth;
