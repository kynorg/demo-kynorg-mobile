import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Welcome';
import SignIn from './SignIn';
import SignUp from './SignUp';
import HomeScreen from './HomeScreen';
import AdminScreen from './AdminScreen';

const Stack = createStackNavigator();

const StackScreen = ({ navigation }) => (
    <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#FFF',
        }
    }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        {/* options={{title:''}}/> */}
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
    </Stack.Navigator>
);

export default StackScreen;