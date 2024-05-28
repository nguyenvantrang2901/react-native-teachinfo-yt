import { View, TextInput, StyleSheet, Button } from 'react-native'
import React, {useState} from 'react'

const AddTask = ({handleAddNewTask, handleHideModal}) => {
    const [tasks, setTasks] = useState()
    
    const handleChangeInput=(inputTask)=>{
        setTasks(inputTask)
    }
    const addNewTask = ()=>{
        handleAddNewTask(tasks)
    }
    
  return (
    <View style={styles.input}>
        <TextInput 
            style={styles.inputBox} 
            placeholder='Enter your task ...' 
            onChangeText={handleChangeInput}
        />
        <View style={styles.btnGroup}>
            <View>
                <Button 
                    style={styles.button} 
                    title="Add Task"
                    onPress={addNewTask}
                />
            </View>
            <View>
                <Button 
                    style={styles.button} 
                    title="Cancel"
                    onPress={handleHideModal}
                />
            </View>
        </View>
      </View>
  )
}
const styles = StyleSheet.create({
    input: {
        flexDirection: "column",
        justifyContent:"center",
        alignItems:'center',
        marginBottom: 20,
    },
    inputBox: {
        width: "75%",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: "grey"
    },
    btnGroup:{
        flexDirection:'row',
        marginTop:10,
        gap:5
    },
    button: {
        borderRadius: 10,
        marginHorizontal: 20,
        width:"40%",
    },
})
export default AddTask