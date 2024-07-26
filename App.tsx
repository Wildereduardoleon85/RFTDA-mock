import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import LoginScreen from './screens/LoginScreen'
import { StatusBar } from 'expo-status-bar'
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './screens/HomeScreen'
import { ScreenNames } from './types'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4a0e63',
    text: '#666666',
    onSurfaceVariant: '#666666',
  },
}

export type RootDrawerParamList = {
  LoginScreen: undefined
  HomeScreen: { userName: string }
}

const Drawer = createDrawerNavigator<RootDrawerParamList>()

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#000' style='light' />
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen
              options={{ headerShown: false }}
              name={ScreenNames.LoginScreen}
              component={LoginScreen}
            />
            <Drawer.Screen
              name={ScreenNames.HomeScreen}
              component={HomeScreen}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  )
}

const styles = StyleSheet.create({})
