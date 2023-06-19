import { ReactNode } from 'react';
import * as Styled from './Aside.styles';

interface AsideProps {
  children: ReactNode;
}

const Aside = ({ children }: AsideProps) => <Styled.Aside>{children}</Styled.Aside>;
export default Aside;
