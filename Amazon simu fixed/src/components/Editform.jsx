import { useState } from "react";

function Editform({ product, onUpdate, onCancel }) {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
    setEditedProduct({
      ...editedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdate(editedProduct);
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <h3>Edit Product</h3>

      <input
        type="text"
        name="name"
        value={editedProduct.name}
        onChange={handleChange}
        placeholder="Product name"
      />

      <textarea
        name="description"
        value={editedProduct.description}
        onChange={handleChange}
        placeholder="Product description"
      />

      <input
        type="number"
        name="price"
        value={editedProduct.price}
        onChange={handleChange}
        placeholder="Price"
      />

      <input
        type="text"
        name="image"
        value={editedProduct.image}
        onChange={handleChange}
        placeholder="Image URL"
      />

      <div className="edit-buttons">
        <button type="submit">
          Update
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Editform;