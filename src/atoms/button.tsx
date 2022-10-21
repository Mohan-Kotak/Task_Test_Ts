import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../asset/colors';
import {CONSTANTS} from '../asset/constants';

type ButtonProps = {
  onClick?: any;
  buttonText?: any;
  buttonType?: string;
};

export const Button = ({onClick, buttonText, buttonType}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => onClick()}
      style={
        buttonType == CONSTANTS.POST ? style.postButtonStyle : style.buttonStyle
      }>
      <Text style={style.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  buttonStyle: {
    backgroundColor: COLORS.GREEN,
    height: 70,
    width: 200,
    borderRadius: 20,
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  postButtonStyle: {
    backgroundColor: COLORS.GREEN,
    height: 40,
    width: 120,
    borderRadius: 10,
    marginTop: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: COLORS.WHITE,
    fontSize: 22,
    textAlign: 'center',
  },
});
