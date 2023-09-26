import React from 'react';

const productReducer = (state, action) => {
    // if(action.type === "SET_LOADING"){
    //     return {
    //         ...state,
    //         isLoading: true,
    //     };
    // };
    // if(action.type === "API_ERROR"){
    //     return {
    //         ...state,
    //         isLoading: false,
    //         isError: true,
    //     };
    // };
    switch(action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "SET_API_DATA":
            // add .myData is next line after payload
            const featureData = action.payload.filter((curElem) =>{
                return curElem.featured === true;
            });
            //console.log('FeaturedData:', featureData);
            return {
                ...state,
                isLoading:false,
                products: action.payload,
                featureProducts: featureData,
            };
        case "API_ERROR":
            return {
                ...state,
                isLoading:false,
                isError:true,
            };
        case "SET_SINGLE_LOADING":
            return{
                ...state,
                isSingleLoading: true,
            };
        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading:false,
                singleProduct: action.payload,
            };
        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true,
            };
        default:
            return state;
    };
};

export default productReducer;
