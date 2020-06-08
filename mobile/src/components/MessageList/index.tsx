import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MessageList = () => {
    const navigation = useNavigation();

    function handleOpenChat() {
        navigation.navigate('Chat');
    }

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={handleOpenChat}>
                <Image
                    style={styles.tinyImageStory}
                    source={require("../../assets/triste-eu.jpeg")}
                />
                <View style={styles.containerText}>
                    <View style={styles.containerName}>
                        <Text style={styles.name}>
                            Guilherme Farias
                        </Text>
                        <Text style={styles.hour}>
                            10 AM
                        </Text>
                    </View>
                    <Text style={styles.message}>
                        Olá Pessoa
                    </Text>
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