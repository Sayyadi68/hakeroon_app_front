import Categories from '../components/Categories'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

import { View } from 'react-native'

export default function Home() {
  return (
    <View className='flex-1'>
      <Navbar />
      <Hero />
      <Categories />
    </View>
  )
}
