import { RouteProp } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import { RootDrawerParamList } from '../App'
import { ScreenNames } from '../types'

type HomeScreenProps = {
  route: RouteProp<RootDrawerParamList, ScreenNames.HomeScreen>
}

export default function HomeScreen({ route }: Readonly<HomeScreenProps>) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>
        Hola <Text style={styles.highlight}>{route.params.userName} </Text>
        Bienvenido a RFTDA
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  highlight: {
    fontWeight: 'bold',
  },
})
