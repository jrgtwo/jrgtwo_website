import { MainHeading } from "../home/mainHeading/MainHeading"
import { MainNav } from "../mainNav/MainNav"

export const MainHeader = () => {
  return (
    <section
      className="z-10 overflow-hidden justify-center flex-col md:flex-row lg:px-5 md:px-0 min-h-[68px] bg-background  w-full flex items-center m-auto md:justify-end sticky top-0"
      style={{
        "boxShadow": "0 1px 1px rgba(255,100,103, 0.8), 0 -10px 30px var(--destructive)",
      }}>
      <MainHeading />
      <MainNav />
    </section>
  )
}
