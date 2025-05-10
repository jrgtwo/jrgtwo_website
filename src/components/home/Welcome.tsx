import Image from "next/image"
import Avatar from './../../assets/avatar.jpeg'
import { Separator } from "../ui/separator"

export const Welcome = ({ id }: { id: string }) => {
  return (
    <section id={id} className="flex sm:flex-col-reverse lg:flex-row items-center py-full-section px-0 lg:px-full-section scroll-mt-[85px]">
      <div className="flex-1">
        <h2 className="hidden md:block text-center text-5xl font-[Cal_Sans]" style={{ 'textShadow': '#860202 0px 3px 0px, white 0px 2px 0px' }}>Jonathan Garcia</h2>
        <h3 className="text-center text-3xl font-[Cal_Sans] text-destructive" style={{ 'textShadow': 'white 0px 0.005ch 0px, rgb(134, 2, 2) 1px 1px 0px' }}>I'm A Software Engineer!</h3>
        <Separator className="max-w-7/12 m-4 mx-auto" />
        <p className="text-center px-8 lg:px-0 text-16 leading-loose font-[Roboto_Condensed]">
          Senior Software Engineer with over 15 years of experience on Front End Development.  Specialized in but not limited to Typescript, Javascript, React, Jest, React Test Library, and more!
        </p>
      </div>
      <div className="hidden sm:block flex-1 max-w-[360px] max-h-[360px] rounded-full overflow-hidden border-4 border-white"
        style={{ 'boxShadow': 'white 0px 0.005ch 0px, rgb(134, 2, 2) 1px 1px 0px' }}>
        <Image
          src={Avatar.src}
          alt="A picture of Jonathan"
          width={500}
          height={500} />
      </div>
    </section >
  )
}