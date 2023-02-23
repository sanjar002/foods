import { fetchMealsData } from "./index";

export const fetchMealsAction = () => {
    let url = "http://www.themealdb.com/api/json/v1/1/search.php?f=a";
    return async dispatch => {
        const res = await fetch(url);
        const { meals } = await res.json();
        console.log(meals); //[{}, {}, {}, {}] келди
        dispatch (fetchMealsData( meals ));
    };
};