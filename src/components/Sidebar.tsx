import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, Container, FlatList, Box, HStack, View } from 'native-base'
import { HOME, MEET, PROFILE, VENUES } from '../navigation/Routes'

export interface Props {
    navigation?: any
}

const routes = [{ route: HOME }, { route: MEET }, { route: VENUES }, { route: PROFILE }]

export const Sidebar: React.FC = () => {
    return <Container w='100%' bg={'cyan.500'} mt='5' pt={'5'}>
        {/* <Content> */}
            <View w={'100%'} bg={'yellow.100'}>
                {/* <TouchableOpacity onPress={() => this.navigateToPage('ProfilePage')} activeOpacity={0.9}
                    style={{
                        alignItems: 'center',
                        backgroundColor: AppDefaults.themeColor,
                        height: 100,
                        justifyContent: 'center'
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 5, padding: 10 }}>
                            <Text style={{ padding: 5, color: "white", fontSize: 18 }}>
                                {AppDefaults.isDemo ? "DEMO USER" : AppDefaults.userName.toUpperCase()}
                            </Text>
                            <Text style={{ padding: 5, color: "white", fontSize: 14, opacity: 0.7 }}>
                                {AppDefaults.storeName}
                            </Text>
                            <Text style={{ paddingLeft: 5, color: "white", fontSize: 10, opacity: 0.7 }}>
                                {this.props.loginStore.hqSelectedFinYear}
                            </Text>

                        </View>
                        <View style={{ flex: 1 }}>
                            <Icon name={'chevron-right'} size={26} color='white' />
                        </View>
                    </View>
                </TouchableOpacity> */}
                <FlatList
                    style={{width:'100%', flex:1, backgroundColor:'blue' }}
                    w={'100%'}
                    data={routes}
                    contentContainerStyle={{ marginTop: 10, width: '100%',flex:1, backgroundColor:'red' }}
                    renderItem={({ item }: any) => <Box w={'100%'} borderBottomWidth="1" _dark={{
                        borderColor: "gray.600"
                    }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                        <HStack justifyContent="space-between">
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>{item.route}</Text>
                        </HStack>
                    </Box>}
                />
            </View>
        {/* </Content> */}
    </Container >
}

const styles = StyleSheet.create({
    badge: {
        marginLeft: 12, marginTop: -10, backgroundColor: '#FF4E67', height: 16,
        width: 24, borderRadius: 5, justifyContent: 'center', alignItems: 'center'
    }
})
