import {Categories, SortPopup, PizzaBlock, Skeleton} from '../components/index';
import { useState, useEffect } from 'react';

export const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch('https://635f9b813e8f65f283b700ad.mockapi.io/items')
        .then((res) => res.json())
        .then((arr) => {
          setItems(arr);
          setIsLoading(false);
        });
    }, []);

    return (
        <>
            <div className="content__top">
                <Categories/>
                <SortPopup/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading 
                ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>) 
                : items.map((obj) => (<PizzaBlock {...obj} key={obj.id}/>))
                }  
            </div>
        </>
    );
};