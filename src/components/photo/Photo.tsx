import React, {FunctionComponent, memo} from 'react';
import './Photo.scss';

interface IProps {
  /*@src Image source */
  src: string

  /*@caption Image caption */
  caption: string

  /*@alt Alternative for when the image is not loaded*/
  alt: string

  /*@id is the name and id for the input[type=checkbox]*/
  id: string

}

/*@Photo
  Photo component has three elements, an image, a caption and a checkbox that will be shown only if selected==true.
* */
const Photo: FunctionComponent<IProps> = memo(({src, id, alt, caption}) => {
  return (<li>
    <label htmlFor={id}>
      <figure className="Photo">
        <img src={src} className="Photo__Image" alt={alt}/>
        <figcaption className="Photo__Caption">{caption}</figcaption>
        <fieldset className="Photo__Action">
          <input type="checkbox" className="Photo__Action-Checkbox" id={id} name={id} value={caption}/>
          <span className="Photo__Action-Tick icon-checkmark"/>
        </fieldset>
      </figure>
    </label>
  </li>);
});
export default Photo;
