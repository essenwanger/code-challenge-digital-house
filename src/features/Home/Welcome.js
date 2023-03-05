import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default ({children}) => {

  return (
    <View style={styles.view}>
      <Text style={styles.textBold}>Bienvenido de vuelta!</Text>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    margin:20
  },
  textBold: {
    fontSize: 20, 
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16
  }
})
