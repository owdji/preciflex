import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Header from './components/Header';
import Footer from './components/Footer';
import MedtechHomepage from './pages/MedtechHomepage';
import LuxuryHomepage from './pages/LuxuryHomepage';
import Homepage from './pages/Homepage';
import Hyt from './pages/realizations/Hyt';
import RealizationTemplate from './pages/realizations/RealizationTemplate';

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
            <Route path="/medtech" element={<MedtechHomepage />} />
            <Route path="/luxury" element={<LuxuryWrapper />}>
              <Route path="hyt" element={<Hyt />} />
              <Route path=':id' element={<RealizationTemplate/>}/>
            </Route>
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
