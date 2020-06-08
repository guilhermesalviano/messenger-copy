import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

const NewMessage = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Icon name="ios-add-circle" size={70} color="#3b5998" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 20,
        bottom: 7,
    }
});

export default NewMessage;