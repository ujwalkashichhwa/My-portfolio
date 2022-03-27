import React, { FC, memo } from 'react'

interface IProp{
    tagName:string;
}

const HtmlTags:FC<IProp> = ({tagName}) => {
  return (
    <div className='htmlTags'>
        <h3>&lt; {tagName} &gt;</h3>
      </div>
  )
}

export default memo(HtmlTags);
