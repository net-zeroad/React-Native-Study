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