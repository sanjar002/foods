import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initState = {
    mealsData: [],};

// const composedEnhancers = compose(applyMiddlewary(thunk));
    
const composeFunc = 
process.env.NODE_ENV === "development" ? composeWithDevTools : compose;

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_FOOD":
            return {
                mealsData: action.paylood.foods,  // [{}, {}, {}, {}] 
            };
        default:
            return state;
    };
};



const rootStore = createStore(rootReducer, composeFunc(applyMiddleware(thunk)));

export default rootStore;

//actions

export const  fetchMealsData = foods => {
    //foods [{}, {}, {}, {}] келди
    // return {type: "FETCH_FOOD", paylood: foods  }; 1 вариант
    return {type: "FETCH_FOOD", paylood: { foods } };
};