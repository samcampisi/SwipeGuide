import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getGuides } from 'states/guides/guides.actions';
import styles from './Home.style';
import { ApplicationState } from 'config/store';
import { IGuide } from 'interfaces/IGuide';
import GuideItem from 'components/GuideItem';

export interface HomeScreenProps {
  componentId: string;
  testID?: string;
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

  const extractKey = (item: IGuide) => {
    return String(item.Id);
  };

  const renderItem = (info: ListRenderItemInfo<IGuide>) => {
    return (
      <GuideItem
        guide={info.item}
        onItemPress={() => {}}
        style={info.index % 2 === 0 ? undefined : styles.altItemStyle}
      />
    );
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const data = Object.values(guidesMap);

  return (
    <View style={styles.container} testID={props.testID}>
      {isLoadingGuides && !data.length ? (
        <ActivityIndicator color="#dddddd" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={extractKey}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
        />
      )}
    </View>
  );
};

export default HomeScreen;
