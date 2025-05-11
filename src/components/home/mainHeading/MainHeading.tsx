import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import avatar from './../../../assets/avatar.jpeg'

export const MainHeading = () => {
  return (
    <div className="flex items-center">
      <h1 className="text-2xl p-4 font-[Cal_Sans] block md:hidden">
        <Link href="/">JonathanRayGarcia.com</Link>
      </h1>
    </div>
  );
}