import React, { useEffect, useState } from "react";
import data1 from "./data";
import "./ApiFetch.css";
import logo from "./loading.gif";

const Base_URL = "https://jsonplaceholder.typicode.com/posts";

export const ApiFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setIsLoading(true);
      const response = await fetch(`${Base_URL}`);
      const data = await response.json();
      setUsers(data.slice(0, 10));
      setIsLoading(false);
    };
    fetchApi();
  }, []);

  if (isLoading) {
    return <img src={logo} />;
  }

  return (
    <div>
      <h1>User List</h1>

      <ul>
        {users?.map((val, id) => {
          return (
            <>
              <div className="card">
                <img src={""} alt="Avatar" style={{ width: 100 }}></img>
                <div className="container">
                  <div className="id-card">{val.body}</div>
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
