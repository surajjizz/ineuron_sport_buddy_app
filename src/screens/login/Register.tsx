import * as React from 'react';
import { Box, Center, FormControl, Heading, Input, Button, VStack, HStack, Link } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParams } from '../../navigation/AuthNavigator';

interface IProps {
    navigation: StackNavigationProp<AuthStackParams, 'Register'>
}

const Register: React.FC<IProps> = (props) => {

    const backToLogin = () => {
        props.navigation.goBack();
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
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Phone</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" />
                </FormControl>
                <Button mt="2" colorScheme="indigo">
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

export default Register;
