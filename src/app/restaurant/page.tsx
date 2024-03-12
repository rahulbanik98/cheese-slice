"use client";
import React, { useState } from "react";
import {
  Footer,
  Navbar,
  Restaurantlogin,
  Restaurantsignup,
} from "../../components/index";

const Restaurant = () => {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        {login ? <Restaurantlogin /> : <Restaurantsignup />}
        <div className="flex justify-center">
          <button
            onClick={() => setLogin(!login)}
            className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none 
            justify-self-center whitespace-nowrap bg-emerald-50 text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 
            disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none"
          >
            {login
              ? "Do not have account? SingnUp"
              : "Already have account? Login"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Restaurant;
