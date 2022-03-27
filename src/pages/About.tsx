import React, { FC } from 'react'
import AboutComponent from 'components/AboutComponent';
import HtmlTags from 'components/common/HtmlTags';

const About:FC = () => {
  return (
    <div className='container'>
      <HtmlTags tagName='html'/> 
      <HtmlTags tagName='body'/> 
      <div className='container-body'>
        <AboutComponent/>
      </div>
      <HtmlTags tagName='/body'/> 
      <HtmlTags tagName='/html'/> 
    </div>
  )
}

export default About;
