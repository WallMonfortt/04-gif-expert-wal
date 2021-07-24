import React from 'react'
import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid'



const GifExpertApp = () => {
  const [category, setCategory] = useState(['One punch'])
  
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategory = { setCategory } />
      <hr />

      <ol>
        {
          category.map( category  => 
            <GifGrid
              key={category}
              category={category}
            /> 
          )
        }
      </ol>
    </div>
  )
}

export default GifExpertApp
