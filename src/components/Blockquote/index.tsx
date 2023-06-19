import * as Styled from './Blockquote.styles';

interface BlockquoteProps {
  text: string;
}

const Blockquote = ({ text }: BlockquoteProps) => <Styled.Blockquote>{text}</Styled.Blockquote>;
export default Blockquote;
