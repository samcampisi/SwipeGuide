import React from 'react';
import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

import { IGuide } from 'interfaces/IGuide';
import styles from './GuideItem.style';

export interface GuideItemProps {
  guide: IGuide;
  onItemPress: (guide: IGuide) => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

const GuideItem = (props: GuideItemProps) => {
  const { guide, onItemPress, style, testID } = props;

  const onPress = () => {
    onItemPress(guide);
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      testID={testID}>
      <Text>{guide.MainTask}</Text>
    </TouchableOpacity>
  );
};

export default GuideItem;
