import AnimatedText from "./AnimatedText"
import HeroAnimation from "./HeroAnimation"
import Skills from "./Skills"

const Hero = () => {
  return (
    <main className="w-full py-10  px-5 md:px-32  gap-8 grid grid-cols-1 md:grid-cols-2">
 <section className="flex gap-5   flex-col justify-center items-center">
  <section className=" flex justify-center flex-col items-center gap-2 ">
  <AnimatedText img="back6.jpg" >
        hello 
      </AnimatedText>
      <section className="flex gap-2">

<h1 className="font-black text-4xl md:text-8xl p-1">
    I'm 
</h1>
      <AnimatedText img="back5.jpg" >
        Moncef
      </AnimatedText>
      </section>
    </section>      
    <section className="flex flex-col justify-center items-center gap-2 ">
      <AnimatedText img="back7.jpg" >
        Full-Stack
      </AnimatedText>
      <h1 className="font-black text-4xl sm:text-8xl p-1">
    Developer 
</h1>
    </section>      
 </section>

<HeroAnimation />
    </main>
  )
}

export default Hero