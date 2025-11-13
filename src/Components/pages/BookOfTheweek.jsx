import React from "react";

const BookOfTheweek = () => {
  return (
    <div className="mb-25">
      <h1 className="text-center text-4xl">Book of the Week_</h1>
      <div className="hero  w-[80%]  mx-auto mt-20">
        <div className="hero-content flex-col  items-start  lg:flex-row-reverse w-[100%]">
          <div>
            <img
            src="https://i.ibb.co.com/kV18hpSp/75675524.jpg"
            className=" rounded-lg shadow-2xl shadow-indigo-500 hover:scale-105 transition delay-150 duration-700 ease-in-out w-90"
          />
          </div>
          <div className="w-[50%] ">
            <h1 className="text-2xl  font-semibold">Summary_</h1>
            <p className="py-6 text-xl text-gray-600">
              “The Seerah of Prophet Muhammad (SWA)” is a detailed and inspiring biography of the final Prophet of Islam, Muhammad (peace be upon him). The book traces his entire life — from his noble birth in Makkah, through his youth known for honesty and truthfulness, to his divine mission as the Messenger of Allah. It explores the major events that shaped Islamic history, such as the first revelation in the Cave of Hira, the early struggles of the small Muslim community under persecution, and the Prophet’s migration (Hijrah) to Madinah which marked a turning point for Islam."
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOfTheweek;
