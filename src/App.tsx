import Aside from './components/Aside';
import Blockquote from './components/Blockquote';
import CvHeader from './components/Header';
import { InfoHead, InfoList, InfoWrap } from './components/Info';
import { Footer, Main } from './components/Layout';
import GlobalStyle from './styles/globalStyles';
function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <CvHeader
          name="Ihor"
          surname="Nechypor"
          position="Front-End Developer"
          srcLink="https://i.ibb.co/9VT55Yj/userss.jpg"
        />
        <InfoWrap>
          <Aside>
            <InfoHead text="Contact" />
            <InfoList list={[{ icon: 'bubble', link: '+48795439690', text: '+48795439690' }]} />
          </Aside>
          <section></section>
        </InfoWrap>
        <Footer>
          <Blockquote text="Wyrażam zgodę na przetwarzanie moich danych osobowych przez Some S.A. w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko." />
        </Footer>
      </Main>
    </>
  );
}

export default App;
