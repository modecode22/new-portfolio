import React from 'react'

const Card = ({children}:{children:React.ReactNode}) => {
  return (
    <section className="card">
    <main className="card-content border border-main200/50 hover:border-main200 duration-100 transition-all">
     {children}
    </main>
  </section>  )
}

export default Card