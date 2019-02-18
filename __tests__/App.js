/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import React from 'react';
import App from '../app/containers/ReduxNavigation';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
