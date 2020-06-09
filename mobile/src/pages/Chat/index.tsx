import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import ChatHeader from '../../components/ChatHeader';
import ChatComposer from '../../components/ChatComposer';

const Chat = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ChatHeader />
            {/* <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios'? 'padding' : undefined}> */}
                <ChatComposer />
            {/* </KeyboardAvoidingView> */}
        </SafeAreaView>
    );
}

export default Chat;