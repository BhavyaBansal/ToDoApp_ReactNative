// renders single item
import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  // bind() - preconfigure a function for future execution
  // ripple effect in and out of an item specially in android
  return (
      <View style={styles.goalItems}>
        <Pressable 
        android_ripple={{color:'#dddddd'}} 
        onPress={props.onDelGoal.bind(this,props.id)}
        style={({pressed})=>pressed && styles.pressedItem} // for ios devices
        >
            <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
  );
}
export default GoalItem;
const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 6,
    color: "#fff",
    letterSpacing: 1,
    backgroundColor: "#5e0acc",
  },
  pressedItem:{
    opacity:0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
