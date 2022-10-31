import { useState, useEffect } from 'react';
import {Header, Categories, SortPopup, PizzaBlock} from './components/index';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://635f9b813e8f65f283b700ad.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <SortPopup/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              items.map((obj) => (
                <PizzaBlock {...obj} key={obj.id}/>
              ))
            }  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
