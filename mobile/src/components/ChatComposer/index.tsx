import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { AppLoading } from 'expo'
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
// Sample: https://github.com/FaridSafi/react-native-gifted-chat/blob/master/App.tsx

const ChatComposer = () => {
    const [message, setMessage] = useState<IMessage[]>([]);
    //load olds messages

    function handleSendMessage(messages: IMessage[]) {
        const sentMessages = [{ ...messages[0], sent: true, received: true }];
        setMessage([sentMessages[0],...message]);
        return;
    }

    if (!message) {
        return <AppLoading />
    }

    return (
        <View style={styles.container}>
            <GiftedChat
                messages={message}
                onSend={(messages) => handleSendMessage(messages)}
                user={Platform.OS === 'ios'?{
                    _id: 1,
                    name: 'Guibs',
                    avatar: 'https://placeimg.com/140/140/any',
                }: {
                    _id: 2,
                    name: 'outro',
                    avatar: 'https://facebook.github.io/react/img/logo_og.png',
                }}
                loadEarlier={false}
                scrollToBottom
                onLongPressAvatar={user => alert(JSON.stringify(user))}
                onPressAvatar={() => alert('short press')}
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
});


export default ChatComposer;