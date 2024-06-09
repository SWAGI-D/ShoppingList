import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ShoppingItem({item})
{
    const [pressed, setPressed] = useState(false)

    function pressHandler()
    {
        setPressed(!pressed)
    }

    return(
        <TouchableOpacity style={[styles.item, {backgroundColor: pressed ? 'lightgreen' : 'white'}]} onPress={pressHandler}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.quantity}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: 
    {
        padding: 16,
        marginTop: 16,
        backgroundColor:'white',
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
    itemText:
    {
        margin: 'auto'
    }
})