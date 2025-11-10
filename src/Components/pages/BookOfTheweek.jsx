import React from "react";

const BookOfTheweek = () => {
  return (
    <div className="mb-25">
      <h1 className="text-center text-3xl">Book of the Week_</h1>
      <div className="hero  w-[80%]  mx-auto mt-13">
        <div className="hero-content flex-col  lg:flex-row-reverse w-[100%]">
          <div>
            <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className=" rounded-lg shadow-2xl"
          />
          </div>
          <div className="w-[50%]">
            <h1 className="text-2xl font-semibold">Summary_</h1>
            <p className="py-6 ">
              "Dr. Emily Carter, a brilliant psychiatrist, begins to suspect that one of her patients is hiding a dark secret. As she delves deeper into his mind, she uncovers chilling connections between his past crimes and her own life. What starts as a professional case soon turns into a psychological battle where every move could be her last. Mind Games is a gripping thriller about trust, manipulation, and the thin line between sanity and madness."
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOfTheweek;
