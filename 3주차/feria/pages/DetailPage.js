import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function DetailPage() {

    const tip = {
        "idx": 9,
        "category": "재테크",
        "title": "렌탈 서비스 금액 비교해보기",
        "image": "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money1.png",
        "desc": "요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
        "date": "2020.09.09"
    }

    return (
        <ScrollView style={styles.mainWrap}>
            <Image style={styles.mainImage} source={{ uri: tip.image }} />
            <Text style={styles.mainTitle}>{tip.title}</Text>
            <Text style={styles.mainText}>{tip.desc}</Text>
            <View style={styles.likeBtnWrap}>
                <TouchableOpacity style={styles.likeBtn}>
                    <Text style={styles.likeBtnText}>팁 찜하기</Text>
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
        alignItems: 'center',
    },
    likeBtn: {
        width: 100,
        height: 40,
        backgroundColor: "black",
        borderColor: "deeppink",
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    likeBtnText: {
        color: 'white'
    }
});