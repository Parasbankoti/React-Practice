import React, { useEffect, useState } from "react";
import data1 from "./data";

export const ApiFetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();

        setUsers(data.slice(0, 10));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users?.map((val, id) => {
          return (
            <div style={val.id === 4 ? { color: "red" } : null}>
              <h1>{val?.id}</h1>
              <h1>{val?.title}</h1>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
