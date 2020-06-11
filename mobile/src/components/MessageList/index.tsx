import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const MessageList = (props: any) => {
    const navigation = useNavigation();

    function handleOpenChat() {
        navigation.navigate('Chat', props.user)
    }

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={handleOpenChat}>
                <Image
                    style={styles.tinyImageStory}
                    source={{uri: 'https://scontent.fcgh34-1.fna.fbcdn.net/v/t1.0-9/98979178_1174596953001783_7408037421243170816_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=Fg254BlNaXkAX_Qo_Bj&_nc_ht=scontent.fcgh34-1.fna&oh=6173f69f224064eec9fcb5189e35c392&oe=5F06673F'}}
                />
                <View style={styles.containerText}>
                    <View style={styles.containerName}>
                        <Text style={styles.name}>
                            Guibs
                        </Text>
                        <Text style={styles.hour}>
                            {new Date().getHours() < 12? new Date().getHours().toString()+ ' AM' : new Date().getHours().toString()+ ' PM' }
                        </Text>
                    </View>
                    {/* <Text style={styles.message}>
                        Olá Pessoa
                    </Text> */}
                </View>
            </TouchableOpacity>
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
    name: {
        fontSize: 20
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