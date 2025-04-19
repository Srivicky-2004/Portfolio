import React from 'react'
import user from '../Images/userlogo.png'
import { Link } from 'react-scroll'

export default function Nav() {
  return (
    <div>
      <div className=' mt-4'>
        <nav className=' navbar navbar-expand-lg'>
          <div className=' container-fluid'>
            <img src={user} alt="user" height={30} />
            <a href="#abc" className=' nav-link ms-2 col-lg-6'>Portfolio</a>
            <button className=' navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label="Toggle navigation">
              <span className=' navbar-toggler-icon'></span>
            </button>
            <div className=' collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className=' navbar-nav mb-lg-0 mb-2'>
                <li className=' nav-item'><Link  to={'profile'} id='nav' className=' nav-link active col-lg-1 me-3' aria-current='page'>Home</Link></li>
                <li className=' nav-item'><Link to={'skill'} id='nav' className=' nav-link  col-lg-1 me-3 ms-3'>Skills</Link></li>
                <li className=' nav-item'><Link to={'pro'} id='nav' className=' nav-link  col-lg-1 me-3 ms-3'>Projects</Link></li>
                <li className=' nav-item'><Link to={'edu'} id='nav' className=' nav-link  col-lg-1 me-3 ms-3'>About</Link></li>
                <li className=' nav-item'><Link  to={'contact'} id='nav' className=' nav-link  col-lg-1 me-3 ms-3'>Contact</Link></li>
                {/* <li className=' nav-item'><Link to={'theme'} id='nav' className=' nav-link  col-lg-1 ms-5'>Light</Link></li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
