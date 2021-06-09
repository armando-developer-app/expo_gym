import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button title='Go Back' onPress={() => navigation.navigate('Login')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

export default HomeScreen