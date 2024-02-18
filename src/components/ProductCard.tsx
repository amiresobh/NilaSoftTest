import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {images} from '../assets/Images/Images';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import FavoriteBorderIcon from '../assets/Icons/favorite_border';
import FavoriteIcon from '../assets/Icons/favorite';

const cardWidth = Dimensions.get('window').width * 0.43;

export const ProductCard = (props: {
  imageName: keyof images;
  productName: string;
  productPrice: number;
  currency: string;
  isFavorite: boolean;
  toggleFavorite: Function;
}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.likeBtn} onPress={()=> props.toggleFavorite()}>
        {props.isFavorite ? (
          <FavoriteIcon
            size={FONTSIZE.size_18}
            color={COLORS.favoriteIconColor}
          />
        ) : (
          <FavoriteBorderIcon
            size={FONTSIZE.size_18}
            color={COLORS.favoriteIconColor}
          />
        )}
      </TouchableOpacity>
      <Image
        source={images[props.imageName]}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.bottomWrapper}>
        <Text style={styles.nameText}>{props.productName}</Text>
        <Text style={styles.priceText}>
          {props.currency}
          {props.productPrice}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: SPACING.space_12,
  },
  image: {
    width: cardWidth,
    height: cardWidth * 1.4,
    borderRadius: BORDERRADIUS.radius_20,
  },
  bottomWrapper: {
    marginTop: SPACING.space_8,
  },
  nameText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.productNameTextColor,
  },
  priceText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.productPriceTextColor,
  },
  likeBtn: {
    position: 'absolute',
    zIndex: 1,
    right: SPACING.space_10,
    top: SPACING.space_10,
    backgroundColor: COLORS.primaryWhiteHex,
    padding: SPACING.space_4,
    borderRadius: BORDERRADIUS.radius_25,
    width: FONTSIZE.size_30,
    height: FONTSIZE.size_30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
