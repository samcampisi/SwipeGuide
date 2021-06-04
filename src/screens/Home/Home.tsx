import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getGuides } from 'states/guides/guides.actions';
import styles from './Home.style';
import { ApplicationState } from 'config/store';

export interface HomeScreenProps {
  componentId: string;
}

const HomeScreen = (props: HomeScreenProps) => {
  const dispatch = useDispatch();

  // Props from the reducers
  const guidesMap = useSelector(
    (state: ApplicationState) => state.guidesData.guidesMap,
  );
  const isLoadingGuides = useSelector(
    (state: ApplicationState) => state.guidesData.isLoadingGuides,
  );

  const fetchData = () => {
    dispatch(getGuides());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
