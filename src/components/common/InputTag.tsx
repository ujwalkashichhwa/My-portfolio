import React, { FC, memo } from 'react';

interface IProps{
    typeName:string;
    className:string;
    placeholder:string;
}

const InputTag:FC<IProps> = ({typeName, className, placeholder}) => {
  return (
    <>
        <input type={typeName} className={className} placeholder={placeholder}/>
    </>
  )
}

export default memo(InputTag);
