import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

const HomeScreen = ({ navigation, route }) => {
    const [username, setUsername] = useState(route.params.username);
    const [id, setId] = useState(route.params.id);
    return (
        <View>
            <Text>Welcome {username}</Text>
        </View>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({

});
