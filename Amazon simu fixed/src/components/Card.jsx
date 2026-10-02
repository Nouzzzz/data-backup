import { useState } from "react";
import Editform from "./Editform";

function Card({ product, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updatedProduct) => {
    onUpdate(updatedProduct);
    setIsEditing(false);
  };

  return (
    <div className="product-card">
      {isEditing ? (
        <Editform
          product={product}
          onUpdate={handleUpdate}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <img src={product.image} alt={product.name} />

          <div className="card-content">
            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <h4>₹{product.price}</h4>

            <div className="card-buttons">
              <button onClick={() => setIsEditing(true)}>
                Edit
              </button>

              <button onClick={() => onDelete(product.id)}>
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;