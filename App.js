import { useState } from 'react';
import { StyleSheet, Text, View,FlatList,Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
//View works as div in html and Text works as p TextInput works as input tag
// No Inheritance and No cascading is there in React Native css
// In Scrollview thousands of items can become a performance issue
// We typically dont want to use srollview because of performance issue but we can use it
// So we have another builtin component FlatList
// As if we have 1000 items the vast majority will not get rendered at the starting
export default function App() {
  const [courseGoals,setCourseGoals] = useState([])
  const [modalIsVisible,setModalIsVisible] = useState(false);

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }
  function endAddGoalHandler(){
    setModalIsVisible(false)
  }
  function addGoalHandler(enteredGoalText){
    // console.log(enteredGoalText)
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,{text:enteredGoalText,key:Math.random().toString()}
    ]);
    endAddGoalHandler();
      // Like this make object step 6
  }; 
  function deleteGoalHandler(key){
    // console.log('Delete');
    setCourseGoals(currentCourseGoals => {
      // Filter - All array items except the filtered item
      // If function returns false then drop the item otherwise keep it
      return currentCourseGoals.filter((goal)=> goal.key !== key)
    });
  }
  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Text style={styles.containerText}>Your Goals</Text>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          {/* <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItems}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
          {/* Step1- use FlatList instead of Scrollview
            Step2- No need of custom mapping instead we have two imp props data and renderItem
            Step3- Self Closing Component
            Step4- renderItem will contain individual item and render it one by one
            Keep your JSX code in this rendered item 
            Step5- FlatList will provide itemData as an object not just value but metadata also.
            Step6- Add Keys by setting datavalues from strings to objects that contains keys
            Now only the items needed are rendered as we scroll closer to them increasing the performance*/}
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            renderItem={(itemData) => {
              // itemData.index
              // item is provided by Flatlist
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDelGoal={deleteGoalHandler}
                  id={itemData.item.key}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#50c878",
  },
  goalsContainer: {
    flex: 5,
  },
  containerText: {
    textAlign: "center",
    fontSize: 24,
    letterSpacing: 2,
    fontWeight: "bold",
  },
});
