import React from "react";
import { styles } from "./styles";

const AddItem = () => {
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input} 
        value={task}
        placeholder="Enter Task"
        onChangeText={ text => setTask(text)} 
        />
      <Button 
        disabled={!task}
        title='Add' 
        color='#9A848F' 
        onPress={onHandleTask} />
      </View>
}

export default AddItem;