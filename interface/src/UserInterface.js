import React, { useState, useEffect } from 'react';

function UserInterface() {

    const baseLink = 'http://localhost:5000'

  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
    fetchServices();
  }, []);

  const fetchProducts = () => {
    fetch(`${baseLink}/products`)
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  const fetchServices = () => {
    fetch(`${baseLink}/services`)
      .then(res => res.json())
      .then(data => setServices(data));
  };

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredServices = services.filter(service => 
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text"
        placeholder="Search"
        onChange={handleSearch} 
      />

    <div>
      {/* <img src="interface\src\spinning_wheel.png" alt="" /> */}
      <h2>Products</h2>
    </div>
      {filteredProducts.map(product => (
        <ul key={product.id}>
          <li>{product.name}</li>
          <li>{product.description}</li>
          <li>{product.price} €</li>
          <li>{product.imageUrl}</li>
          <li>{product.link}</li>
          <li>{product.availability}</li>
          <li>{product.category}</li>
          <li><img src="https://media.carrefour.fr/medias/bbde4e45549630798f43c77bbed777f1/p_540x540/06934177717697-a1n1-s01.jpg" alt="" /></li>
        </ul>
      ))}

      <h2>Services</h2>
      {filteredServices.map(service => (
        <ul key={service.id}>
          <li>{service.name}</li>
          <li>{service.description}</li>
          <li>{service.price}</li>
        </ul>
      ))}
    </div>
  );
}

export default UserInterface;