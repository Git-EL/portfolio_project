import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import imageWebDev from '../images/development-4536630.svg';
import { FaGithubAlt, FaLinkedinIn, FaXing } from 'react-icons/fa';

const Home = () => {
  const hubUrl = 'https://github.com/Git-EL';
  const linkedUrl = 'https://www.linkedin.com/in/esther-lee-627451205/';
  const xingUrl = 'https://www.xing.com/profile/Esther_Lee9/cv';
  return (
    <div className='introBox'>
      <div className='introRow'>
        <div className='introColumn'>
          <div className='textWrapper'>
            <div className='textBox'>
              <p className='topLine'>
                Introduction
              </p>
              <h1>Hi. I’m <span class='otherColor'>Esther Lee</span>. <br></br>A Web Developer.</h1>
              <p className='subtitle'>
                I am currently a student at the DCI - Digital Career Institute. 
                I am working towards a degree in Full-stack Web Development.
              </p>
              <div className='subLine'>
                <Link to='/contact'>
                <button>
                  <p>
                    Contact me
                  </p>
                </button>
                </Link>
                <a href={hubUrl} className='githubIcon' target='_blank' rel="noreferrer">
                  <FaGithubAlt size={35} />
                </a>
                <a href={linkedUrl} className='linkedIcon' target='_blank' rel="noreferrer">
                  <FaLinkedinIn size={35} />
                </a>
                <a href={xingUrl} className='xingIcon' target='_blank' rel="noreferrer" >
                  <FaXing size={35} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img src={imageWebDev} alt='webdev' />
      </div>
    </div>
  )
}

export default Home
