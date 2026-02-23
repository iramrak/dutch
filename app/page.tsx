import About from '@/components/About'
import Cert from '@/components/Cert'
import AboutClasses from '@/components/AboutClasses'
import Hero from '@/components/Hero'
import Indev from '@/components/Indev'
import WhyMe from '@/components/WhyMe'
import Resolts from '@/components/Resolts'
import Premm from '@/components/Premm'
import Revs from '@/components/Revs'
import FAQ from '@/components/FAQ'
import Forms from '@/components/Forms'
import Baby from '@/components/Baby'

export default function Home() {
  return (
    <main>
      <Hero />
      <Indev />
      <WhyMe />
      <About />
      <Cert />
      <AboutClasses />
      {/* <Resolts /> */}
      <Premm />
      <Revs />
      <Baby />
      <FAQ />
      <Forms />
    </main>
  )
}
