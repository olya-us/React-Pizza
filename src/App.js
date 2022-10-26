import {Header, Categories, SortPopup, PizzaBlock} from './components/index';

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories 
              items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
            />
            <SortPopup/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
              <PizzaBlock title="Мексиканская" price={500}/>
              <PizzaBlock title="Мясная" price={350}/>
              <PizzaBlock title="Мясная" price={450}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
