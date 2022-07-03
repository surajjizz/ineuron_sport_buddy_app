import * as React from 'react';
import { Box, Center, FormControl, Heading, Input, Button, Link, VStack, HStack } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParams } from '../../navigation/AuthNavigator';
import { HOME, REGISTER } from '../../navigation/Routes';
import { observer } from 'mobx-react';
import RootStore from '../../stores/RootStore';

interface IProps {
    navigation: StackNavigationProp<AuthStackParams, 'Login'>
}

const Login: React.FC<IProps> = (props) => {

    const { loginStore } = RootStore;

    const navigateToRegister = () => {
        props.navigation.navigate(REGISTER);
    }

    const login = async () => {
        let response = await loginStore.login();
        // if(response){
        //     props.navigation.navigate(HOME);
        // }
    }

    const setLoginData = (val: any, type: any) => {
        if (type === 'email') {
            loginStore.email = val;
        } else {
            loginStore.password = val;
        }
    }

    return <Center w="100%" bg={'primary.500'} flex={1}>
        <Box safeArea p="4" py="8" w="90%" maxW="290" bg={'white'} borderRadius='lg'>
            <Box alignItems='center'>
                <Heading size="md" fontWeight="600" color="coolGray.800"
                    _dark={{ color: "warmGray.50" }}>
                    Sports Buddy
                </Heading>
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size='sm'>
                    Login
                </Heading>
            </Box>

            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input value={loginStore?.email} onChangeText={(val) => setLoginData(val, 'email')} />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" value={loginStore?.password} onChangeText={(val) => setLoginData(val, 'password')} />
                </FormControl>
                <Button mt="2" colorScheme="indigo" onPress={login}>
                    Sign in
                </Button>

                <HStack mt="1" justifyContent="center">
                    <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }}
                        onPress={navigateToRegister}>
                        Create new account
                    </Link>
                </HStack>
            </VStack>
        </Box>
    </Center>;
};

export default observer(Login);
