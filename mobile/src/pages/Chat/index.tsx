import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import ChatHeader from '../../components/ChatHeader';
import ChatHistory from '../../components/ChatHistory';
import ChatMessageComposer from '../../components/ChatMessageComposer';

const Chat = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ChatHeader />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios'? 'padding' : undefined}>
                <ChatHistory />
                <ChatMessageComposer />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default Chat;