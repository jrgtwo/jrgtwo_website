import { Avatar, AvatarImage } from "@/components/ui/avatar"

export const MainHeading = () => {
  return (
    <div className="flex items-center">
      <Avatar className="block sm:hidden border-1 border-white w-[55px] h-[55px]">
        <AvatarImage src="https://avatars.githubusercontent.com/u/4975333?v=4" />
      </Avatar>

      <h1 className="text-2xl p-4 font-[Cal_Sans] block md:hidden">
        <a href="/">JonathanRayGarcia.com</a>
      </h1>
    </div>
  );
}