import 'react-native'
import React from 'react'
import Home from '../index'
import { act, create } from 'react-test-renderer'
import axios from 'axios'

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native")
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  }
})

describe('feature Home', () => {

  let component

  beforeEach(async ()=>{
    const data = [
      {"createdAt":"2022-12-09T06:34:25.607Z","product":"Handmade Metal Shoes","points":16434,"image":"https://loremflickr.com/640/480/transport","is_redemption":false,"id":"1"},
      {"createdAt":"2022-12-09T17:02:51.904Z","product":"Recycled Plastic Tuna","points":92984,"image":"https://loremflickr.com/640/480/technics","is_redemption":false,"id":"2"},
      {"createdAt":"2022-12-09T10:20:00.909Z","product":"Fantastic Granite Bacon","points":42416,"image":"https://loremflickr.com/640/480/technics","is_redemption":false,"id":"3"},
      {"createdAt":"2022-12-09T00:30:23.966Z","product":"Fantastic Fresh Gloves","points":23913,"image":"https://loremflickr.com/640/480/city","is_redemption":true,"id":"4"},
      {"createdAt":"2022-12-08T18:54:56.243Z","product":"Rustic Rubber Bacon","points":69814,"image":"https://loremflickr.com/640/480/people","is_redemption":true,"id":"5"},
    ]
    const mockAxiosResponse = {
      data: data
    }
    jest.spyOn(axios, 'get').mockResolvedValueOnce(mockAxiosResponse)

    await act(async ()=>{
      component = create(<Home />)
    })
  })

  it('initialize correctly', () => {
    const listItemComponent = component.root.findByProps({testID: 'listItem'})
    const allItemsComponent = listItemComponent.findAllByProps({testID: 'item'})
    const cardPointsComponent = component.root.findByProps({testID: 'cardPoints'})

    expect(component).toBeDefined()
    expect(cardPointsComponent.props.children).toEqual(58107)
    expect(allItemsComponent.length).toEqual(5)
  })

  it('select won', () => {    
    const footerComponent = component.root.findByProps({testID: 'footer'})
    const buttonWon = footerComponent.findByProps({testID: 'won'})
    const listItemComponent = component.root.findByProps({testID: 'listItem'})
    const allItemsComponentBefore = listItemComponent.findAllByProps({testID: 'item'})
    
    act(()=>{
      buttonWon.props.onPress()
    })
    
    const allItemsComponentAfter = listItemComponent.findAllByProps({testID: 'item'})

    expect(allItemsComponentBefore.length).toEqual(5)
    expect(allItemsComponentAfter.length).toEqual(3)
  })

  it('select redeemed', () => {
    const footer = component.root.findByProps({testID: 'footer'})
    const buttonRedeemed = footer.findByProps({testID: 'redeemed'})
    const listItemComponent = component.root.findByProps({testID: 'listItem'})
    const allItemsComponentBefore = listItemComponent.findAllByProps({testID: 'item'})
    
    act(()=>{
      buttonRedeemed.props.onPress()
    })
    
    const allItemsComponentAfter = listItemComponent.findAllByProps({testID: 'item'})

    expect(allItemsComponentBefore.length).toEqual(5)
    expect(allItemsComponentAfter.length).toEqual(2)
  })

})
