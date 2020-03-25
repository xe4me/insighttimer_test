import {IResponse, IResult} from '../../api/interfaces';
import axios from 'axios';
import {ALBUM_ENDPOINT, BASE_URL, handleApiErrors, makeApiHeaders} from '../../api/api';

export interface IAlbum extends IResult {
  id: string,
  user_id: string,
  title: string,

}

/*@fetchAlbum
*  Will fetch the album given the album_id,
* @param {string} album_id
* */
export const fetchAlbum = async (album_id: string | number): Promise<IAlbum> => {
  return axios.get<IResponse<IAlbum>>(`${BASE_URL}/${ALBUM_ENDPOINT}/${album_id}`, makeApiHeaders())
      .then(res => res.data.result)
      .catch(handleApiErrors)
};

