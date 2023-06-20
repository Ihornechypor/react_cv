import * as Styled from './Education.styles';

interface EducationProps {
  list: { name: string; link: string; data: { date: string; grade: string }[] }[];
}
const Education = ({ list }: EducationProps) =>
  list.map((item) => (
    <Styled.Education key={item.name}>
      <h3>
        <a href={item.link}>{item.name}</a>
      </h3>
      {item.data.map((dt) => (
        <ul key={dt.grade}>
          <li>
            <i>{dt.date}</i>
          </li>
          <li>{dt.grade}</li>
        </ul>
      ))}
    </Styled.Education>
  ));
export default Education;
