import React, { useContext, useEffect, useState } from 'react';

import './ImagesGrid.css';

import { KeywordContext } from '../../contexts/KeywordContext';
import { HttpService } from '../../services/HttpService';
import { Image } from '../image/Image';
import { IImage } from '../image/Image.model';

const ImagesGrid = () => {
  const { keyword } = useContext(KeywordContext);

  const [images, setImages] = useState<IImage[]>([]);

  useEffect(() => {
    HttpService.getData(keyword!).then((data) => {
      setImages(data);
    });
  }, [keyword]);

  return (
    <div className='images-grid'>
      {images.map(image => {
        return <Image key={image.id} src={image.url} />
      })}
    </div>
  );
}

export { ImagesGrid };