import * as React from "react";
import 'react-native-gesture-handler';
import {
  Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme,
  VStack, Box, Button, View, Container, Pressable, Image
} from "native-base";
// import NativeBaseIcon from "./components/NativeBaseIcon";
import RootStore from "../../stores/RootStore";
import { observer } from "mobx-react";
// import CommonStore from "./src/stores/CommonStore";
import { observable } from "mobx";
import { NavigationContainer } from '@react-navigation/native';
// import AppNavContainer from "./src/navigation";
import { StatusBar } from "expo-status-bar";

const MeetList: React.FC = () => {
    return  <NativeBaseProvider>
        <Text fontWeight="bold" mt='1' mb='1' textAlign='center'>Name</Text>
    <Box style={{ marginTop:'1%', marginLeft:'20%'}} justifyContent="center" bg="primary.600" py="4" px="3" borderRadius="5" rounded="md" width={'60%'} maxWidth="100%">
      <HStack justifyContent="space-between">
        <Box justifyContent="space-between">
          <VStack space="2">
          <Text color="white" fontSize="xl">
             Suraaj
            </Text>
            <Text fontSize="sm" mt='1' color="white">
             Chennai
            </Text>
          </VStack>
          {/* <Pressable rounded="xs" bg="primary.200" alignSelf="flex-start" mt='2' py="1" px="1">
            <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="white">
              Request
            </Text>
          </Pressable> */}
        </Box>
        <Image source={{
        uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
      }} alt="Aang flying and surrounded by clouds" height="20" rounded="full" width="20" />
       <Pressable rounded="xs" bg="primary.200" alignSelf="flex-start" mt='2' py="1" px="1">
            <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="white">
              Request
            </Text>
          </Pressable>
      </HStack>
    </Box>
  </NativeBaseProvider>;
   
}

const ListComponent: React.FC = () => {

  const { commonStore } = RootStore;

  return  <MeetList/>

}

export default observer(ListComponent);
