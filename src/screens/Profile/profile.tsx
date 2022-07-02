import * as React from "react";
import 'react-native-gesture-handler';
import {
  Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme,
  VStack, Box, Button, View, Container
} from "native-base";
// import NativeBaseIcon from "./components/NativeBaseIcon";
import RootStore from "../../stores/RootStore";
import { observer } from "mobx-react";
// import CommonStore from "./src/stores/CommonStore";
import { observable } from "mobx";
import { NavigationContainer } from '@react-navigation/native';
// import AppNavContainer from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import {  StyleSheet,
  Image,
  TouchableOpacity } from "react-native";

  const styles = StyleSheet.create({
    header:{
      backgroundColor: "#00BFFF",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
      width:'100%'
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    // name:{
    //   fontSize:28,
    //   color: "#696969",
    //   fontWeight: "600"
    // },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
  });  

const ProfileAvatar: React.FC = () => {
    return  <Container>
    <View style={styles.header}></View>
    <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
    <View style={styles.body}>
      <View style={styles.bodyContent}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.info}>UX Designer / Mobile developer</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
        
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Opcion 1</Text>  
        </TouchableOpacity>              
        {/* <TouchableOpacity style={styles.buttonContainer}>
          <Text>Opcion 2</Text> 
        </TouchableOpacity> */}
        <Text fontWeight="medium" color="black" fontSize="sm">
    Hey There!
  </Text>
      </View>
  </View>
</Container>
   
}

const ProfileComponent: React.FC = () => {

  const { commonStore } = RootStore;

  return  <ProfileAvatar/>

}

export default observer(ProfileComponent);