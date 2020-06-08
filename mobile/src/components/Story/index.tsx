import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

const Story = () => {
    return (
        <View style={styles.container}>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 28 }}
            >
                <Image
                    style={styles.tinyImageStory}
                    source={require("../../assets/triste-eu.jpeg")}
                />
                <Image
                    style={styles.tinyImageStory}
                    source={require("../../assets/triste-eu.jpeg")}
                />
                <Image
                    style={styles.tinyImageStory}
                    source={require("../../assets/triste-eu.jpeg")}
                />
                <Image
                    style={styles.tinyImageStory}
                    source={require("../../assets/triste-eu.jpeg")}
                />
                <Image
                    style={styles.tinyImageStory}
                    source={require("../../assets/triste-eu.jpeg")}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      paddingTop: 14,
      paddingBottom: 14
    },

    tinyImageStory: {
        width: 90,
        height: 90,
        resizeMode: "cover",
        borderRadius: 50,
        marginRight: 20
    }
});  

export default Story;