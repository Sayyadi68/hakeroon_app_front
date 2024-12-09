import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const categories = [
  {
    id: 1,
    name: 'لوازم تحریر',
    image: require('../../assets/images/stationery.png'),
  },
  {
    id: 2,
    name: 'اکسسوری',
    image: require('../../assets/images/accessories.png'),
  },
  {
    id: 3,
    name: 'کارت تبریک',
    image: require('../../assets/images/greeting-card.png'),
  },
  {
    id: 4,
    name: 'قاب موبایل',
    image: require('../../assets/images/mobile-case.png'),
  },
]

export default function Categories() {
  return (
    <View style={{ direction: 'rtl' }} className='px-4'>
      <Text className='font-extrabold text-2xl pt-8 '>دسته بندی محصولات</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        style={{ flexDirection: 'row-reverse', flexGrow: 0 }}
      >
        {categories.map((cat) => {
          const { id, name, image } = cat
          return (
            <TouchableOpacity
              key={id}
              className='flex items-center mx-2 my-2 gap-y-2'
            >
              <Image source={image} />
              <Text>{name}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}
