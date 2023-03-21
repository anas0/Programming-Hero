import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name: 'Laptop', price: 47000},
    {name: 'Mobile', price: 85000},
    {name: 'Watch', price: 3500},
    {name: 'Tablet', price: 33000}
  ];
  
  return (
    <div className="App">
      <Counter></Counter>

      <ExternalUsers></ExternalUsers>

      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      
      {/* <Product name="Laptop" price="47000"></Product>
      <Product name="Mobile" price="85000"></Product>
      <Product name="Watch" price="3500"></Product> */}
    </div>
  );
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);
  
  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}

function User(props){
  return(
    <div style={{border: '2px solid red', margin: '20px'}}>
      <h3>User: {props.name}</h3>
      <h5>Email: {props.email}</h5>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0); 

  const increaseCount = () => setCount(count + 1);

  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

function Product(props){
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  );
}

export default App;
