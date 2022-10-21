import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {COLORS} from '../asset/colors';

type InputTextProps = {
  setText?: any;
  placeholderText?: string;
  secureText?: boolean;
  keyboardEntry?: boolean;
};

export const InputText = ({
  setText,
  placeholderText,
  secureText,
  keyboardEntry,
}: InputTextProps) => {
  return (
    <TextInput
      onChangeText={ele => setText(ele)}
      placeholder={placeholderText}
      placeholderTextColor={COLORS.BLACK}
      style={style.inputStyle}
      secureTextEntry={secureText ? true : false}
      keyboardType={keyboardEntry ? 'numeric' : 'default'}
    />
  );
};
const style = StyleSheet.create({
  inputStyle: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: COLORS.GREEN,
    height: 50,
    borderRadius: 10,
    opacity: 0.6,
    paddingLeft: 20,
  },
});
