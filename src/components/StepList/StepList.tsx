import React from 'react';
import { View, Text, ListRenderItemInfo, FlatList } from 'react-native';

import { IStep } from 'interfaces/IStep';
import styles from './StepList.style';

export interface StepListProps {
  steps: IStep[];
  testID?: string;
}

const StepList = (props: StepListProps) => {
  const { steps, testID } = props;

  const extractKey = (item: IStep) => {
    return item.Headline;
  };

  const renderItem = (item, index) => {
    return (
      <View>
        <Text>
          {index + 1}) <Text>{item.Headline}</Text>
        </Text>
        <Text>{item.Description}</Text>
      </View>
    );
  };

  return (
    <View testID={testID}>
      <Text>Steps:</Text>
      {steps.map((item, index) => {
        return renderItem(item, index);
      })}
    </View>
  );
};

export default StepList;
