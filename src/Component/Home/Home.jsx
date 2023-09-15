// import { BsBook } from "@react-icons/all-files/fa/FaBeer";
import { FaBookOpen } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      return toast("Already added this item", {
        position: "top-center",
        autoClose: 3000,
      });
    }
    let credits = course.credit;
    credits = credits + totalCredit;

    let remain = 20 - credits;

    if (credits >= 20) {
      return toast("Not Enough Money ", {
         position: "top-center",
        autoClose: 3000,
      });
    }
    let price = course.price;
    price = price + totalPrice;
    setTotalPrice(price);
    setRemaining(remain);
    setTotalCredit(credits);
    setSelectCourses([...selectCourses, course]);
  };

  return (
    <div className="grid grid-cols-12 gap-5 justify-between w-11/12 mb-5 mx-auto">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 col-span-9">
        {allCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl px-3 pt-3 pb-1 space-y-2">
            <img src={course.image} />
            <h2 className="font-bold">{course.course_name}</h2>
            <p className="text-sm text-gray-500 lg:h-20">
              {course.course_desc}
            </p>
            <div className="flex justify-between">
              <p>$ Price: {course.price}</p>
              <div className="flex justify-center items-center gap-3">
                <FaBookOpen></FaBookOpen>
                <p> Credit: {course.credit}hr</p>
              </div>
            </div>

            <button
              onClick={() => handleClickBtn(course)}
              className="bg-blue-500 hover:bg-blue-700 py-1 text-white font-bold w-full mb-0 rounded-lg"
            >
              Select
            </button>
            <ToastContainer />
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
