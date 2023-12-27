import React, { useEffect, useState } from "react";
import data1 from "./data";
import "./ApiFetch.css";

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
        console.log(data.slice(0, 10));
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
            <>
              <div className="card">
                <img
                  src={val.thumbnailUrl}
                  alt="Avatar"
                  style={{ width: 100 }}
                ></img>
                <div className="container">
                  <div className="id-card">{val.id}</div>
                  <div>{val.title}</div>
                </div>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
};
