import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import * as firebase from 'firebase'

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
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>

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
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
        margin: 5
    },
    button: {
        width: 300,
        height: 50,
       // backgroundColor: 'blue',
        marginTop: 20
    }
})

export default LoginScreen