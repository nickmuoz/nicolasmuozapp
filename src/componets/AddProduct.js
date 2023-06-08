import React, { useState } from "react";
import "../styles/Addproduct.css";
const ProductForm = ({ fetchProducts }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    brand: "",
    reference: "",
    habialability: "",
    compost: false
  });

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: newValue
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://hidden-hill-6661.fly.dev/products/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newProduct)
        }
      );
      if (response.ok) {
        setNewProduct({
          name: "",
          category: "",
          brand: "",
          reference: "",
          habialability: "",
          compost: false
        });
        fetchProducts(); // Fetch products again to update the list
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={newProduct.brand}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="reference">Reference:</label>
          <input
            type="text"
            id="reference"
            name="reference"
            value={newProduct.reference}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="habialability">Habialability:</label>
          <input
            type="text"
            id="habialability"
            name="habialability"
            value={newProduct.habialability}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="compost">Compost:</label>
          <input
            type="checkbox"
            id="compost"
            name="compost"
            checked={newProduct.compost}
            onChange={handleInputChange}
          />
        </div>
        <div>
        <label>Image:</label>
        <input type="upload" name="image" onChange={handleInputChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProductForm;
