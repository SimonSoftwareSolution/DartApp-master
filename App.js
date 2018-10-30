import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import LoginScreen from './screens/LoginScreen'
import TeamScreen from './screens/TeamScreen'
import MainScreen from './screens/MainScreen'
import ChallengeScreen from './screens/ChallengeScreen'
import RegisterScreen from './screens/RegisterScreen'
import SearchResultScreen from './screens/SearchResultScreen'
import { Provider, connect } from 'react-redux';
import combinedReducers from './reducers/combinedReducers';
import TeamSearchScreen from './screens/TeamSearchScreen';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import registerSaga from './sagas/registerSaga'

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(registerSaga);
export default class App extends React.Component {

  
  render() {
    
    return (
      <Provider store={Store}>
      <Router>
        <Scene key="root">
          <Scene key="Login" component={LoginScreen} initial={true}  hideNavBar={true}/>
          <Scene key="Main" component={MainScreen} hideNavBar={true}/>
          <Scene key="TeamSearch" component={TeamSearchScreen} hideNavBar={true}/>
          <Scene key="Team" component={TeamScreen} hideNavBar={true}/>
          <Scene key="Challenge" component={ChallengeScreen} hideNavBar={true}/>
          <Scene key="SearchResult" component={SearchResultScreen}  hideNavBar={true}/>
          <Scene key="Register" component={RegisterScreen}  hideNavBar={true}/>
        </Scene>
      </Router>
      </Provider>
    );
  }
}

