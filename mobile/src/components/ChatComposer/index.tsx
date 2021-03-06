import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { AppLoading } from 'expo'
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

import io from 'socket.io-client';
import api from '../../services/api';
// Sample: https://github.com/FaridSafi/react-native-gifted-chat/blob/master/App.tsx

const socket = io('ws://192.168.0.101:3333',{ 
    reconnection: true,
    reconnectionDelay: 500,
    jsonp: true,
    reconnectionAttempts: Infinity,
    transports: ['websocket']
});

socket.on('connect', function(){
    console.log('conectado')
});

socket.on('disconnect', function(){
    console.log('disconectado')
});

interface User {
    _id: number,
    name: string,
    avatar: string
}

const ChatComposer = (props: any) => {
    const [message, setMessage] = useState<IMessage[]>([]);
    const [user, setUser] = useState<User>();

    useEffect(()=>{
        socket.on('sendMessage', function(data: any){
            // console.log('menssage')
            handleLoadMessages();
        });
    })

    function handleLoadMessages() {
        api.get('/messages', {
            params: {
                from_user_id: props.user.id,
                to_user_id: props.toUser.id
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
                      _id: (from_user_id === props.user.id? props.user.id: props.toUser.id),
                      name: (from_user_id === props.user.id? props.user.name: props.toUser.name),
                      avatar: (from_user_id === props.user.id? props.user.avatar: props.toUser.avatar),
                    },
                    image,
                    video,
                });
            }
            if(oldMessages!= message){
                setMessage(oldMessages);
            }
        })
    }

    const handleSendMessage = async (newMessages: any) => {
        const {_id, createdAt, received, sent, text, user} = { ...newMessages[0] as IMessage, sent: true, received: true };
        const sentDate = `${new Date(createdAt).toISOString().replace('T', ' ').substring(0,(new Date(createdAt).toISOString().replace('T', ' ').length -5))}`;
        const data = {
            _id,
            createdAt: sentDate,
            text,
            from_user_id: props.user.id,
            to_user_id: props.toUser.id
        };
        // console.log(data);
        await api.post('messages', data);
        setMessage((prevMessages) => GiftedChat.append(prevMessages, newMessages));
        socket.emit('message', data);
    };

    useEffect(()=> {
        handleLoadMessages();
    }, [setUser]);

    useEffect(()=>{
        const {id, name, avatar} = props.user;
        setUser({
            _id: id, 
            name, 
            avatar
        });
    },[])

    if (!message) {
        return <AppLoading />
    }

    return (
        <View style={styles.container}>
            <GiftedChat
                messages={message}
                onSend={handleSendMessage}
                user={user}
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