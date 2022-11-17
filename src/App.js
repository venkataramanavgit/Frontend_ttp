import React, { useState,useEffect } from 'react';
import './App.css';
function App() {

 const [data, setData] = useState([]);
 const fetchData = () => {
 fetch('timetoprogress.herokuapp.com/api/cars')
 .then(response =>response.json())
 .then(data =>setData(data.items))
 
 .catch(err => console.error(err))
 }
 useEffect(() => {
  fetchData()
}, [])

 return (
  <div className="App">

  { <table>
  <tbody>
  {
  data.map((item,i)=>
  <tr key={i}>
  <td>{item.model}</td>
  <td>
  <a href={item.self.href}>
  {item.self.href}</a>
  </td>
  </tr>
  )
  }
  </tbody>
  </table> }
  </div>
  );
 }
 export default App;