import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import GetProducts from "../services/product.services";
import RowProduct from "./RowProducts";
import ProductBrief from "./ProductBrief";
import '../styles/listproducts.css'

function ListProducts(handleOptionChange) {
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const deleteProduct = async (productId) => {
    try {
      await fetch(`https://hidden-hill-6661.fly.dev/products/${productId}`, {
        method: "DELETE"
      });
      fetchProducts(); // Fetch products again to update the list
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const showProductDetails = (productId) => {
    setSelectedProductId(productId);
  };

  const handleProductClose = () => {
    setSelectedProductId(null);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${GetProducts.RUTA_API}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  return (
    <Container fluid className="product-list">
      <h2>Lista de Productos</h2>
      <button onClick={handleEditClick}>{editMode ? "Save" : "Edit"} Mode</button>
      <Table striped bordered hover>
        <colgroup>
          <col span="1" style={{ width: "10%" }} />
          <col span="1" style={{ width: "15%" }} />
          <col span="1" style={{ width: "15%" }} />
          <col span="1" style={{ width: "25%" }} />
          <col span="1" style={{ width: "15%" }} />
          <col span="1" style={{ width: "10%" }} />
          <col span="1" style={{ width: "10%" }} />
        </colgroup>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Nombre</th>
            <th>Valor</th>
            <th>Descripcion</th>
            <th>Disponibilidad</th>
            <th>Serial</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <RowProduct
              key={product._id}
              product={product}
              deleteProduct={deleteProduct}
              editMode={editMode}
              showProductDetails={showProductDetails}
              isSelected={selectedProductId === product._id}
            />
          ))}
        </tbody>
      </Table>
      {selectedProductId && (
        <ProductBrief
          product={products.find((product) => product._id === selectedProductId)}
          handleClose={handleProductClose}
        />
      )}
    </Container>
  );
}

export default ListProducts;
