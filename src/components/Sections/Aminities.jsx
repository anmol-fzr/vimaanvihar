import React from 'react'

import doc from "../../assets/svg/doc.svg"
import clock from "../../assets/svg/clock.svg"
import key from "../../assets/svg/key.svg"
import land from "../../assets/svg/land.svg"
import money from "../../assets/svg/money.svg"
import nature from "../../assets/svg/nature.svg"
import park from "../../assets/svg/park.svg"
import road from "../../assets/svg/road.svg"
import wall from "../../assets/svg/wall.svg"
import water from "../../assets/svg/tap-water.svg"
import security from "../../assets/svg/policeman.svg"


const amenties = [
    {
        icon: doc,
        text: 'immidiate registery'
    },
    {
        icon: clock,
        text: 'immidiate mutation apply'
    },
    {
        icon: key,
        text: 'immediate possession'
    },
    {
        icon: money,
        text: 'loan available'
    },
    {
        icon: money,
        text: 'loan available'
    },
    {
        icon: land,
        text: 'land use conversion'
    },
    {
        icon: wall,
        text: 'boundary wall'
    },
    {
        icon: nature,
        text: 'tree plantation'
    },
    {
        icon: park,
        text: 'parks'
    },
    {
        icon: road,
        text: 'wide roads'
    },
    {
        icon: security,
        text: '24x7 security'
    },
    {
        icon: water,
        text: 'water supply'
    },
]

export default function Aminities() {
    return (
        <section className="features">
            <div className="container">
                <h2 className="h2 section-title">Our Amenities</h2>
                <ul className="features-list">
                    {amenties.map(({ icon, text }) => (
                        <li key={text} >
                            <a href="#" className="features-card">
                                <div className="card-icon">
                                    {/* {icon} */}
                                    <img src={icon} alt="" />
                                </div>
                                <h3 className="capitalize card-title">{text}</h3>
                            </a>
                        </li>
                    ))}

                </ul>
            </div>
        </section>
    )
}
