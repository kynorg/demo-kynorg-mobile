import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { Icon, Card, ListItem } from "react-native-elements";
import axios from "axios";

const HomeScreen = ({ navigation, route }) => {
    const [username, setUsername] = useState(null);
    const [id, setId] = useState(route.params.id);
    const [products, setProducts] = useState([]);
    let path = '';

    const getProducts = () => {
        axios.get('http://localhost:3000/Products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {

            })
    };
    useEffect(() => {
        getProducts();

    }, []);

    console.log(products.map(i => i.image))
    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    products.map((item, i) => (
                        <View key={i}>
                            <Image
                                style={styles.image}
                                source={{ uri: item.image }}
                            />
                            <Text>{item.productName}</Text>


                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
    image: {
        width: 200,
        height: 150
    }
});
