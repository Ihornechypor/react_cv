interface CvHeaderProps {
  name: string;
  surname: string;
}
const CvHeader = ({ name, surname }: CvHeaderProps) => (
  <>
    {name}
    {surname}
  </>
);
export default CvHeader;
