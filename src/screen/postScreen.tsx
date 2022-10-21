import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import {BASE_URL} from '../service/baseurl';
import {END_URL} from '../service/endurl';
import {useNavigation, useRoute} from '@react-navigation/native';
import {COLORS} from '../asset/colors';
import {CONSTANTS} from '../asset/constants';
import {Button} from '../atoms/button';

export const PostScreen = () => {
  const [postData, setPostData] = useState<any>([]);
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  console.log(route);
  type Post = {
    userId: number;
    id: number;
    title: any;
    body: any;
  };

  type GetPostResponse = {
    data: Post[];
  };

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    axios
      .get<GetPostResponse>(`${BASE_URL}${END_URL.POST}`)
      .then(res => {
        setPostData(res?.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const renderComponent = ({item}: any) => {
    return (
      <View style={style.mainView}>
        <Text style={style.titleTextStyle}>{item?.title}</Text>
        <View>
          <Text
            style={
              style.aboutTextStyle
            }>{`${CONSTANTS.ABOUT} - ${item?.body}`}</Text>
        </View>
        <Button
          buttonType={CONSTANTS.POST}
          buttonText={CONSTANTS.READ_MORE}
          onClick={() => navigation.navigate('PostDetails', {item})}
        />
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View>
        <Text style={style.name}>{`Hello,${route?.params?.email}`}</Text>
      </View>
      <FlatList
        keyExtractor={item => item?.id}
        data={postData}
        renderItem={renderComponent}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  name: {
    fontSize: 16,
    color: COLORS.BLACK,
    marginTop: 10,
  },
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
