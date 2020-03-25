import {IResponse, IResult} from '../../api/interfaces';
import axios from 'axios';
import {BASE_URL, handleApiErrors, makeApiHeaders, PHOTOS_ENDPOINT} from '../../api/api';


export interface IPhoto extends IResult {
  id: string;
  album_id: string;
  title: string;
  url: string;
  thumbnail: string;
}

/*@fetchPhotos
*  Will fetch the photos for the given album_id
* @param {string} album_id
* */
export const fetchPhotos = async (album_id: string | number): Promise<IPhoto[]> => {
  return axios.get<IResponse<IPhoto[]>>(`${BASE_URL}/${PHOTOS_ENDPOINT}${album_id}`, makeApiHeaders())
      .then(res => res.data.result)
      .catch(handleApiErrors)
};
