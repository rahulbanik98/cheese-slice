"use client";
import React, { useState } from 'react'
import { Restaurantlogin, Restaurantsignup } from "../../components/index"

const Restaurant = () => {
    const [login, setLogin] = useState<boolean>(true)
    return (
        <>
            <h1>8:30</h1>
            <Restaurantlogin />
            <Restaurantsignup />
            <button>Already login ? or signup</button>
        </>
    )
}

export default Restaurant;