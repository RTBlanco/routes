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
  
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.price}</p>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetail;
