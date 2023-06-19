import { ReactNode } from 'react';
import * as Styled from './InfoWrap.styles';

interface InfoWrapProps {
  children: ReactNode;
}
export const InfoWrap = ({ children }: InfoWrapProps) => <Styled.InfoWrap>{children}</Styled.InfoWrap>;
