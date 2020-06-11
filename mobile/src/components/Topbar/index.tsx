import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';

const Topbar = () => {
    return (
        <>
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <Icon name="forum" size={32} color="#3b5998"/>
            </View>
            <View style={styles.containerItem}>
                <Icon name="group" size={35} color="#C3C3C3" />
            </View>
            <View style={styles.containerItem}>
                <Icon name="settings" size={35} color="#C3C3C3" />
            </View>
        </View>
        <View style={styles.border} />
        </>
    );
}

const styles = StyleSheet.create({
    border:{
        borderColor: '#ddd',
        borderBottomWidth: 1,
        marginBottom: 8,
    },
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: '100%',
        height: 58,
        alignItems: 'center',
    },
    containerItem: {
        width: '33.3%',
        alignItems: 'center',
    },
    containerActive: {
        backgroundColor: '#f9f9f9',
    }
});

export default Topbar;