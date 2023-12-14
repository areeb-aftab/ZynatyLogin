import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../const/color';
import logoimg from '../images/landing.png';
import Header from '../const/Header';
import Footer from '../const/Footer';

const Landing = ({navigation}) => {
  return (
    <View style={styles.background}>
      <Header />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={logoimg}
          style={{height: '70%', width: 290, resizeMode: 'contain'}}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
        }}>
        <View
          style={{
            alignItems: 'flex-end',
            marginRight: 20,
            marginBottom:10,
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                backgroundColor: 'white',
                color: 'black',
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                padding: 10,
              }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </View>
    </View>
  );
};

export default Landing;
const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.yellow,
    flex: 1,
  },
});
