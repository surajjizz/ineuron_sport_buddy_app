import * as React from "react";
import { HStack, IconButton, Icon, Text } from "native-base"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Dimensions } from "react-native";
import RootNavigator from "../navigation/RootNavigator";
import { DrawerActions } from "@react-navigation/native";

interface IProps {
    isDrawer?: boolean
    navigation?: any
    bg?: any
    color?: any
}

export const AppHeader: React.FC<IProps> = (props) => {
    const { width } = Dimensions.get('window');

    const toggle = () => {
        props?.navigation?.toggleDrawer();
    }

    return <HStack bg={props.bg ? props.bg : "#6200ee"} px="1" py="3" justifyContent="space-between" alignItems="center" w={width}>
        <HStack alignItems="center">
            {props?.isDrawer &&
                <IconButton icon={<Icon as={MaterialIcons} size="sm" name="menu" color={props.color ? props.color : "white"} />} onPress={toggle} />
            }
            <Text color={props.color ? props.color : "white"} fontSize="20" fontWeight="bold">
                Home
            </Text>
        </HStack>
        {/* <HStack>
            <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color={props.color ? props.color : "white"} />} />
            <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color={props.color ? props.color : "white"} />} />
            <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color={props.color ? props.color : "white"} />} />
        </HStack> */}
    </HStack>
}