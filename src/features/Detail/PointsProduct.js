import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default ({children}) => {

  return (
    <>
      <Text style={styles.title}>Con esta compra acumulaste:</Text>
      <Text style={styles.text}>{children} puntos</Text>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 20,
    marginBottom: 30,
    color: '#9B9898',
    fontSize: 14,
    fontWeight: '800'
  },
  text: {
    marginHorizontal: 20,
    fontSize: 24,
    fontWeight: '800'
  }
})
