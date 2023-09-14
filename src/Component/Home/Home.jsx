import React, { useEffect } from "react";

const Home = () => {
   
  useEffect(() => {
fetch('data.json')
.then(res => res.json())
.then(data => console.log(data))
  }, [])

  return (
    <div className="grid grid-cols-2 border w-11/12 mx-auto">
      <div className=" grid grid-cols-3 border w-9/12">cart</div>

      <div className="   border grid grid-cols-3">aside</div>
    </div>
  );
};

export default Home;
