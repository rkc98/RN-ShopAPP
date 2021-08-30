import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProductsOverview from '../screens/shop/ProductsOverview'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const ShopNavigator = () => {

    return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsOverview" component={ProductsOverview} options={{
            headerTitle:"All Products",
            headerTintColor:"white",
            headerStyle:{
                backgroundColor:"red"
            }
            
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default ShopNavigator

const styles = StyleSheet.create({})
