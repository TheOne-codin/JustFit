import React from 'react'
import './mainFive.css'
import ProfilePhoto from '../../assets/ProfilePhoto.png'
import ReviewStar from '../../assets/ReviewStars.png'

function MainFive() {
    return (
        <>
            <div className="mainFive">
                <div className="reviewBox">
                    <div className="boxTop">
                        <div className="profilephoto"> <img src={ProfilePhoto} alt="" />
                        </div>
                        <div className="stars">
                            <img src={ReviewStar} alt="" />
                        </div>


                    </div>
                    <h4>Lorem</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, sapiente laudantium ad provident praesentium est. Molestias cumque fugit nisi sit!</p>
                </div>
                <div className="reviewBox">
                    <div className="boxTop">
                        <div className="profilephoto"> <img src={ProfilePhoto} alt="" />
                        </div>
                        <div className="stars">
                            <img src={ReviewStar} alt="" />
                        </div>


                    </div>
                    <h4>Lorem</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, sapiente laudantium ad provident praesentium est. Molestias cumque fugit nisi sit!</p>
                </div>
                <div className="reviewBox">
                    <div className="boxTop">
                        <div className="profilephoto"> <img src={ProfilePhoto} alt="" /></div>
                        <div className="stars">
                            <img src={ReviewStar} alt="" />
                        </div>


                    </div>
                    <h4>Lorem</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, sapiente laudantium ad provident praesentium est. Molestias cumque fugit nisi sit!</p>
                </div>
                <div className="reviewBox">
                    <div className="boxTop">
                        <div className="profilephoto"> <img src={ProfilePhoto} alt="" /></div>
                        <div className="stars">
                            <img src={ReviewStar} alt=""/>
                        </div>
                    </div>
                    <h4>Lorem</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, sapiente laudantium ad provident praesentium est. Molestias cumque fugit nisi sit!</p>
                </div>

            </div>
        </>
    )
}

export default MainFive
