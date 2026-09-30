function ProductCard({ name, price, description, onAdd }) {
  return (
    <div className="card">
      <div className="product-image">
        🛍️
      </div>

      <h2>{name}</h2>

      <p>{description}</p>

      <h3>₹{price}</h3>

      <button onClick={onAdd}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;