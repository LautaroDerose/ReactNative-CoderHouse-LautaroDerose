import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal, TouchableOpacity  } from 'react-native';
import { styles	} from './styles';
import { AddItem } from './components/index'
import { ListItem } from './components/index'
import { TaskItem } from './components/index'
import { ModalItem } from './components/index'


export default function App() {

  const [task, setTask ] = useState('');
  const [taskList, setTaskList ] = useState([]);
  const [modalVisible, setModalVisible ] = useState(false);
  const [selectedTask, setSelectedTask ] = useState(null);
  // const [ Check, setCheck ] = useState(null);
  // const [timesPressed, setTimesPressed] = useState(false);

  // const onHandleTimesPressed = (timesPressed, item) => {
  //   setSelectedTask(item);
  //   setTimesPressed(!timesPressed);
    
  // }
  // const [ Checked, setChecked ] = useState = (false);
  
  // const onHandleCheck = () => {
  //   setChecked(!Checked)
  // }
  
  const onHandleTask = () => {
    setTaskList((prevTaskList) =>[
       {id: Math.random().toString(), value: task}, ...prevTaskList
    ]);
    setTask('');
  }

  const onHandleSelected = (item) => { 
    setSelectedTask(item);
    setModalVisible(!modalVisible);
  }
  
  // const onHandleCheck = (item) => { 
  //   setSelectedTask(item);
  //   setCheck(!Check)
  // }
  
  const renderItem = ({item}) => (
   <TaskItem item={item} onHandleSelected={onHandleSelected} />
  )

  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
  }

  const onHandleDeleteItem = () => {
    setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedTask.id))
    setModalVisible(!modalVisible);
  }

  const onHandleChange = (text) => setTask(text);
  
  console.log(taskList.value);
  console.log(taskList);
  console.log(TaskItem.value);

  return (

    <View style={styles.container}>
      
      
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Todo List</Text>    
        <AddItem task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange} />
      </View>

      <ListItem
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <ModalItem
        modalVisible = {modalVisible}
        onHandleDeleteItem = {onHandleDeleteItem}
        selectedTask = {selectedTask}
        onHandleCancel ={onHandleCancel}
      />

      

    </View>
  );
  
}