import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

const rootReducer=combineReducers({
  product:productsReducer
})
const store =createStore(rootReducer)
export default function App() {
  
  return (
<Provider store={store} >

</Provider>
   
  );
}

const styles = StyleSheet.create({
 
});
