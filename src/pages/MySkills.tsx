import React, { FC } from 'react'
import HtmlTags from 'components/common/HtmlTags';
import MySkillComponent from 'components/MySkillComponent';

const MySkills:FC = () => {
  return (
    <div className='container'>
      <HtmlTags tagName='html'/> 
      <HtmlTags tagName='body'/> 
      <div className='container-body'>
        <MySkillComponent/>
      </div>
      <HtmlTags tagName='/body'/> 
      <HtmlTags tagName='/html'/> 
    </div>
  )
}

export default MySkills;
