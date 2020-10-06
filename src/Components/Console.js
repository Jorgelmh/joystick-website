import React from 'react'
import './Styles/Console.css'

const Console = () => {
    return (
        <div className="console-index">
            <div className="console index-top-console">
                <div className="top-console">
                    <div className="buttons-console" id="red"></div>
                    <div className="buttons-console" id="yellow"></div>
                    <div className="buttons-console" id="green"></div>
                </div>
                <div className="index-console-text">
                    <p className="">&emsp; <span className="console-import">import</span>  <span className="console-class">Joystick</span> <span className="console-import">from</span> <span className="console-string">'./Joystick.js'</span></p>
                    <p className="console-comment">&emsp;//Position on Canvas - Sample: center</p>
                    <p className="js-statement">&emsp; <span className="console-keyword">let</span> <span className="console-variable">position</span> = &#123; <span className="console-variable">x</span>: <span className="console-variable">width</span>/2 , <span className="console-variable">y</span>: <span className="console-variable">height</span>/2 &#125;</p>
                    <p className="js-statement">&emsp; <span className="console-keyword">let</span> <span className="console-variable">sample</span> = <span className="console-keyword">new</span> <span className="console-class">Joystick </span>(<span className="console-variable">canvas</span>, <span className="console-variable">position</span>, <span className="console-variable">Radius</span>)</p>
                </div>  
            </div>   
        </div>
    )
}

export default Console