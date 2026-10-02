import { useEffect, useState } from "react";
import Card from "../components/Card";
import Form from "../components/Form";

function Home() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");

    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      product,
    ]);
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );
  };

  return (
    <div className="home">
      <header>
        <h1>amazon</h1>
      </header>

      <Form onAddProduct={addProduct} />

      <section className="products">
        {products.length === 0 ? (
          <p className="empty-message">
            No products added yet.
          </p>
        ) : (
          products.map((product) => (
            <Card
              key={product.id}
              product={product}
              onUpdate={updateProduct}
              onDelete={deleteProduct}
            />
          ))
        )}
      </section>
    </div>
  );
}

export default Home;