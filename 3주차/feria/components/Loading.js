import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>준비중입니다...</Text>
            {/* <Image resizeMode='contain' style={styles.lodingImg} source={{ uri: "http://appdata.hungryapp.co.kr/data_file/data_img/202112/21/W164007788460787118.gif" }} /> */}
            {/* <Image resizeMode='contain' style={styles.lodingImg} source={{ uri: "https://i.pinimg.com/originals/3e/50/c8/3e50c82d8802a640d1e68cf7a7427d74.gif" }} /> */}
            <Image resizeMode='contain' style={styles.lodingImg} source={{ uri: "https://3.bp.blogspot.com/-NECHQR9hxtc/XIDqqQ1gJ_I/AAAAAAAkv2s/WiDcKpmUcS8WM0l6iBu3W8HBF-NywppzwCLcBGAs/s1600/AW3646890_03.gif" }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //앱의 배경 색
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fdc453',
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        // color: 'white'
    },
    lodingImg: {
        width: "60%",
        height: "60%",
        alignItems: "center",
        justifyContent: "center"

    }
});