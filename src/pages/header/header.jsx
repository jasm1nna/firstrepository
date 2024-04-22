import React from "react";
import './header.css'
import {NavLink}  from 'react-router-dom'
import { SlBasket } from "react-icons/sl";
import {useSelector} from 'react-redux'

export default function Header() {
     const count = useSelector (state => state.basket.items)

    return (
        <div className="header">
            <NavLink to="/">Onlain shop</NavLink>
            <NavLink to="/basket" className= "basket_count">
               {count.length > 0 
               ? <span>{count.length}</span>:""}
            <SlBasket size={30}/>
            </NavLink>
        </div>
    )
}