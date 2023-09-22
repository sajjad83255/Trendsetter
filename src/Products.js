import React from "react";
import styled from "styled-components";
import ProductList from "./Components/ProductList";
import Sort from "./Components/Sort";
import FilterSection from "./Components/FilterSection";
// import Demo from "./Components/Demo";


const Products = () => {
  
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        {/* 1st column */}
        <div>
          <FilterSection />
        </div>

        {/* 2nd column */}
        <section className="product-view-sort">
          {/* 1st row */}
          <div className="sort-filter">
            <Sort />
          </div>

          {/* 2nd row */}
          <div className="main-product">
            <ProductList />
          </div>

        </section>
      </div>
    </Wrapper>
  
  )
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
