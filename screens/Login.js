import { View, Text, TouchableOpacity,ScrollView,KeyboardAvoidingView,TextInput,
StyleSheet,Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import colors from '../const/color'
import {Auth} from '../services'
import logo from '../images/ZynatyMart.png'
import auth from '@react-native-firebase/auth';


const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const forgetP = () => {
        if (email == '') {
            alert('please enter your email')
        }
        else{
            auth().sendPasswordResetEmail(email.trim())
            .then(alert('check your email'))
            .catch(
                err => Alert.alert(err.code, err.message)
            )
        }
    }
    return (
        <KeyboardAvoidingView
        behavior={"height"}
        style={styles.container}
        >
                <ScrollView>

                    <View style={{
                        alignItems: 'center',
                        marginVertical:20,
                    }}>
                        <Image
                            source={logo}
                            style={styles.logo}
                        />
                    </View>
                    
                    <View style={styles.inner}>
                    <Text style={{
                        color:'black',
                        fontSize:20,
                        fontWeight: 'bold',
                        marginTop:55,
                        marginBottom:15,
                    }}>Welcome!</Text>
                        <TextInput 
                            placeholder="Enter Email..." 
                            style={styles.textInput} 
                            value={email}
                            onChangeText = {text=> setEmail(text)}
                            keyboardType='email-address'
                        />

                        <TextInput 
                            placeholder="Enter Password..."  
                            style={styles.textInput} 
                            value={password}
                            onChangeText = {text=> setPassword(text)}
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity onPress={() => Auth.signIn(email,password)}
                        style={{
                            backgroundColor:colors.yellow,
                            alignSelf:'center',
                            width:'88%',
                            padding:10,
                            marginTop:15,
                            borderRadius:12,
                            height: 50,
                            justifyContent:'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{color:'black',}}>Login</Text>
                    </TouchableOpacity>
                    {/* <View style={{
                        alignItems: 'center',
                        marginTop:35,
                    }}>
                        <TouchableOpacity onPress={forgetP}>
                            <Text style={{
                                color:colors.yellow,
                                fontWeight:'bold',
                            }}>Forgot Password?</Text>
                        </TouchableOpacity>
                        
                    </View> */}
                                        
                    <View style={{
                        alignSelf:'center',
                        padding:10,
                        marginTop:30,
                        borderRadius:15,
                        alignItems: 'center',
                        flexDirection:'row'
                    }}>
                        <Text style={{
                            color:'silver',
                            fontWeight: 'bold',
                        }}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={{
                                color:colors.yellow,
                                fontWeight: 'bold',
                            }}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
                
        </KeyboardAvoidingView>
  )
}

export default Login
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor:'white'
      },
      inner: {
        width:'88%',
        alignSelf:'center',
      },
      logo: {
        height:160,
        width:160,
        resizeMode:'contain',
        marginTop:55,
      },
      textInput: {
        height: 50,
        borderRadius:12,
        paddingLeft:10,
        backgroundColor:colors.light,
        marginBottom:10,
      },

})