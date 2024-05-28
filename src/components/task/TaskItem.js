import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import React from 'react'

const TaskItem = ({item, index, handleDeleteTask}) => {
  return (
    <View >
        <ScrollView>
                <View style={styles.container}>
                    <View key={index} style={styles.task}>
                        <Text>
                            {index+1} : {item.tasks}
                        </Text>
                        <Button
                            title='Delete'
                            onPress={handleDeleteTask.bind(this, item.id)}
                        />
                    </View>
                    
                </View>
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    task: {
        width: "75%",
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingVertical: 5,
        flexDirection: "row",
        justifyContent:"space-between"
    }
})
export default TaskItem