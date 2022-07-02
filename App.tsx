import * as React from "react";
import 'react-native-gesture-handler';
import {
  Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme,
  VStack, Box, Button
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import RootStore from "./src/stores/RootStore";
import { observer } from "mobx-react";
import CommonStore from "./src/stores/CommonStore";
import { observable } from "mobx";
import { NavigationContainer } from '@react-navigation/native';
import AppNavContainer from "./src/navigation";
import { StatusBar } from "expo-status-bar";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

type MyThemeType = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends MyThemeType { }
}

const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return <HStack space={2} alignItems="center">
    <Text>Dark</Text>
    <Switch
      isChecked={colorMode === "light"}
      onToggle={toggleColorMode}
      aria-label={
        colorMode === "light" ? "switch to dark mode" : "switch to light mode"
      }
    />
    <Text>Light</Text>
  </HStack>
}

const App: React.FC = () => {

  const { commonStore } = RootStore;
  console.log("commonstore", commonStore.isLoading)

  const show = () => {
    commonStore.setLoaderStatus(!commonStore.isLoading);
  }

  return <>
    <StatusBar backgroundColor={'blue'} />
    {/* <SafeAreaView style={{ flex: 0 ,backgroundColor: '#1e3277'}} /> */}
    <NavigationContainer>
      <NativeBaseProvider>
        <AppNavContainer />
      </NativeBaseProvider>
    </NavigationContainer>
  </>
}

export default observer(App);
