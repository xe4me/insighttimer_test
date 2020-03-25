import React, {FunctionComponent, memo, useCallback} from 'react';
import './Album.scss';
import Typography from '../typography/Typography';
import {IAlbum} from './fetchAlbum';
import {IPhoto} from './fetchPhotos';
import Button from '../button/Button';
import Photos from '../photos/Photos';

interface IProps {
  /*@album contains the meta information about an album, like title , etc*/
  album: IAlbum | null

  /*@photos array of IPhotos to be rendered as a list*/
  photos: IPhoto[]

  /*@handleSubmit Clicking on hide button will trigger this event*/
  handleHide: (photoIds: string[]) => void
}

/* @Album
  Album component will render the presentation of an album, which consists of a title, a hide button and a list of photos
* */
const Album: FunctionComponent<IProps> = memo(({album, photos, handleHide}) => {
  const handleSubmit = useCallback((event: any) => {
    event.preventDefault();
    const checkedElements: HTMLInputElement[] = event.target.querySelectorAll('input[type=checkbox]:checked');
    const ids = Array.from(checkedElements).map((el: HTMLInputElement) => el.id);
    handleHide(ids)
  }, []);

  return (<form onSubmit={(event) => handleSubmit(event)} className="Album">
    <div className="Album__Header">
      <Typography variant="h5">{album?.title}</Typography>
      <Button color="secondary" type="submit">Hide</Button>
    </div>
    <Photos photos={photos}/>
  </form>)
});
export default Album;
