import { useState } from 'react'
import AboutSection from '../components/sections/About'
import TeachingApproach from '../components/sections/TeachingApproach'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Gallery from '../components/sections/Gallery'
import DemoLecture from '../components/sections/DemoLecture'
import Button from '../components/ui/Button'

export default function About() {
  const [showPhoto, setShowPhoto] = useState(true)

  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 py-16 text-center text-white">
        <h1 className="text-4xl font-extrabold">About</h1>
        <p className="mt-3 text-white/70">Experience, qualification and teaching approach</p>
      </section>

      <AboutSection />

      {showPhoto && (
        <section className="mx-auto max-w-[1760px] px-4 pb-14 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src="/images/about.jpg"
              alt="Atta ur Rehman"
              loading="lazy"
              onError={() => setShowPhoto(false)}
              className="h-[380px] w-full rounded-3xl object-cover object-[35%_60%] shadow-xl md:h-[480px]"
            />
            <div>
              <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl md:text-4xl">
                Teaching That Gets Results
              </h2>
              <p className="mt-4 text-slate-600">
                Atta ur Rehman holds an MPhil in English Linguistics and has 7+ years of teaching
                experience. He trains local and international students for IELTS, PTE and Spoken
                English, with online and physical classes and regular mock practice.
              </p>
              <div className="mt-6">
                <Button to="/contact">Book Free Demo</Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <TeachingApproach />
      <WhyChooseUs />
      <Gallery />
      <DemoLecture />
    </>
  )
}
