import React from 'react'
import "./HomeModal.css"
import ButtonBlack from './ButtonBlack'
import { Link } from 'react-router-dom';

function HomeModal ( {modalImage, modalHeader,modalText} : {modalImage:string, modalHeader:string, modalText:string}  ) {
    return ( 
    <div className = "modal-container">
        <div className = "modal-top">
            <img src={modalImage}/>
        </div>
        <div className = "modal-bottom">
            <div className ="modal-header">
                {modalHeader}
            </div>
            <div className ="modal-text">
                {modalText}
            </div>
            <div className = "modal-button">
            <Link to="/shop">
        <ButtonBlack buttonText="Shop Now"/>
        </Link>
        </div>
        </div>
    </div>
    )
}

export default HomeModal 