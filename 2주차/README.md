# 리액트 네이티브(Expo)
- 강의자료 2 : https://teamsparta.notion.site/2-c717afa7d2de4ac185f5436a8ddad814
- 리액트 네이티브를 조금 더 쉽게 사용할 수 있게 하는 도구
- Expo는 개발 중인 앱 테스트를 위한 Expo Go 앱을 제공해줍니다.
- 우리가 곧 배울 Expo 명령어를 통해 다운 받은 앱에서 개발 중인 앱을 그때그때 눈으로 확인할 수 있습니다! 
- Expo 명령어로 우린 앱도 생성하고, 필요한 앱 개발 도구도 설치합니다
- 설치 이후 프로젝트 생성, 실행, 빌드 등의 여러 기능을 사용할 수 있게 된다.


# Expo 설치 및 기본 앱 생성 방법
0. npm install -g expo-cli 명령어 입력
1. Expo로 개발중인 앱을 마켓에 배포하기 위해 컴퓨터에 Expo 계정을 세팅한다.
- 앱 배포와 관리를 한번에 진행 가능
1-1. Expo 가입하기
- 아래 링크로 들어가 회원가입한다. 
  https://expo.dev/signup
1-2. 로컬에 Expo 계정 세팅하기
- cmd에서 아래 명령어 입력
expo login
expo efforthye
-> 이후 비밀번호 입력
2. Expo 앱 생성 및 실행
- sparta-study 폴더 생성
- 해당 폴더에 아래 명령어 입력
expo init feria
이후 blank 를 enter로 선택 -> 기본 앱 생성됨
3. 생성한 앱 폴더 접근 및 실행
cd feria
expo start 혹은 npx expo start 혹은 expo start --tunnel 
expo start --tunnel 으로 실행해준다.
-> 이후 터미널에 QR코드가 생성된다.
-> 핸드폰의 expo go 어플에서 해당 QR코드를 인식하여준다.


# 시뮬레이터 이용하여보기
- https://teamsparta.notion.site/2-c717afa7d2de4ac185f5436a8ddad814

# 안드로이드 스튜디오 설치
- 해당 노션 : https://www.notion.so/0-0baed4475738434a8f69faa2c7145437


# JSX 기본
// 상단에서 사용할 엘리먼트를 react-native 라이브러리로부터 꺼내 사용합니다.
import { Text, View } from 'react-native';
// View : 화면의 구역을 잡는다. Text : 글자를 작성한다.
<View>
  <Text>Hello, I am {props.name}!</Text>
</View>


# JSX 심화
//우리가 리액트, 리액트 네이티브, 엑스포 라이브러리에서 꺼내 사용할 기능들을
//이렇게 앞으로도 상단에 선언한다음 가져다 사용합니다.
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//App.js는 결국 App 함수를 내보내기 하고 있는 자바스크립트 파일입니다.
//이 함수는 무언가?를 반환하고 있는데 결국 화면을 반환하고 있습니다.
export default function App() {
	//화면을 반환합니다.
	//HTML 태그 같이 생긴 이 문법은 JSX라 불리우며 실제 화면을 그리는 문법입니다,
	//이번 강의에서 자세히 다룹니다
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
// styles 변수 이름 답게 화면을 그려주는, 
//더 자세히는 JSX문법을 꾸며주는 내용을 담고 있습니다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



