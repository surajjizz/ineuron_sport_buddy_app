import * as React from 'react';
import { Box, Container, HStack, VStack, Text, View, Stack } from 'native-base';
import { Dimensions, Platform } from 'react-native';
import { AppHeader } from '../../components/AppHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
    navigation?: any
}

const homeDatas: any = [{ icon: 'calendar', description: 'My Calendar', color: '#93b5c2' },
{ icon: 'plus-circle-outline', description: 'Create Activity', color: '#969c63' },
{ icon: 'heart-outline', description: 'Favourite Venues', color: '#76ceb8' },
{ icon: 'account-group', description: 'Groups', color: '#fa5f5b' },
{ icon: 'gift-outline', description: 'Offers', color: '#e9b817' }];

const Home: React.FC<IProps> = (props) => {
    const { width, height } = Dimensions.get('window');

    return <Container maxW={'100%'} bg={'gray.200'} h={height}>
        <AppHeader color={'black'} bg={'gray.200'} navigation={props.navigation} isDrawer={Platform.OS === 'web' ? true : false} />
        <Box bg={'white'} w={'94%'} maxW={'94%'} mx={3} mt={2} p={3} borderRadius={5}>
            <HStack>
                <MaterialCommunityIcons name='account' size={30} style={{ borderColor: 'black' }} />
                <Text fontSize={20} marginLeft={2} fontWeight='bold'>Hey, Suraj</Text>
            </HStack>
        </Box>
        <Box bg={'white'} w={'94%'} maxW={'94%'} mx={3} mt={5} p={3} borderRadius={5}>
            <Stack direction={'row'} flex={1} flexWrap='wrap' space={'md'}>
                {homeDatas.map((data: any, index: any) => {
                    return <VStack flexWrap={'wrap'} flex={1} key={index} space={1} alignItems='center' >
                        <View minHeight={36} minWidth={36} backgroundColor={data.color} borderRadius={20}
                            justifyContent='center' alignItems='center'>
                            <MaterialCommunityIcons size={25} color={'white'} name={data.icon} />
                        </View>
                        <Text textAlign={'center'}>{data.description}</Text>
                    </VStack>
                })}
            </Stack>
        </Box>
    </Container>
}

export default Home;
