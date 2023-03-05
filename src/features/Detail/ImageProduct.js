import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default ({src}) => {

  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={{ uri: src }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    margin: 20,
    backgroundColor: '#fff',
    shadowOffset:{height: 4, width: 0},
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOpacity: 0.5,
    borderRadius: 10
  },
  image: {
    width: '100%', 
    aspectRatio: 1,
    borderRadius: 10
  }
})
