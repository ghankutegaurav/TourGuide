import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Customers = () => {
  const [alldata, setAlldata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9192/customers").then((res) => {
      console.log(res.data);
      setAlldata(res.data);
    });
  }, []);

  const arr = alldata.map((data, index) => {
    return (
      <tr>
        <th scope="ror">{index+1}</th>
        <td >{data.firstName}</td>
        <td >{data.lastName}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="sigup ">
        <table className="table bg-light">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
            </tr>
          </thead>
          <tbody>{arr}</tbody>
        </table>
      </div>
    </>
  );
};
