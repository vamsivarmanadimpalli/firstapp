import axios from "axios";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let response = await
      axios.get("https://jsonplaceholder.typicode.com/users");
    setData(response.data);
  };
  useEffect(() => {
    console.log("data",data);
    getData();
  }, [data]);

  return (
    <>
      {data && data.length > 0 && data.map((item) => {
        return (<div>
          {item.id}
          {item.name}
         {item.username}
          {item.email}
          {/* {item.address} */}
         {item.street}
          {item.suite}
          {item.city}
          {item.zipcode}
          {item.geo}
          {item.lat}
          {item.lng}
          {item.phone}
          {item.website}
        </div>)
      }
      )}
    </>
  );
}
export default HomePage;