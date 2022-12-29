import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { productListItem } from '../modules/types.d';
import { storeCartItem } from '../modules/cartData/slice';
import WithSpinner from '../components/hoc/WithSpinner';
import { getProductList } from '../modules/productData/getProductList';
import { productItemSelector } from '../modules/productData/selectors';

const ViewWithSpinner = WithSpinner(SafeAreaView)

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
  const selector: any = useSelector(productItemSelector);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const addItemToCart = (item: productListItem[]) => {
    dispatch(storeCartItem(item))
  }

  React.useEffect(() => {
    dispatch(getProductList());
    setIsLoading(false)
  }, [])

  return (
    <ViewWithSpinner isLoading={isLoading}>
      <FlatList
        data={selector?.productItem}
        renderItem={({ item }) => <Item title={item.name} addItemToCart={() => addItemToCart(item)} />}
        keyExtractor={item => item.id}
      />
    </ViewWithSpinner>
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