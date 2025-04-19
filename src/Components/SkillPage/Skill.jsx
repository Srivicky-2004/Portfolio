import React from 'react';
import htmlimg from '../Images/html.png';
import cssimg from '../Images/css.png';
import bootimg from '../Images/boot.png';
import jsimg from '../Images/js.png';
import reactimg from '../Images/react.png';

export default function Skill() {
  return (
    <div className="container" id='skill'>
      <h1 className=' text-center'>What I Can Do!</h1>
      <div className=' d-lg-flex'>
        <div className=' card mt-5' style={{ width: "18rem" }} id='card'>
          <img src={htmlimg} alt="html" />
          <div className="card-body">
            <h3>HTML</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, et?</p>
            <button className='btn btn-success'>Learn More</button>
          </div>
        </div>
        <div className=' card mt-5 ms-lg-5' style={{ width: "18rem" }} id='card'>
          <img src={cssimg} alt="html" />
          <div className="card-body">
            <h3>CSS</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, explicabo.</p>
            <button className='btn btn-success'>Learn More</button>
          </div>
        </div>
        <div className=' card mt-5 ms-lg-5' style={{ width: "18rem" }} id='card'>
          <img src={bootimg} alt="html" />
          <div className="card-body">
            <h3>BOOTSTRAP</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, debitis?</p>
            <button className='btn btn-success'>Learn More</button>
          </div>
        </div>
        <div className=' card mt-5 ms-lg-5' style={{ width: "18rem" }} id='card'>
          <img src={jsimg} alt="html" />
          <div className="card-body">
            <h3>JS</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, commodi?</p>
            <button className='btn btn-success'>Learn More</button>
          </div>
        </div>
        <div className=' card mt-5 ms-lg-5' style={{ width: "18rem" }} id='card'>
          <img src={reactimg} alt="html" />
          <div className="card-body">
            <h3>REACT JS</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod.</p>
            <button className='btn btn-success'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
