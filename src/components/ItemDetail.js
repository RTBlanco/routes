import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function ItemDetail({ match, items }) {

  let item = items.find(item => item.id === parseInt(match.params.id))

  // This will show a loading screen if the item does not yet load in 
  // this is most likely not the correct way to handle this issue but it will 
  // sufice until i have learn a better solution
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
