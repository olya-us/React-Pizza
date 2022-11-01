import {Header} from './components/index';
import {Home} from './pages/Home';
import {Cart} from './pages/Cart';
import {NotFound} from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [searchValue, setSearchValue] = useState();

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="content">
          <Routes>
            <Route path='/' element={<Home searchValue={searchValue}/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
