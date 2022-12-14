import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { cartItemSelector } from '../modules/cartData/selectors';

const CartItem = ({ title }: any) => (
  <View style={styles.card}>
    <View style={styles.items}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const Cart = () => {
  const selector: any = useSelector(cartItemSelector);
  const { cartItem } = selector;

  return (
    cartItem.length > 0 ? (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={cartItem}
          renderItem={({ item }) => <CartItem title={item.name} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    ) : (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 22,
          fontWeight: '600'
        }}>No Cart Found</Text>
      </View>
    )
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  card: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 22,
  },
  btn: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 4,
  },
  btnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '400'
  }
})