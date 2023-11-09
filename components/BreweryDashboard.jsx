"use client";

import { useState, useEffect } from "react";

// async function getData() {
//   const res = await fetch(
//     "https://api.openbrewerydb.org/v1/breweries?per_page=3"
//   );
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default function BreweryDashboard() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.openbrewerydb.org/v1/breweries?per_page=10")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  console.log(data);

  return (
    <div>
      {data?.map((brew) => {
        return (
          <div>
            <h2>Name: {brew.name}</h2>
            <h2>Address: {brew.address_1}</h2>
            <h2>Phone: {brew.phone}</h2>
            <h2>Website: {brew.website_url}</h2>
            <h2>State: {brew.state}</h2>
            <h2>City: {brew.city}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
