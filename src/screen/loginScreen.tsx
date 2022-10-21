import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../asset/colors';
import {CONSTANTS} from '../asset/constants';
import {Button} from '../atoms/button';
import {InputText} from '../atoms/inputText';
import auth from '@react-native-firebase/auth';

export const LoginScreen = () => {
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const navigation = useNavigation<any>();

  const onSubmitData = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Post', {email});
      })
      .catch(() => {
        console.log('That email address is invalid!');
      });
  };
  return (
    <SafeAreaView style={style.mainView}>
      <View style={style.subView}>
        <View style={style.LoginView}>
          <Text style={style.LoginText}>{CONSTANTS.LOGIN}</Text>
        </View>
        <InputText
          placeholderText={CONSTANTS.EMAIL}
          setText={(ele: any) => setEmail(ele)}
        />
        <InputText
          placeholderText={CONSTANTS.PASSWORD}
          setText={(ele: any) => setPassword(ele)}
          secureText={true}
        />
        <Button buttonText={CONSTANTS.LOGIN} onClick={() => onSubmitData()} />
        <TouchableOpacity
          style={style.LoginView}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={style.dontHave}>{CONSTANTS.Dont_Have_Account}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const style = StyleSheet.create({
  mainView: {
    width: width,
    height: height,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  subView: {
    borderWidth: 1,
    borderColor: COLORS.GREEN,
    paddingHorizontal: 10,
    paddingVertical: 50,
  },
  LoginView: {
    marginBottom: 10,
    alignItems: 'center',
  },
  LoginText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  dontHave: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
