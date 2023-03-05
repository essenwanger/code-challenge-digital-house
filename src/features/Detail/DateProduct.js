import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default ({children}) => {

  return (
    <>
      <Text style={styles.title}>Detalles del producto:</Text>
      <Text style={styles.text}>{children}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 20,
    marginBottom: 20,
    color: '#9B9898',
    fontSize: 14,
    fontWeight: '800'
  },
  text: {
    marginHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '800'
  }
})
