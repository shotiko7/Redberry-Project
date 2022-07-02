import React from 'react';
import "./FirstPage.css";
import Chess from './FirstPageAssets/Chess.png'
import Header from './Header.js'
import Next from "./FirstPageAssets/Next.png"

function FirstPage() {
  return (
    <div className='maindiv'>
        <div className='parentdiv'>
            <div className='leftdiv'>
                <Header />
                <img src={Chess} alt="chess"/>
            </div>
            <div className='rightdiv'>
                <div className='rightdivtext'> 
                    <h2> chess says </h2>
                    <h4> a lot about </h4> 
                </div> 
                <h3> who we are </h3>
                <button> 
                    <p> Get Started </p>
                    <img src={Next} alt="next" />
                </button> 
            </div>
        </div>
    </div>
  )
}

export default FirstPage