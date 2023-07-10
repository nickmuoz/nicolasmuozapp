import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import GetProducts from "../services/product.services";
import RowProduct from "./RowProducts";
import ProductBrief from "./ProductBrief";
import "../styles/listproducts.css";

function ListProducts({ handleOptionChange }) {
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${GetProducts.RUTA_API}`);
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const deleteProduct = (productId) => {
    // Perform delete operation
    // ...
  };

  const showProductDetails = (productId) => {
    setSelectedProductId(productId);
  };

  const handleProductClose = () => {
    setSelectedProductId(null);
  };

  return (
    <Container fluid className="product-list">
      <h2>Lista de Productos</h2>
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? "Save" : "Edit"} Mode
      </button>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search products..."
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Valor</th>
            <th>Descripcion</th>
            <th>Disponibilidad</th>
            <th>Serial</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <RowProduct
              key={product._id}
              product={product}
              deleteProduct={deleteProduct}
              editMode={editMode}
              showProductDetails={showProductDetails}
              isSelected={selectedProductId === product._id}
              handleOptionChange={handleOptionChange}
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
