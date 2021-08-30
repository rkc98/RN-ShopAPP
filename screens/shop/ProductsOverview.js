import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'

const ProductsOverview = () => {
    const products=useSelector(state=>state.product.availableProducts)
    return (
        <View>
            <FlatList data={products} renderItem={itemData=><ProductItem imageUrl={itemData.item.imageUrl}
            title={itemData.item.title} price={itemData.item.price} />}           
            />
        </View>
    )
}

export default ProductsOverview

const styles = StyleSheet.create({})
