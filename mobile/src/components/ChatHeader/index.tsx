import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons as Icon } from '@expo/vector-icons';

const ChatHeader = () => {
    const navigation = useNavigation();
    function handleBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack}>
                    <Icon name="chevron-left" size={35} color="#3b5998" />
                </TouchableOpacity>
                <Image style={styles.tinyImageStory} source={{uri: 'https://scontent.fcgh34-1.fna.fbcdn.net/v/t1.0-9/98979178_1174596953001783_7408037421243170816_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=Fg254BlNaXkAX_Qo_Bj&_nc_ht=scontent.fcgh34-1.fna&oh=6173f69f224064eec9fcb5189e35c392&oe=5F06673F'}} />
                <View style={styles.containerName}>
                    <Text style={styles.name}>Guibs</Text>
                    <Text style={styles.nameDescription}><View style={styles.isOnline}></View> Online agora</Text>
                </View>
                <Icon name="more-vert" size={35} color="#3b5998" />
            </View>
            <View style={styles.border}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 8,
        paddingTop:8,
    },
    header: {
        height: 60,
        flexDirection: 'row',
        alignContent:'center',
        alignItems: 'center',
    },
    tinyImageStory: {
        width: 60,
        height: 60,
        resizeMode: "cover",
        borderRadius: 50,
    },
    containerName:{
        width:'64%',
        paddingLeft:8
    },
    name: {
        fontSize: 24
    },
    nameDescription:{
        fontSize: 16
    },
    isOnline:{
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: '#34af23',

    },
    border:{
        marginTop:4,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 8,
    }
});

export default ChatHeader;