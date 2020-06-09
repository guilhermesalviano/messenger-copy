import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MessageReceived from '../MessageReceived';
import MessageSend from '../MessageSend';

const ChatHistory = () => {
    return (
        <ScrollView
            style={styles.container}
            horizontal={false}
        >
            <View style={styles.rowMessage}>
                <MessageReceived />
                <MessageSend />
                <MessageSend />
                <MessageSend />
                <MessageReceived />
                <MessageReceived />
                <MessageReceived />
                <MessageReceived />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowMessage: {
        flexDirection: 'column',
    }
});

export default ChatHistory;