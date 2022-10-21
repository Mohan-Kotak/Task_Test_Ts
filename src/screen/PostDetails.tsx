import {useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../asset/colors';
import {CONSTANTS} from '../asset/constants';

export const PostDetails = () => {
  const route = useRoute<any>();

  return (
    <SafeAreaView>
      <View style={style.mainView}>
        <Text style={style.titleTextStyle}>{route?.params?.item?.title}</Text>
        <View>
          <Text
            style={
              style.aboutTextStyle
            }>{`${CONSTANTS.ABOUT} - ${route?.params?.item?.body}`}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  mainView: {
    borderWidth: 0.5,
    borderColor: COLORS.GREEN,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleTextStyle: {
    fontSize: 22,
    fontWeight: '600',
  },
  aboutTextStyle: {
    fontSize: 14,
    marginTop: 5,
  },
});
