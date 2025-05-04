import { Home } from './components/home/Home'
import { Separator } from "./components/ui/separator"
import { MainHeader } from "./components/mainHeader/MainHeader"
import { MainFooter } from "./components/mainFooter/MainFooter"

export function App() {
  return (
    <>
      {/* <MainHeader /> */}
      {/* <Separator className="mb-4" /> */}

      <Home.Welcome id="home" />
      <Separator className="my-4" />
      <Home.About id="about" />
      <Separator className="my-4" />
      <Home.Skills id="skills" />
      <Separator className="my-4" />
      <Home.Work id="work" />
      <Separator className="my-4" id="contact" />
      <Home.Contact id="contact" />
      <Separator className="my-4" />
      {/* <MainFooter /> */}

    </>
  )
}

export default App
