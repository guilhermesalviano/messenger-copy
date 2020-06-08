import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';

const ChatMessageComposer = () => {

    function handleSendMenssage() {
        
    }

    return (
        <>
        <View style={styles.border} ></View>
        <View style={styles.container}>
            
            <Icon style={styles.image} name="image" size={35} color="#3b5998" />
            <View style={styles.containerTextComposer}>
                <TextInput 
                    style={styles.textComposer} 
                    placeholder="Digite sua mensagem aqui"
                ></TextInput>
            </View>
            <TouchableOpacity onPress={handleSendMenssage}>
                <Icon style={styles.image} name="send" size={35} color="#3b5998" />
            </TouchableOpacity>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    border:{
        borderColor: '#ddd',
        borderTopWidth: 1,
    },
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignSelf: "stretch",
        paddingLeft: 16,
    },
    topColor: {
        borderTopColor: '#d5d5d5',   
    },
    containerTextComposer: {
        width: '70%',
        marginRight: 8,
    },
    textComposer: {
        fontSize: 16,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 30,
        paddingHorizontal: 24,
    },
    image: {
        alignItems: 'flex-end',
        marginLeft: 8,
        marginRight: 16,
    },
});

export default ChatMessageComposer;