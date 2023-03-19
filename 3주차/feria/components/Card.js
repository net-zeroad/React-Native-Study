import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
// idx와 item이 필요하며, item에는 image, title, desc, date가 필요하다.
// MainPage에서 Card 컴포넌트를 호출하면서 보낸 navigation 을 받아왔다.
export default function Card({ item, idx, navigation }) {
    return (
        idx % 2 == 0 ? (
            // 홀수 번째일 경우(idx는 0부터 시작하기 때문)
            <TouchableOpacity style={styles.card} key={idx} onPress={() => {
                // 해당 Card를 누를 때 item을 함께 보낸다.
                { navigation.navigate("DetailPage", item) }
            }}>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle} numberOfLines={1}>
                        #{idx + 1} {item.title}
                    </Text>
                    <Text style={styles.cardDesc} numberOfLines={3}>{item.desc}</Text>
                    <Text style={styles.cardDate}>{item.date}</Text>
                </View>
            </TouchableOpacity>
        ) : (
            // 짝수 번째일 경우
            <TouchableOpacity style={styles.card} key={idx} onPress={() => {
                // 해당 Card를 누를 때 item을 함께 보낸다.
                { navigation.navigate("DetailPage", item) }
            }}>
                {/* <Text>{"     "}</Text> */}
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle} numberOfLines={1}>
                        #{idx + 1} {item.title}
                    </Text>
                    <Text style={styles.cardDesc} numberOfLines={3}>{item.desc}</Text>
                    <Text style={styles.cardDate}>{item.date}</Text>
                </View>
            </TouchableOpacity>
        )
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
        borderBottomWidth: 0.5,
        // borderBottomColor: "lightpink",
        borderBottomColor: "#eee",
        paddingBottom: 10
    },
    card2: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
        borderBottomWidth: 0.5,
        // borderBottomColor: "lightblue",
        borderBottomColor: "#eee",
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