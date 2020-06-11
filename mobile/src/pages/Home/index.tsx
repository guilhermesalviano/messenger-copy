import React from 'react';
import { StyleSheet, Text, View, NativeModules,SafeAreaView } from 'react-native';
import Topbar from '../../components/Topbar';
import { useRoute } from '@react-navigation/native';
import MessageList from '../../components/MessageList';
import NewMessage from '../../components/NewMessage';

interface userActual {
    id: number,
    name: string,
    avatar: string
}

const Home = () => {
    const route = useRoute();
    const user = route.params as userActual;
    console.log(user);

    return (
        <SafeAreaView style={styles.container}>
            <Topbar />
            {/* <Story /> */}
            <MessageList user={user}/>
            <NewMessage />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: '100%'
    },
});
  

export default Home;