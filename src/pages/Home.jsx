import Hero from '../components/hero'
import AboutHome from '../components/abouthome'
import Tools from '../components/tools'
import Miniprojek from '../components/miniprojek' 
import MiniKontak from '../components/minikontak'

const Home = () => {
  return (
    <div className="container mx-auto px-6 md:px-10 pt-4 md:pt-10 pb-20 space-y-24 md:space-y-32">
      <Hero />

      <div data-aos="fade-up">
        <AboutHome />
      </div>

      <div data-aos="fade-right">
        <Tools />
      </div>

      <div data-aos="fade-up">
        <Miniprojek />
      </div>

      <div data-aos="zoom-in">
        <MiniKontak />
      </div>
    </div>
  )
}

export default Home