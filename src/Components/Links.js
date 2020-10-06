import React from 'react'
import {Link} from 'react-router-dom'

const Links = ({title}) => <p><Link className="nav-links" to={`#${title}`}> {title} </Link></p>

export default Links