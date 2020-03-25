import React from 'react';
import {useParams} from 'react-router-dom';
import AlbumContainer from '../../components/album/AlbumContainer';

const AlbumPage = () => {
  let {albumId} = useParams();
  return albumId ? <AlbumContainer albumId={albumId}/> : <div> Must specify an album id in the url</div>
};
export default AlbumPage
