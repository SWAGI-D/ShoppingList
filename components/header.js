import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header()
{
    return(
        
        <View style={styles.header}>
            <Text style={styles.title}>My Shopping Items</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'purple'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});