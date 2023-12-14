import { StyleSheet, Text, View } from "react-native";
import React from 'react'

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.footer}>Copyright: ZynatyMart by project areeb (2023) - 
                <Text style={{fontStyle: 'italic',color:'white'}}>Karachi Insitute of Economics & Technology</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    footer:{
        color:'white',
    }
});