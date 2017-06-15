import React from 'react';

const Image = props => {
  const { src } = props;
  
  return (
    <img className="partner-header-image col-md-5" src={src}/>
  );
  
}
  
export default Image;