"use client"
import { useEffect } from "react"
import Card from "./Card"
import Image from "next/image"

const AnimatedCards = () => {
    useEffect(() => {
        document.getElementById("cards")!.onmousemove = e => {
            // @ts-ignore
            for(const card of document.getElementsByClassName("card")) {
              const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;
          
              card.style.setProperty("--mouse-x", `${x}px`);
              card.style.setProperty("--mouse-y", `${y}px`);
            };
          }   
      }, [])
  return (
<main id="cards" className="max-w-6xl p-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 h-full">
    <section className="group w-full aspect-square brightness-95 hover:brightness-105 duration-400 transition-all select-none  ">
    <Card>
    <div className="card-info-title">
      <section className="relative w-full aspect-video rounded-lg ">
        <Image fill src={"/image.jpg"} alt="" className="group-hover:-translate-y-1 duration-200 transition-all group-hover:shadow-md group-hover:shadow-main200/10 rounded-lg" /> 
      </section>
      <section className="p-2 ">
      <h3>Apartments</h3>  
            <h4>Places to be apart. Wait, what?</h4>
      </section>
          </div>  
    </Card>
    </section>
    <section className="group w-full aspect-square brightness-95 hover:brightness-105 duration-400 transition-all select-none  ">
    <Card>
    <div className="card-info-title">
      <section className="relative w-full aspect-video rounded-lg ">
        <Image fill src={"/image.jpg"} alt="" className="group-hover:-translate-y-1 duration-200 transition-all group-hover:shadow-md group-hover:shadow-main200/10 rounded-lg" /> 
      </section>
      <section className="p-2 ">
      <h3>Apartments</h3>  
            <h4>Places to be apart. Wait, what?</h4>
      </section>
          </div>  
    </Card>
    </section>    <section className="group w-full aspect-square brightness-95 hover:brightness-105 duration-400 transition-all select-none  ">
    <Card>
    <div className="card-info-title">
      <section className="relative w-full aspect-video rounded-lg ">
        <Image fill src={"/image.jpg"} alt="" className="group-hover:-translate-y-1 duration-200 transition-all group-hover:shadow-md group-hover:shadow-main200/10 rounded-lg" /> 
      </section>
      <section className="p-2 ">
      <h3>Apartments</h3>  
            <h4>Places to be apart. Wait, what?</h4>
      </section>
          </div>  
    </Card>
    </section>    <section className="group w-full aspect-square brightness-95 hover:brightness-105 duration-400 transition-all select-none  ">
    <Card>
    <div className="card-info-title">
      <section className="relative w-full aspect-video rounded-lg ">
        <Image fill src={"/image.jpg"} alt="" className="group-hover:-translate-y-1 duration-200 transition-all group-hover:shadow-md group-hover:shadow-main200/10 rounded-lg" /> 
      </section>
      <section className="p-2 ">
      <h3>Apartments</h3>  
            <h4>Places to be apart. Wait, what?</h4>
      </section>
          </div>  
    </Card>
    </section>    <section className="group w-full aspect-square brightness-95 hover:brightness-105 duration-400 transition-all select-none  ">
    <Card>
    <div className="card-info-title">
      <section className="relative w-full aspect-video rounded-lg ">
        <Image fill src={"/image.jpg"} alt="" className="group-hover:-translate-y-1 duration-200 transition-all group-hover:shadow-md group-hover:shadow-main200/10 rounded-lg" /> 
      </section>
      <section className="p-2 ">
      <h3>Apartments</h3>  
            <h4>Places to be apart. Wait, what?</h4>
      </section>
          </div>  
    </Card>
    </section>    <section className="group w-full aspect-square brightness-95 hover:brightness-105 duration-400 transition-all select-none  ">
    <Card>
    <div className="card-info-title">
      <section className="relative w-full aspect-video rounded-lg ">
        <Image fill src={"/image.jpg"} alt="" className="group-hover:-translate-y-1 duration-200 transition-all group-hover:shadow-md group-hover:shadow-main200/10 rounded-lg" /> 
      </section>
      <section className="p-2 ">
      <h3>Apartments</h3>  
            <h4>Places to be apart. Wait, what?</h4>
      </section>
          </div>  
    </Card>
    </section>
</main>  )
}

export default AnimatedCards