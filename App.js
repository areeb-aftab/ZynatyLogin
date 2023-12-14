import React from 'react';
import AppContainer from './navigator';
import AuthNavigator from './navigator/authNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return(
    <>
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
      {/* remove navigation container and call appConatiner instead of AuthNavigator when calling home */}
    </>
  )
}

export default App;
