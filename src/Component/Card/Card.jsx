
const Card = ({ selectCourses, totalCredit, remainingCredit, totalPrice }) => {
  // console.log(selectCourses);
  return (
    <div className="space-y-5 bg-white rounded-xl p-4">
      <h2 className="text-blue-500 font-bold ">Credit Hour Remaining {remainingCredit} hr</h2>
      <hr></hr>
      <h2 className="font-bold">Course Name</h2>

      {selectCourses.map((name, index) => (
        <ol key={index}>
        <li>{index + 1} {name.course_name}</li>
        </ol>
      ))}

      <hr></hr>
      <p className="font-bold text-sm"> Total Credit Hour : {totalCredit} hr</p>
      <hr></hr>
      <p className="font-bold text-sm">Total Price : {totalPrice} USD</p>
    </div>
  );
};

export default Card;
