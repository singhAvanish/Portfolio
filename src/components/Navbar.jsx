import React from 'react';
import "./Navbar.css";
import { Link } from 'react-scroll';



export default function Navbar(props) {





  return (

    <div className='navbar'>
      <div className='navbarCenter'>
        <ul className='navbarList'>
          <li className='navbarListItem'>

            <Link
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}

            >
              Home

            </Link>


          </li>
          <li className='navbarListItem'>
            <Link
              to="Skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}

            >
              Skills

            </Link>



          </li>
          <li className='navbarListItem'>
            <Link
              to="Project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}

            >
              Projects

            </Link>
          </li>
          <li className='navbarListItem navbarButton'>
            <button className='navbarButton'>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}


              >
              

              </Link>
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </div>


  );
}
