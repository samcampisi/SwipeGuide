import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { IGuide } from 'interfaces/IGuide';
import styles from './GuideDetail.style';
import { ApplicationState } from 'config/store';
import { getGuideDetail, likeGuide } from 'states/guides/guides.actions';
import LikeButton from 'components/LikeButton';
import StepList from 'components/StepList';
import Spinner from 'components/Spinner';

export interface GuideDetailProps {
  guide: IGuide;
  testID?: string;
}

const GuideDetail = (props: GuideDetailProps) => {
  const dispatch = useDispatch();

  const { guide, testID } = props;

  // Props from the reducers
  const guidesMap = useSelector(
    (state: ApplicationState) => state.guidesData.guidesMap,
  );
  const likes = useSelector(
    (state: ApplicationState) => state.guidesData.likes,
  );
  const isLoadingGuides = useSelector(
    (state: ApplicationState) => state.guidesData.isLoadingGuides,
  );

  const fetchData = () => {
    dispatch(getGuideDetail(guide.Id));
  };

  const onLikePress = () => {
    dispatch(likeGuide(guide.Id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalLikes = likes[guide.Id];

  return (
    <View style={styles.container} testID={testID}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{guide.MainTask}</Text>
        <LikeButton
          onPress={onLikePress}
          text={totalLikes ? String(totalLikes) : undefined}
        />
        <Text style={styles.summary}>{guide.MainTaskSummary}</Text>

        {isLoadingGuides || !guidesMap[guide.Id].Steps ? (
          <Spinner style={styles.spinner} size="small" />
        ) : (
          <StepList steps={guidesMap[guide.Id].Steps} />
        )}
      </ScrollView>
    </View>
  );
};

export default GuideDetail;
