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










# View #
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainerOne}></View>
      <View style={styles.subContainerTwo}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainerOne: {
    flex:1,
    backgroundColor:"yellow"
  },
  subContainerTwo: {
    flex:1,
    backgroundColor:"green"
  }
});





# Text #
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>문자는 Text 태그 사이에 작성!!</Text>
      <Text>문자는 Text 태그 사이에 작성!!</Text>
      <Text>문자는 Text 태그 사이에 작성!!</Text>
      <Text>문자는 Text 태그 사이에 작성!!</Text>
      <Text>문자는 Text 태그 사이에 작성!!</Text>
      <Text>문자는 Text 태그 사이에 작성!!</Text>
      <Text>문자는 Text 태그 사이에 작성!!</Text>
      <Text>문자는 Text 태그 사이에 작성!!</Text>
      <Text>문자는 Text 태그 사이에 작성!!</Text>
      <Text>문자는 Text 태그 사이에 작성!!</Text>
      <Text>문자는 Text 태그 사이에 작성!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




# ScrollView - 1 #
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
		//각 태그들에는 style이라는 속성을 갖습니다.
		//이 속성은 파일 최하단에 작성한 스타일 코드 객체의 키 값을 부여해
    // 엘리먼트들에 스타일을 줄 수 있습니다.
    //이는 JSX문법을 배우고 난 다음 더 자세히 다룹니다.
    <View style={styles.container}>
			{/* //보인 영역을 갖는 엘리먼트 7가 반복적으로 쓰였습니다. */}
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
    </View>
  );
}

//텍스트가 영역을 갖고, 가운데 정렬도 하며, 테두리 스타일을 갖게 끔 하는 코드입니다.
//JSX를 마저 배우고 스타일에 대해 자세히 다루니
//걱정 안해도 좋습니다!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    height:100,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },
  textStyle: {
    textAlign:"center"
  }
});





# ScrollView - 2 #
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    height:100,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },
  textStyle: {
    textAlign:"center"
  }
});





# Button #
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>아래 버튼을 눌러주세요</Text>
        {/* 버튼 onPress 속성에 일반 함수를 연결 할 수 있습니다. */}
        <Button 
          style={styles.buttonStyle} 
          title="버튼입니다 "
          color="#f194ff" 
          onPress={function(){
            Alert.alert('팝업 알람입니다!!')
          }}
        />
        {/* ES6 문법으로 배웠던 화살표 함수로 연결 할 수도 있습니다. */}
        <Button 
            style={styles.buttonStyle} 
            title="버튼입니다 "
            color="#FF0000" 
            onPress={()=>{
              Alert.alert('팝업 알람입니다!!')
            }}
          />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    height:100,
    margin:10,
  },
  textStyle: {
    textAlign:"center"
  },
});






# TouchableOpacity
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const customAlert = () => {
    Alert.alert("TouchableOpacity에도 onPress 속성이 있습니다")
  }
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textContainer} onPress={customAlert}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    height:100,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },
  textStyle: {
    textAlign:"center"
  }
});






# Image - 상대경로 #
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//이렇게 상단에 가져와 사용할 이미지를 불러옵니다
import favicon from "./assets/favicon.png"

export default function App() {
  return (
    <View style={styles.container}>
			{/*이미지 태그 soruce 부분에 가져온 미지 이름을 넣습니다 */}
      <Image 
        source={favicon}
				// 사용설명서에 나와 있는 resizeMode 속성 값을 그대로 넣어 적용합니다
        resizeMode={"repeat"}
        style={styles.imageStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //혹시 미리 궁금하신 분들을 위해 언급하자면,
    //justifyContent와 alignContent는 영역 안에 있는 콘텐츠들을 정렬합니다
    justifyContent:"center",
    alignContent:"center"
  },
  imageStyle: {
    width:"100%",
    height:"100%",
    alignItems:"center",
    justifyContent:"center"
  }
});






# image - 절대경로 #
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//이렇게 상단에 가져와 사용할 이미지를 불러옵니다
import favicon from "./assets/favicon.png"

export default function App() {
  return (
    <View style={styles.container}>
			{/*이미지 태그 soruce 부분에 가져온 미지 이름을 넣습니다 */}
      <Image 
        source={{uri:'https://images.unsplash.com/photo-1424819827928-55f0c8497861?fit=crop&w=600&h=600%27'}}
				// 사용설명서에 나와 있는 resizeMode 속성 값을 그대로 넣어 적용합니다
        resizeMode={"cover"}
        style={styles.imageStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //혹시 미리 궁금하신 분들을 위해 언급하자면,
    //justifyContent와 alignContent는 영역 안에 있는 콘텐츠들을 정렬합니다
    justifyContent:"center",
    alignContent:"center"
  },
  imageStyle: {
    width:"100%",
    height:"100%",
    alignItems:"center",
    justifyContent:"center"
  }
});











