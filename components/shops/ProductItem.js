import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ProductItem = ({image,title,price,onViewDetails,onAddToCart}) => {
    return (
        <TouchableOpacity onPress={onViewDetails} >
        <View style={styles.product}>
            <Image source={{uri:image}} style={styles.image} />
           
           
           <View style={styles.details}>
           <Text style={styles.title}>
                {title}

            </Text>
            <Text style={styles.price}>
                ${price.toFixed(2)}

            </Text>
           </View>
            
            <View style={styles.actions}>
                <Button color="red" title="View Details" onPress={onViewDetails}  />
                <Button title="To Cart" onPress={onAddToCart} />

            </View>
        </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    product:{
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowRadius:8,
        elevation:5,
        borderRadius:10,
        backgroundColor:"white",
        height:300,
        margin:20,
        overflow:'hidden'

    },
    image:{
        height:'60%',
        width:"100%"
    },title:{
        fontSize:18,
        marginVertical:4,

    },
    price:{
        fontSize:14,
        color:'#888',
        
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',paddingHorizontal:20
    },
    details:{
        alignItems:'center'
    }

})
export default ProductItem
