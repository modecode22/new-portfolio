import HeaderLink from "./HeaderLink"
import Button from "./ui/Button"

const Header = () => {
  return (
    <header className=' sticky top-5 z-50 backdrop-blur-md flex  h-16    w-full max-w-6xl bg-gradient-to-r from-main400/60 via-main400/20 to-main400/10 p-[0.1rem] rounded-xl'>
      <section className='p-2 flex  h-[3.8rem] gap-2 items-center justify-center bg-zinc-900/80  w-full rounded-xl'>

<nav className='py-2 h-full flex justify-center  items-center w-full gap-1'>
<HeaderLink to="all">
Me
</HeaderLink>
<HeaderLink to="all">
Skills
</HeaderLink>
<HeaderLink to="all">
Projects
</HeaderLink>
<HeaderLink to="all">
Contact
</HeaderLink>
</nav>

      </section>
       
    </header>
  )
}

export default Header