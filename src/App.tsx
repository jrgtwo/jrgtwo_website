import { ThemeProvider } from "@/components/themes/ThemeProvider"
import { ThemeToggle } from './components/themes/ThemeToggle'
import { Home } from './components/home/Home'

function App() {
  return (
    <>
      <ThemeProvider defaultTheme='dark' >
        <section className="w-[100vw]">
          <ThemeToggle />
          <section className="w-9/12 m-auto">
            <Home.Welcome />
            <Home.About />
            <Home.Skills />
            <Home.Contact />
          </section>
        </section>
      </ThemeProvider>
    </>
  )
}

export default App
