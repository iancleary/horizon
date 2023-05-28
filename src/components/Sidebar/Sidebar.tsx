'use client';

import React from 'react';
import styled from 'styled-components';

async function getData() {
  const res = await fetch('http://127.0.0.1:8000/lists/all');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Sidebar = ({ children, lists }) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    // data fetching here
    fetch(`http://127.0.0.1:8000/lists/all`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Wrapper>
      <div>
        <h1>Lists</h1>
        <ul>
          {lists.map((list: any) => (
            <li key={list.id}>{list.name}</li>
          ))}
        </ul>
        <ul>
          {data.map((list: any) => (
            <li key={list.id}>{list.name}</li>
          ))}
        </ul>
      </div>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 25%;
  height: 100vh;
  border: 1px solid red;

  li {
    list-style: none;
  }
  ul {
    margin: 0;
    padding: 0;
  }

  background: var(--supporting-400);
`;

export default Sidebar;
