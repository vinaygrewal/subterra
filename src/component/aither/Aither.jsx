import React from 'react'
import "./Aither.css"
const Aither = () => {
  return (
    <section id='aither'>
    <img src="./image1/aither.png" alt="" className="aither-logo" />
    {/* <img src="./image1/aither-bg.png" alt="" className="aither-bg" /> */}
    <div className="main-ai">
        <h1>Enter the Aither Hub</h1>
        <p>Venture into Aither, the beating heart of the subterranean world, and immerse yourself in an exclusive social hub designed for NFT holders.
         Connect with fellow explorers, attend secret events, and unravel the enigma of Subterra 2044."</p>
        <button className='btn'>Engage On Social Media</button>
    </div>

    </section>
  )
}

export default Aither