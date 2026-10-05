import CoursesSection from '../components/sections/Courses'
import DemoLecture from '../components/sections/DemoLecture'

export default function Courses() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 py-16 text-center text-white">
        <h1 className="text-4xl font-extrabold">Courses</h1>
        <p className="mt-3 text-white/70">IELTS, PTE, Spoken English and Academic English</p>
      </section>
      <CoursesSection />
      <DemoLecture />
    </>
  )
}
