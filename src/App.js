import { ProductCard } from "./components/ProductCard";
import { ProductList } from "./components/ProductList";
import "./App.css";

function App() {
  const product = {
    imageSrc: "images/iphone.png",
    title: "iPhone 15 Pro",
    altText: "iPhone 15 Pro",
    specifications: [
      "A17 Pro chip with 6-core GPU",
      "3x or 5x Telephoto camera",
      "Up to 29 hours video playback",
    ],
    price: 999,
  };

  return (
    <div className="App">
      <ProductList>
        <ProductCard
          widht="96px"
          height="96px"
          background="darkolivegreen"
          product={product}
        />
        <ProductCard widht="64px" height="64px" product={product} />
        <ProductCard
          widht="128px"
          height="128px"
          background="peru"
          product={product}
        />
      </ProductList>
    </div>
  );
}

export default App;
