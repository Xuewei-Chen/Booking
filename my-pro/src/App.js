import './App.css';
import Header from './Components/Header';
import './cover.css';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Side from './Components/Side'
import Specials from './Components/Specials';
import Specials2 from './Components/Specials2';

function App() {
  return (
    <div className="App">
      <div className='gradient-bg'>
        <Header />
        <Main></Main>
      </div>
        <Side />
        <Specials />
        <Specials2 />
        <Footer></Footer>
    </div>
  );
}

export default App;
