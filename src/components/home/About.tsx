
export const About = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-full-section px-0 lg:px-full-section scroll-mt-[85px]">
      <h2 className="pl-8 text-3xl font-[Cal_Sans] text-destructive" style={{ 'textShadow': 'white 0px 0.005ch 0px, rgb(134, 2, 2) 1px 1px 0px' }}>About Me</h2>
      <p className="p-8 pb-0">Senior Software Engineer with over 15 years of experience, specializing in front-end development and video player integration using advanced skills in JavaScript, React, Redux RxJs, and Typescript. I’ve been a key member of the Disney Streaming team, applying my extensive knowledge and coding proficiency to develop and maintain video players for popular platforms such as DisneyPlus.com, StarPlus.com, plus.espn.com, and NHL.tv. </p>
    </section>
  )
}