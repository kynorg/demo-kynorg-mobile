import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

const AdminScreen = ({ navigation, route }) => {
    const [username, setUsername] = useState(route.params.username);
    const [id, setId] = useState(route.params.id);
    return (
        <View>
            <Text>Welcome {username} to admin page</Text>
        </View>
    );
};
export default AdminScreen;

const styles = StyleSheet.create({

});
