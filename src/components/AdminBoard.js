import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';

export const AdminBoard = () => {
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
          <td >{data.email}</td>
          <td >{data.phoneNo}</td>
          <td >{data.dateOfBirth}</td>
        </tr>
      );
    });
  
    return (
      <>
        <div className="sigup ">
        <Button></Button>
          <table className="table bg-light">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Phone No</th>
                <th scope="col">Date Of Birth</th>
              </tr>
            </thead>
            <tbody>{arr}</tbody>
          </table>
        </div>
      </>
    );
}
