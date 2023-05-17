import {BiStats , BiBookAdd,BiLogOut} from 'react-icons/bi'
import {GiBeech} from 'react-icons/gi'
import {IoIosStats} from 'react-icons/io'
import {TbShoppingBag} from 'react-icons/tb'
import {MdQueryStats , MdGroups} from 'react-icons/md'
import AnimatedText from '@/components/AnimatedText'
import AnimatedCards from '@/components/AnimatedCards'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <>
   <Header /> 
<Hero /> 
<Skills /> 
      <AnimatedCards />
      <AnimatedCards />
      <AnimatedCards />
      <AnimatedCards />
    </>
  )
}
