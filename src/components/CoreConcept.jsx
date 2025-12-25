import React from 'react'

function CoreConcept({Image,Titre,Description}) {
  return (
    <section>
       <img src={Image} alt="" />
      <h1>{Titre}</h1>
      <p>{Description}</p>
    </section>
     
  )
}

export default CoreConcept