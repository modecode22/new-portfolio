"use client"
import Lottie from 'lottie-react'
import data from '../../public/ccc.json'
const HeroAnimation = () => {
  return (
    <section  className="w-full  flex justify-center items-center">
<Lottie animationData={data}  />
    </section>
  )
}

export default HeroAnimation