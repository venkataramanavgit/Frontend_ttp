import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import './App.css';
function App() {
//  const [keyword, setKeyword] = useState('');
 const [data, setData] = useState([]);
 const [isLoading, setLoading] = useState(true);
 const baseurl = "http://timetoprogress.herokuapp.com/api/car/";


 useEffect(() => {
   axios.get(baseurl, {  
    mode: 'no-cors',     
  }
  ).then((response) => {
      setData(response.data);
      setLoading(false);
    })
}
, []);

if (isLoading) {
  return (
      <div
          style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              backgroundColor: "grey",
          }}
      >
          Loading...
      </div>
  );
}

return (
  <div className="App">
    <table>
    <tr>
          <th>brand</th>
          <th>model</th>
          <th>color</th>
          <th>register number</th>
          <th>year</th>
         
  </tr>
 <tbody>
 {
 data.map(item=> 
 <tr key={item.id}>
 <td>{item.brand}</td>
 <td>
{item.model}
 </td>
 <td>{item.color}</td>
 <td>{item.registerNumber}</td>
 <td>{item.year}</td>
 <td>{item.price}</td>
 </tr> 
 )
 }
 </tbody>
 </table>
    
     </div>
  );
 }
 export default App;