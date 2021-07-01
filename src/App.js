import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetail';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';


function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems()
  },[])

  const fetchItems = () => {
    fetch('https://fakestoreapi.com/products')
      .then(data => data.json())
      .then(resp => setItems(resp))
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/shop' component={() => <Shop items={items}/> } />
          <Route path='/shop/:id' component={match => <ItemDetail {...match} items={items} /> }/> 
          {/* if giveing the component some props this is how you will be able to use match */}
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default App;
