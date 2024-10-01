import React from 'react'

export default function Header() {
  return (
    <>
    <header>
        <div className="nav-header">
            <div className="nav-logo">
                <img src="./logowithoutbg.png" alt="" className='logo' style={{width:"50px"},{height:"50px"}}/>
                <h2 className="nav-heading">Abstract</h2>
                <a href="" className="help">| Help Center</a>
            </div>
            <div className="nav-menu">
                <ul className="menu">
                    <li><a href="" className="submit">Submit a request</a></li>
                    <li><a href="" className="signin">Sign in</a></li>
                </ul>
            </div>
        </div>
    </header>
    
    
    </>
  )
}
