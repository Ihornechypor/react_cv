import { ReactNode } from 'react';
import * as Styled from './InfoFeaturesWrap.styles';
interface InfoFeaturesWrapProps {
  children: ReactNode;
}
export const InfoFeaturesWrap = ({ children }: InfoFeaturesWrapProps) => (
  <Styled.InfoFeaturesWrap>{children}</Styled.InfoFeaturesWrap>
);
