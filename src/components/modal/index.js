import React from "react";
import { Modal, Text, View, Button } from 'react-native';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
// import CheckboxList from "./components/index";


const ModalItem = ({onHandleCancel, onHandleDeleteItem, modalVisible, selectedTask }) => {
    
    return (
        <Modal visible={modalVisible} animationType='slide' >
            <View style={styles.modalContainer} >
                <Text style={styles.modalTitle} >Task Detail</Text>
                
                <View style={styles.modalDetailContainer}>
                    <Text style={styles.modalDetailText} >Are you sure to delete this item?</Text>
                    <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
                </View>
                <View style={styles.modalButtonContainer}>        
                    <Button title='Cancel' color='#9A848F' onPress={onHandleCancel}/>
                        
                    <Button title= 'Delete' color='#9A848F' onPress={onHandleDeleteItem} />
                    
                </View>

            </View>
        </Modal>
    )
} 

export default ModalItem;

