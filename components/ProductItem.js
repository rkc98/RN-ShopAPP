import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

const ProductItem = ({imageUrl,title,price,onViewDetails,onAddToCart}) => {
    console.log(imageUrl,title,price)
    return (
        <View style={styles.product}>
            <Image source={{
                uri:imageUrl
            }} style={styles.image} />
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.price}>
                {price}
            </Text>
            <View style={styles.actions }>
                <Button title="View Details" onPress={onViewDetails} />
                <Button title="To Cart" onPress={onAddToCart} />
            </View>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    product:{
        shadowColor:"black",
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
        margin:20

    },
    image:{
        width:"100%",
        height:'60'
    },
    title:{
        fontSize:18,
        marginVertical:4,


    },
    price:{
        fontSize:14,
        color:"#888",


    },
    actions:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center"

    }

})
