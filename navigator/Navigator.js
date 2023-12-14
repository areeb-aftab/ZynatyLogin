import React from 'react';
import {createStackNavigator, TransitionPresets, CardStyleInterpolators} from '@react-navigation/stack';

// import Home from '../screens/Home';
// import Test from '../screens/Test';
// import ProductDetails from '../screens/ProductDetails';
// import QRscanner from '../screens/QRscanner';
// import Profile from '../screens/Profile';
// import ScanHistory from '../screens/ScanHistory';
// import OrderHistory from '../screens/OrderHistory';
// import OrderHistoryDetails from '../screens/OrderHistoryDetails';
// import Address from '../screens/Address';
// import Cart from '../screens/Cart';
// import CheckOut from '../screens/CheckOut';
// import Pickup from '../screens/Pickup';
// import CardPayment from '../screens/CardPayment';
// import Delivery from '../screens/Delivery';
// import TrackOrder from '../screens/TrackOrder';

import { Easing } from 'react-native'


const Stack = createStackNavigator();

const config ={
    animation: 'spring',
    config:{
        stiffness: 1000,
        damping:50,
        mass:3,
        overshootClamping:false,
        restDisplacementThreshold:0.01,
        restSpeedThreshold:0.01,
    },
};
const closeConfig = {
    animation : 'timing',
    config:{
        duration:250,
        easing: Easing.linear,
    }
}
const Mainnav = () => {
    return(
        <Stack.Navigator 
        screenOptions={{
            headerShown : false ,
            gestureEnabled:true,
            gestureDirection: "horizontal",
            cardStyleInterpolator :CardStyleInterpolators.forHorizontalIOS,
            transitionSpec:{
                open: closeConfig,
                close: closeConfig
            }
            }} >
            
            {/* <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="QRscanner" component={QRscanner}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails}/>
            <Stack.Screen name="ScanHistory" component={ScanHistory}/>
            <Stack.Screen name="Cart" component={Cart}/>
            <Stack.Screen name="OrderHistory" component={OrderHistory}/>
            <Stack.Screen name="OrderHistoryDetails" component={OrderHistoryDetails}/>
            <Stack.Screen name="Address" component={Address}/>
            <Stack.Screen name="CheckOut" component={CheckOut}/>
            <Stack.Screen name="Pickup" component={Pickup}/>
            <Stack.Screen name="CardPayment" component={CardPayment}/>
            <Stack.Screen name="Delivery" component={Delivery}/>
            <Stack.Screen name="TrackOrder" component={TrackOrder}/>
            <Stack.Screen name="Test" component={Test}/> */}
        </Stack.Navigator>
    )
}

export default Mainnav;