import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default ({children}) => {

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    height: 110,
    backgroundColor: '#CFD6FF',
    paddingHorizontal: 20,
    paddingTop: 60
  },
  text: {
    fontSize: 24,
    fontWeight: '800'
  }
})
