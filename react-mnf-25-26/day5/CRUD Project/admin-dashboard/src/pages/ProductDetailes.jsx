import React from 'react'

export default function ProductDetailes() {
  // Example static product data
  const product = {
    name: 'Sample Product',
    price: 99.99,
    quantity: 10,
    description: 'This is a sample product description.',
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Product Details</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
}
