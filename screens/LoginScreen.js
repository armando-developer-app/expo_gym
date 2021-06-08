import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <TextInput style={styles.textInput}
                onChangeText={email => setEmail(email)}
                email={email}
                placeholder='  email@gmail.com'
                placeholderTextColor='gray'
            />
            <TextInput style={styles.textInput}
                onChangeText={email => setEmail(email)}
                email={email}
                placeholder='  password'
                placeholderTextColor='gray'
            />
            <TouchableOpacity>
                <View style={[styles.button, {justifyContent:'center', alignItems:'center'}]}>
                    <Text style={styles.buttonText}> Login </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={[styles.button, {justifyContent:'center', alignItems:'center'}]}>
                    <Text style={styles.buttonText}> Sign Up! </Text>
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
        margin: 10,
        fontSize: 20
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: 'blue',
        marginTop: 20
    }
})

export default LoginScreen