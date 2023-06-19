import * as Styled from './Header.styles';
interface CvHeaderProps {
  name: string;
  surname: string;
  position: string;
  srcLink: string;
}
const CvHeader = ({ name, surname, position, srcLink }: CvHeaderProps) => (
  <Styled.Header>
    <Styled.HeaderImg src={srcLink} alt="" />
    <Styled.HeaderInfo>
      <h1>
        {name} {surname}
      </h1>
      <h2>{position}</h2>
    </Styled.HeaderInfo>
  </Styled.Header>
);
export default CvHeader;
