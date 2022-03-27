import React, { FC } from 'react'
import { ReactTypical } from '@deadcoder0904/react-typical';
import { Link } from 'react-router-dom';
import HtmlTags from './common/HtmlTags';

const HomeComponent:FC = () => {
  return (
    <div className='home-container'>
      {/* {this is header section} */}
      <HtmlTags tagName='h1'/> 
      <div className='home-body'>
        <h1>Hi,</h1>
        <h1>I am Ujwal,</h1>
        <h2>
          I am a {' '}
          <ReactTypical
          loop={Infinity}
          wrapper="b"
          steps={[
            'developer', 
            1000,
            'web developer',
            1000,
            'React web developer',
            1000
          ]}
        />
        </h2>
      </div>
      <HtmlTags tagName='/h1'/> 

      {/* {this is button section} */}
      <HtmlTags tagName='button'/> 
        <div className='home-contact-button'>
            <Link to='/contact'>
              <button>
                Contact Me
              </button>
            </Link>
        </div>
      <HtmlTags tagName='/button'/> 
    </div>
  )
}

export default HomeComponent;
