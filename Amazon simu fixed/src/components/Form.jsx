import { useState } from "react";

function Form({ onAddProduct }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.name || !product.description || !product.price ) {
      alert("Please fill all fields");
      return;
    }

    onAddProduct({
      ...product,
      id: Date.now(),
    });

    setProduct({
      name: "",
      description: "",
      price: "",
      image: "",
    });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Add Product</h2>

      <input
        type="text"
        name="name"
        placeholder="Product name"
        value={product.name}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Product description"
        value={product.description}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={product.image}
        onChange={handleChange}
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default Form;