import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import data from '../data.json';
import Card from '../components/Card';

export default function MainPage() {

    // 메인 이미지의 절대경로 주소를 가져온다.
    const main = "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fmain.png?alt=media&token=8e5eb78d-19ee-4359-9209-347d125b322c";

    // data.json의 tip을 불러온다.
    let tipCards = data.tip;
    // 앱 상단에 띄울 오늘의 온도를 지정해준다. 
    let todayWeather = 10 + 7;
    // 앱 상단에 띄울 오늘의 날씨를 지정해준다. 
    let todayCondition = "흐림"

    return (
        // View를 ScrollView로 만들어 준다.
        <ScrollView style={styles.container}>

            <Text style={styles.title}>혜리미에 꿀팁 ㅇㅅㅇ</Text>
            <Text style={styles.weather}>오늘의 날씨: {todayWeather + "°C, " + todayCondition}</Text>

            <Image style={styles.mainImage} source={{ uri: main }} />

            {/* 카테고리 목록, horizontal : 아이템들을 펼쳐지게 한다(중요), indicatorStyle : 무슨 역할인지 모르겠다. */}
            {/* ScrollView 가로 정렬(수평 스크롤, 횡 스크롤) */}
            <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
                <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
                <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
                <TouchableOpacity style={styles.middleButton03}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
                <TouchableOpacity style={styles.middleButton04}><Text style={styles.middleButtonText}>찜한 꿀팁</Text></TouchableOpacity>
            </ScrollView>

            <View style={styles.cardContainer}>

                {tipCards.map((item, idx) => (
                    <Card item={item} idx={idx} key={idx} />
                ))}

            </View>

        </ScrollView>
    )

}

const styles = StyleSheet.create({
    // 앱의 배경 색을 하양색으로 설정해 준다.
    container: {
        backgroundColor: '#fff',
    },
    // 제목을 설정해 준다.
    title: {
        // 폰트 사이즈
        fontSize: 24,
        // 폰트 두께
        fontWeight: '700',
        // 위 공간으로 부터 이격
        marginTop: 50,
        // 왼쪽 공간으로 부터 이격'
        marginLeft: 20
    },
    weather: {
        alignSelf: "flex-end",
        paddingRight: 20
    },
    // 메인 이미지를 설정해 준다.
    mainImage: {
        // 컨텐츠의 넓이 값
        width: '90%',
        // 컨텐츠의 높이 값
        height: 200,
        // 컨텐츠의 모서리 구부리기
        borderRadius: 10,
        // 위 공간으로 부터 이격
        marginTop: 20,
        // 컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능, 중요)
        // 각 속성의 값들은 공식문서에 고대로~ 나와 있음
        alignSelf: "center"
    },
    // 카테고리들이 들어갈 컨테이너
    middleContainer: {
        // 위 공간으로 부터 이격
        marginTop: 20,
        // 왼쪽 공간으로 부터 이격
        marginLeft: 10,
        // 컨테이너의 높이
        height: 64,
        // 컨테이너의 배경색상
        // backgroundColor: 'lightgray'
    },
    // 첫 번째 버튼 설정
    middleButton01: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#fdc453",
        borderColor: "deeppink",
        borderRadius: 15,
        margin: 7
    },
    middleButton02: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#fe8d6f",
        borderRadius: 15,
        margin: 7
    },
    middleButton03: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#9adbc5",
        borderRadius: 15,
        margin: 7
    },
    middleButton04: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#f886a8",
        borderRadius: 15,
        margin: 7
    },
    // 버튼 내부의 텍스트
    middleButtonText: {
        color: "#fff",
        fontWeight: "700",
        // 텍스트의 현재 위치에서의 정렬, 기본 왼쪽 정렬되어 있다.
        textAlign: "center"
    },
    // 팁 카드에 대한 각각의 카드 영역이다.
    cardContainer: {
        marginTop: 10,
        marginLeft: 10
    },
    card: {
        flex: 1,
        //컨텐츠들(이미지와 텍스트 영역)을 가로로 나열한다.
        //세로로 나열은 column <- 디폴트 값임 (flexDirection : 중요)
        flexDirection: "row",
        margin: 10,
        // 해당 컨텐츠의 아래 부분에 생길 border의 크기를 지정해준다.
        borderBottomWidth: 0.5,
        // 해당 컨텐츠의 아래 부분에 생길 border의 색상을 지정해준다.
        // borderBottomColor: "#eee",
        borderBottomColor: "lightpink",
        paddingBottom: 10
    },
    card2: {
        flex: 1,
        //컨텐츠들(이미지와 텍스트 영역)을 가로로 나열한다.
        //세로로 나열은 column <- 디폴트 값임 (flexDirection : 중요)
        flexDirection: "row",
        margin: 10,
        // 해당 컨텐츠의 아래 부분에 생길 border의 크기를 지정해준다.
        borderBottomWidth: 0.5,
        // 해당 컨텐츠의 아래 부분에 생길 border의 색상을 지정해준다.
        borderBottomColor: "lightblue",
        paddingBottom: 10,
    },

    cardImage: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    cardText: {
        flex: 3,
        // 컨텐츠의 방향을 아래로 내려보도록(column) 설정하였다.
        // 근데 사실 column이 기본값이라 넣어줄 필요는 없다.
        // flexDirection: "column",
        marginLeft: 10,
    },

    cardTitle: {
        fontSize: 20,
        fontWeight: "700"
    },
    cardDesc: {
        fontSize: 15
    },
    cardDate: {
        fontSize: 10,
        color: "#A6A6A6",
    }

});