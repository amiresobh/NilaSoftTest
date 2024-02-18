import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import AppIconComponent from './AppIconComponent';
import ProfilePicComponent from './ProfilePicComponent';

interface HeaderBarProps {
  title?: string;
  onPress?: Function;
  HeaderLeft?: React.FC;
}

const HeaderBar: React.FC<HeaderBarProps> = ({
  title,
  onPress = () => {},
  HeaderLeft,
}) => {
  return (
    <View style={styles.HeaderContainer}>
      {HeaderLeft ? (
        <HeaderLeft />
      ) : (
        <TouchableOpacity onPress={() => onPress()}>
          <AppIconComponent color="#e96e6e" size={FONTSIZE.size_30} />
        </TouchableOpacity>
      )}
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePicComponent size={SPACING.space_40} />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryBlackHex,
  },
});

export default HeaderBar;
