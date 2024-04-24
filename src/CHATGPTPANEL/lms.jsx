import React, { useContext, useEffect } from 'react'
import { QuizContext } from '../AppContext/context/QuizContext';
import Categories from './Categories';


const Lms= () => {
   const { categories, loadAllCat } = useContext(QuizContext);

  useEffect(() => {
    loadAllCat();
  }, []);
  return (
    <div>
      {
        categories.length > 0 && (
            <Categories categories={categories} />
        )
      }
      
    </div>
  )
}

export default Lms