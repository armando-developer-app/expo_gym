import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react/cjs/react.development'

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.signupText}>One step away...{'\n'}</Text>

            <TextInput style={styles.textInput}
                onChangeText={email => setEmail(email)}
                value={email}
                placeholder='email@gmail.com'
                placeholderTextColor='gray'
                keyboardType='email-address'
                autoCapitalize='none'
            />
            <TextInput style={styles.textInput}
                onChangeText={email => setEmail(email)}
                value={email}
                placeholder='password'
                placeholderTextColor='gray'
                autoCapitalize='none'
            />
            <TextInput style={styles.textInput}
                onChangeText={email => setEmail(email)}
                value={email}
                placeholder='confirm password'
                placeholderTextColor='gray'
                autoCapitalize='none'
            />
            <TextInput style={styles.textInput}
                onChangeText={email => setEmail(email)}
                value={email}
                placeholder='full name'
                placeholderTextColor='gray'
                autoCapitalize='none'
            />
            <TextInput style={styles.textInput}
                onChangeText={email => setEmail(email)}
                value={email}
                placeholder='age'
                placeholderTextColor='gray'
                keyboardType='numeric'
            />

            <TouchableOpacity onPress={() => console.log('OK')}>
                <View style={[styles.button, {justifyContent:'center', alignItems:'center', backgroundColor: 'orange'}]}>
                    <Text style={styles.buttonText}> Finish </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={[styles.button, {justifyContent:'center', alignItems:'center', backgroundColor: 'orange'}]}>
                    <Text style={styles.buttonText}> Back </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupText: {
        color: 'white',
        fontSize: 40,
        marginBottom: 30
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
    },
    buttonText: {
        color: 'white',
        fontSize: 25
    },
})