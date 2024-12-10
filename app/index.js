import Navigation from './navigation/navigation'
import '../global.css'
import { I18nManager } from 'react-native'
import FontProvider from './components/FontProvider'

// Enable RTL
I18nManager.allowRTL(true)
I18nManager.forceRTL(true)

export default function Index() {
  return (
    <FontProvider>
      <Navigation />
    </FontProvider>
  )
}