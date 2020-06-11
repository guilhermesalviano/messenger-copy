import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Home from './pages/Home';
import Chat from './pages/Chat';

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator 
                headerMode="none" 
                screenOptions={{cardStyle: {
                    backgroundColor: '#f0f0f5',
            }}}>
                <AppStack.Screen  name="Login" component={Login} />
                <AppStack.Screen  name="Home" component={Home} />
                <AppStack.Screen  name="Chat" component={Chat} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;