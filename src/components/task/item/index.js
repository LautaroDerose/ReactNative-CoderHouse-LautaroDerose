import React from "react";
import { TouchableOpacity, Text, Pressable, View } from 'react-native';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from "../../../constants/colors";


const TaskItem = ({ item, onHandleSelected,  }) => {

    return (
      <View style={styles.main}>
        <View style={styles.listItemContainer}  >
          <Text style={styles.listItem} >{item.value}</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.checkboxList} onPress={() => onHandleSelected(item)}>
              <Ionicons  name="trash" size={32}  color={ colors.vioYama5}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.checkboxList} onPress={() => {alert('disabled for te moment')}}>
              <Ionicons  name="checkbox" size={32}  color={ "gray"}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    
      )
      
}

export default TaskItem;