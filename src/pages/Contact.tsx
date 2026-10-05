import ContactSection from '../components/sections/Contact'
import FAQ from '../components/sections/FAQ'

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 to-navy-700 py-16 text-center text-white">
        <h1 className="text-4xl font-extrabold">Contact</h1>
        <p className="mt-3 text-white/70">Book a free demo or ask any question</p>
      </section>
      <ContactSection />
      <FAQ />
    </>
  )
}
