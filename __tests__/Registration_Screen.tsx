import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {RegistationScreen} from '../src/screen/registrationScreen';

// for rendering of screen
test('renders correctly', () => {
  const tree = renderer.create(<RegistationScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
