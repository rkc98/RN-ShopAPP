
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const CartItem = ({quantity,title,amount,onRemove}) => {
    return (
        <View style={styles.cartItem}>
            <Text style={styles.itemData}>
            <Text style={styles.quantity}>
                {quantity}        
            </Text>
            <Text style={styles.mainText}>
                {title}
                    
            </Text>
            </Text>
            <View style={styles.itemData}>
                <Text style={styles.mainText}>
                    ${amount}
                </Text>
                <TouchableOpacity onPress={onRemove} style={styles.delete} >
                    <Ionicons name={'md-trash'} size={23} color="red" />
                    
                </TouchableOpacity>
            </View>
        </View>


    )
}
const styles=StyleSheet.create({
    cardItem:{
        padding:10,
        backgroundColor:"white",
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,


    },
    itemData:{
        flexDirection:'row',
        alignItems:'center',

    },
    quantity:{
        // fontWeight:'bold',
        color:"darkgray",
        fontSize:16,

    },
    mainText:{
        fontSize:16,
        fontWeight:'bold',

    },
   
    delete:{
        marginLeft:20

    }

})
export default CartItem
