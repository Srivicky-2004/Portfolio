import React from 'react';
import me1 from '../Images/me1.jpg';
import lin from '../Images/linkedin.webp';
import git from '../Images/git.png';
export default function Home() {
  return (
    <section id='profile'>
      <div id='about'>
        <p>Hii! I'm</p>
        <h1 className=' text-center fs-1' style={{ fontFamily: 'cursive' }}>Sri vigneshwar</h1>
        <p className=' mt-3'>Front-end Developer</p>
        <a href="https://www.linkedin.com/in/sri-vigneshwar-s-224334281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"target='_blank' rel="noopener noreferrer">
          <img src={lin} alt="linkedin" id='icon' height={30} width={30} />
        </a>
        <a href="https://github.com/Srivicky-2004" target='_blank' rel="noopener noreferrer" className=' ms-2'>
          <img src={git} alt="github" id='icon' height={30} width={30} />
        </a>
      </div>
      <div id='pic' className=' d-lg-flex d-block'>
        <img src={me1} alt="Sri Is Here" height={400} width={400} className=' rounded-circle' />
      </div>
    </section>
  )
}
