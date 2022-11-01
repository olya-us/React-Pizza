import {Categories, SortPopup, PizzaBlock, Skeleton} from '../components/index';
import { useState, useEffect } from 'react';

export const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({
        name: 'популярности', 
        sortProperty: 'rating',
    });
  
    useEffect(() => {
        setIsLoading(true);

        const sortBy = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';

        fetch(
            `https://635f9b813e8f65f283b700ad.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
        )
        .then((res) => res.json())
        .then((arr) => {
          setItems(arr);
          setIsLoading(false);
        });
        window.scrollTo(0, 0);
    }, [categoryId, sortType]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)}/>
                <SortPopup value={sortType} onChangeSort={(id) => setSortType(id)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading 
                ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>) 
                : items.map((obj) => (<PizzaBlock {...obj} key={obj.id}/>))
                }  
            </div>
        </div>
    );
};