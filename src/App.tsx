import Aside from './components/Aside';
import Blockquote from './components/Blockquote';
import CvHeader from './components/Header';
import { InfoFeaturesWrap, InfoHead, InfoList, InfoText, InfoWrap } from './components/Info';
import { InfoFeatureBox } from './components/Info/InfoFeatureBox/index';
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
            <InfoList
              list={[
                { icon: 'bubble', link: '+48795439690', text: '+48795439690' },
                { icon: 'address-book', link: 'mailto:igornetchipor@gmail.com', text: 'igornetchipor@gmail.com' },
                { icon: 'earth', text: 'Poland, Warszawa' },
                {
                  icon: 'linkedin',
                  link: 'https://www.linkedin.com/in/ihor-nechypor-45878292/',
                  text: 'LinkedIn',
                },
              ]}
            />
            <InfoHead text="About" />
            <InfoText
              text="I am front-end developer with more then four years of experience in creating responsive landing pages,
              websites and emails."
            />
            <InfoHead text="Skills" />
            <InfoFeaturesWrap>
              <InfoFeatureBox
                name="Technologies and Libraries"
                list={[
                  { text: 'HTML5' },
                  { text: 'CSS3/SCSS' },
                  { text: 'JavaScript' },
                  { text: 'TypeScript' },
                  { text: 'React' },
                  { text: 'Git' },
                ]}
              />
              <InfoFeatureBox
                name="React Libraries and Frameworks"
                list={[{ text: 'Gatsby' }, { text: 'Styled Components' }, { text: 'MUI' }]}
              />
            </InfoFeaturesWrap>
            <InfoFeatureBox
              name="HTML/CSS/JS Frameworks"
              list={[{ text: 'Bootstrap' }, { text: 'Zurb Foundation' }, { text: 'Zurb Foundation for emails' }]}
            />
            <InfoFeatureBox
              name="Additional skills"
              list={[
                { text: 'Gulp / Parcel' },
                { text: 'NPM / YARN' },
                { text: 'Emmet/ REGEX' },
                { text: 'Jira/YouTrack' },
              ]}
            />
            <InfoHead text="Projects" />
            <InfoList
              list={[
                { icon: 'sphere', link: 'https://plejground.pl/', text: 'https://plejground.pl/' },
                { icon: 'sphere', link: 'https://falou.pl/', text: 'https://falou.pl/' },
                {
                  icon: 'sphere',
                  link: 'https://www.serekwiejskipiatnica.pl/',
                  text: 'https://www.serekwiejskipiatnica.pl/',
                },
                { icon: 'sphere', link: 'https://doradztwomediowe.pl/', text: 'https://doradztwomediowe.pl/' },
                { icon: 'sphere', link: 'https://razemnampodrodze.pl/', text: 'https://razemnampodrodze.pl/' },
                {
                  icon: 'sphere',
                  link: 'https://koktajle.piatnica.pl/',
                  text: 'https://koktajle.piatnica.pl/',
                },
              ]}
            />
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
