import './App.css';
import MenuBar from './components/menu/MenuBar';
import {useMyContext} from './components/store/CreateContext'

function App() {

  const {openNav} = useMyContext()

  return (
    <div className="App">

    <span className={openNav ? 'menu1' : 'menu2'}>
    <MenuBar/>
       </span>

    <span className={openNav ? 'main-deal1' : 'main-deal2'}>
        <span className="ii"> he</span>
        <span className="pp"> she</span>
      </span>

    </div>
  );
}

export default App;
