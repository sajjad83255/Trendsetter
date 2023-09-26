
const FilterReducer = (state, action) => {
    switch(action.type){
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem) => curElem.price);
            // 1st way
            // console.log(Math.max.apply(null, priceArr));

            // 2nd way
            // let maxPrice = priceArr.reduce((initialVal, curVal) => Math.max(initialVal,curVal),0)

            // 3rd way
            let maxPrice = Math.max(...priceArr);
            return {
                ...state,
                filter_products: action.payload,
                all_products: action.payload,
                filters :{
                    ...state.filters,
                    maxPrice,
                    price : maxPrice,
                },
            };

        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            };

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            };
        

        case "GET_SORT_VALUE":
            let userSortValue = document.getElementById("sort");
            let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

            return{
                ...state,
                sorting_value: sort_value,
            };

        case "SORTING_PRODUCTS":
            let newSortData;
            let tempSortProducts = action.payload;

            if(state.sorting_value==="lowest"){
                const sortingProducts = (a,b) => {
                    return a.price - b.price;
                };
                newSortData = tempSortProducts.sort(sortingProducts);
            };

            if(state.sorting_value==="highest"){
                const sortingProducts = (a,b) => {
                    return b.price - a.price;
                };
                newSortData = tempSortProducts.sort(sortingProducts);
            };

            if(state.sorting_value==="a-z"){
                newSortData = tempSortProducts.sort((a,b) => a.name.localeCompare(b.name)
                );
            };

            if(state.sorting_value==="z-a"){
                newSortData = tempSortProducts.sort((a,b) => b.name.localeCompare(a.name)
                );
            };

            return{
                ...state,
                filter_products: newSortData,
            };
        
        case "UPADTE_FILTER_VALUE":
            const {name,value} = action.payload;

            return{
                ...state,
                filters :{
                    ...state.filters,
                    [name]:value,
                },
            };
        
        case "FILTER_PRODUCTS":
            let {all_products} = state;
            let tempFilterProduct = [...all_products];

            const {text, category, company, color, price} = state.filters;

            if(text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                })
            }

            if(category !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.category === category;
                })
            }

            if(company !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.company === company;
                })
            }

            // colour
            if(color !== "all") {
                tempFilterProduct = tempFilterProduct.filter((curElem) => 
                    curElem.colors.includes(color)
                )
            }

            if(price){
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.price<= price;
                })
            }

            return{
                ...state,
                filter_products : tempFilterProduct,
            }
        
        case "CLEAR_FILTERS":
            return{
                ...state,
                filters : {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    maxPrice: 0,
                    price: 0,
                    minPrice: 0,
                },
            }

        default :
            return state;
    }
};

export default FilterReducer;
