import React, { Fragment, Component } from 'react';
import { SafeAreaView, StyleSheet, AsyncStorage, PixelRatio, Text, TouchableOpacity, View, Button, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import axios from "axios";
import { throwStatement } from '@babel/types';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
return(
     <Fragment>
         <View style={styles.frame}>
            <View style={styles.title}>
                <Text>ChatPac</Text>
            </View>
            <View style={styles.uploadContent}>
                <Image style={styles.uploadImage} source={{uri: "http://smsite.trofixsrv.com/images/upload.png"}} />
            </View>
        </View>
    </Fragment>
        );
    }

}

const styles = StyleSheet.create({
frame:{
    position: "sticky", top:0, width:"100%", height:50
},
title:{
    position:"absolute",left:"10%",fontSize:25,color:"#000000", flex:1, flexDirection: "row"
},
uploadContent:{
    position:"absolute",right:"10%",width:25,height:25, borderWidth: 1,
    borderColor:"#000000", flex:1, flexDirection: "row"
},
uploadImage:{
    width:"100%", height:"100%", 
}
})