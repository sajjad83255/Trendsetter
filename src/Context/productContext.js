// Context API

import { createContext, useContext, useEffect, useReducer} from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";
// we can import reducer using axios name

// create context
const AppContext = createContext();

const API = "https://trendsetter-api-g5v4.onrender.com/api/products";

const initialState = {
    isLoading : false,
    isError: false,
    products : [],
    featureProducts: [],
    // for feature section those value is true in api
}

// create a provider
// main function
const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    // [state, dispatch]: useReducer hooks returns two element of array
    // (reducer,initialState): function

    // define getproduct function
    const getProducts = async (url) => {
        dispatch({type: "SET_LOADING"});
        // api response while calling it
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch ({type: "SET_API_DATA", payload: products});
            // now dipatch will call acton method of reducer-function to complete the work
            // type:property, payload:requirment
            // console.log('Products:',products);
            // to check data in console
            // console.log('API response:', res.data);
            // console.log('Sucess');

            // we know that we have our api data in our product variable, now we have to store our products with the help of useReducer hooks, so that we can use this data globally in our project.

            // now whole data is inside products variable, now we have to store it globally:
            // 1) useState hooks, 2) useReader Hooks
        } catch (error) {
            dispatch({type:"API_ERROR"});
        }
    }

    useEffect(() =>{
        getProducts(API);
    },[])

    return <AppContext.Provider value={{...state}}>
        {children}
        </AppContext.Provider>
};

const useProductContext = () =>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useProductContext};

// 3 initial state to get data from useRender Hook
// a. loading
// b. error
// c. data

// state: React components has a built in state object, the state object is where you store property values that belongs to the components when the state object changes, the components re-renders

// dispatch: It is a function accepts an object that represents the type of action we want to executes when it is called, basically it sends the type of action to the reducer function to preform its job, which of course is upadting the state.
