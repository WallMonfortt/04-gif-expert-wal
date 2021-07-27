import React from 'react'
import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid'
import MainHeader from './components/MainHeader';



const GifExpertApp = () => {
  const [category, setCategory] = useState(['One punch'])
  
  return (
    <div>
      <MainHeader />
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
