import Navigation from './navigation/navigation'
import '../global.css'
import { I18nManager } from 'react-native'

// Enable RTL
I18nManager.allowRTL(true)
I18nManager.forceRTL(true) // Forces the app to use RTL

export default function Index() {
  return <Navigation />
}
