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
                    source={{uri: 'https://mega.ibxk.com.br///2016/06/24/24150552292198.jpg?w=1200&h=480&mode=crop'}}
                />
                <View style={styles.containerText}>
                    <View style={styles.containerName}>
                        <Text style={styles.name}>
                            Alo
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