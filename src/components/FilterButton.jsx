import React from 'react'

const FilterButton = (props) => {
    
    return (
      <>
        <button
          className="rounded-lg border-2 m-1 bg-orange-100 border-orange-300 "
          onClick={props.handleFilterBtn}>
          {props.language}
        </button>
      </>
    );
}

export default FilterButton