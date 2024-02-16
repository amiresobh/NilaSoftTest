import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import AppIconComponent from './AppIconComponent';
import ProfilePicComponent from './ProfilePicComponent';

interface HeaderBarProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity>
        <AppIconComponent color="#e96e6e" size={FONTSIZE.size_30} />
      </TouchableOpacity>
      <Text style={styles.HeaderText}>{title}</Text>
        <ProfilePicComponent size={SPACING.space_40}/>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
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
