import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable } from 'react-native';
import theme from "./color"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.btnText}>WORK</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback // UI 변화 없음
          // underlayColor="#DDDDDD"
          // activeOpacity={0}
          onPress={() => console.log("pressed")}>
          <Text style={styles.btnText}>TRAVEL</Text>
        </TouchableWithoutFeedback>
      </View>
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
  }
});
