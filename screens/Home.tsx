import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { cartItemSelector } from '../modules/cartData/selectors';
import { getProducts } from '../modules/cartData/getProductList';
import { productListItem } from '../modules/types.d';
import { storeCartItem } from '../modules/cartData/slice';

const Item = ({ title, addItemToCart }: any) => (
  <View style={styles.card}>
    <View style={styles.items}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => addItemToCart()}
      >
        <Text style={styles.btnText}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Home = () => {
  const [product, setProduct] = useState<productListItem[]>();
  const [counter, setCounter] = useState<number>(0);
  const selector: any = useSelector(cartItemSelector);
  const dispatch = useDispatch();

  const addItemToCart = (item: productListItem[]) => {
    dispatch(storeCartItem(item))
    setCounter((prev) => prev + 1)
  }

  React.useEffect(() => {
    dispatch(getProducts());
    setProduct(selector?.productItem)
  }, [counter])

  return (
    product && (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={product}
          renderItem={({ item }) => <Item title={item.name} addItemToCart={() => addItemToCart(item)} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
  )
}

export default Home

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