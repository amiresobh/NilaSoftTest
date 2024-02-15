import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {useStore} from '../store/store';
import { getTags } from '../lib/getTags';

const getProductsList = (tag: string, products: any) => {
  if(tag == 'All') {
    return products
  } else {
    let productsList = products.filter((product: any) => product.tags.contain(''))
  }
}
const HomeScreen = () => {
  const ProductsList = useStore((state: any) => state.products);
  const Externals = useStore((state: any) => state.externals);
  const [tags, setTags] = useState(getTags(Externals.productTags));
  const [searchText, setSearchText] = useState(undefined);
  const [sortedProducts, setSortedProducts] = useState(undefined);

  return (
    <LinearGradient
      colors={['#fdf1f3', '#fef5f6', '#fef7f8', '#fffbfc']}
      style={styles.container}></LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
