import React from "react";
import {datas} from '../../data'
import Items from "../components/items";
import './home-page.css'


export default function HomePage() {
    return(
        <div className='item_container'>
            {
                datas.map(el => <Items item={el} />)
            }
        </div>
    )
}