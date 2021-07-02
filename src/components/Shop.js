import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import ItemDetail from './ItemDetail';


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
      {/* <Route path='/shop/:id' component={match => <ItemDetail {...match} items={items} /> }/>  */}
    </div>
  );
}

export default Shop;
