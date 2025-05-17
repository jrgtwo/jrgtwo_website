import { Separator } from "../ui/separator"
import Link from 'next/link'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { buttonVariants } from "../ui/button"
export const MainNav = () => {
  return (
    <menu className="flex sm:mr-[2vw]  lg:mr-[12vw]" >
      <li><Link href="/#home" className={buttonVariants({ "variant": "link" })}>Home</Link></li>
      <li><Separator orientation="vertical" /></li>
      <li><Link href="/#work" className={buttonVariants({ "variant": "link" })}>Work</Link></li>
      <li><Separator orientation="vertical" /></li>
      <li>
        <Popover>
          <PopoverTrigger className={buttonVariants({ "variant": "link" })}>Contact Me</PopoverTrigger>
          <PopoverContent className="flex flex-col">
            <menu className="list-disc">
              <li><a href="https://www.github.com/jrgtwo" target="_blank">Github</a></li>
              <li><a href="https://www.linkedin.com/in/jonathan-ray-garcia" target="_blank">LinkedIn</a></li>
            </menu>
          </PopoverContent>
        </Popover>
      </li >
      <li><Separator orientation="vertical" /></li>
      <li><Link href="/blog" className={buttonVariants({ "variant": "link" })}>Blog</Link></li>
    </menu >
  )
}

