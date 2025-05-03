import { Separator } from "../ui/separator"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { buttonVariants } from "../ui/button"
export const MainNav = () => {
  return (
    <menu className="flex md:gap-4" >
      <li><a href="/#home" className={buttonVariants({ "variant": "link" })}>Home</a></li>
      <li><Separator orientation="vertical" /></li>
      <li><a href="/#work" className={buttonVariants({ "variant": "link" })}>Work</a></li>
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
      <li><a href="/blog" className={buttonVariants({ "variant": "link" })}>Blog</a></li>
    </menu >
  )
}

