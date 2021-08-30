import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as cartAction from '../../store/actions/cart'
const ProductDetailScreen = ({navigation,route}) => {
    const productId=route.params.productId
    console.log(route.params.productTitle);
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.availableProducts.find(
        prod=>prod.id===productId
    ))
   
    return (
       <ScrollView >
           <Image style={styles.image} source={{uri:products.imageUrl}} />
           <View style={{
               marginVertical:10,
               alignItems:'center'
           }}>
           <Button color="darkblue" title="Add to cart" onPress={()=>{
               dispatch(cartAction.addToCart(products))
           }} />
           </View>
           
           
           <Text style={styles.price}>
               ${products.price}

           </Text>
           <Text style={styles.description}>
               {products.description}
           </Text>

       </ScrollView>
    )
}
const styles=StyleSheet.create({
    image:{
        width:"100%",
        height:300
    },
    price:{
        fontSize:20,
        color:"gray",
        textAlign:'center',
        marginVertical:10,

    },
    description:{
        fontSize:18,
        textAlign:'center',
        marginHorizontal:20
    }

})

export default ProductDetailScreen
