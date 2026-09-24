
function Card({ product }) {
  
  const buy = () => {
    
    alert( (product.name +' added to cart \n') + ('Price is '+ product.price) );

  };

  return ( 

    <div className="card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <h4>₹{product.price}</h4>

      <button className="buybtn" onClick={buy}>Add to cart</button>
    </div>
  );
}

export default Card;

