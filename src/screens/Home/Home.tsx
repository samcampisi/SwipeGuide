import React from 'react';
import { View, Text } from 'react-native';

import styles from './Home.style';

export interface HomeScreenProps {
  componentId: string;
}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
