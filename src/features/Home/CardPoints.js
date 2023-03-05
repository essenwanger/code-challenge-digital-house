import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default ({children}) => {

  return (
    <View style={styles.card}>
      <Text style={styles.month}>Diciembre</Text>
      <Text style={styles.points}>{children} pts</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#334FFA', 
    width: 286, height: 143, 
    borderRadius: 20, 
    shadowOffset:{height: 4, width: 0},
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOpacity: 0.5,
    alignSelf: 'center',
    marginBottom: 20
  },
  month: {
    fontSize: 16, 
    color: '#fff', 
    fontWeight: '800', 
    marginLeft: 19, 
    marginTop: 21, 
    marginBottom: 9
  },
  points: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center'
  }
})
