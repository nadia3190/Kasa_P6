import React from "react";
import { Link } from "react-router-dom"
import "./Not-found.css"

//need to insert a route to home page

function NotFound() {
    return (
        <section className="not-found">
            <h1 className="notfound-title">
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </h1>
            <h2 className="notfound-subtitle">Oups ! La page que vous demandez n'existe pas.</h2>
            <p className="notfound-paragraph"><Link to="/">Retourner sur la page d’accueil</Link></p>
        </section>
    )
}


export default NotFound;




















