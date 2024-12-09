import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'
import { Bars3Icon } from 'react-native-heroicons/outline'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default function Home() {
  return (
    <View className='bg-white'>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className='space-y-8 pt-12 px-6'
      >
        <View className='flex flex-row items-center justify-between gap-x-4'>
          <Image
            source={require('../../assets/images/LOGO-Mobile.png')}
            style={{ height: hp(6), width: hp(6) }}
          />
          <TextInput
            placeholder='جستجو در کاستومی'
            className='border rounded-3xl border-red-500 '
            style={{ height: hp(5.5), flex: 1, textAlign: 'right' }}
          />
          <Bars3Icon height={hp(4)} width={hp(4)} color={'#333'} />
        </View>
      </ScrollView>
    </View>
  )
}
