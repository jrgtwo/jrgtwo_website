export const Skills = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-full-section px-0 lg:px-full-section scroll-mt-[85px]">
      <h2 className="pl-8 text-3xl font-[Cal_Sans] text-destructive" style={{ 'textShadow': 'white 0px 0.005ch 0px, rgb(134, 2, 2) 1px 1px 0px' }}>My Skills</h2>
      <div className="px-10 lg:px-20 flex flex-wrap py-4 gap-10 font-[Cal_Sans] font-thin text-16">
        <ul className="list-disc flex-1">
          <li>Typescript</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
        <ul className="list-disc flex-1">
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Zustand</li>
        </ul>
        <ul className="list-disc flex-1">
          <li>Next.js</li>
          <li>Eslint</li>
          <li>Webpack</li>
          <li>Tailwind</li>
        </ul>
        <ul className="list-disc flex-1">
          <li>Express</li>
          <li>Vite</li>
          <li>Lightning.JS</li>
          <li>Zustand</li>
        </ul>

        <ul className="list-disc flex-1">
          <li>Jira</li>
          <li>Agile</li>
          <li>Git</li>
        </ul>
      </div >
    </section >
  )
}