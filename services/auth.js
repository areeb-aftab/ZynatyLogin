import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import database from '@react-native-firebase/database';

const signUp = (fullName,email,password) => {
    
    if (!fullName || !email || !password) {
        alert('Error','Please enter all fiels')
    }
    else{
        return auth().createUserWithEmailAndPassword(email.trim(),password)
        .then( cred => {
            const {uid} = cred.user;
            const add = database().ref('users/'+ auth().currentUser.uid).set({
                name: fullName,
                email:email.trim(),
                address:'',
                number:'',
                image : 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg',
            });
            const newReference = database().ref('cart/'+auth().currentUser.uid+'/').push();            
              newReference
                .set({
                  price:'0',
                  pQuan:'0'
                })
            const dis = database().ref('userTakenDiscount/')          
            .set({
                [auth().currentUser.uid]: '',
            })
            auth().currentUser.updateProfile({
                displayName: fullName
            })
            return uid
        })
        .catch(
            err => Alert.alert(err.code, err.message)
        )
    }
    
}

const signIn = (email,password) => {
    if(!email || !password){
        Alert.alert('Error','Please enter all fields')
    }
    else if(email == '' || password == '')
    {
        Alert.alert('Error','Please enter all fields')
    }
    else {
        return auth().signInWithEmailAndPassword(email.trim(),password)
        .then(() => {
            console.log(auth().currentUser.uid)
            alert(auth().currentUser.displayName + ' logged in')
        })
        .catch(
            err => Alert.alert(err.code, err.message)
        )
    }
    
}

const signOut = () => {
    return auth().signOut()
}

const Auth = {
    signUp,
    signIn,
    signOut
}

export default Auth