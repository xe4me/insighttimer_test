import React, {FunctionComponent, memo} from 'react';
import './Photo.scss';

interface IProps {
  /*@alt Image source */
  src: string

  /*@alt Image caption */
  caption: string

  /*@alt Alternative for when the image is not loaded*/
  alt: string

  /*@id is the name and id for the input[type=checkbox]*/
  id: string

  /*@selected if true, will show a tick/checked element, default is false*/
  selected?: boolean
}

/*@Photo
  Photo component has three elements, an image, a caption and a checkbox that will be shown only if selected==true.
* */
const Photo: FunctionComponent<IProps> = memo(({src, id, alt, selected, caption}) => {
  return (<figure className="Photo">
    <img src={src} className="Photo__Image" alt={alt}/>
    <figcaption className="Photo__Caption">{caption}</figcaption>
    <fieldset className="Photo__Action">
      <label htmlFor={id}>
        <input type="checkbox" className="Photo__Action-Checkbox" id={id} name={id} value={caption}/>
        {selected && <span className="Photo__Action-Tick icon-checkmark"/>}
      </label>
    </fieldset>
  </figure>);
});
export default Photo;
