function Card({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <h4>₹{product.price}</h4>

      <button>Buy</button>
    </div>
  );
}

export default Card;