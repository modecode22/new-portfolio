"use client"
const HeaderLink = ({children , to}:{children:React.ReactNode, to:string}) => {
 
    const name = document.getElementById(to);
  
    const handleClick = () => {
      const distance =  name?.offsetTop;
      const duration = 500; // 500 milliseconds
  
      // Set the scroll position to the target element
      window.scrollTo({
        top: distance,
        behavior: "smooth",
      });
    };
 
 
 
 
    return (
<button onClick={handleClick} className="duration-100 transition-all active:brightness-95 relative hover:brightness-100 flex justify-center items-center rounded-full px-2 p-1 group  h-8 ">
  <main >
  {children}
  </main>
  <span className="rounded-full -z-10 absolute group-hover:brightness-125  w-7 h-7 bg-black group-hover:bg-gradient-to-br from-main300  to-main400 group-hover:scale-[1.5] duration-200 transition-all">
  </span>
</button> 
    )
}

export default HeaderLink