import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

interface Conversation {
    id: number,
    name: string,
    avatar: string,
    text: string
}

const MessageList = (props: any) => {
    const navigation = useNavigation();
    const [conversations, setConversations] = useState<Conversation[]>([]);

    function handleOpenChat(conversation: Conversation) {
        // Object {
        //     "avatar": "https://placeimg.com/140/140/any",
        //     "id": 1,
        //     "name": "guilherme",
        //   }
        navigation.navigate('Chat', [props.user, conversation])
    }

    useEffect(() => {
        api.get('conversations', {
            params:{
                user_id : props.user.id
            }
        }).then(response =>{
            setConversations(response.data);
        })
    });

    if (!conversations) {
        return <AppLoading />
    }

    return (
        <>
            {conversations.map(conversation => (
                <TouchableOpacity key={String(conversation.id)} style={styles.container} onPress={() => handleOpenChat(conversation)}>    
                    <Image
                        style={styles.tinyImageStory}
                        source={{uri: conversation.avatar}}
                    />
                    <View  style={styles.containerText}>
                        <View style={styles.containerName}>
                            <Text style={conversation.id === props.user.id ? styles.nameSendMessage : styles.nameRecived}>
                                {conversation.name}
                            </Text>
                            <Text style={styles.hour}>
                                {new Date().getHours() < 12? new Date().getHours().toString()+ ' AM' : new Date().getHours().toString()+ ' PM' }
                            </Text>
                        </View>
                        <Text style={styles.message}>
                            {conversation.text}
                        </Text> 
                    </View>
                </TouchableOpacity>
            ))}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 8,
        paddingBottom: 8
    },
    tinyImageStory: {
        width: 60,
        height: 60,
        resizeMode: "cover",
        borderRadius: 50,
    },
    containerText: {
        marginLeft: 8,
        flex: 1
    },
    containerName: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    nameRecived: {
        fontSize: 20,
        fontWeight: 'normal'
    },
    nameSendMessage: {
        fontWeight: 'bold'
    },
    hour: {
        marginTop: 5,
        marginRight: 8,
        fontWeight: 'bold'
    },
    message: {
        color: '#747474'
    }
});

export default MessageList;