import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header'
import AddItem from './components/addItem'
import ShoppingItem from './components/shoppingItem'

export default function App() {
  const [shoppingItems, setShoppingItems] = useState([
    {name: 'Cheddar Cheese', quantity: '500 gm', key: '1'}
  ])

  const submitHandler = (name, quantity) => {

    if(name.length > 1 && quantity.length > 1)
    {
        setShoppingItems((prevShoppingItems) => {
          return [
            {name: name, quantity: quantity, key: Math.random().toString()},
            ...prevShoppingItems
          ];
        })
    }

    else
    {
      Alert.alert('OOPS!','Name and/or Quantity cannot be empty',[
        {text: 'Understood'}
      ])
    }
   
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddItem submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={shoppingItems}
              renderItem={({item}) => (
                <ShoppingItem item={item}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    backgroundColor: 'lavender',
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
