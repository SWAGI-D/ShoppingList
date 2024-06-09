import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function AddItem({submitHandler})
{
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const changeNameHandler = (value) => {
        setName(value)
    }

    const changeQtyHandler = (value) => {
        setQuantity(value)
    }

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder='new shopping item...'
                onChangeText={changeNameHandler}
            />
            <TextInput
                style={styles.input}
                placeholder='shopping item quantity...'
                onChangeText={changeQtyHandler}
            />
            <Button
                onPress={() => submitHandler(name, quantity)}
                title='Add Item'
                color='purple'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})