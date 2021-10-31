import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import * as Animatable from 'react-native-animatable';



const AdminScreen = ({ navigation, route }) => {
    const [username, setUsername] = useState(route.params.username);
    const [id, setId] = useState(route.params.id);
    return (
        <View>
            <Text>Admin page {username}</Text>
        </View>
    );
};
export default AdminScreen;

const styles = StyleSheet.create({

});
