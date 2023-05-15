"use client"
import React, { useEffect, useRef } from 'react'

const Skills = () => {
    const rise = useRef<HTMLDivElement>(null)
    useEffect(() => { 
        setInterval(()=>{
            rise.current?.classList.toggle("lol")
        },5000)
    }, [rise.current?.classList])
    

  return (
    <section  className="bg-main500/20 w-full h-72 flex justify-center items-center">
<div className='duration-500 transition-all bg-main300 p-2 rounded-xl shadow-sm shadow-main' ref={rise} >
art
</div>


    </section>
  )
}

export default Skills