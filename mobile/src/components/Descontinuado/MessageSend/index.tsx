import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageReceived = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Olá asdasfasdasfasdifjsapodfjaifjdçaegiasdfjipsdogahjdasihjdasfoifjdas</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-end',
        borderRadius: 10,
        backgroundColor: '#3b5998',
        resizeMode: 'contain',
        marginTop: 10,
    },
    message: {
        padding: 10,
        fontSize: 16,
        maxWidth: 220,
        color: '#fff',
    }
});

export default MessageReceived;