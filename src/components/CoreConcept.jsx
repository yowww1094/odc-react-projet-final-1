import React from 'react'

function CoreConcept({image,title,description}) {
  return (
    <section>
       <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
     
  )
}

export default CoreConcept