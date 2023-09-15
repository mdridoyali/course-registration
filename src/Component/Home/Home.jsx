// import {BsBook} from "react"

import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
// import { BsFillBookmarkFill } from 'react-icons/fa';

const Home = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectCourses, setSelectCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  const handleClickBtn = (course) => {
    const isExit = selectCourses.find(
      (item) => item.course_name === course.course_name
    );
    if (isExit) {
      return alert("Already exit this item");
    }
    let credits = course.credit;
    credits = credits + totalCredit;

    let remain = 20 - credits;

    if (credits >= 20) {
      return alert("Not Enough Money ");
    }
    let price = course.price;
    price = price + totalPrice;
    setTotalPrice(price);
    setRemaining(remain);
    console.log(totalCredit, remaining);
    setTotalCredit(credits);
    setSelectCourses([...selectCourses, course]);
  };

  return (
    <div className="grid grid-cols-12 gap-5 justify-between w-11/12 mb-5 mx-auto">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 col-span-9">
        {allCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl p-4 space-y-3">
            <img src={course.image} />
            <h2 className="font-bold">{course.course_name}</h2>
            <p className="text-sm text-gray-500 lg:h-20">{course.course_desc}</p>
            <div className="flex justify-between">
              <p>$ Price: {course.price}</p>
              <p> Credit: {course.credit}hr</p>
            </div>

            <button
              onClick={() => handleClickBtn(course)}
              className="bg-blue-500 hover:bg-blue-700 py-1 text-white font-bold w-full rounded-lg"
            >
              Select
            </button>
          </div>
        ))}
      </div>

      <div className="col-span-3 ">
        <Card
          selectCourses={selectCourses}
          totalCredit={totalCredit}
          remaining={remaining}
          totalPrice={totalPrice}
        ></Card>
      </div>
    </div>
  );
};

export default Home;
