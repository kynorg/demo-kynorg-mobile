import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';

import { useTheme } from 'react-native-paper';


const SignUp = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: '',
        usernameError: '',
        passwordError: '',
        secureTextEntry: true,
        confirm_secureTextEntry: true

    })

    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                usernameError: ''
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                usernameError: 'username is required'
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const updateconfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })
    }
    const onSignUp = (username, password) => {
        if ((data.password === '') || (data.confirm_password === '')) {
            setData({
                ...data,
                passwordError: 'Password / confirm password not provided'
            })
        } else if (data.password !== data.confirm_password) {
            setData({
                ...data,
                passwordError: 'Passwords provided do not match'
            })
        } else {
            setData({
                ...data,
                passwordError: ''
            })
        }
        if (data.passwordError === '' && data.usernameError === '' && data.check_textInputChange) {

            const body = { username, password };
            axios.post('http://localhost:3000/users/signup', body)
                .then(response => {
                    response.data.message ? setData({ ...data, usernameError: response.data.message }) : null;
                    let type = response.data.type;
                    if(type === 'client')
                    {
                        navigation.navigate('Home', { id: response.data.id, username: response.data.username });
                    }else{
                        navigation.navigate('Admin', { id: response.data.id, username: response.data.username });
                    }
                }).catch(error => {
                    throw error;
                    console.log(error);
                });
        }

    };
    return (
        <View style={styles.container}>
            {/* <StatusBar backgroundColor='#009387' barStyle="light-content"/> */}
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
                <Text style={styles.text}>sign up to view products</Text>
            </View>
            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig"
            >
                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your username"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather
                                name="alert-triangle"
                                color="red"
                                size={20}
                            />
                        </Animatable.View>
                    }
                </View>
                {data.usernameError !== '' ? <Text style={[styles.errorContainer, styles.errorMsg]}>{data.usernameError}</Text> : null}
                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }

                    </TouchableOpacity>
                </View>
                {data.passwordError !== '' ? <Text style={[styles.errorContainer, styles.errorMsg]}>{data.passwordError}</Text> : null}

                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Confirm Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Confirm Password"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateconfirmSecureTextEntry}
                    >
                        {data.confirm_secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.touchIn}
                        onPress={() => { onSignUp(data.username, data.password) }}
                    >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignIn')}
                        style={[styles.signIn, {
                            borderColor: "#009387",
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >

                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text: {
        color: 'black',
        marginTop: 5
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    errorContainer: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingVertical: 10
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    touchIn: {
        width: '100%',
        maxHeight: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});