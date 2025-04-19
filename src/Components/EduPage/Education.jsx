import React from 'react'
import me3 from '../Images/me3.jpg';
import course from '../Images/sql.png';
import chess from '../Images/chess.png';
import game from '../Images/game.jpg';

export default function Education() {
  const fileDownload = () => {
    const fileUrl = "/path/to/your/file.txt";
    const fileName = "file.txt";
    const link = document.createElement('a');
    link.href = (fileUrl);
    link.download = (fileName);
    document.body.appendChild(link);
    link.click();
    // document.removeChild(link);
  }
  return (
    <div className=' container mt-5' id='edu'>
      <h1 className=' mt-5 text-center'>All About Me!</h1>
      <div className=' container mt-5 d-lg-flex'>
        <img className='' src={me3} alt="" height={250} />
        <div className=' container ms-5'>
          <h3><span className=' fs-3 fw-normal'>I am</span> Sri Vigneshwar</h3>
          <p className=' fs-3 text-decoration-underline'>B.E Student</p>
          <h4>Education:</h4>
          <div className=' mt-3 ms-4'>
            <p>Upto 10th   : <span className=' fw-bolder fs-5'>Morning Star High school, Karur</span></p>
            <p>11&12th   :  <span className=' fw-bolder fs-5'> Bharani Park Higher Secondary School, Karur</span></p>
            <p>College   :  <span className=' fw-bolder fs-5'>Nehru Institute of Technology, Coimbatore</span> </p>
          </div>
        </div>
      </div>
      <button className=' btn btn-primary ms-4' onClick={fileDownload}>Download Resume</button>
      <h1 className=' mt-5 ms-5'>Other Activities</h1>
      <div className=' container mt-5 d-lg-flex '>
        <div className=' card' style={{ width: "18rem" }} id='others'>
          <img src={course} alt="" />
          <div className=' card-body'>
            <h3>Certification</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, architecto.</p>
          </div>
        </div>
        <div className=' card' style={{ width: "18rem" }} id='others'>
          <img src={chess} alt="" height={250} />
          <div className=' card-body'>
            <h3>Chess.com Profile</h3>
            <p>Lorem ipsum dolor </p>
            <a href="https://www.chess.com/member/no_one_sri" target='_blank' rel="noopener noreferrer">
              <button className=' btn bg-success text-light'>Learn more</button>
            </a>
          </div>
        </div>
        <div className=' card' style={{ width: "18rem" }} id='others'>
          <img src={game} alt="" />
          <div className=' card-body'>
            <h3>Game</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, architecto.</p>          </div>
        </div>
      </div>
    </div>
  )
}
