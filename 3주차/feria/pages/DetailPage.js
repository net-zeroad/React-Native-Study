import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, Alert, Share } from 'react-native';
import * as Linking from 'expo-linking';

export default function DetailPage({ navigation, route }) {

    const [tip, setTip] = useState({
        "idx": 9,
        "category": "재테크",
        "title": "렌탈 서비스 금액 비교해보기",
        "image": "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money1.png",
        "desc": "요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
        "date": "2020.09.09"
    });

    useEffect(() => {
        // route로 넘겨준 값은 route.params로 받을 수 있다.
        const params = route.params;
        console.log(route);
        console.log(params);

        navigation.setOptions({
            title: params.title,
            headerStyle: {
                backgroundColor: "#000",
                shadowColor: "#000",
            },
            headerTintColor: "#fff",
        });
        setTip(params);
    }, []);

    // 찜
    const popup = () => {
        Alert.alert("찜");
    }

    // 공유하기 버튼을 누르면 이 함수를 호출한다.
    const share = () => {
        Share.share({
            message: `${tip.title} \n\n ${tip.desc} \n\n ${tip.image}`,
        });
    }

    // 외부 링크
    const link = () => {
        Linking.openURL("https://github.com/efforthye");
    }


    return (
        <ScrollView style={styles.mainWrap}>
            <Image style={styles.mainImage} source={{ uri: tip.image }} />
            <Text style={styles.mainTitle}>{tip.title}</Text>
            <Text style={styles.mainText}>{tip.desc}</Text>
            <View style={styles.likeBtnWrap}>
                {/* 찜 */}
                <TouchableOpacity style={styles.likeBtn} onPress={popup}>
                    <Text style={styles.likeBtnText}>팁 찜하기</Text>
                </TouchableOpacity>
                {/* 공유 */}
                <TouchableOpacity style={styles.likeBtn} onPress={share}>
                    <Text style={styles.likeBtnText}>팁 공유하기</Text>
                </TouchableOpacity>
                {/* 외부 링크 */}
                <TouchableOpacity style={styles.likeBtn} onPress={link}>
                    <Text style={styles.likeBtnText}>외부 링크</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainWrap: {
        backgroundColor: 'black',
        // alignItems: 'center'
    },
    mainImage: {
        // width: 200,
        flex: 1,
        height: 400,
        resizeMode: 'cover',
        borderRadius: 20,
        marginTop: 40,
    },
    mainTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 700,
        margin: 20,
        marginBottom: 12
    },
    mainText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        maxWidth: 340,
        alignSelf: 'center'
    },
    likeBtnWrap: {
        flexDirection: "row",
        width: 350,
        alignSelf: 'center'
    },
    likeBtn: {
        width: 100,
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'deeppink',
        borderRadius: 7,
        flex: 1,
    },
    likeBtnText: {
        color: 'white',
        textAlign: 'center'
    }
});