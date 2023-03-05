import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Item from './Item'

export default ({filterItems, list}) => {

  return (
    <ScrollView style={styles.scroll}>
        <View style={styles.view}>
          {list.filter(filterItems).map((item)=>{
            const {id} = item
            return <Item testID='item' key={id} item={item} />
          })}
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10
  },
  view: {
    marginTop: 20,
    marginBottom: 10
  }
})
