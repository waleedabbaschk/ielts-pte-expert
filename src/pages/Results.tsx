import SuccessStories from '../components/sections/SuccessStories'
import ReviewCTA from '../components/sections/ReviewCTA'
import DemoLecture from '../components/sections/DemoLecture'

export default function Results() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 py-16 text-center text-white">
        <h1 className="text-4xl font-extrabold">Results</h1>
        <p className="mt-3 text-white/70">Student scores and success stories</p>
      </section>
      <SuccessStories />
      <ReviewCTA />
      <DemoLecture />
    </>
  )
}
