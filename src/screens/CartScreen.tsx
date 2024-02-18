import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import VectorIcon from '../assets/Icons/vector';
import {images} from '../assets/Images/Images';
import DeleteOutlineIcon from '../assets/Icons/delete_outline';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const CartScreen = ({navigation}: any) => {
  const Externals = useStore((state: any) => state.externals);

  const CartList = useStore((state: any) => state.CartList);

  const deleteFromCartList = useStore((state: any) => state.deleteFromCartList);
  const emptyCartList = useStore((state: any) => state.emptyCartList);
  
  const calculateTotalPrice = () => {
    let totalPrice = 0.0;
    CartList.forEach((item: any) => {
      totalPrice = totalPrice + parseFloat(item.ItemPrice);
    });
    return totalPrice;
  };

  const calculateShippingPrice = () => {
    if(CartList.length > 0) return parseInt(Externals.shippingCost)
    else return 0
  }
  const calculateGrandTotalPrice = () => {
    let grandTotal = calculateTotalPrice() + calculateShippingPrice();

    return grandTotal;
  };

  const BackBtn = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: FONTSIZE.size_40,
          height: FONTSIZE.size_40,
          borderRadius: BORDERRADIUS.radius_25,
          backgroundColor: COLORS.primaryWhiteHex,
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={() => navigation.pop()}>
          <VectorIcon size={FONTSIZE.size_24} color={COLORS.vectorIconColor} />
        </TouchableOpacity>
      </View>
    );
  };

  const CartItemsFlatListComponent = () => {
    const CartItemComponent = (props: {
      index: number;
      imageName: keyof images;
      name: string;
      price: string;
      currency: string;
      color: string;
      size: string;
    }) => {
      return (
        <View style={styles.cartItemCompoentCotainer}>
          <View style={styles.cartItemDeleteBtn}>
            <TouchableOpacity onPress={() => deleteFromCartList(props.index)}>
              <DeleteOutlineIcon size={FONTSIZE.size_24} />
            </TouchableOpacity>
          </View>
          <View style={styles.cartItemImageContainer}>
            <Image
              source={images[props.imageName]}
              style={styles.cartItemImage}
            />
          </View>
          <View style={styles.cartItemDetailsContainer}>
            <Text style={styles.cartItemNameText}>{props.name}</Text>
            <Text style={styles.cartItemPriceText}>
              {props.currency}
              {props.price}{' '}
            </Text>
            <View style={styles.cartItemColorAndSizeContainer}>
              {/* color */}
              <View
                style={{
                  ...styles.colorShape,
                  ...{backgroundColor: props.color},
                }}
              />
              {/* size */}
              <View style={styles.sizeStringContainer}>
                <Text style={styles.sizesStringsText}> {props.size} </Text>
              </View>
            </View>
          </View>
        </View>
      );
    };
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={CartList}
        contentContainerStyle={styles.flatListContainer}
        ListEmptyComponent={
          <View style={styles.EmptyFlatListContainer}>
            <Text style={styles.EmptyFlatListText}>Your cart is empty</Text>
          </View>
        }
        keyExtractor={(item: any, index: number) => index.toString()}
        renderItem={cartItem => {
          return (
            <CartItemComponent
              index={cartItem.index}
              imageName={cartItem.item.imageName.slice(0, -4)}
              name={cartItem.item.name}
              price={cartItem.item.prices[0].price}
              color={`#${cartItem.item.prices[0].color}`}
              size={cartItem.item.prices[0].size}
              currency={Externals.currency}
            />
          );
        }}
      />
    );
  };

  const TotalsComponent = (props: {
    currency: string;
    totalPrice: string;
    shippinPrice: string;
    grandTotalPrice: string;
  }) => {
    return (
      <View style={styles.TotalsComponentContainer}>
        <View style={styles.totalAndShippingContainer}>
          <View style={styles.totalContainer}>
            <Text style={styles.cartItemPriceText}>Total:</Text>
            <Text style={styles.cartItemPriceText}>{props.currency}{props.totalPrice}</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.cartItemPriceText}>Shipping:</Text>
            <Text style={styles.cartItemPriceText}>{props.currency}{props.shippinPrice}</Text>
          </View>
        </View>
        <View style={{height: 1, backgroundColor: COLORS.tabBarInactiveTintColor}} />
        <View style={styles.totalContainer}>
          <Text style={styles.cartItemPriceText}>Grand Total:</Text>
          <Text style={{...styles.cartItemPriceText, color: COLORS.productNameTextColor}}>{props.currency}{props.grandTotalPrice}</Text>
        </View>
      </View>
    );
  };

  const CheckoutBtnComponent = () => {
    return(
      <TouchableOpacity style={styles.checkoutBtn} onPress={()=> emptyCartList()}>
        <Text style={styles.checkOutBtnText}>Checkout</Text>
      </TouchableOpacity>
    )
  }
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
      {/* App Header */}
      <HeaderBar onPress={() => navigation.pop()} HeaderLeft={BackBtn} />

      {/* Cart Items FlatList */}
      <View style={{height: windowHeight / 2}}>
        <CartItemsFlatListComponent />
      </View>

      {/* Totals */}
      <TotalsComponent
        currency={Externals.currency}
        totalPrice={calculateTotalPrice().toFixed(1).toString()}
        shippinPrice={calculateShippingPrice().toFixed(1).toString()}
        grandTotalPrice={calculateGrandTotalPrice().toFixed(1).toString()}
      />

      {/* Checkout BTN */}
      <CheckoutBtnComponent />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    marginHorizontal: SPACING.space_24,
  },
  EmptyFlatListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight / 3,
    flex: 1,
  },
  EmptyFlatListText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.productNameTextColor,
  },
  cartItemCompoentCotainer: {
    flexDirection: 'row',
    marginVertical: SPACING.space_12,
    gap: SPACING.space_8,
  },
  cartItemImageContainer: {},
  cartItemImage: {
    width: windowWidth / 4.5,
    height: (windowWidth / 4.5) * 1.5,
    borderRadius: BORDERRADIUS.radius_15,
  },
  cartItemDetailsContainer: {
    justifyContent: 'space-evenly',
  },
  cartItemDeleteBtn: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  cartItemNameText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.productNameTextColor,
  },
  cartItemPriceText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.productPriceTextColor,
  },
  cartItemColorAndSizeContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
  },
  colorShape: {
    width: FONTSIZE.size_30,
    height: FONTSIZE.size_30,
    borderRadius: BORDERRADIUS.radius_25,
  },
  sizeStringContainer: {
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: BORDERRADIUS.radius_25,
    width: FONTSIZE.size_36,
    height: FONTSIZE.size_36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizesStringsText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.productNameTextColor,
  },
  TotalsComponentContainer:{
    marginHorizontal: SPACING.space_24,
    marginTop: SPACING.space_24
  },
  totalAndShippingContainer:{},
  totalContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SPACING.space_10
  },
  checkoutBtn: {
    backgroundColor: COLORS.activeTagBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight / 10,
    marginBottom: SPACING.space_16,
    marginHorizontal: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_20,
  },
  checkOutBtnText:{
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_20,
  },

});

export default CartScreen;
