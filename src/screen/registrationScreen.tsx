import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  Alert,
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
import {useNavigation} from '@react-navigation/native';

export const RegistationScreen = () => {
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const navigation = useNavigation();

  const onSubmitData = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        Alert.alert(error);
      });
  };

  return (
    <SafeAreaView style={style.mainView}>
      <View style={style.subView}>
        <View style={style.LoginView}>
          <Text style={style.LoginText}>{CONSTANTS.REGISTRATION}</Text>
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
        <Button
          buttonText={CONSTANTS.REGISTRATION}
          onClick={() => onSubmitData()}
        />
        <TouchableOpacity
          style={style.LoginView}
          onPress={() => navigation.navigate('Login')}>
          <Text style={style.dontHave}>{CONSTANTS.Have_Login}</Text>
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
    marginTop: 100,
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
