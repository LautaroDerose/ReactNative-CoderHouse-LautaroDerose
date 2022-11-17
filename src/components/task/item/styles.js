import { StyleSheet } from 'react-native';
import colors from "../../../constants/colors";

export const styles = StyleSheet.create({
    main: {
        justifyContent:'space-between', 
    },
    listItemContainer: {
        flexDirection:'row',
        paddingVertical: 10,
        backgroundColor: colors.vioYama3,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'space-between',
        alignItems:'center',
        marginVertical: 5,
    },
    listItem: {
        fontSize: 14,
        color: '#ffffff',
        paddingHorizontal: 10,	
    },
    iconContainer: {
        flexDirection:'row',
    },
    checkboxList: {
        paddingHorizontal: 10,
    }
})