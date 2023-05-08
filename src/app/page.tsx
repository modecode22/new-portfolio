import {BiStats , BiBookAdd,BiLogOut} from 'react-icons/bi'
import {GiBeech} from 'react-icons/gi'
import {IoIosStats} from 'react-icons/io'
import {TbShoppingBag} from 'react-icons/tb'
import {MdQueryStats , MdGroups} from 'react-icons/md'
import AnimatedText from '@/components/AnimatedText'
import AnimatedCards from '@/components/AnimatedCards'

export default function Home() {
  return (
    <main className='w-full  h-screen flex-col flex p-6   gap-6 '>
      <section className=' flex  h-16    w-full max-w-6xl bg-gradient-to-r from-main400/60 via-main400/20 to-main400/10 p-[0.1rem] rounded-xl'>
      <section className='p-2 flex  h-[3.8rem] gap-2 items-center justify-center bg-zinc-900/80  w-full rounded-xl'>
      {/* <BiStats className='w-12 h-12' /> 
       */}
      {/* <div className='bg-gradient-to-t from-main400/10 via-main400/50 to-main400/10 h-full w-[0.09rem] rounded-full '>
      </div> */}


<nav className='py-2 h-full flex justify-center  items-center w-full gap-1'>

<section className='flex justify-center items-center rounded-xl bg-main400/10 w-10 h-10'>
<GiBeech className='w-6 h-6 fill-main300' /> 
</section>
<section className='flex justify-center items-center rounded-xl  w-10 h-10'>
<IoIosStats className='w-6 h-6 fill-main400' /> 
</section>
<section className='flex justify-center items-center rounded-xl  w-10 h-10'>
<BiBookAdd className='w-6 h-6 fill-main400' /> 
</section>
<section className='flex justify-center items-center rounded-xl  w-10 h-10'>
<TbShoppingBag className='w-6 h-6 fill-main400' /> 
</section>
<section className='flex justify-center items-center rounded-xl  w-10 h-10'>
<MdQueryStats className='w-6 h-6 fill-main400' /> 
</section>

<section className='flex justify-center items-center rounded-xl  w-10 h-10'>
<MdGroups className='w-6 h-6 fill-main400' /> 
</section>



</nav>

      </section>
      </section>
      <AnimatedText >
        Moncef
      </AnimatedText>
      <AnimatedCards />
    </main>
  )
}
