import React, { useState } from 'react'

const Item = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
    </div>
  )
}

export default function TestMocking() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const url = "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json";
  const urlError = "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?error=true";

  const handleErrorClick = async () => {
    fetch(urlError).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    }).then(json => {
      setData(json.data);
    }).catch(error => {
      setError(error.message);
    });
  }

  const handleClick = async () => {


    fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong ...');
      }
    }).then(json => {
      setData(json.data);
    }).catch(error => {
      setError(error.message);
    });
  }


  if (error) return <div>{error}</div>

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
      <button onClick={handleErrorClick}>Fetch Error Data</button>
      {data && (
        data.people.map((item) => {
          return <Item key={`${item.name}-${item.age}`} name={item.name} age={item.age} />
        })
      )}
    </div>
  )
}
