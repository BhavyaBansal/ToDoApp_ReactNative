import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText); // passing the parameter enteredGoalText for props
    setEnteredGoalText(""); // To clear input after adding
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Enter your Goal"
          style={styles.textinput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  textinput: {
    padding: 16,
    borderWidth: 2,
    borderColor: "#e4d0ff",
    backgroundColor:'#e4d0ff',
    borderRadius:6,
    width: "100%",
    color:'#120438'
  },
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding:16,
    backgroundColor:'#311b6b'
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:8
  },
  button:{
    width:'30%',
    marginHorizontal:8,
  },
  image:{
    width:100,
    height:100,
    margin:20
  }
});
