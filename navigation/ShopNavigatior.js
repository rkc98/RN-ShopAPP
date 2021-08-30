import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react'
import CartScreen from '../screens/shop/CartScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
const Stack = createNativeStackNavigator();
const ShopNavigatior = () => {
    return (
        <NavigationContainer >
        <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} initialRouteName="Home">
          <Stack.Screen name="Home" component={ProductsOverviewScreen} options={{ title: 'My home' }} />
          <Stack.Screen name="ProductDetails" component={ProductDetailScreen} 
          options={({ route }) => ({ title: route.params.productTitle })}
          
          />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default ShopNavigatior
