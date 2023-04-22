import React from 'react'
import Navbar from "./Navbar/Navbar"
import "./Header.css"

const Header = () => {
  return (
    <>
    <header>
<Navbar/>
<div className="header-content">
<div className="header-top">
  <div className="header-top-head"><span><img src="./image1/s.png" alt="s" /></span>
  <span><img src="./image1/u.png" alt="u" /></span>
  <span><img src="./image1/b.png" alt="b" /></span>
  <span><img src="./image1/t.png" alt="t" /></span>
  <span><img src="./image1/etr.png" alt="etr" /></span>
  <span><img src="./image1/a.png" alt="a" /></span>
  </div>
  <img src="./image1/header-bottom.png" alt="" className="header-top-subhead" />
</div>
<div className="header-bottom">
  <p>Embark on a journey through a subterranean realm 
  where the remnants of humanity fight for survival and strive to reclaim their lost world.
  </p>
  <img src="./image1/2044.png" alt="2044"  className='digits-20'/>
</div>
</div>
<img src="./image1/main-avtar.png" alt="avtar" className="main-avtar" />
<img src="./image1/header-rec.png" alt="" className="header-rec" />
    </header>
    
    
    </>
  )
}

export default Header