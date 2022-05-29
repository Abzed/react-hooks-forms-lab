import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchr] = useState("")
  // const [array, setArray] =  useState(items)

  // function handleSubmit(event, element) {
  //   event.preventDefault();
  //   setArray([...array, element]);
  //   console.log(array);
  // }

  function handleSearchChange(event){
    setSearchr(search => event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
  .filter(item => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory
  })
  // .filter(item => {
  //   if (search === item.name) return item.name === search
  //   return true
  // })

  .filter(item => {
    if (search) return item.name.includes(search)
    return true
  })


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit} />
      <Filter search={search} onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
