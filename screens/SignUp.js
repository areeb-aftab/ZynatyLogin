import { View, Text, TouchableOpacity,ScrollView,KeyboardAvoidingView,TextInput,
    StyleSheet,Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import colors from '../const/color'
import {Auth} from '../services'
import logo from '../images/ZynatyMart.png'


const SignUp = ({navigation}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                    }}>Sign Up!</Text>
                        <TextInput 
                            placeholder="Enter Full Name..." 
                            style={styles.textInput} 
                            value={name}
                            onChangeText = {text=> setName(text)}
                        />

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
                        />
                    </View>
                    <TouchableOpacity onPress={() => Auth.signUp(name,email,password)}
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
                        <Text style={{color:'black',}}>Sign Up</Text>
                    </TouchableOpacity>
                                        
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
                        }}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{
                                color:colors.yellow,
                                fontWeight: 'bold',
                            }}> Login</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
                
        </KeyboardAvoidingView>
    )
}

export default SignUp
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