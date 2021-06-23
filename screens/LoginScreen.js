import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as firebase from 'firebase'
import { back } from 'react-native/Libraries/Animated/src/Easing'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmailMsg, setErrorEmailMsg] = useState(null)
    const [errorPasswordMsg, setErrorPasswordMsg] = useState(null)

    const clearState = () => {
        setEmail('')
        setPassword('')
        setErrorEmailMsg(null)
        setErrorPasswordMsg(null)
      };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
        console.log('effect')
        clearState()
        })
        return unsubscribe
    }, []);

    const createAlertButton = () => {
        Alert.alert(
            "Ops!",
            "User not found.",
            [
                {
                text: "OK",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                }
            ],
            { cancelable: false }
        );
    }

    function loginToFirebase() {
        console.log('[INFO] loginToFirebase')

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user)

            navigation.navigate('Home')
        })
        .catch((error) => {
            console.log('[ERROR] ' + error.code)

            if (error.code == 'auth/invalid-email') {
                setErrorEmailMsg('Invalid Email.')
                setErrorPasswordMsg(null)
                return
            } else if (error.code == 'auth/wrong-password') {
                setErrorPasswordMsg('Wrong Password.')
                setErrorEmailMsg(null)
                return
            } else {
                createAlertButton()
                return
            }
        });
    }

    function goToSignupScreen() {
        console.log('[INFO] goToSignupScreen')
    }

    return (
        <View style={{backgroundColor: 'black', flex: 1, alignItems: 'center'/*, borderWidth: 2, borderColor: 'green'*/}}>
            <Ionicons name="barbell" style={styles.icon} />

            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    onChangeText={email => setEmail(email)}
                    value={email}
                    placeholder='email@gmail.com'
                    placeholderTextColor='gray'
                    keyboardType='email-address'
                    autoCapitalize='none'
                />

                <View>
                    {errorEmailMsg && <Text style={styles.errorText}>{errorEmailMsg}</Text>}
                </View>

                <TextInput style={styles.textInput}
                    onChangeText={password => setPassword(password)}
                    value={password}
                    placeholder='password'
                    placeholderTextColor='gray'
                    secureTextEntry={true}
                    autoCapitalize='none'
                />

                <View>
                    {errorPasswordMsg && <Text style={styles.errorText}>{errorPasswordMsg}</Text>}
                </View>

                <TouchableOpacity onPress={() => loginToFirebase()}>
                    <View style={[styles.button, {justifyContent:'center', alignItems:'center', backgroundColor: 'orange'}]}>
                        <Text style={styles.buttonText}> Login </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => goToSignupScreen()}>
                    <View style={[styles.button, {justifyContent:'center', alignItems:'center', backgroundColor: 'orange'}]}>
                        <Text style={styles.buttonText}> Sign Up </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={{color: 'white', fontSize: 10, marginTop: 275}}>Terms of condition: This is the best app you will ever witness in your life.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    //    borderWidth: 2,
      //  borderColor: 'red'
    },
    icon: {
        color: 'white',
        fontSize: 220,
        marginTop: 175,
        marginBottom: 150,
        transform: [{
            rotateZ: '-20deg'
        }]
    },
    text: {
        color: 'white',
        fontSize: 40,
        marginBottom: 20
    },
    errorText: {
        height: 20,
        width: 300,
        color: 'red',
        fontSize: 15,
        marginBottom: 10,
        marginTop: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 25
    },
    textInput: {
        height: 50,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        color: 'white',
        fontSize: 20,
        padding: 10,
        margin: 5,
        borderRadius: 15
    },
    button: {
        width: 300,
        height: 50,
        marginTop: 20,
        borderRadius: 15
    }
})

export default LoginScreen