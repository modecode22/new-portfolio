import Image from "next/image"


const AnimatedText = ({img,children}:{children:React.ReactNode, img:string}) => {
  return (
<section className="text-center relative">
  <h1 className=" text-main600 shadow-sm shadow-main100 p-1 rounded-xl title font-black text-4xl sm:text-8xl">{children}
    <div className="aurora">
      <div className="aurora__item"></div>
      <div className="aurora__item"></div>
      <div className="aurora__item"></div>
      <div className="aurora__item"></div>
    </div>
  </h1>
  <Image src={`/${img}`} fill alt=""  className="rounded-lg  -z-10" /> 
</section>)
}

export default AnimatedText