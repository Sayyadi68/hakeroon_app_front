import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function LoginUserType() {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <View className='flex justify-center items-center gap-8 mt-24 '>
      <Text>
        برای ثبت نام در کاستومی، نقش خود را در همکاری با ما مشخص کنید.
      </Text>
      <TouchableOpacity>
        <Image
          source={require('../../assets/images/Designer.png')}
          style={[!isChecked && { tintColor: 'gray' }]}
        />
      </TouchableOpacity>

      <Image source={require('../../assets/images/Customer.png')} />
    </View>
  )
}
