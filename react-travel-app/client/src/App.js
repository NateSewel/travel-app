import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Post from './pages/Post';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';


// Body sections that holds my pages
const App = () => {
  return (
    <>

      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={'/'} element={<Dashboard/>}/>
          <Route path={'/posts/:id'} element={<Post/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App
