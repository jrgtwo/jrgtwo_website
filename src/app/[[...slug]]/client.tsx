

import dynamic from 'next/dynamic'
import { App } from '../../App'
//const App = dynamic(() => import('../../App'), { ssr: true })

export function ClientOnly() {
  return <App />
}