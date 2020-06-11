import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const Login = () => {
    const navigation = useNavigation();
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin() {
        const data = await api.post('login', {login, senha});
        if(data){
            const {id, name, avatar} = data.data;
            navigation.navigate('Home', {id, name, avatar});
        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios'? 'padding' : undefined}>
            <View style={styles.logoPosition}>
                <Image style={styles.logoImage} source={require('../../assets/messenger-icone.png')} />
            </View>
            <View style={styles.container}>
                <View style={styles.containerItens}>
                    <TextInput value={login} onChangeText={text => setLogin(text)} placeholder="login" style={styles.input} />
                    <TextInput value={senha} onChangeText={text => setSenha(text)} placeholder="senha" style={styles.input} secureTextEntry={true} />
                    <TouchableOpacity onPress={handleLogin} style={styles.button}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoPosition: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    logoImage: {
        width: 120,
        height: 120,
        resizeMode: "cover",
        alignSelf: "center",
    },
    containerItens: {
        flex: 1,
    },
    input: {
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
      },
    button: {
        backgroundColor: '#3b5998',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
      },

      buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
      }
});

export default Login;