import Constants from 'expo-constants';
import * as firebase from 'firebase';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import AuthMenu from './components/auth/menu';
import rootReducer from './reducers';
import LoginScreen from './auth';


const store = createStore(rootReducer, applyMiddleware(thunk))




if (firebase.apps.length === 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase)
} else {
  firebase.app()
}


export default function App() {
  return (
    <Provider store={store} >
      <LoginScreen/>
    </Provider>
  );
}
