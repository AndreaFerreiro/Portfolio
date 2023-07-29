import '../styles/core/reset.scss';
import '../styles/layout/main.scss';
import {useLocation, matchPath} from 'react-router';
import {Link, Route, Routes, useParams} from 'react-router-dom';
import Header from './Header';
import Aside from './Aside';
import Bio from './Bio';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';
function App() {
  return (
    <div>
      <Header></Header>
      <main className='main'>
        <Routes>
          <Route 
            path='/'
            element={
              <Aside/>
            }>
          </Route>
          <Route
            path='/Bio'
            element={
              <Bio/>
            }>
          </Route>
          <Route
            path='/Contact'
            element={
              <Contact/>
            }>
          </Route>
          <Route
            path='/Projects'
            element={
              <Projects/>
            }>
          </Route>
      </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
