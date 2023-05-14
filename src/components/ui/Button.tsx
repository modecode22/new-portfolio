import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes } from 'react'
import {AiOutlineLoading} from 'react-icons/ai'


//  change the themes of the bottons 
const buttonVariants = cva(
    "group flex justify-center items-center py-1 px-2 rounded-full disabled:bg-slate-600/50 hover:brightness-95 active:brightness-105 duration-200 transition-all text-slate-50 shadow-sm disabled:brightness-90 select-none",
    {
      variants: {
        variant: {
          default:
            "bg-gradient-to-br from-main100 to-main200 hover:to-cyan-900",
          primary:
            "bg-gradient-to-br from-main200 via-main300 to-main400 hover:to-cyan-600 ",
          transparent: "border border-main200 hover:border-main200 hover:bg-main200  bg-transparent from-main200 to-main300",
          green: "bg-main200 hover:bg-main500",
        },
        size: {
          default: "",
          small: "text-sm",
          large: "text-lg",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );

  export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
        isLoading?: boolean;
    }

const Button = ({className ,children, variant , isLoading , size,...props }: ButtonProps) => {
  return (
  <button className={cn(buttonVariants({variant, size , className}))} disabled={isLoading} {...props} >
    {isLoading? <AiOutlineLoading className=" w-4 h-4 animate-spin " />:null}
  {children}
  </button>
  )
}

export default Button