import { Separator } from "../ui/separator"
import { buttonVariants } from "../ui/button"
export const MainNav = () => {
  return (
    <menu className="hidden md:flex gap-4" >
      <li><Separator orientation="vertical" /></li>
      <li><a href="/#home" className={buttonVariants({ "variant": "link" })}>Home</a></li>
      <li><Separator orientation="vertical" /></li>
      <li><a href="/#skills" className={buttonVariants({ "variant": "link" })}>Skills</a></li>
      <li><Separator orientation="vertical" /></li>
      <li><a href="/#work" className={buttonVariants({ "variant": "link" })}>Work</a></li>
      <li><Separator orientation="vertical" /></li>
      <li><a href="/#contact" className={buttonVariants({ "variant": "link" })}>Contact Me</a></li>
      <li><Separator orientation="vertical" /></li>
      <li><a href="/#blog" className={buttonVariants({ "variant": "link" })}>Blog</a></li>
      <li><Separator orientation="vertical" /></li>
    </menu >
  )
}

