import { View, Text, TextInput } from 'react-native'
import React from 'react'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export default function CustomTextInput({ text }) {
  return (
    <View
      className='flex items-end gap-y-2'
      style={{ height: hp(10), width: wp(80) }}
    >
      <Text className='text-xl font-bold text-neutral-500 '>{text}</Text>
      <TextInput
        className='border border-neutral-600 rounded-lg px-4 text-right w-full'
        style={{ height: hp(5) }}
      />
    </View>
  )
}
