import React from 'react'

const FilterButton = (props) => {
    

    console.log(props)
    return (
      <>
        <button className="rounded-lg border-2 m-1 bg-orange-100 border-orange-300 ">
          {props.language}
        </button>
      </>
    );
}

export default FilterButton