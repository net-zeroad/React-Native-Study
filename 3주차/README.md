# 리액트 네이티브 앱 프로젝트 실행
- feria 앱 프로젝트 폴더 경로까지 접근 이후 아래 명령어 실행
```expo start --tunnel```

# 3주차 강의
- https://teamsparta.notion.site/3-5ab40b2b22cf4683b5a675f7cd402306

# Expo의 추가 기능들
- 앱 기능 도구 공식 문서 : https://docs.expo.dev/versions/latest/
- Admob 광고, 오디오 기능, 캘린더 기능, 카메라 기능 등 많은 도구(기능)가 있다.
- 라이브러리 설치 방법 : expo install expo-camera expo-contacts expo-sensors

# Expo의 상태값 설정
- 앱 상태 바(Status Bar) 관리 공식문서 : https://docs.expo.io/versions/latest/sdk/status-bar/
- 공식 문서에 라이브러리를 가져오는 법은 물론, 사용법도 친절하게 적혀 있다고 한다.

1. 상태 바 라이브러리 설치
`expo install expo-status-bar`
2. MainPage.js 에서 해당 라이브러리 import
`import {StatusBar} from 'expo-status-bar'`
3. 사용할 곳에 아래와 같이 적어준다.
`<StatusBar style='light' />`

# 네비게이션 설정 방법 (스택 네비게이션)
- Stack.Navigator : 책갈피
- Stack.Screen : 각각의 페이지 컴포넌트
1. 네비게이션 라이브러리 설치
- 기본 네비게이션 라이브러리
`yarn add @react-navigation/native`
- 추가 설치
`expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

# createStackNavigator 사용해보기
1. 라이브러리 설치
`yarn add @react-navigation/stack`
2. navigation 폴더 생성 및 StackNavigator.js 파일 생성 후 아래 코드 작성
```js
import React from 'react';
//설치한 스택 네비게이션 라이브러리를 가져옵니다
import { createStackNavigator } from '@react-navigation/stack';
//페이지로 만든 컴포넌트들을 불러옵니다
import DetailPage from '../pages/DetailPage';
import MainPage from '../pages/MainPage';
//스택 네비게이션 라이브러리가 제공해주는 여러 기능이 담겨있는 객체를 사용합니다
//그래서 이렇게 항상 상단에 선언하고 시작하는게 규칙입니다!
const Stack = createStackNavigator();
const StackNavigator = () =>{
    return (

        //컴포넌트들을 페이지처럼 여기게끔 해주는 기능을 하는 네비게이터 태그를 선언합니다.
        //위에서 선언한 const Stack = createStackNavigator(); Stack 변수에 들어있는 태그를 꺼내 사용합니다.
        //Stack.Navigator 태그 내부엔 페이지(화면)를 스타일링 할 수 있는 다양한 옵션들이 담겨 있습니다.
        <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: "black",
                    borderBottomColor: "black",
                    shadowColor: "black",
                    height:100
                },
                headerTintColor: "#FFFFFF",
                headerBackTitleVisible: false
            }}
        >
            {/* 컴포넌트를 페이지로 만들어주는 엘리먼트에 끼워 넣습니다. 이 자체로 이제 페이지 기능을 합니다*/}
            <Stack.Screen name="MainPage" component={MainPage}/>
            <Stack.Screen name="DetailPage" component={DetailPage}/>
        </Stack.Navigator>
    )
}
export default StackNavigator;
```