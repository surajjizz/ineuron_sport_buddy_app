import * as React from 'react';
import AppStorage from '../storage/AppStorage';
import AuthNavigator from './AuthNavigator';
import StackNavigator from './StackNavigator';

const AppNavContainer = () => {

    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    const getAuthenticationStatus = async () => {
        const user = await AppStorage.getAuthenticationStatus();

        if (user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    };

    React.useEffect(() => {
        getAuthenticationStatus();
    }, [isAuthenticated]);

    return <>
        {isAuthenticated ? <StackNavigator /> : <AuthNavigator />}
    </>
};

export default AppNavContainer;
