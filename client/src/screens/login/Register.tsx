import * as React from 'react';
import { Box, Center, FormControl, Heading, Input, Button, VStack, HStack, Link, Toast, useToast } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParams } from '../../navigation/AuthNavigator';
import RootStore from '../../stores/RootStore';
import { observer } from 'mobx-react';

interface IProps {
    navigation: StackNavigationProp<AuthStackParams, 'Register'>
}

const Register: React.FC<IProps> = (props) => {

    const { loginStore } = RootStore;
    const toast = useToast();

    const backToLogin = () => {
        props.navigation.goBack();
    }

    const onRegister = async () => {
        if (loginStore.fullname == '' || loginStore.email == '' || loginStore.phone == '' || loginStore.password == '') {
            toast.show({ description: 'Please enter valid details' });
            return;
        }
        await loginStore.register();
    }

    const setRegisterData = (val: any, type: any) => {
        if (type === 'fullname') {
            loginStore.fullname = val;
        } else if (type === 'email') {
            loginStore.email = val;
        } else if (type === 'phone') {
            loginStore.phone = val;
        } else {
            loginStore.password = val;
        }
    }

    return <Center w="100%" bg={'primary.500'} flex={1}>
        <Box safeArea p="4" py="8" w="90%" maxW="290" bg={'white'} borderRadius='lg'>
            <Box alignItems='center'>
                <Heading size='md' fontWeight="600" color="coolGray.800"
                    _dark={{ color: "warmGray.50" }}>
                    Sports Buddy
                </Heading>
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size='sm'>
                    Registration
                </Heading>
            </Box>

            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Full Name</FormControl.Label>
                    <Input value={loginStore?.fullname} onChangeText={(val) => setRegisterData(val, 'fullname')} />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input value={loginStore?.email} onChangeText={(val) => setRegisterData(val, 'email')} />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Phone</FormControl.Label>
                    <Input value={loginStore?.phone} onChangeText={(val) => setRegisterData(val, 'phone')} />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" value={loginStore?.password} onChangeText={(val) => setRegisterData(val, 'password')} />
                </FormControl>
                <Button mt="2" colorScheme="indigo" onPress={onRegister}>
                    Sign up
                </Button>

                <HStack mt="1" justifyContent="center">
                    <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }}
                        onPress={backToLogin}>
                        Back
                    </Link>
                </HStack>
            </VStack>
        </Box>
    </Center>;
};

export default observer(Register);
