import Card from "../components/Card";

function Home() {
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      description: "A simple wireless mouse.",
      price: 799,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Keyboard",
      description: "Comfortable mechanical keyboard.",
      price: 1499,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Headphones",
      description: "Wireless headphones with good sound.",
      price: 1999,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      name: "USB Cable",
      description: "USB-C charging and data cable.",
      price: 399,
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div>
      <h1>Products</h1>

      <div className="products">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;    