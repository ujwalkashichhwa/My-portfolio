import React, { FC } from 'react';
import AboutComponent from 'components/AboutComponent';
import HtmlTags from 'components/common/HtmlTags';
import ContactComponent from 'components/ContactComponent';
import HomeComponent from 'components/HomeComponent';
import MySkillComponent from 'components/MySkillComponent';

const Home:FC = () => {
  return (
    <div className='container'>
      <HtmlTags tagName='html'/> 
      <HtmlTags tagName='body'/> 
      <div className='container-body'>
        <HomeComponent/>
        <AboutComponent/>
        <MySkillComponent/>
        <ContactComponent/>
      </div>
      <div className='htmlTags'>
      <HtmlTags tagName='/body'/> 
      <HtmlTags tagName='/html'/> 
      </div>
    </div>
  )
}

export default Home;
