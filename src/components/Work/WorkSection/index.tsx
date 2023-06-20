import { ReactNode } from 'react';
import * as Styled from './WorkSection.styles';
interface WorkSectionProps {
  children: ReactNode;
}

export const WorkSection = ({ children }: WorkSectionProps) => <Styled.WorkSection>{children}</Styled.WorkSection>;
