import React from "react";
import {useParams} from 'react-router-dom'
import { datas } from "../../data";
import './detail-page.css'

export default function DetailPage() {

    const {id} = useParams()
    const finedDatan= datas.find(el => el.id == id)

    return(
        <div className="detail_container">
            <div><img src={finedDatan.img} alt=""/></div>
        <div>
        <h1>{finedDatan.title}</h1>
        <p>Цвет:{finedDatan.color}</p>
        <p>Дата выпуска:{finedDatan.year}</p>
        <p>Памаять:{finedDatan.storage}</p>
        <h2>Цена:{finedDatan.price}</h2>
        <button>Купить</button>
        </div>
     </div>
    )
}