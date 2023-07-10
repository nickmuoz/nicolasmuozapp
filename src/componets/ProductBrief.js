import React, { useState } from "react";
import "../styles/ProductBrief.css";

function ProductBrief({ product, handleClose }) {
  const [editMode, setEditMode] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const updateProductValue = async () => {
    try {
      const response = await fetch('https://hidden-hill-6661.fly.dev/products/edit-value', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: product._id,
          value: editedProduct.value
        })
      });

      if (response.ok) {
        const data = await response.json();
        // Handle the response or any additional logic
        console.log(data);
      } else {
        throw new Error('Failed to update product value');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveClick = () => {
    // Perform save operation with editedProduct
    updateProductValue();
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setEditedProduct({ ...product });
  };

  return (
    <div className="product-card">
      <h3>Product Brief</h3>
      <div>
        <label htmlFor="category">Category:</label>
        {editMode ? (
          <input
            type="text"
            id="category"
            name="category"
            value={editedProduct.category}
            onChange={handleInputChange}
          />
        ) : (
          <span>{product.category}</span>
        )}
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        {editMode ? (
          <input
            type="text"
            id="name"
            name="name"
            value={editedProduct.name}
            onChange={handleInputChange}
          />
        ) : (
          <span>{product.name}</span>
        )}
      </div>
      <div>
        <label htmlFor="brand">Brand:</label>
        {editMode ? (
          <input
            type="text"
            id="brand"
            name="brand"
            value={editedProduct.brand}
            onChange={handleInputChange}
          />
        ) : (
          <span>{product.brand}</span>
        )}
      </div>
      <div>
        <label htmlFor="reference">Reference:</label>
        {editMode ? (
          <input
            type="text"
            id="reference"
            name="reference"
            value={editedProduct.reference}
            onChange={handleInputChange}
          />
        ) : (
          <span>{product.reference}</span>
        )}
      </div>
      <div>
        <label htmlFor="value">Value:</label>
        {editMode ? (
          <input
            type="number"
            id="value"
            name="value"
            value={editedProduct.value}
            onChange={handleInputChange}
          />
        ) : (
          <span>{product.value}</span>
        )}
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        {editMode ? (
          <textarea
            id="description"
            name="description"
            value={editedProduct.description}
            onChange={handleInputChange}
          />
        ) : (
          <span>{product.description}</span>
        )}
      </div>
      <div>
        <label htmlFor="compost">Compost:</label>
        {editMode ? (
          <input
            type="checkbox"
            id="compost"
            name="compost"
            checked={editedProduct.compost}
            onChange={handleInputChange}
          />
        ) : (
          <span>{product.compost ? "Yes" : "No"}</span>
        )}
      </div>
      <div>
        <label htmlFor="serialNumber">Serial Number:</label>
        {editMode ? (
          <input
            type="text"
            id="serialNumber"
            name="serialNumber"
            value={editedProduct.serialNumber}
            onChange={handleInputChange}
          />
        ) : (
          <span>{product.serialNumber}</span>
        )}
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        {editMode ? (
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={editedProduct.quantity}
            onChange={handleInputChange}
          />
        ) : (
          <span>{product.quantity}</span>
        )}
      </div>
      <div>
        {editMode ? (
          <button className="btn-save" onClick={handleSaveClick}>Save</button>
        ) : (
          <button className="btn-edit" onClick={() => setEditMode(true)}>Edit</button>
        )}
        <button className="btn-cancel" onClick={handleCancelClick}>Cancel</button>
        <button className="btn-close" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}

export default ProductBrief;
