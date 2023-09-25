import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div>
      
      {
        Array(6).map(()=> <Card />)
      }
    </div>
  )
}

export default Cards