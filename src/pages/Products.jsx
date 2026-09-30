import ProductCard from "../components/ProductCard";

function Products({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "Mobile",
      price: "20,000",
      description: "Samsung Smartphone"
    },
    {
      id: 2,
      name: "Laptop",
      price: "50,000",
      description: "HP Laptop"
    },
    {
      id: 3,
      name: "Shoes",
      price: "2,000",
      description: "Sports Shoes"
    }
  ];

  return (
    <div>
      <h1 className="title">Our Products</h1>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            onAdd={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;