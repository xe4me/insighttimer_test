export const BASE_URL = 'https://gorest.co.in/public-api';
export const ALBUM_ENDPOINT = "albums";
export const PHOTOS_ENDPOINT = "photos?album_id=";
export const TOKEN = "J56gH1YCS0tKLVkEMOaNquYSBKGgMNNQ1lTd";

export function makeApiHeaders() {
  return {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  }
}


/*handleApiErrors
* A catch all handler for all the fetch errors,
* */
// @TODO below code needs to handle the generic errors like Server Errors etc.
export function handleApiErrors(error: any) {
  return error;
}

