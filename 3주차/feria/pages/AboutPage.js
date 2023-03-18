import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'

export default function AboutPage() {

    const MAIN_IMAGE = "https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png";

    return (
        <View style={styles.mainWrap}>
            <Text style={styles.mainText}>{`안녕하세요, 저는 스파르타코딩 앱개발 반을 수강중인 박혜림입니다 :)`}</Text>
            <View style={styles.mainContentWrap}>
                <Image style={styles.mainImage} source={{ uri: MAIN_IMAGE }} />
                <Text style={styles.contentTitle}>{`저는 웹 풀스택 개발자 취업을 
목표로 하고 있습니다.`}</Text>
                <Text style={styles.contentText}>{`웹 개발은 물론 앱 개발에도 관심이 많아 
이것저것 시도해 보고 있습니다. 
좋게 봐주셨으면 감사하겠습니다! ㅎㅎ`}</Text>
                <TouchableOpacity style={styles.instaBtn}>
                    <Text style={styles.instaBtnText} onPress={() => {
                        Alert.alert("https://github.com/efforthye")
                    }}>깃허브 계정</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainWrap: {
        backgroundColor: '#11264f',
        alignItems: 'center'
    },
    mainText: {
        color: 'white',
        margin: 60,
        marginTop: 100,
        fontSize: 26,
        width: 300
    },
    mainContentWrap: {
        backgroundColor: 'white',
        width: 300,
        alignItems: 'center',
        borderRadius: 30,
        paddingTop: 80,
        paddingBottom: 80,
        marginBottom: 100
    },
    mainImage: {
        width: 180,
        height: 160,
        borderRadius: 20,
        fontWeight: '700',
    },
    contentTitle: {
        fontSize: 22,
        fontWeight: '700',
        margin: 30
    },
    contentText: {
        fontSize: 17,
    },
    instaBtn: {
        width: 100,
        height: 50,
        padding: 15,
        backgroundColor: "#fdc453",
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 30
    },
    instaBtnText: {
        color: 'white',
        fontSize: 17,
        fontWeight: 600
    }
});