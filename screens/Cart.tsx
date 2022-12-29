import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { cartItemSelector } from '../modules/cartData/selectors';
import WithSpinner from '../components/WithSpinner';

const ViewWithSpinner = WithSpinner(SafeAreaView)

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false)
  }, [cartItem])

  return (
    <ViewWithSpinner isLoading={isLoading}>
      {cartItem.length > 0 ? (
        <FlatList
          data={cartItem}
          renderItem={({ item }) => <CartItem title={item.name} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <View>
          <Text style={{fontSize: 30, textAlign: 'center'}}>No Cart Item Found!</Text>
        </View>
      )}
    </ViewWithSpinner>
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