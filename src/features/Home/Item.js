import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import 'moment/locale/es'

export default ({item}) => {

  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate('Detail', {item})
  }

  const {createdAt, product, points, image, is_redemption} = item

  return (
    <TouchableOpacity style={{flexDirection: 'row', height: 55, marginBottom: 10
    }} onPress={onPress}>
      <Avatar src={image} />
      <Description product={product} createdAt={createdAt} />
      <Points points={points} is_redemption={is_redemption} />
      <Icon />
    </TouchableOpacity>
  )
}

const Avatar = ({src}) => {
  return (
    <View>
      <Image
        style={styles.avatar}
        source={{ uri: src}}
      />
    </View>
  )
}

const Description = ({product, createdAt}) => {
  const createdAtFormat = moment(createdAt).format('DD [de] MMMM,YYYY')
  return (
    <View style={styles.descriptionView}>
      <Text style={styles.descriptionText}>{product}</Text>
      <Text style={styles.descriptionDate}>{createdAtFormat}</Text>
    </View>
  )
}

const Points = ({points, is_redemption}) => {
  const Redemption = is_redemption? <Text style={{color: '#FF0000'}}>-</Text> : <Text style={{color: '#00B833'}}>+</Text>
  return (
    <View style={styles.pointsView}>
      <Text style={styles.pointsText}>{Redemption}{points}</Text>
    </View>
  )
}

const Icon = () => {
  return (
    <View style={styles.iconView}>
      <Image
        style={styles.iconImage}
        source={require('../../assets/Subtract.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    width: 55,
    height: 55
  },
  descriptionView: {
    flex: 2,
    marginLeft: 10,
    marginRight: 25
  },
  descriptionText: {
    marginTop: 3,
    fontSize: 14,
    fontWeight: '800'
  },
  descriptionDate: {
    fontSize: 12,
    fontWeight: '400'
  },
  pointsView: {
    marginHorizontal: 15,
    alignSelf: 'center',
    flex: 1
  },
  pointsText: {
    fontSize: 16,
    fontWeight: '800'
  },
  iconView: {
    alignSelf: 'center'
  },
  iconImage: {
    width: 10,
    height: 10
  }
})
