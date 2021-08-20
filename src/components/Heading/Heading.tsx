import { createElement } from 'react';

type HeadingProps = {
  level: number;
  children: string;
};

const Heading = ({ level, children }: HeadingProps) => {
  return createElement(`h${level}`, {
    children,
  });
};

Heading.defaultProps = {
  level: 2,
  children: '',
};

export default Heading;
