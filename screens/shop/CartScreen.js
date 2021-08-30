import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import CartItem from '../../components/shops/CartItem'

const CartScreen = () => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount)
    const cartItems = useSelector(state=>{
        const transformedCartItems=[]
        for (const key in state.cart.items){
            transformedCartItems.push({
                productId:key,
                productTitle:state.cart.items[key].productTitle,
                productPrice:state.cart.items[key].productPrice,
                quantity:state.cart.items[key].quantity,
                sum:state.cart.items[key].sum

            })
        }
        // console.log(transformedCartItems);
        return transformedCartItems

    })
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total : 
                    <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>

                </Text>
                <Button title="Order Now" disabled={cartItems.length===0} />
            </View>
            {console.log(cartItems)}
            <FlatList data={cartItems} keyExtractor={items=>items.productId}
            renderItem={
                itemsData=>(
                   
                <CartItem quantity={itemsData.item.quantity} title={itemsData.item.productTitle} 
                amount={itemsData.item.sum} onRemove={()=>{

                }} />
                )}
             />


        </View>

    )
}
const styles=StyleSheet.create({
    screen:{
        margin:20,


    },
    summary:{
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
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
        padding:10
    },
    summaryText:{
        fontWeight:'bold',
        fontSize:18,



    },
    amount:{
        color:'maroon'

    }

})
export default CartScreen
