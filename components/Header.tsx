import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { FontAwesome5 } from '@expo/vector-icons';
import { cartItemSelector } from '../modules/cartData/selectors';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const selector: any = useSelector(cartItemSelector);
  const { cartItem } = selector;

  return (
    <TouchableOpacity
      style={styles.cartBox}
      onPress={() => navigation.navigate('Cart')}
    >
      <FontAwesome5 name="cart-plus" size={24} color="green" />
      <Text style={styles.txt}>{cartItem.length}</Text>
    </TouchableOpacity>
  )
}

export default Header

const styles = StyleSheet.create({
  cartBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#33ffac',
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 4
  },
  txt: {
    fontSize: 22,
    fontWeight: '700',
  }
})