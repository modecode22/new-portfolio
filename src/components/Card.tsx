import React from 'react'

const Card = ({children}:{children:React.ReactNode}) => {
  return (
    <section className="card">
    <main className="card-content">
     {children}
    </main>
  </section>  )
}

export default Card