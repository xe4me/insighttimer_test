import React, {FunctionComponent, memo} from 'react';
import './Photos.scss';
import {IPhoto} from '../album/fetchPhotos';
import Photo from '../photo/Photo';

interface IProps {
  /*@photos list of IPhoto(s) */
  photos: IPhoto[]
}

/*@Photo
  Photos component will just simply render a list of Photos
* */
const Photos: FunctionComponent<IProps> = memo(({photos}) => {
  return (<ul className="Photos">
    {photos.length>0 && photos.map(photo => <Photo key={photo.id}
                                                 id={photo.id}
                                                 src={photo.url}
                                                 caption={photo.title}
                                                 alt={photo.title}/>)}
  </ul>)
});
export default Photos;
