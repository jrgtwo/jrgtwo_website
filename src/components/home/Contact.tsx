import { Separator } from "../ui/separator"
import { buttonVariants } from "@/components/ui/button"

export const Contact = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-full-section px-0 lg:px-full-section scroll-mt-[85px]">
      <h2 className="text-3xl font-[Cal_Sans] text-destructive" style={{ 'textShadow': 'white 0px 0.005ch 0px, rgb(134, 2, 2) 1px 1px 0px' }}>Contact Me</h2>
      <section className=" flex">
        <a href="https:www.github.com/jrgtwo" target="_blank" className={buttonVariants({ variant: "link" })}>Github</a>
        <Separator orientation="vertical" />
        <a href="https:www.linkedin.com/in/jonathan-ray-garcia/" target="_blank" className={buttonVariants({ variant: "link" })}>LinkedIn</a>
      </section>
    </section >
  )
}