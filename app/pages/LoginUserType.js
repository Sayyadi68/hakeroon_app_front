import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper'
import { Button } from 'react-native-paper'
import { useNavigation } from 'expo-router'

export default function LoginUserType() {
  const [isChecked, setIsChecked] = useState('')
  const navigation = useNavigation()

  return (
    <View className='flex justify-center items-center gap-4 mt-16 '>
      <Button
        icon='arrow-right'
        mode='text'
        textColor='black'
        contentStyle={{
          flexDirection: 'row-reverse',
        }}
        className='flex-row-reverse justify-self-start absolute top-[-40] right-0 '
        onPress={() => console.log(navigation.navigate('login'))}
      >
        شروع ثبت نام
      </Button>
      <Text>
        برای ثبت نام در کاستومی، نقش خود را در همکاری با ما مشخص کنید.
      </Text>

      <TouchableOpacity onPress={() => setIsChecked('first')}>
        <Image
          source={require('../../assets/images/Designer.png')}
          style={[
            isChecked === 'first' ? styles.removeFilter : styles.filterImage,
          ]}
        />
        <View className='flex flex-row items-center justify-center'>
          <Text>طراح هستم</Text>
          <RadioButton
            value='first'
            status={isChecked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked('first')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsChecked('second')}>
        <Image
          source={require('../../assets/images/Customer.png')}
          style={[
            isChecked === 'second' ? styles.removeFilter : styles.filterImage,
          ]}
          className='filter-none saturate-100 brightness-[70%] hue-rotate-[180deg]'
        />
        <View className='flex flex-row items-center justify-center'>
          <Text>مشتری هستم</Text>

          <RadioButton
            value='first'
            status={isChecked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setIsChecked('second')}
          />
        </View>
      </TouchableOpacity>
      <Button
        icon='arrow-left'
        mode='outlined'
        textColor='black'
        onPress={() => console.log(navigation.navigate('userForm'))}
      >
        شروع ثبت نام
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  filterImage: {
    filter: 'grayscale(100%)',
  },
  removeFilter: {
    filter: 'grayscale(0%)',
  },
})
