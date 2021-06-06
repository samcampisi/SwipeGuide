import React from 'react';
import { ActivityIndicator, View, StyleProp, ViewStyle } from 'react-native';
import styles from './Spinner.style';

export interface SpinnerProps {
  fill?: boolean;
  style?: StyleProp<ViewStyle>;
  color?: string;
  size?: number | 'small' | 'large' | undefined;
  testID?: string;
}

const Spinner = (props: SpinnerProps) => {
  const { fill, style, color, size, testID } = props;

  return (
    <View style={[fill && styles.fill, style]} testID={testID}>
      <ActivityIndicator
        color={color || '#bababa'}
        size={size || 'large'}
        testID="spinner"
      />
    </View>
  );
};

export default Spinner;
