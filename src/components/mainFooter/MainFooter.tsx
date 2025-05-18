import { Separator } from '@/components/ui/separator'
import { Home } from '@/components/home/Home'

export const MainFooter = () => {
  return (

    <footer id="footer" className="flex flex-col justify-center items-center px-8 py-10">
      <Separator className="my-4" id="contact" />
      <Home.Contact id="contact" />
      <section className="py-full-section px-0 lg:px-full-section scroll-mt-[85px] mx-auto text-center">
        <h2 className="text-2xl font-[Cal_Sans] text-destructive">JonathanRayGarcia.com</h2>
        <h3 className="text-1xl font-[Cal_Sans]">Thanks for stopping by!</h3>
      </section>
      <Separator className="my-4" />
      <p>{new Date(Date.now()).getFullYear()}</p>
    </footer>
  )
}