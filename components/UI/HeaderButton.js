import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';

const HeaderButton = ({onPress}) => {
    return (
        <TouchableOpacity >
        <Ionicons name="md-cart" size={23} color="green" onPress={onPress}  />
      </TouchableOpacity>

    )
}

export default HeaderButton
