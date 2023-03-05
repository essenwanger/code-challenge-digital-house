import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default () => {

  const navigation = useNavigation()

  const onPress = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Aceptar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    marginBottom:20,
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end'
  },
  button: {
    backgroundColor: '#334FFA',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '800'
  }
})
