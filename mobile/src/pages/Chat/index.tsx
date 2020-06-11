import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ChatHeader from '../../components/ChatHeader';
import ChatComposer from '../../components/ChatComposer';

interface userActual {
    id: number,
    name: string,
    avatar: string
}

const Chat = () => {
    const route = useRoute();
    const user = route.params as userActual;
    console.log(user);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ChatHeader />
            {/* <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios'? 'padding' : undefined}> */}
                <ChatComposer user={user} />
            {/* </KeyboardAvoidingView> */}
        </SafeAreaView>
    );
}

export default Chat;