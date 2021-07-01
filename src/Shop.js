import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Shop({items}) {

  // useEffect(() => {
  //   fetchItems()
  // },[])

  // const [items, setItems] = useState([]);

  // const fetchItems = () => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(data => data.json())
  //     .then(resp => setItems(resp))
  // }

  return (
    <div>
      {items.map(item => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>
            {item.title}
          </Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
