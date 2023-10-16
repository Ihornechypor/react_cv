import Aside from './components/Aside';
import Blockquote from './components/Blockquote';
import Education from './components/Education/index';
import CvHeader from './components/Header';
import { InfoFeaturesWrap, InfoHead, InfoList, InfoWrap } from './components/Info';
import { InfoFeatureBox } from './components/Info/InfoFeatureBox/index';
import { Footer, Main } from './components/Layout';
import { WorkSection } from './components/Work';
import { WorkList } from './components/Work/WorkList/index';
import { user } from './data';
import GlobalStyle from './styles/globalStyles';
import { A } from 'vite';
import { Page, View, Document } from '@react-pdf/renderer';

function App() {
  return (
    <Document>
      <Page size="A4">
        <View>
          <GlobalStyle />
          <Main>
            <CvHeader
              name={user.main.name}
              surname={user.main.surname}
              position={user.main.position}
              srcLink={user.main.srcLink}
            />
            <InfoWrap>
              <Aside>
                <InfoHead text="Contact" />
                <InfoList list={user.contact} />
                <InfoHead text="Skills" />
                <InfoFeaturesWrap>
                  {user.skills.map((item) => (
                    <InfoFeatureBox key={item.name} name={item.name} list={item.list} />
                  ))}
                </InfoFeaturesWrap>
                <InfoHead text="Projects" />
                <InfoList list={user.projects} />
                <InfoHead text="Languages" />
                <InfoList list={user.langs} />
              </Aside>
              <WorkSection>
                <InfoHead text="Work Experience" />
                <WorkList list={user.work} />
                <InfoHead text="Education" />
                <InfoFeaturesWrap>
                  <Education list={user.edu} />
                </InfoFeaturesWrap>
              </WorkSection>
            </InfoWrap>
            <Footer>
              <Blockquote text={user.rodo} />
            </Footer>
          </Main>
        </View>
      </Page>
    </Document>
  );
}

export default App;
