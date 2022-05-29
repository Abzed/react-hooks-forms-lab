import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const [formData, setFormdata] = useState({
    id: uuid(),
    name: '',
    category: ''
  })

  function handleFormChange(event){
    const formName = event.target.name;
    let value = event.target.value;

    setFormdata({...formData,
      [formName]: value,
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    props.onItemFormSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} 
    className="NewItem">
      <label>
        Name:
        <input onChange={handleFormChange} value={formData.name} type="text" name="name" />
      </label>

      <label>
        Category:
        <select value={formData.category} onChange={handleFormChange} name="category">
          <option defaultValue value="Produce">Select Category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
