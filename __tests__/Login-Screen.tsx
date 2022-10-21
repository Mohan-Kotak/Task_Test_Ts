import 'react-native';
import React from 'react';
import {LoginScreen} from '../src/screen/loginScreen';
import renderer from 'react-test-renderer';

// for rendering of screen
test('renders correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
