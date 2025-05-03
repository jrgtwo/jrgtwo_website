import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import NBCLogo from './../../assets/NBC_logo.png';
import DisneyLogo from './../../assets/DISNEY_Logo.png'
import NFLLogo from './../../assets/NFL_Logo.png'
import MGMLogo from './../../assets/MGM_logo.png'

export const Work = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-full-section px-0 lg:px-full-section scroll-mt-[85px]">
      <h2 className="text-3xl font-[Cal_Sans] text-destructive" style={{ 'textShadow': 'white 0px 0.005ch 0px, rgb(134, 2, 2) 1px 1px 0px' }}>What I've Done</h2>
      <div className="px-4">
        <Card className="mt-8">
          <CardContent>
            <div className=" flex-col sm:flex-row flex gap-8 items-center">
              <div className="flex justify-center flex-1  bg-white rounded-lg">
                <img src={NBCLogo} alt="NBC logo" className="max-h-[250px] scale-90" />
              </div>
              <div className="flex-2">
                <h4 className="font-[Cal_Sans] text-2xl">NBC.com</h4>
                <Separator className="my-4" />
                <p className="mt-6">I developed NBC.com's video apps for web and connected devices using a JavaScript canvas technique for low-memory systems and built the Paris 2024 Olympics video hub. I also improved the codebase by migrating it to TypeScript and implementing Jest and Cypress testing frameworks. Additionally, I managed the deployment process, overseeing production releases and hotfixes.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardContent>
            <div className=" flex-col sm:flex-row flex gap-8 items-center">
              <div className="flex justify-center flex-1  bg-white rounded-lg">
                <img src={DisneyLogo} alt="Disney logo" className="max-h-[250px]" />
              </div>
              <div className="flex-2">
                <h4 className="font-[Cal_Sans] text-2xl">Disney/Disney Streaming</h4>
                <Separator className="my-4" />
                <p className="mt-6">At Disney, as a Senior Software Engineer, I've collaboratively steered all aspects of video players across major platforms, including DisneyPlus.com, StarPlus.com, plus.espn.com, NHL.tv, and Hulu.com. My role included integrating various third-party tracking suites like MOAT, Conviva, and Adobe, thereby boosting our analytic capabilities. Consistently delivering high-quality, peer-reviewed code, I navigated an Agile workflow, orchestrating new features, and resolving bugs efficiently, while also mentoring colleagues and transitioning them from Disney park roles to proficient developers through the Code Rosies program.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardContent>
            <div className=" flex-col sm:flex-row flex gap-8 items-center">
              <div className="flex justify-center flex-1  bg-white rounded-lg overflow-hidden">
                <img src={NFLLogo} alt="NFL logo" className="max-h-[250px] scale-90" />
              </div>
              <div className="flex-2">
                <h4 className="font-[Cal_Sans] text-2xl">National Footbal League/NFL.com</h4>
                <Separator className="my-4" />
                <p className="mt-6">As a Senior Application Developer at NFL.com, I enhanced my skills in a dynamic, fast-paced environment while redesigning key elements such as the NFL.com homepage and videos page. I also crafted a unique viewing experience for Super Bowl commercials, an innovative feature that was marketed live during the game.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardContent>
            <div className=" flex-col sm:flex-row flex gap-8 items-center">
              <div className="flex justify-center flex-1   bg-white rounded-lg">
                <img src={MGMLogo} alt="MGM logo" className="max-w-[250px] scale-90" />
              </div>
              <div className="flex-2">
                <h4 className="font-[Cal_Sans] text-2xl">Metro-Goldwyn-Mayer/MGM.com</h4>
                <Separator className="my-4" />
                <p className="mt-6">As the Chief Front-End Developer at MGM, I leveraged my skills in CSS, HTML, and Javascript to deliver high-end sites, micro-sites, and redesigns, often as the sole developer ensuring quality and meeting tight deadlines. My significant contributions included building MGM's first mobile websites, a project I saw through from initial business interest to completion.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}