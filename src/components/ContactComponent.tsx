import React, { FC } from 'react'
import HtmlTags from './common/HtmlTags';
import InputTag from './common/InputTag';

const ContactComponent:FC = () => {
  return (
    <div className='contact-container'>
      <HtmlTags tagName='h1'/>
        <div className='contact-body'>
          <div className='contact-form'>
            <InputTag typeName='text' className='form-control name' placeholder='Full Name'/>
            <InputTag typeName='text' className='form-control name' placeholder='Email Address'/>
          </div>
        </div>
    </div>
  )
}

export default ContactComponent;
