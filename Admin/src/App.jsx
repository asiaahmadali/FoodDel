import NavBar from './components/NavBar/NavBar';
import SideBar from './components/sideBar/sidebar';

import './index.css';
function App() {
  return (
    <div>
      <NavBar />
      <hr />

      <div>
        <SideBar></SideBar>
      </div>
    </div>
  );
}

export default App;
