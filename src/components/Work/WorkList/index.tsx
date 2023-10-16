import * as Styled from './WorkList.styles';
interface WorkListProps {
  list: {
    position: string;
    date: string;
    info: { name: string; link?: string; linkName?: string };
    tasks?: string[];
  }[];
}
export const WorkList = ({ list }: WorkListProps) => (
  <Styled.WorkList>
    {list.map((item) => (
      <li key={item.position}>
        <h3>{item.position}</h3>
        <i>{item.date}</i>
        <p>
          {item.info.name}{' '}
          {item.info.link ? (
            <a href={item.info.link} target="_blank" rel="noreferrer">
              ({item.info.linkName ? item.info.linkName : item.info.link})
            </a>
          ) : null}
        </p>
        {item.tasks ? (
          <ul>
            {item.tasks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : null}
      </li>
    ))}
  </Styled.WorkList>
);
