import React from 'react';
import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';

import { IGuide } from 'interfaces/IGuide';
import LikeButton from 'components/LikeButton';
import styles from './GuideItem.style';

export interface GuideItemProps {
  guide: IGuide;
  onItemPress: (guide: IGuide) => void;
  totalLikes?: number;
  onLikeItemPress: (id: number) => void;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

const GuideItem = (props: GuideItemProps) => {
  const { guide, onItemPress, totalLikes, onLikeItemPress, style, testID } =
    props;

  const onPress = () => {
    onItemPress(guide);
  };

  const onLikePress = () => {
    onLikeItemPress(guide.Id);
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      testID={testID}>
      <Text style={styles.title}>{guide.MainTask}</Text>
      <LikeButton
        onPress={onLikePress}
        text={totalLikes ? String(totalLikes) : undefined}
      />
    </TouchableOpacity>
  );
};

export default GuideItem;
