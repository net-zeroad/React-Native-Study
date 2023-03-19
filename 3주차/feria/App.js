import React from 'react'
// import MainPage from './pages/MainPage';
// import AboutPage from './pages/AboutPage';
// import DetailPage from './pages/DetailPage';
import { StatusBar } from 'expo-status-bar';

// 메인에 세팅할 네비게이션 라이브러리
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'


export default function App() {

  console.disableYellowBox = true;

  return (
    <>
      {/* <MainPage /> */}
      <NavigationContainer>
        <StatusBar style="black" />
        <StackNavigator />
      </NavigationContainer>
    </>
  )
}


