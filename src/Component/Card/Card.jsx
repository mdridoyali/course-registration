

const Card = () => {
  return (
    <div className="space-y-5 bg-white rounded-xl p-4">
      <h2 className="text-blue-500 font-bold ">Credit Hour Remaining 7 hr</h2>
      <hr></hr>
      <h2 className="font-bold">Course Name</h2>
      <ol>
        <li> Introduction to c programming</li>
      </ol>
      <hr></hr>
      <p className="font-bold text-sm"> Total Credit Hour : 13</p>
      <hr></hr>
      <p className="font-bold text-sm" >Total Price : 48000 USD</p>
    </div>
  );
};

export default Card;
