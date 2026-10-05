import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import Marquee from '../components/ui/Marquee'
import About from '../components/sections/About'
import Courses from '../components/sections/Courses'
import TeachingApproach from '../components/sections/TeachingApproach'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import SuccessStories from '../components/sections/SuccessStories'
import Gallery from '../components/sections/Gallery'
import DemoLecture from '../components/sections/DemoLecture'
import FAQ from '../components/sections/FAQ'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Marquee />
      <About />
      <Courses />
      <TeachingApproach />
      <WhyChooseUs />
      <SuccessStories limit={6} />
      <Gallery />
      <DemoLecture />
      <FAQ />
      <Contact />
    </>
  )
}
