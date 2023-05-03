import React from 'react';

import './Image.css';

type ImageProps = {
  src: string
}

const Image = ({ src }: ImageProps) => {
  return (
    <div className='img-container'>
      <img src={src}></img>
    </div>
  );
}

export { Image };