import React from 'react';
import htmlpro from '../Images/html&csspro.png';
import bootpro from '../Images/bootpro.png';
import jspro from '../Images/jspro.png';

export default function Projects() {
  return (
    <div className=' container' id='pro'>
      <h1 className=' ms-5 mt-5 text-decoration-underline'>My Projects</h1>
      <div className=' container d-lg-flex mt-5'>
        <a href="http://127.0.0.1:5501/html/css/pro1.html" target='_blank' rel="noopener noreferrer">
          <button className=' object-fit-cover btn btn-dark'>
            <img src={htmlpro} alt="HTML & CSS project" height={200} width={300} />
            <h6>HTML & CSS</h6>
          </button>
        </a>
        <div className=' container mt-5 ms-5'>
          <h4>Description</h4>
          <p className=' mt-3 ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reprehenderit facilis distinctio eligendi labore iusto. Fugit minima expedita magni, maxime quaerat repudiandae tenetur numquam iusto ut dolor, porro obcaecati reprehenderit?</p>
        </div>
      </div><hr className=' border-2' />
      <div className=' container d-lg-flex mt-5'>
        <a href="http://127.0.0.1:5500/BOOTSTRAP/pro.html" target='_blank' rel="noopener noreferrer">
          <button className=' object-fit-cover btn btn-secondary'>
            <img src={bootpro} alt="Bootstrap project" height={200} width={300} />
            <h6 className=''>Bootstrap</h6>
          </button>
        </a>
        <div className=' container mt-5 ms-5'>
          <h4>Description</h4>
          <p className=' mt-3 ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reprehenderit facilis distinctio eligendi labore iusto. Fugit minima expedita magni, maxime quaerat repudiandae tenetur numquam iusto ut dolor, porro obcaecati reprehenderit?</p>
        </div>
      </div><hr className=' border-2' />
      <div className=' container d-lg-flex mt-5'>
        <a href="http://127.0.0.1:5500/JAVASCRIPT/JSPROJECT.html" target='_blank' rel="noopener noreferrer">
          <button className=' object-fit-cover btn btn-dark'>
            <img src={jspro} alt="JS project" height={200} width={300} className='' />
            <h6>Java Script</h6>
          </button>
        </a>
        <div className=' container mt-5 ms-5'>
          <h4>Description</h4>
          <p className=' mt-3 ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est reprehenderit facilis distinctio eligendi labore iusto. Fugit minima expedita magni, maxime quaerat repudiandae tenetur numquam iusto ut dolor, porro obcaecati reprehenderit?</p>
        </div>
      </div><hr className=' border-2' />
    </div>
  )
}
