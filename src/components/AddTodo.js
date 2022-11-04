import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/todos/TodoSlice';
import {TextInput, View, Button, StyleSheet} from 'react-native';

export const AddTodo = () => {
  const [text, setText] = useState();
  const dispatch = useDispatch();

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function handleSubmit() {
    dispatch(
      addTodo({
        text: text,
        id: getRandomInt(0, 99999),
      }),
    );
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Todo"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Add" onPress={handleSubmit} color={'#fab803'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 2,
    // display: 'flex',
    // flexDirection: 'row',
  },
  input: {
    backgroundColor: 'ghostwhite',
    marginBottom: 8,
    padding: 8,
    height: 40,
    width: 200,
  },
});
