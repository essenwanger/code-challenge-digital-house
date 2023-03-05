import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default ({children}) => {

  return (
    <Text style={styles.text}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#9B9898',
    fontWeight: '800',
    marginBottom:20, 
    marginHorizontal: 20
  }
})
