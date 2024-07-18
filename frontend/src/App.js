import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Header from './components/Header';
import Footer from './components/Footer';
import MedtechHomepage from './pages/MedtechHomepage';
import LuxuryHomepage from './pages/LuxuryHomepage';
import Homepage from './pages/Homepage';
import Hyt from './pages/realizations/Hyt';
import RealizationTemplate from './pages/realizations/RealizationTemplate';
import Services from './pages/Services';
import Competences from './pages/Competences';
import About from './pages/About';
import Contact from './pages/Contact';
import LightTech from './pages/realizations/LightTech';
import FluidicTech from './pages/realizations/FluidicTech';

// apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/homePage" element={<Homepage />} />
            <Route path="/medtech" element={<MedtechHomepage />} />
            <Route path="/luxury" element={<LuxuryWrapper />}>
              <Route index element={<LuxuryHomepage />} />
              <Route path="hyt" element={<Hyt />} />
              <Route path='light-tech' element={<LightTech/>}/>
              <Route path='fluidic-tech' element={<FluidicTech/>}/>
              <Route path=':id' element={<RealizationTemplate/>}/>
            </Route>
            <Route path='/services' element={<Services/>}/>
            <Route path='/competences' element={<Competences/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          <Footer />
        </div>
      </ApolloProvider>
    </Router>
  );
}

const LuxuryWrapper = () => (
  <div>
    <Outlet />
  </div>
);

export default App;
