import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerScreen from './DrawerScreen';
import TabScreen from './TabScreen';
import Welcome from './Welcome';
import SignIn from './SignIn';
import SignUp from './SignUp';

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
        <Stack.Screen
            name="Dashboard"
            component={DrawerScreen}
            options={{
                headerStyle: {
                    backgroundColor: '#009387',
                },
            }}
        />
        <Stack.Screen
            name="Home"
            component={TabScreen}
            options={{
                title: 'Homepage',
                headerStyle: {
                    backgroundColor: '#009387',
                },
            }}
        />
    </Stack.Navigator>
);

export default StackScreen;
