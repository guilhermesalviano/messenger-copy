import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, Modal, Alert, View, TouchableHighlight, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const NewMessage = () => {
    const [modalVisible, setModalVisible] = useState(false);

    function handleNewConversation() {
        setModalVisible(true);
    }
    return (
        <>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios'? 'padding' : undefined}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput style={styles.modalText} placeholder="Digite o login do usuario:" />

                        <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                        <Text style={styles.textStyle}>Ir para conversa ou Fechar</Text>
                        </TouchableHighlight>
                    </View>
                    </View>
                </Modal>
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.container} onPress={handleNewConversation}>
                <Icon name="ios-add-circle" size={70} color="#3b5998" />
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 20,
        bottom: 7,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#C3C3C3",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontSize: 16,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 30,
        paddingHorizontal: 24,
        width: 300
    }
});

export default NewMessage;