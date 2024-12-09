import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { PaintBrushIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

export default function Hero() {
  const navigation = useNavigation()
  return (
    <View className='flex items-center gap-8 bg-[#EDD5D8] py-6 px-4 rounded-xl mx-6'>
      <Image
        source={require('../../assets/images/3girls.png')}
        style={{ height: hp(20), width: hp(40) }}
      />
      <View className='flex items-center gap-4 ' style={{ direction: 'rtl' }}>
        <Text className='font-extrabold text-4xl font-'>
          آنلاین شاپ کاستومی
        </Text>
        <Text className='font-bold text-[15px] text-neutral-600 font-[Estedad-ExtraBold]'>
          آنلاین شاپ کاستومی محصولات متنوعی داره و این امکان رو بهتون میده
          خودتون رنگ و طرح و نوشته ی روی محصولات رو انتخاب کنید.
        </Text>
      </View>
      <View className='flex flex-row items-center gap-4 '>
        <TouchableOpacity className='px-[14px] py-[11px] border border-[#A72F3B] rounded-lg'>
          <Text className='text-[#A72F3B] font-bold'>دیدن محصولات</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='flex flex-row justify-center items-center gap-2 bg-[#A72F3B] rounded-lg p-2'
          onPress={() => {
            navigation.navigate('Login')
          }}
        >
          <Text className='text-neutral-50'>شروع طراحی </Text>
          <PaintBrushIcon size={hp(3.5)} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
