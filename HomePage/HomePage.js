import React, { Fragment, Component } from 'react';
import { SafeAreaView, StyleSheet, AsyncStorage, PixelRatio, Text, TouchableOpacity, View, Button, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import axios from "axios";
import { throwStatement } from '@babel/types';


class HomePage extends Component {


constructor(props){
  super(props);
  if(AsyncStorage.getItem("token") !== null && AsyncStorage.getItem("token") !== undefined){
    alert("You are already logged in!, ", AsyncStorage.getItem("token"))
  }
  this.state = ({currentView: <Login></Login>});
}


render(){
  return (
    <Fragment>
      <SafeAreaView>
        <View>
          <Text style={styles.loginHeader}>THIS IS THE HOMEPAGE</Text>
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

export default HomePage;
