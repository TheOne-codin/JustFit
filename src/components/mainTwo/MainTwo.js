import React from 'react'
import './mainTwo.css'
import Video from '../../assets/Video.png'
import Biceps from '../../assets/biceps.png'
import WeightLoss from '../../assets/weight-loss.png'
import Herb from '../../assets/herb.png'
import Run from '../../assets/running.png'

function MainTwo() {
    return (
        <>
        <div className="mainTwo">
            <h1>Lorem ipsum dolor sit amet <span>consectetur adipisicing. </span> </h1>
        </div>
            <img className="video" src={Video} alt=""/>
        <div className="whitePage">
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
            <div className="grids">

            <div className="cont1">
                <div className="circle">
                <img src={WeightLoss} alt=""/>
                </div>
                <h2>lorem</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem eius quidem similique totam impedit natus?</p>
            </div>
            <div className="cont2">
            <div className="circle"><img src={Biceps} alt=""/></div>
                <h2>lorem</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem eius quidem similique totam impedit natus?</p>
            </div>
            <div className="cont3">
            <div className="circle">
                <img src={Herb} alt=""/>
            </div>
                <h2>lorem</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem eius quidem similique totam impedit natus?</p>
            </div>
            <div className="cont4">
            <div className="circle">
                <img src={Run} alt=""/>
            </div>
                <h2>lorem</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem eius quidem similique totam impedit natus?</p>
            </div>
            </div>
            <div className="main2btn">
                <p>Lorem ipsum dolor sit.</p>
            </div>
        </div>

        </>
        
    )
}

export default MainTwo
