import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import { useEffect, useState } from 'react'
import {
  LogBox,
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { ScreenNames } from '../types'
LogBox.ignoreAllLogs()

type LoginScreenProps = {
  navigation: NavigationProp<ParamListBase>
}

export default function LoginScreen({
  navigation,
}: Readonly<LoginScreenProps>) {
  const [isPassword, setIsPassword] = useState<boolean>(true)
  const [icon, setIcon] = useState<string>('eye')
  const [userInputValue, setUserInputValue] = useState<string>('')
  const [passwordInputValue, setPasswordInputValue] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (userInputValue.includes('@') && passwordInputValue.length > 3) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [userInputValue, passwordInputValue])

  useEffect(() => {
    if (isPassword) {
      setIcon('eye')
    } else {
      setIcon('eye-off')
    }
  }, [isPassword])

  function eyeButtonHandler() {
    setIsPassword(!isPassword)
  }

  function userInputHandler(text: string) {
    setUserInputValue(text)
  }

  function passwordInputHandler(text: string) {
    setPasswordInputValue(text)
  }

  async function handleLogin() {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    navigation.navigate(ScreenNames.HomeScreen, {
      userName: userInputValue.split('@')[0],
    })
  }

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={styles.container}>
          <ImageBackground
            style={styles.image}
            source={require('../assets/images/loginBackground.png')}
          >
            <View style={styles.textContainer}>
              <Text style={styles.welcomeText}>¡Bienvenido!</Text>
              <Text style={styles.instructionsText}>
                Ingresa los datos solicitados para iniciar sesión
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, { marginTop: 36 }]}
                label='Nombre de usuario'
                mode='outlined'
                outlineColor='#bcbcbc'
                value={userInputValue}
                onChangeText={userInputHandler}
              />
              <TextInput
                style={[styles.input, { marginTop: 12 }]}
                label='Contraseña'
                mode='outlined'
                secureTextEntry={isPassword}
                outlineColor='#bcbcbc'
                right={
                  <TextInput.Icon onPress={eyeButtonHandler} icon={icon} />
                }
                value={passwordInputValue}
                onChangeText={passwordInputHandler}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                mode='contained'
                style={styles.button}
                rippleColor='#b2b2b2'
                disabled={!isFormValid || isLoading}
                loading={isLoading}
                onPress={handleLogin}
              >
                Iniciar sesión
              </Button>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  image: {
    width: 348,
    height: 629,
    paddingHorizontal: 30,
  },
  textContainer: {
    marginTop: 200,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  instructionsText: {
    textAlign: 'center',
    marginTop: 8,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
  },
  buttonContainer: {
    marginTop: 56,
    alignItems: 'center',
  },
  button: {
    borderRadius: 4,
    width: 230,
  },
})
