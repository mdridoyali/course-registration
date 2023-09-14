import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";


const Home = () => {

  const [allCourses, setAllCourses] = useState([]);

console.log(allCourses)
   
  useEffect(() => {
fetch('data.json')
.then(res => res.json())
.then(data => setAllCourses(data))
  }, [])


  return (
    <div className="grid grid-cols-12 gap-5 justify-between w-11/12 mb-5 mx-auto">
      <div className=" grid grid-cols-3 gap-5 col-span-9">
        {
         allCourses.map((course) => 
         <div key={course.id} className="bg-white rounded-xl p-4 space-y-3">
              <img src={course.image}/>
              <h2 className="font-bold">{course.course_name}</h2>
              <p className="text-sm text-gray-500">{course.course_desc}</p>
              <div className="flex justify-between">
                <p>$ Price: {course.price}</p>
                <p> Credit: {course.credit}hr</p>
              </div>

              <button className="bg-blue-500 hover:bg-blue-700 py-1 text-white font-bold w-full rounded-lg">Select</button>

            </div>
         )
        }
      </div>

      <div className="col-span-3 ">
      <Card></Card>
      </div>

    </div>
  );
};

export default Home;
