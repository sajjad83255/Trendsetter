import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/FilterReducer";
// create context
const FilterContext = createContext();

const initialState = {
    filter_products : [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters : {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
};

//create provider
export const FilterContextProvider = ({children}) => {
    const {products} = useProductContext();

    // useReducer hook
    const [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () =>{
        return dispatch ({type: "SET_GRID_VIEW"});
    };

    const setListView = () =>{
        return dispatch ({type: "SET_LIST_VIEW"});
    };

    // sorting
    const sorting = () =>{
        dispatch({type: "GET_SORT_VALUE"})
    };

    useEffect( () => {
        dispatch({type: "SORTING_PRODUCTS", payload: products})
    }, [state.sorting_value]);

    // update filter values
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type: "UPADTE_FILTER_VALUE", payload: {name, value} })
    };

    const clearFilters = () => {
        dispatch ({type: "CLEAR_FILTERS"});
    };

    useEffect(() => {
        dispatch({type: "SORTING_PRODUCTS", payload: products})
    }, [state.sorting_value]);

    useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS"});
    }, [state.filters]);

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})
    }, [products])

    return <FilterContext.Provider value ={{...state, setGridView, setListView, sorting, updateFilterValue, clearFilters}}>
        {children}
    </FilterContext.Provider>
};

// Consumer- custom hook
export const useFilterContext = () => {
    return useContext(FilterContext);
};