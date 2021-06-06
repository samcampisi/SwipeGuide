import React from 'react';
import { View, Text } from 'react-native';

import { IGuide } from 'interfaces/IGuide';
import styles from './GuideDetail.style';

export interface GuideDetailProps {
  guide: IGuide;
  testID?: string;
}

const GuideDetail = (props: GuideDetailProps) => {
  const { guide, testID } = props;

  return (
    <View style={styles.container} testID={testID}>
      <Text>Detail screen</Text>
      <Text>{guide.MainTask}</Text>
    </View>
  );
};

export default GuideDetail;
