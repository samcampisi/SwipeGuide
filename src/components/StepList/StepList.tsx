import React from 'react';
import { View, Text } from 'react-native';

import { IStep } from 'interfaces/IStep';
import styles from './StepList.style';

export interface StepListProps {
  steps: IStep[];
  testID?: string;
}

const StepList = (props: StepListProps) => {
  const { steps, testID } = props;

  const renderItem = (item: IStep, index: number) => {
    return (
      <View style={styles.stepContainer} key={item.Headline}>
        <Text style={styles.headline}>
          {index + 1}) <Text>{item.Headline}</Text>
        </Text>
        <Text>{item.Description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container} testID={testID}>
      <Text style={styles.title}>Steps:</Text>
      {steps.map((item, index) => {
        return renderItem(item, index);
      })}
    </View>
  );
};

export default StepList;
