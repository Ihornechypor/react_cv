import * as Styled from './Header.styles';
interface CvHeaderProps {
  name: string;
  surname: string;
  position: string;
  about: string;
  srcLink: string;
}
const CvHeader = ({ name, surname, position, srcLink, about }: CvHeaderProps) => (
  <Styled.Header>
    <Styled.HeaderImg src={srcLink} alt="" />
    <Styled.HeaderInfo>
      <h1>
        {name} {surname}
      </h1>
      <h2>{position}</h2>
      <p>{about}</p>
    </Styled.HeaderInfo>
  </Styled.Header>
);
export default CvHeader;
