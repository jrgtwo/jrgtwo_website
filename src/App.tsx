import { Home } from './components/home/Home'
import { Separator } from "./components/ui/separator"

export function App() {
  return (
    <>
      <Home.Welcome id="home" />
      <Separator className="my-4" />
      <Home.About id="about" />
      <Separator className="my-4" />
      <Home.Skills id="skills" />
      <Separator className="my-4" />
      <Home.Work id="work" />
    </>
  )
}

export default App
