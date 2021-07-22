import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default (props, {password}) => {
    return (
        <TextInput style={styles.textInput}
            onChangeText={password => setPassword(password)}
            value={password}
            placeholder={props.placeholder}
            placeholderTextColor='gray'
            secureTextEntry={true}
            autoCapitalize='none'
        />
    )
}


const styles = StyleSheet.create({
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
    }
})