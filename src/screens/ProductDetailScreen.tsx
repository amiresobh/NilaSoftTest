import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import {images} from '../assets/Images/Images';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ProductDetailScreen = ({navigation, route}: any) => {
  const Externals = useStore((state: any) => state.externals);

  const Product = route.params.product;
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const ImageComponent = (props: {
    imageName: keyof images;
    productName: string;
    currency: string;
    productPrice: string;
  }) => {
    return (
      <View style={styles.imageComponentContainer}>
        <Image
          source={images[props.imageName]}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.imageComponentDetails}>
          <Text style={styles.nameText}>{props.productName}</Text>
          <Text style={styles.priceText}>
            {props.currency}
            {props.productPrice}
          </Text>
        </View>
      </View>
    );
  };

  const SizesComponent = (props: {sizes: Array<string>}) => {
    return (
      <View style={styles.sizesComponentContainer}>
        <View style={styles.sizesComponentTitleContainer}>
          <Text style={styles.nameText}> Size </Text>
        </View>
        <View style={styles.sizesStringsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {props.sizes.map((size: string, index: number) => (
              <TouchableOpacity
                key={index}
                style={styles.sizeStringContainer}
                onPress={() => setSelectedSize(size)}>
                <Text
                  style={{
                    ...styles.sizesStringsText,
                    ...{
                      color:
                        selectedSize == size
                          ? COLORS.selectedSizeTextColor
                          : COLORS.productNameTextColor,
                    },
                  }}>
                  {' '}
                  {size}{' '}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };

  const ColorsComponent = (props: {colors: Array<string>}) => {
    return (
      <View style={styles.sizesComponentContainer}>
        <View style={styles.sizesComponentTitleContainer}>
          <Text style={styles.nameText}> Colors </Text>
        </View>
        <View style={styles.colorsShapesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {props.colors.map((color: string, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedColor(color)}
                style={{
                  ...styles.colorShapeContainer,
                  ...{
                    borderColor: `#${color}`,
                    borderWidth: selectedColor == color ? 1.5 : 0,
                  },
                }}>
                <View
                  style={{
                    ...styles.colorShape,
                    ...{backgroundColor: `#${color}`},
                  }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };

  const AddToCartBtn = (props: {onPress: Function}) => {
    return (
      <TouchableOpacity
        style={styles.AddToCartBtn}
        onPress={() => props.onPress()}>
        <Text style={styles.AddToCartBtnText}> Add to Cart </Text>
      </TouchableOpacity>
    );
  };

  const addToCartHandler = ({
    id,
    name,
    imageName,
    price,
    color = selectedColor,
    size = selectedSize,
  }: any) => {
    addToCart({
      id,
      name,
      imageName,
      prices: [{price: price, color: color, size: size, quantity: 1}],
    });
    calculateCartPrice();
    navigation.navigate('CartScreen');
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
      <HeaderBar onPress={() => navigation.pop()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <ImageComponent
          imageName={Product.images[0].slice(0, -4)}
          currency={Externals.currency}
          productName={Product.name}
          productPrice={Product.price}
        />

        {/* Sizes */}
        <SizesComponent sizes={Product.size} />

        {/* Colors */}
        <ColorsComponent colors={Product.colors} />

        {/* Add to cart button */}
        <AddToCartBtn
          onPress={() =>
            addToCartHandler({
              id: Product.id,
              name: Product.name,
              imageName: Product.images[0],
              price: Product.price,
            })
          }
        />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageComponentContainer: {
    marginBottom: SPACING.space_16,
  },
  image: {
    width: windowWidth,
    height: windowHeight / 2,
  },
  imageComponentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: SPACING.space_24,
    marginTop: SPACING.space_10,
  },
  nameText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.productNameTextInDetailsColor,
  },
  priceText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.productPriceTextInDetailsColor,
  },
  sizesComponentContainer: {
    marginHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_16,
  },
  sizesComponentTitleContainer: {},
  sizesStringsContainer: {
    flexDirection: 'row',
  },
  sizeStringContainer: {
    marginHorizontal: SPACING.space_8,
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
  },
  colorsShapesContainer: {flexDirection: 'row'},
  colorShapeContainer: {
    marginHorizontal: SPACING.space_4,
    padding: SPACING.space_4,
    borderRadius: BORDERRADIUS.radius_25,
  },
  colorShape: {
    width: FONTSIZE.size_30,
    height: FONTSIZE.size_30,
    borderRadius: BORDERRADIUS.radius_25,
  },
  AddToCartBtn: {
    backgroundColor: COLORS.activeTagBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight / 10,
    marginBottom: SPACING.space_16,
    marginHorizontal: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_20,
  },
  AddToCartBtnText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_20,
  },
});

export default ProductDetailScreen;
