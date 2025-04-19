import React from 'react';
import lin from '../Images/linkedin.webp';
import facebook from '../Images/face.avif';
import twit from '../Images/xlogo.jpg';
import gmail from '../Images/gmail.jpg';

export default function Contact() {
  return (
    <div id='contact' className=''>
      <div className=" container-fluid d-lg-flex" id='contdiv'>
        <div id='con1' className=''>
          <a href="https://www.facebook.com/sri.vicky.7583" target='_blank' rel="noopener noreferrer" className='' >
            <img src={facebook} alt="" id='icon' height={30} width={30} className=' rounded-circle' />
          </a>
        </div>
        <div id='con2'>
          <a href="https://www.linkedin.com/in/sri-vigneshwar-s-224334281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' rel="noopener noreferrer">
            <img src={lin} alt="linkedin" id='icon' height={30} width={30} />
          </a>
        </div>
        <div id='con3'>
          <a href="https://x.com/No_one_sri" target='_blank' rel="noopener noreferrer">
            <img src={twit} alt="" id='icon' height={30} width={30} className=' rounded-circle' />
          </a>
        </div>
        <div id='con4'>
          <a href="#a">
            <img src={gmail} alt="" id='icon' height={25} width={25} className=' rounded-circle' />
          </a>
        </div>
        <div>
          <hr className=' border border-light'/>
        </div>
      </div>
    </div>
  )
}
