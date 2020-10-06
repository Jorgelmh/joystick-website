import React from 'react'
import './Styles/UnderlinedTitle.css'

const UnderlinedTitle = ({text}) => (
    <div className="dis-flex">
        <div className="title">
            <h2>{text}</h2>
        </div>
    </div>
)
export default UnderlinedTitle