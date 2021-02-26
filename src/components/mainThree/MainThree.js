import React, { Component } from 'react'
import './mainThree.css'
import Mobile from '../../assets/Mobile.png'

export class MainThree extends Component {
    componentDidMount(){
        const dropDown = document.querySelectorAll(".dropdownBox");
        const dropDownP = document.querySelectorAll(".dropdownp");
        
        for (let i = 0; i < dropDown.length; i++) {
            
            dropDown[i].addEventListener('click', () => {
                dropDownP[i].classList.toggle("active");
            })
        }
      }    
    render() {
        return (
            <div>
                <div className="mainThree">
              <div className="mainGrid">
              <div className="bigCircle">
                  <img src={Mobile} alt=""/>
              </div>
              <div className="rightGrid">
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum.</h1>
              <div className="dropDown">
              <div className="dropdownBox">
                  <span className="span">Lorem, ipsum.</span>
                  <p className="dropdownp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi recusandae consectetur, sunt nobis libero commodi.</p>
              </div>
              <div className="dropdownBox">
                  <span className="span">Lorem, ipsum.</span>
                  <p className="dropdownp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi recusandae consectetur, sunt nobis libero commodi.</p>
              </div>
              <div className="dropdownBox">
                  <span className="span">Lorem, ipsum.</span>
                  <p className="dropdownp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi recusandae consectetur, sunt nobis libero commodi.</p>
              </div>
              <div className="dropdownBox">
                  <span className="span">Lorem, ipsum.</span>
                  <p className="dropdownp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi recusandae consectetur, sunt nobis libero commodi.</p>
              </div>
              <div className="dropdownBox">
                  <span className="span">Lorem, ipsum.</span>
                  <p className="dropdownp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi recusandae consectetur, sunt nobis libero commodi.</p>
              </div>
              </div>
              </div>
          </div>  
              <div className="main2btn">
                <p>Lorem ipsum dolor sit.</p>
            </div>
              </div>

            </div>
        )
    }
}

export default MainThree


