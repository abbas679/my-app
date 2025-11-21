export function ProductCard() {
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

  function getProductTitle(title) {
    return title;
  }
  return (
    <article>
      <h2>{getProductTitle(product.title)}</h2>
      <img
        src={product.imageSrc}
        alt={product.altText}
        width="128px"
        height="128px"
      />
      <p>Specification:</p>
      <ul>
        <li>{product.specifications[0]}</li>
        <li>{product.specifications[1]}</li>
        <li>{product.specifications[2]}</li>
      </ul>
      <button>Buy (From{product.price})</button>
    </article>
  );
}
