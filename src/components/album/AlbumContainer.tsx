import React, {FunctionComponent, memo, useCallback, useEffect, useState} from 'react';
import './Album.scss';
import {fetchPhotos, IPhoto} from './fetchPhotos';
import {fetchAlbum, IAlbum} from './fetchAlbum';
import Album from './Album';


interface IProps {
  albumId:string
}
/* @AlbumContainer
  AlbumContainer is a HOC for Album component.
  AlbumContainer will fetch the data needed for Album and it's children.
* */
const AlbumContainer: FunctionComponent<IProps> = memo(({albumId}) => {

  const [album, setAlbums] = useState<IAlbum | null>(null);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  useEffect(() => {
    albumId && fetchAlbumAndPhotos(albumId)
  }, [albumId]);


  /* @Method fetchAlbumAndPhotos
   * Will make two http request to fetch the album details and the photos list.
   * @param {string} album_id
* */
  async function fetchAlbumAndPhotos(albumId: string) {
    const albums = await fetchAlbum(albumId);
    setAlbums(albums);
    const photos = await fetchPhotos(albumId);
    setPhotos(photos);
  }


  /* @Method filterPhotos
   * filterPhotos will receive an array of photo_ids and filter the photos based on the matching id
   * @param {string[]} photo_ids
* */
  function filterPhotos(photoIds: string[]) {
    setPhotos((photos) => photos.filter(({id}) => !photoIds.includes(id)))
  }

  const handleHide = useCallback(filterPhotos, []);

  return <Album
      handleHide={handleHide}
      album={album}
      photos={photos}/>;
});
export default AlbumContainer;
