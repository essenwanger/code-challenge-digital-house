import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default ({isFilter, onPressAll, onPressWon, onPressRedeemed}) => {

  if(isFilter){
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.button} onPress={onPressAll}>
          <Text style={styles.buttonText}>Todos</Text>
        </TouchableOpacity>
      </View>
    )  
  }

  return (
    <View style={styles.view}>
      <TouchableOpacity testID='won' 
        style={styles.button} onPress={onPressWon}>
        <Text style={styles.buttonText}>Ganados</Text>
      </TouchableOpacity>
      <TouchableOpacity testID='redeemed' 
        style={styles.button} onPress={onPressRedeemed}>
        <Text style={styles.buttonText}>Canjeados</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    marginBottom:20, 
    marginTop: 40, 
    marginHorizontal: 13,
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#334FFA', 
    height: 50, 
    borderRadius: 10, 
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 7
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '800'
  }
})
