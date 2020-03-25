import React, {FunctionComponent, memo} from 'react';
import './Container.scss';

interface IProps {

}

const Container: FunctionComponent<IProps> = memo(({children}) => {
  return (<div className="Container">{children}</div>);
});
export default Container;
