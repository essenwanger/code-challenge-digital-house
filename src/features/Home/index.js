import React, {useEffect, useState} from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import axios from 'axios'
import Footer from './Footer'
import ListItem from './ListItem'
import Welcome from './Welcome'
import Title from './Title'
import CardPoints from './CardPoints'

export default () => {

  const ALL = 0, WON = 1, REDEEMED = 2

  const [listItem, setListItem] = useState([])
  const [totalPoints, setTotalPoints] = useState(0)
  const [filter, setFilter] = useState(ALL)

  useEffect(()=>{
    axios.get('https://6222994f666291106a29f999.mockapi.io/api/v1/products')
      .then((value)=>{
        const {data} = value
        let total = 0
        data.forEach((item)=>{
          const {points, is_redemption} = item
          if(is_redemption){
            total -= points
          }else{
            total += points
          }
        })
        setListItem(data)
        setTotalPoints(total)
    })
  }, [])

  const filterItems = (item) => {
    const {is_redemption} = item
    if(filter === ALL){
      return true
    }else if(filter === WON){
      return !is_redemption
    }else if(filter === REDEEMED){
      return is_redemption
    }
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Welcome>Ruben Rodriguez</Welcome>
      <Title>TUS PUNTOS</Title>
      <CardPoints testID='cardPoints' >{totalPoints}</CardPoints>
      <Title>TUS MOVIMIENTOS</Title>
      <ListItem testID='listItem' list={listItem} filterItems={filterItems} />
      <Footer testID='footer' isFilter={filter !== ALL} 
        onPressAll={()=> setFilter(ALL)} 
        onPressWon={()=> setFilter(WON)} 
        onPressRedeemed={()=> setFilter(REDEEMED)} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
})
