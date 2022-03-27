import React from 'react'
import HtmlTags from './common/HtmlTags';

const MySkillComponent = () => {
  return (
    <div className='mySkill-container'>
      <HtmlTags tagName='h1'/>
        <div className='about-title'>
          <h1>My Skills</h1>
        </div>
      <HtmlTags tagName='/h1'/>

      <HtmlTags tagName='section'/>
        <div className='cards-container'>
          <div className='cards'>
            <h1>HTML</h1>
          </div>
          <div className='cards'>
            <h1>CSS</h1>
          </div>
          <div className='cards'>
            <h1>JavaScript</h1>
          </div>
          <div className='cards'>
            <h1>TypeScript</h1>
          </div>
          <div className='cards'>
            <h1>ReactJs</h1>
          </div>
          <div className='cards'>
            <h1>GIT</h1>
          </div>
        </div>
      <HtmlTags tagName='/section'/>
    </div>
  )
}

export default MySkillComponent;
