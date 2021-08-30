import React, { useEffect } from 'react'
import { FlatList, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../../components/shops/ProductItem'
import HeaderButton from '../../components/UI/HeaderButton'
import * as cartAction from '../../store/actions/cart'

const ProductsOverviewScreen = ({navigation}) => {
    const products =useSelector(state=>state.products.availableProducts)
    
    const dispatch = useDispatch()
    useEffect(() => {
        navigation.setOptions({

          headerRight: ()=>(<HeaderButton onPress={()=>{
              navigation.navigate('Cart')
          }} />)
        });
      }, []);
    return (
       <FlatList data={products} 
       renderItem={
           ({item})=>
           <ProductItem image={item.imageUrl} title={item.title} 
           price={item.price} onViewDetails={()=>{
               navigation.navigate('ProductDetails',{productId:item.id,productTitle:item.title})
           }}
            onAddToCart={()=>{
                dispatch(cartAction.addToCart(item))
            }} />
       } />
    )

}
// ProductsOverviewScreen.navigationOptions={
//     headerTitle:'All Products'
// }

export default ProductsOverviewScreen
