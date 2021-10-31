import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

//screens
import AdminScreen from "./AdminScreen";
import ProductScreen from "./ProductScreen";


const Drawer = createDrawerNavigator();


const DrawerScreen = () => {
    return (

        <Drawer.Navigator initialRouteName="Dashboard">

            <Drawer.Screen name="Dashboard" component={AdminScreen} />
            <Drawer.Screen name="Products" component={ProductScreen} />


        </Drawer.Navigator>


    );
};

export default DrawerScreen;
