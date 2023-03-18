import React from "react"
import { View, Text, Image, StyleSheet } from "react-native";

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function Card({ item, idx }) {
    return (
        idx % 2 == 0 ? (
            // 홀수 번째일 경우(idx는 0부터 시작하기 때문)
            <View style={styles.card} key={idx}>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle} numberOfLines={1}>
                        #{idx + 1} {item.title}
                    </Text>
                    <Text style={styles.cardDesc} numberOfLines={3}>{item.desc}</Text>
                    <Text style={styles.cardDate}>{item.date}</Text>
                </View>
            </View>
        ) : (
            // 짝수 번째일 경우
            <View style={styles.card2} key={idx}>
                {/* <Text>{"     "}</Text> */}
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle} numberOfLines={1}>
                        #{idx + 1} {item.title}
                    </Text>
                    <Text style={styles.cardDesc} numberOfLines={3}>{item.desc}</Text>
                    <Text style={styles.cardDate}>{item.date}</Text>
                </View>
            </View>
        )
    )
}

const styles = StyleSheet.create({
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
})