import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMealsAction } from './store/asyncAction';

const App = () => {
  const mealsData = useSelector( store => store.mealsData)
  console.log("mealsData: ", mealsData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMealsAction());
  }, []);

  if (!mealsData) {
    return <h2>Loading....</h2>;
  };

  return (
    <div className='d-flex'>
      {mealsData.map ( el => (
       <div class="card" style={{ width: "180px"}}> 
         <img src={el.strMealThumb} class="card-img-top" alt="..."/>
           <div class="card-body">
            <h5 class="card-title">{el.strMeal}</h5>
              <a href="#" class="btn btn-primary">Go Info</a>
        </div>
      </div>
      ))};
    </div>
  )
};

export default App;