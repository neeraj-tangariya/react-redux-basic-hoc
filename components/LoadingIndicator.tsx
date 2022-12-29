import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoadingIndicator = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Loading...</Text>
        </View>
    )
}

export default LoadingIndicator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})