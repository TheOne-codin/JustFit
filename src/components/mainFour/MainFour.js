import React from 'react'
import './mainFour.css'
import Arrow from '../../assets/arrow.svg'

function MainFour() {
    return (
        <>
           <div className="mainFour">
            <div className="gridFour">
                <div className="text">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, optio.</p>
                </div>
                <div className="btnsLeft">
                    <div className="btnRed">Lorem, ipsum dolor.</div>
                    <div className="btnRed">Lorem, ipsum dolor.</div>
                    <div className="btnRed">Lorem, ipsum dolor.</div>
                    <div className="btnRed">Lorem, ipsum dolor.</div>
                </div>
                <div className="arrowCenter">
                    <div className="arrow">
                        <img src={Arrow} alt=""/>
                    </div>
                    <div className="arrow">
                        <img src={Arrow} alt=""/>
                    </div>
                    <div className="arrow">
                        <img src={Arrow} alt=""/>
                    </div>
                    <div className="arrow">
                        <img src={Arrow} alt=""/>
                    </div>
                    <div className="downarrow">
                        <img src={Arrow} alt=""/>
                    </div>
                </div>
                <div className="btnsRight">
                    <div className="btnGreen">Lorem, ipsum.</div>
                    <div className="btnGreen">Lorem, ipsum.</div>
                    <div className="btnGreen">Lorem, ipsum.</div>
                    <div className="btnGreen">Lorem, ipsum.</div>
                </div>

            </div>
            </div> 
        </>
    )
}

export default MainFour
