import React from "react";
import { View, TextInput, Button } from 'react-native';
import { styles } from "./styles";
import colors from "../../constants/colors";

const AddItem = ({ task, onHandleTask, onHandleChange }) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        value={task}
        placeholder="Enter Task"
        onChangeText={ onHandleChange } 
        />
        <Button 
        disabled={!task}
        title='Add' 
        color= {colors.vioYama2}
        onPress={onHandleTask} />
        </View>
    )
}

export default AddItem;