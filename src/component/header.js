import React from 'react';
import './header.css';
import Logo from '../images/logo.png';

class Header extends React.Component{
  render(){
    return(
      <section>
        <div className="nav d-flex">
          <div className="forimage">
            <img src={Logo} alt=""/>
          </div>            
            <ul className="d-flex align-items-center">
              <li>Current Weather |</li>
              <li>Extended Weather</li>
            </ul>
        </div>
      </section>
    )
  }
}

export default Header;
