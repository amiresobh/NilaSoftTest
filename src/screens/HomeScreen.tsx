import {
  Dimensions,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import LinearGradient from 'react-native-linear-gradient';

import {useStore} from '../store/store';
import {getProductsList} from '../lib/getProductsList';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import SearchIcon from '../assets/Icons/search';
import {ProductCard} from '../components/ProductCard';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  const ProductsList = useStore((state: any) => state.products);
  const Externals = useStore((state: any) => state.externals);
  const [tags, setTags] = useState(Externals.productTags);
  const [searchText, setSearchText] = useState('');
  const [selectedTag, setSelectedTag] = useState('New');
  const [sortedProducts, setSortedProducts] = useState(
    getProductsList(selectedTag, ProductsList),
  );
  const tabBarHeight = useBottomTabBarHeight();

  const SearchBarComponent = () => {
    return (
      <View style={styles.searchBarComponentContainer}>
        <TouchableOpacity style={styles.searchIconContainer} onPress={() => {}}>
          <SearchIcon
            color={
              searchText.length > 0
                ? COLORS.tabBarActiveTintColor
                : COLORS.tabBarInactiveTintColor
            }
            size={FONTSIZE.size_30}
          />
        </TouchableOpacity>
        <TextInput
          key={2}
          placeholder="Search"
          placeholderTextColor={COLORS.tabBarInactiveTintColor}
          value={searchText}
          onChangeText={value => {setSearchText(value)}}
          style={styles.TextInputContainer}
        />
      </View>
    );
  };

  const TagsScrollerComponent = () => {
    return (
      <View style={{marginHorizontal: SPACING.space_16}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tagsScrollViewContainer}>
          {tags.map((tag: string, index: number) => (
            <View key={index} style={styles.tagScrollViewContainer}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedTag(tag);
                  setSortedProducts([...getProductsList(tag, ProductsList)]);
                }}
                style={{
                  ...styles.tagItemContainer,
                  ...{
                    backgroundColor:
                      selectedTag == tag
                        ? COLORS.activeTagBackgroundColor
                        : COLORS.inactiveTagBackgroundColor,
                  },
                }}>
                <Text
                  style={{
                    ...styles.tagItemText,
                    ...{
                      color:
                        selectedTag == tag
                          ? COLORS.activeTagTextColor
                          : COLORS.inactiveTagTextColor,
                    },
                  }}>
                  {' '}
                  {tag}{' '}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  const ProductsFlatlist = () => {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={sortedProducts}
        contentContainerStyle={{...styles.flatListContainer, ...{paddingBottom: tabBarHeight}}}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={product => {
          return (
            <TouchableOpacity onPress={() => {}}>
              <ProductCard
                imageName={product.item.images[0].slice(0, -4)}
                productName={product.item.name}
                productPrice={product.item.price}
                currency={Externals.currency}
              />
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  return (
    <LinearGradient
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      colors={[
        COLORS.backgroundGradientFirstColor,
        COLORS.backgroundGradientSecondColor,
        COLORS.backgroundGradientThirdColor,
        COLORS.backgroundGradientFourthColor,
      ]}
      style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.backgroundGradientFirstColor}
        barStyle={'dark-content'}
      />
      {/* App Header */}
      <HeaderBar />

      {/* Title */}
      <Text style={styles.screenTitle}> Match Your Style </Text>

      {/* Search Bar */}
      <SearchBarComponent />

      {/* Tags scrollview*/}
      <TagsScrollerComponent />

      {/* Products Flatlist */}
      <ProductsFlatlist />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewFlex: {
    //To Get the entire screen even if there is not enough content
    flexGrow: 1,
  },
  screenTitle: {
    fontSize: FONTSIZE.size_30,
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.primaryBlackHex,
    paddingLeft: SPACING.space_16,
  },
  searchBarComponentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: SPACING.space_16,
    marginBottom: SPACING.space_8,
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: BORDERRADIUS.radius_15,
  },
  searchIconContainer: {
    marginHorizontal: SPACING.space_10,
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 2.5,
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.primaryBlackHex,
  },
  tagsScrollViewContainer: {
    // marginBottom: SPACING.space_20,
    height: SPACING.space_20 * 2.5,
    alignItems: 'center',
  },
  tagScrollViewContainer: {
    marginRight: SPACING.space_8,
  },
  tagItemContainer: {
    paddingHorizontal: SPACING.space_15,
    paddingVertical: SPACING.space_8,
    borderRadius: BORDERRADIUS.radius_15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagItemText: {
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  flatListContainer: {
    marginHorizontal: SPACING.space_16,
    // paddingBottom: 80
  },
});

export default HomeScreen;
