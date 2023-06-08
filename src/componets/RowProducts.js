import React from "react";

function RowProduct({ product, deleteProduct, editMode, showProductDetails }) {
  const handleDeleteClick = () => {
    deleteProduct(product._id);
  };

  const handleShowClick = () => {
    showProductDetails(product._id);
  };


  const formatCurrency = (value) => {
    if (typeof value === "number") {
      return value.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
      });
    }
    return "";
  };

  return (
    <tr>
      <td>{product._id}</td>
      <td>{product.image}</td>
      <td>{product.name}</td>
      <td>{formatCurrency(product.value)}</td>
      <td>{product.description}</td>
      <td>{product.availability}</td>
      <td>{product.serialNumber}</td>
      <td>
        {editMode ? (
          <button onClick={handleDeleteClick}>Delete</button>
        ) : (
          <button onClick={()=>{ handleShowClick()}}>Show</button>
        )}
      </td>
    </tr>
  );
}

export default RowProduct;
