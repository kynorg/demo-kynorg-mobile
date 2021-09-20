import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Welcome';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Stack = createStackNavigator();

const StackScreen = ({navigation}) => (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#FE5900',
        }
    }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{title:''}}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
    </Stack.Navigator>
);

export default StackScreen;