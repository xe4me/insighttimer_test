import React, {ButtonHTMLAttributes, FunctionComponent, memo} from 'react';
import './Button.scss';

interface IProps {
  color?: 'primary' | 'secondary'
}

/*@Button
  A button component with defined variants
* */
const Button: FunctionComponent<IProps & ButtonHTMLAttributes<any>> = memo(({children, className, color = 'primary', ...props}) => {
  return (<button className={`Button Button--${color}`} {...props}>{children}</button>);
});
export default Button;
