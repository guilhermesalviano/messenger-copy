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
    const user = route.params[0] as userActual;
    const userTo = route.params[1] as userActual;
    // console.log(route.params);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ChatHeader toUser={userTo} />
            {/* <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios'? 'padding' : undefined}> */}
                <ChatComposer user={user} toUser={userTo} />
            {/* </KeyboardAvoidingView> */}
        </SafeAreaView>
    );
}

export default Chat;