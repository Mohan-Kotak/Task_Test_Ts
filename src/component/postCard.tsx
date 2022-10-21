import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../asset/colors';
import {CONSTANTS} from '../asset/constants';
import {Button} from '../atoms/button';

type POSTCARDTYPE = {
  data?: any;
  buttonClick?: any;
};

export const POSTCARD = ({data, buttonClick}: POSTCARDTYPE) => {
  return (
    <View style={style.mainView}>
      <Text style={style.titleTextStyle}>{data?.data?.title}</Text>
      <View>
        <Text
          style={
            style.aboutTextStyle
          }>{`${CONSTANTS.ABOUT} - ${data?.data?.body}`}</Text>
      </View>
      <Button
        buttonType={CONSTANTS.POST}
        buttonText={CONSTANTS.READ_MORE}
        onClick={() => buttonClick()}
      />
    </View>
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
