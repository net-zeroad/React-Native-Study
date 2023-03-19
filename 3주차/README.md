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
3. 페이지 이동 시 아래 코드 입력
- 페이지 이동
`navigation.navigate("DetailPage");`
- 페이지의 제목을 설정할 수도 있다.
`navigation.setOptions({title : "나만의 꿀팁"});`
- 아래와 같이 name 속성을 전달해주고, 두 번째 인자로 객체 데이터를 전달해주면 Detail 페이지에서 두 번째 인자로 전달된 객체 데이터를 route 객체로 받을 수 있다.
`natigation.navigate("DetailPage", {title : title})`
- 전달받은 데이터를 받는 객체 (route) : 비구조 할당 방식으로 route에 params 객체 키로 연결되어 전달되는 데이터를 꺼내 사용한다. navigate 함수로 전달되는 객체 데이터는 다음과 같은 모습이다.
```js
{
    route : {
        params : {
            title : title
        }
    }
}
```
- 실제 받는 부분
`const {title} = route.params;`


# 정리
- 로딩화면 혹은 초기 데이터를 보여줌으로서 데이터가 없을 때의 에러를 방지할 수 있다.
- 페이지를 이동하고 타이틀을 바꾸고 동시에 데이터를 넘겨받는 디테일한 방법에 대하여 배웠다.
- navigation.setOptions 로 페이지를 이동했을 때 타이틀과 스타일을 변경할 수 있다.
- navigation.navigate 라는 함수로 페이지를 이동할 수 있고 두번째 인자에 데이터를 담아 줌으로써 이동할 때 데이터를 가지고 이동할 수 있다. 또한 그 데이터를 꺼낼 때는 route.params로 꺼낼 수 있다.


# 페이지 내용 공유하기 (Share)
- 결과를 공유해주고 앱 다운로드 주소까지 전달해준다면 앱 홍보하기 쉬울 것이다.
- 준비
1. react-native 라이브러리에서 {Share} 를 가져온다.
`import { Share } from 'react-native'`
2. 함수 만들기
```js
    // 공유하기 버튼을 누르면 이 함수를 호출한다.
    const share = () =>{
        Share.share({
            message: `${tip.title} \n\n ${tip.desc} \n\n ${tip.image}`,
        });
    }
```
3. 버튼 클릭시 해당 함수 호출
```js
    <TouchableOpacity style={styles.likeBtn} onPress={share}>
        <Text style={styles.likeBtnText}>팁 공유하기</Text>
    </TouchableOpacity>
```


# 외부 링크 열기 - Linking
- 출처를 남기는 버튼 등에 외부 링크로 이동시키기 위하여 사용한다.
- 깃허브 링크를 누르면 해당 깃허브로 이동하는 기능을 구현할 수 있다.
- 혹은 전화 버튼을 눌렀을 시 전화 앱이 켜지고 바로 어딘가에 전화를 걸 수 있는 등 다른 화면을 열 수 있게 하는 기능을 구현할 수도 있다.
1. expo 도구 중 하나인 expo-linking 라이브러리 설치
`expo install expo-linking`
2. 사용할 프로젝트 파일에서 import
`import * as Linking from 'expo-linking';`
3. 함수 만들기 
```js
    const link = () => {
        Linking.openURL("https://github.com/efforthye");
    }
```
4. 아래와 같이 적용시키기
```js
                {/* 외부 링크 */}
                <TouchableOpacity style={styles.likeBtn} onPress={link}>
                    <Text style={styles.likeBtnText}>외부 링크</Text>
                </TouchableOpacity>
```
