import About1 from '@/components/sections/about-sections/About1'
import About2 from '@/components/sections/about-sections/About2'
import stock1 from '@/assets/images/stock1.jpg'
import Hero2 from '@/components/hero/Hero2'


const About = () => {

  const h1 = "ABOUT"  
  const p = "At Bugs B Gone, we are dedicated to providing top-notch pest control services to ensure your home and business are safe and pest-free. With years of experience in the industry, our team of highly trained professionals use the latest techniques and eco-friendly solutions to tackle any pest problem, big or small."
  return (
    <>
        <Hero2 img={stock1} h1={h1} p={p}/>
        <About1 />
        <About2 />
    </>
  )
}

export default About