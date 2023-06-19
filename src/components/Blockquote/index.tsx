interface BlockquoteProps {
  text: string;
}
const Blockquote = ({ text }: BlockquoteProps) => <blockquote className="rodo">{text}</blockquote>;
export default Blockquote;
