import { StyleSheet, Text, View } from "react-native";
import React from 'react'

export default function Header () {
    return(
        <View>
            <Text style={styles.header}>
                Zynaty Mart
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'black'
    }
});