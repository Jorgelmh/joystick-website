import React from 'react'

const MainTitle = ({title, annotation}) => {
    return(
        <div className="main-title">
            <h1 className="header-title">{title}</h1>
            <p>{annotation}</p>
        </div>
    )
}
export default MainTitle