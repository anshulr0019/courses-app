import React from "react";
import { apiUrl, filterData } from "../data";

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 
    mx-auto py-4 justify-center">
      {
        filterData.map( (data) => (
        (<button 
          onClick={() => filterHandler(data.title)}
          className={`text-lg px-2 py-1 rounded-md font-medium text-white 
        bg-black border-2 hover:bg-opacity-50 transition-all duration-200
        ${category === data.title ? 
        "bg-opacity-60 border-white" 
        :
        "bg-opacity-40 border-transparent"}
        `} key = {data.id}>
          {data.title}
        </button> )
      ))}
    </div>
  )
};

export default Filter;
