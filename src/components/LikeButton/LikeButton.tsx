import React from 'react';
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Text,
  Image,
  ImageStyle,
  TextStyle,
} from 'react-native';
import styles from './LikeButton.style';

export interface LikeButtonProps {
  testID?: string;
  text?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
}

const LikeButton = (props: LikeButtonProps) => {
  const { text, onPress, style, textStyle, iconStyle, testID } = props;

  const onLikeButtonPress = () => {
    onPress && onPress();
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      // activeOpacity = 1 means no feedback. If we don't have onPress then we don't give feedback
      activeOpacity={onPress ? 0.2 : 1}
      testID={testID}
      onPress={onLikeButtonPress}>
      <Image
        source={require('../../../assets/like.png')}
        style={[styles.icon, iconStyle]}
        resizeMode="contain"
        accessibilityRole="imagebutton"
      />
      {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default LikeButton;
