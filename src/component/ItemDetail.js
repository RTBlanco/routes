import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function ItemDetail({ match, items }) {

  // useEffect(() => {
  //   setItem(items.find(item => item.id === parseInt(match.params.id) ))
  //   // console.log(match.params.id)
  //   // console.log(items)
  //   // console.log(items.find(item => item.id === match.params.id ))
  // },[])


  // const fetchItems = () => {
  //   fetch(`https://fakestoreapi.com/products/${item.id}`)
  //     .then(data => data.json())
  //     .then(item => console.log(item))
  // }
  let item = items.find(item => item.id === parseInt(match.params.id))

  if (typeof item === 'undefined') {
    return (
      <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loader"></img>
    )
  }
  return (
    <div>
      <h1>{item.title}</h1>
      <p><strong>Price:</strong>{item.price}</p>
      <p><strong>Desciption:</strong>{item.description}</p>
      <p><strong>Category:</strong>{item.category}</p>
      <img src={item.image} alt={item.title} />
    </div>
  );
}

export default ItemDetail;
