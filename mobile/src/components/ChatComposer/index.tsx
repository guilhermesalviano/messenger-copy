import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { AppLoading } from 'expo'
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

import api from '../../services/api';
// Sample: https://github.com/FaridSafi/react-native-gifted-chat/blob/master/App.tsx

const ChatComposer = () => {
    const [message, setMessage] = useState<IMessage[]>([]);
    //load olds messages

    async function handleSendMessage(messages: IMessage[]) {
        const {_id, createdAt, received, sent, text, user} = { ...messages[0], sent: true, received: true };
        const sentDate = `${new Date(createdAt).toISOString().replace('T', ' ').substring(0,(new Date(createdAt).toISOString().replace('T', ' ').length -5))}`;
        const data = {
            _id,
            createdAt: sentDate,
            text,
            from_user_id: user._id,
            to_user_id: 2
        };
        await api.post('messages', data);
        setMessage([messages[0],...message]);
        return;
    }

    useEffect(()=> {
        api.get('/messages', {
            params: {
                from_user_id: 1,
                to_user_id: 2
            }
        }).then(response => {
            const messages = response.data;
            const oldMessages = [];
            for(let i = 0; i < messages.length; i++){
                const {_id, text, createdAt, from_user_id, image, video} = messages[i];
                oldMessages.push({
                    _id,
                    text,
                    createdAt,
                    user: {
                      _id: from_user_id,
                      name: 'React Native',
                      avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                    image,
                    video,
                });
            }
            
            setMessage(oldMessages);
        })
    }, []);

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