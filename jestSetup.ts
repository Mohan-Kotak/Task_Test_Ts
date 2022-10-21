jest.mock('@react-native-firebase/auth', () => ({}));
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigation: () => {},
  }),
}));
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({navigation: {}}),
}));
jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({params: {item: {}}}),
}));
