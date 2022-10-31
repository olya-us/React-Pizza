import {Header, Categories, SortPopup, PizzaBlock} from './components/index';

import pizzas from './assets/pizzas.json';

const App = () => {
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
              pizzas.map((obj) => (
                <PizzaBlock {...obj}/>
              ))
            }  
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
