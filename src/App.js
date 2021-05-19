import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Natours from './pages/Natours';
import BpScore from './pages/BpScore';
import ThreeCards from './pages/ThreeCards';
import ScenicOdyssey from './pages/ScenicOdyssey';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';

const Section = styled.section`
  overflow-x: hidden;
`;

function App() {
  let location = useLocation();

  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/natours" component={Natours} />
          <Route path="/bpscore" component={BpScore} />
          <Route path="/threecards" component={ThreeCards} />
          <Route path="/scenicodyssey" component={ScenicOdyssey} />
        </Switch>
      </AnimatePresence>
    </Section>
  );
}

export default App;
