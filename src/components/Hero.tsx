import AnimatedText from "./AnimatedText"

const Hero = () => {
  return (
    <main className="w-full py-10 flex flex-col justify-center items-center gap-8">
  <section className="flex justify-center items-center gap-2 ">
  <AnimatedText img="back6.jpg" >
        hello 
      </AnimatedText>
<h1 className="font-black text-4xl md:text-8xl p-1">
    I'm 
</h1>
      <AnimatedText img="back5.jpg" >
        Moncef
      </AnimatedText>
    </section>      
    <section className="flex justify-center items-center gap-2 ">
      <AnimatedText img="back7.jpg" >
        Full-Stack
      </AnimatedText>
      <h1 className="font-black text-4xl sm:text-8xl p-1">
    Developer 
</h1>
    </section>      


    </main>
  )
}

export default Hero