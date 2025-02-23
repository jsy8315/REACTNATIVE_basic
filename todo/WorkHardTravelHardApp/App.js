import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, 
          TouchableHighlight, TouchableWithoutFeedback,
           Pressable, TextInput, ScrollView 
          } from 'react-native';
import theme from "./color"
import { useState } from 'react';

export default function App() {
  const [working, setWorking] = useState(true);
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const addToDo = () => {
    if(text === ""){
      return;
    }
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, work : working}
    }
    setToDos(newToDos);
    setText("");
  };
  console.log(toDos);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{...styles.btnText, color: working ? "white" : theme.grey}}>WORK</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback // UI 변화 없음
          onPress={travel}>
          <Text style={{...styles.btnText, color: !working ? "white" : theme.grey}}>TRAVEL</Text>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TextInput 
        onChangeText={onChangeText}
        onSubmitEditing={addToDo}
        value={text}
        returnKeyType='done' 
        placeholder={working ? "Add a To Do" : "Where do you want to go?"} style={styles.input}/>
      </View>
      <ScrollView>
        {
        Object.keys(toDos).map(key => 
          <View style ={styles.toDo} key={key}>
            <Text style ={styles.toDoText}>{toDos[key].text}</Text>
          </View>)
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20
  },
  header: {
    justifyContent: "space-between",
    flexDirection: 'row',
    marginTop: 100
  },
  btnText: {
    // color: theme.grey,
    color: "white",
    fontSize: 44,
    fontWeight: 600
  }, 
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 20,
    marginVertical: 10,
    fontSize: 18
  },
  toDo: {
    backgroundColor: theme.grey,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500"
  }
});
