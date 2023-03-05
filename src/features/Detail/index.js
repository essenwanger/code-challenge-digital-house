import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import moment from 'moment'
import 'moment/locale/es'
import Footer from './Footer'
import NameProduct from './NameProduct'
import ImageProduct from './ImageProduct'
import DateProduct from './DateProduct'
import PointsProduct from './PointsProduct'

export default () => {

  const route = useRoute()

  const {createdAt, product, points, image} = route.params.item

  const createdAtFormat = moment(createdAt).format('[Comprado el ]DD [de] MMMM,YYYY')

  return (
    <>
      <SafeAreaView style={styles.top} />
      <SafeAreaView style={styles.body}>
        <NameProduct>{product}</NameProduct>
        <ImageProduct src={image} />
        <DateProduct>{createdAtFormat}</DateProduct>
        <PointsProduct>{points}</PointsProduct>
        <Footer />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  top: {
    flex: 0,
    backgroundColor: '#CFD6FF'
  },
  body: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  }
})
