import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ApiCalling = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') 
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-5">
      <table className="table ">
        <thead>
          <tr className='table-primary'>
            <th >UserID</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody  className='table-secondary'>
          {data.map(item => (
            <tr key={item.id}>
              <td >{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApiCalling;
