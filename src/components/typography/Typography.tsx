import React, {FunctionComponent} from 'react';
import './Typography.scss';


export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface IProps {
  variant?: TypographyVariant
}

const Typography: FunctionComponent<IProps> = ({variant: El = 'h3', children}) => {
  return <El className={`Typography Typography--${El}`}>{children}
  </El>
};

export default Typography;
