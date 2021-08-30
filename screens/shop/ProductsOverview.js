import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import ProductItem from '../../components/ProductItem'

const ProductsOverview = () => {
    const products = useSelector(state => state.product.availableProducts)
    return (
        <View>
            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={itemData => (
                    <ProductItem
                        image={itemData.item.imageUrl}
                        title={itemData.item.title}
                        price={itemData.item.price}
                        onSelect={() => {
                            selectItemHandler(itemData.item.id, itemData.item.title);
                        }} />
                     )} />
               
        
        </View>
                )
                }

                export default ProductsOverview

                const styles= StyleSheet.create({ })
