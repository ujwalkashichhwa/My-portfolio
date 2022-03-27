import React, { FC } from 'react'
import { aboutMe } from 'utility/value';
import HtmlTags from './common/HtmlTags';

const AboutComponent:FC = () => {
  return (
    <div className='about-container'>
      {/* { about title section} */}
      <HtmlTags tagName='h1'/> 
      <div className='about-title'>
        <h1>My, Myself {'&'} I</h1>
      </div>
      <HtmlTags tagName='/h1'/> 

      {/* {about paragraph section} */}

      <HtmlTags tagName='p'/> 
        <div className='about-me-paragraph'>
          <p>
            {aboutMe[0]}
          </p>
          <p>
            {aboutMe[1]}
          </p>
          <p>
            {aboutMe[2]}
          </p>
        </div>
      <HtmlTags tagName='/p'/> 
    </div>
  )
}

export default AboutComponent;
