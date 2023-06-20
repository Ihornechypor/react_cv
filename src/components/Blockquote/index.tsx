import { useState } from 'react';
import * as Styled from './Blockquote.styles';

interface BlockquoteProps {
  text: string;
}

const Blockquote = ({ text }: BlockquoteProps) => {
  const [rodo, setText] = useState(text);

  const changeRodo = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  return (
    <>
      <input type="text" onChange={changeRodo} className="noPrint" placeholder="change rodo" />
      <Styled.Blockquote>{rodo}</Styled.Blockquote>
    </>
  );
};
export default Blockquote;
