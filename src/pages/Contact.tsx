import React, { FC } from 'react'
import HtmlTags from 'components/common/HtmlTags';
import ContactComponent from 'components/ContactComponent';

const Contact:FC = () => {
  return (
    <div className='container'>
      <HtmlTags tagName='html'/> 
      <HtmlTags tagName='body'/> 
      <div className='container-body'>
        <ContactComponent/>
      </div>
      <HtmlTags tagName='/body'/> 
      <HtmlTags tagName='/html'/> 
    </div>
  )
}

export default Contact;