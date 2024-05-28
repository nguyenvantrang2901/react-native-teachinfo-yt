import { View, FlatList, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import TaskItem from './TaskItem'
import AddTask from './AddTask'

const Task = () => {
    const [newTask, setNewTask] = useState([])
    const [showModal, setShowModal] = useState(false)
    const handleAddNewTask = (tasks) => {
        setNewTask((prevTasks)=>
            [
                ...prevTasks, 
                { tasks: tasks, id: Math.random().toString() }
            ]
        )
    }
    const handleDeleteTask = (id) => {
        setNewTask((currentTask) =>currentTask.filter(t => t.id !== id))
        // console.log("func Delete called")
    }
    //handle show Modal
    const handleShowModal=()=>{
        setShowModal(true)
    }
    //handle hide modal
    const handleHideModal =()=>{
        setShowModal(false)
    }
  return (
    <View style={styles.container}>
        {
            showModal && (<AddTask handleHideModal={handleHideModal} handleShowModal={handleShowModal} handleAddNewTask={handleAddNewTask}/> )
        }
        {
            !showModal && <Button title='Add task modal' onPress={handleShowModal}/>
        }
        <View style={styles.listTask}>
        {
            newTask?.length > 0 
                ?   <View>
                        <Text style={styles.listText}>List Tasks heheh : </Text>
                    </View>
                :   <Text></Text>
        }
        <View>
            <FlatList
                data={newTask}
                renderItem={({item, index})=>{
                    return(
                        <TaskItem 
                            item={item} 
                            index={index}
                            handleDeleteTask = {handleDeleteTask}
                        />
                    )
                }}
                keyExtractor={(item, index)=>{
                    return index
                }}
            />
            {/* <ScrollView>
                    {newTask?.map((taskItem, index)=>(
                        <Text key={index} style={styles.task}>{taskItem}</Text>
                    ))}
                </ScrollView> */}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    listText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue'
    },
    listTask: {
        paddingHorizontal: 5,
        // borderWidth: 1
    }
})
export default Task