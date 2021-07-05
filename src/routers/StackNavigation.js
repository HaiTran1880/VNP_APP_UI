import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VNPView from '../screens/VNPView';
import WelcomView from '../screens/WelcomeView';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import image from '../assets/image';
const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome"
                 screenOptions={{
                    
                  }}>
                <Stack.Screen name="Welcome" component={WelcomView} 
                options={{headerShown:false}}
                />
                <Stack.Screen name="VNP" component={VNPView} options={{
                    headerLeft: () => {
                        return (
                           <TouchableOpacity>
                                <Image style={{ marginLeft: 20 }}
                                source={image.icon_menu} />
                           </TouchableOpacity>
                        )
                    }
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;
