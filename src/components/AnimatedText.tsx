

const AnimatedText = ({children}:{children:React.ReactNode}) => {
  return (
<section className="text-center">
  <h1 className=" bg-main100 shadow-sm shadow-main100 p-1 rounded-xl title font-black text-8xl">{children}
    <div className="aurora">
      <div className="aurora__item"></div>
      <div className="aurora__item"></div>
      <div className="aurora__item"></div>
      <div className="aurora__item"></div>
    </div>
  </h1>
</section>)
}

export default AnimatedText