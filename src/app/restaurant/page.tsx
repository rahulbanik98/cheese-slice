"use client";
import React, { useState } from 'react'
import { Restaurantlogin, Restaurantsignup } from "../../components/index"

const Restaurant = () => {
    const [login, setLogin] = useState<boolean>(true)
    return (
        <>
            {
                login ? <Restaurantlogin /> : <Restaurantsignup />
            }
            <div>
                <button onClick={() => setLogin(!login)}>
                    {login ? "Do not have account? SingnUp...." : "Already have account? Login...."}
                </button>
            </div>
        </>
    )
}

export default Restaurant;