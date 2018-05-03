/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import store from './shared/app.redux'
import { Provider, connect } from 'react-redux';
import AppNavigator from './shared/app.route';

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectStore />
      </Provider>
    );
  }
}

const ConnectStore = connect()(AppNavigator);