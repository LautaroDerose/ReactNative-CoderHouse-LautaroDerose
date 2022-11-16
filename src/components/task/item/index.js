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
          <View style={styles.checkboxList}>
            <Ionicons  name="checkbox" size={32}  color={ "green"}/>
          </View>
        </View>
        

        </View>

        {/* <Pressable
          onLongPress={() => onHandleSelected(item)}
          onPress={()=> onHandleTimesPressed(!timesPressed)}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? 'rgb(210, 130, 155)'
                : 'white'
            },
            styles.wrapperCustom
          ]}>

  	        <Text >
            {item.value}
            {
              !timesPressed ? ''
              :
              <Ionicons name="checkbox" size={32} color="green"/> 
              
            }
             
            </Text> */}

        {/* </Pressable> */}
       </View>
    
      )
      
}

export default TaskItem;