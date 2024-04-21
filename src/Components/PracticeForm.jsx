import React, { useState } from "react";
import List from "./list.json";
import { Link } from "react-router-dom";
import ProductPage from "./ProductPage";

const PracticeForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState(List);
  const apiUrl = "https://fakestoreapi.com/products";

  const [data, getData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const responseData = await response.json();
      getData(responseData);
    } catch (error) {
      console.log("error not found");
    }
  };

  fetchData();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setListItems(
      List.filter((data) =>
        data.name.toLocaleLowerCase().includes(e.target.value)
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="the default value"
        value={inputValue}
        onChange={handleInputChange}
      />
      {inputValue && listItems.length > 0 && (
        <>
          {listItems?.map((listData) => {
            return <p>{`${listData.name} | ${listData.id}`}</p>;
          })}
        </>
      )}

      {data.map((data) => {
        return (
          <>
            <Link to={`/product/${data.id}`}>
              <p>{data.title}</p>
              <img src={data.image} alt="" />
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default PracticeForm;
