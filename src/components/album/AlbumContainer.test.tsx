import React from "react";
import {mount, ReactWrapper} from "enzyme";
import {act} from "react-dom/test-utils";
import AlbumContainer from './AlbumContainer';
import toJson from 'enzyme-to-json';

jest.mock("./fetchAlbum", () => {
  return {
    __esModule: true,
    fetchAlbum: async () => ({
      "_meta": {
        "success": true,
        "code": 200,
        "message": "OK. Everything worked as expected.",
        "rateLimit": {"limit": 30, "remaining": 29, "reset": 2}
      },
      "result": {
        "id": "3",
        "user_id": "758",
        "title": "In facilis aut aperiam quo qui quia.",
        "_links": {
          "self": {"href": "https://gorest.co.in/public-api/albums/3"},
          "edit": {"href": "https://gorest.co.in/public-api/albums/3"}
        }

      }
    })
  };
});

jest.mock("./fetchPhotos", () => {
  return {
    __esModule: true,
    fetchPhotos: async () => ({
      "_meta": {
        "success": true,
        "code": 200,
        "message": "OK. Everything worked as expected.",
        "totalCount": 2,
        "pageCount": 1,
        "currentPage": 1,
        "perPage": 20,
        "rateLimit": {"limit": 30, "remaining": 28, "reset": 4}
      },
      "result": [{
        "id": "1963",
        "album_id": "3",
        "title": "Suscipit ea quae explicabo. Consequuntur quasi aut similique consequatur ex culpa.",
        "url": "https://lorempixel.com/1024/768/abstract/?17727",
        "thumbnail": "https://lorempixel.com/150/150/abstract/?19973",
        "_links": {
          "self": {"href": "https://gorest.co.in/public-api/photos/1963"},
          "edit": {"href": "https://gorest.co.in/public-api/photos/1963"}
        }
      }, {
        "id": "2569",
        "album_id": "3",
        "title": "Quos ab pariatur molestias eum labore. Commodi excepturi harum nihil nihil id repellendus.",
        "url": "https://lorempixel.com/1024/768/abstract/?10565",
        "thumbnail": "https://lorempixel.com/150/150/abstract/?42724",
        "_links": {
          "self": {"href": "https://gorest.co.in/public-api/photos/2569"},
          "edit": {"href": "https://gorest.co.in/public-api/photos/2569"}
        }
      }]
    })
  };

});

test('should fetch the album and photos and render the children', async function () {
  let wrapper: ReactWrapper;
  await act(async () => {
    wrapper = mount(<AlbumContainer albumId={'2'}/>);
  });
  wrapper.update();
  expect(toJson(wrapper)).toMatchSnapshot()
});
