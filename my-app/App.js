import React, { useState ,useEffect} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const [exampleState, setExampleState] = useState([])
  const [trymore,trytry]= useState([])
  const [input, setInput] = useState()

  const component = () => {
    fetch('http://127.0.0.1:3000')
        .then(res => res.json())
        .then(res => {
            trytry(res)
            setExampleState(res)
            return res;
        })
        .catch((error) => {
            console.log(error);
        });
    }
  useEffect(() => {
    component()
    }, [])
    
  const addElement = () => {
    console.log(input)
    setExampleState([...exampleState , { text: exampleState.length+1+' '+input}]);
  }
  const remove = (e,text)=>{

  }

  const post = (data) => {
    const cfg = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text: data}),
    }
    fetch('http://127.0.0.1:3000/test', cfg)
      .then(function(res){ 
        console.log('succes')
        console.log(res) 
      })
      .catch(function(res){ 
        console.log('error')
        console.log(res) 
      })
      component()
    }

    const del = (deldata) => {
      const cfgg = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: deldata}),
      }
      fetch('http://127.0.0.1:3000/delete', cfgg)
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })
        component()
      }
  //console.log(exampleState)
  return (
    <View style={styles.container}>
        <FlatList
            keyExtractor = {item => item}
            data={exampleState}
            renderItem = {item => (<Text>{item.item.Okand11}<Button onPress={() =>del(item.item.Okand11)}></Button></Text>)} />

        <TextInput onChange={e =>setInput(e.target.value)}>
          
        </TextInput>
        <Button
          title="Add element"
          onPress={() => post(input)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 1
  },
});


