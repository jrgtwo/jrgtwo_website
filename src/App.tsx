import { ThemeProvider } from "@/components/themes/ThemeProvider"
import { Home } from './components/home/Home'
import { Separator } from "./components/ui/separator"
import { MainHeader } from "./components/mainHeader/MainHeader"
import { MainFooter } from "./components/mainFooter/MainFooter"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme='dark'>
        <MainHeader />
        <Separator className="mb-4" />
        <section className="w-11/12 max-w-[950px] lg:w-9/12 m-auto">
          <Home.Welcome id="home" />
          <Separator className="my-4" />
          <Home.Skills id="skills" />
          <Separator className="my-4" />
          <Home.About id="about" />
          <Separator className="my-4" />
          <Home.Work id="work" />
          <Separator className="my-4" id="contact" />
          <Home.Contact id="contact" />
          <Separator className="my-4" />
          <MainFooter />
        </section>
      </ThemeProvider >
    </>
  )
}

export default App
