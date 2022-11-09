import {Categories, SortPopup, PizzaBlock, Skeleton} from '../components/index';
import { useState, useEffect, useContext } from 'react';
import { Pagination } from '../components/Pagination';
import { SearchContext } from '../App';

export const Home = () => {
    const {searchValue} = useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortType, setSortType] = useState({
        name: 'популярности', 
        sortProperty: 'rating',
    });
  
    useEffect(() => {
        setIsLoading(true);

        const sortBy = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        fetch(
            `https://635f9b813e8f65f283b700ad.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
        )
        .then((res) => res.json())
        .then((arr) => {
          setItems(arr);
          setIsLoading(false);
        });
        window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, currentPage]);

    const pizzas = items.map((obj) => <PizzaBlock {...obj} key={obj.id}/>);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)}/>
                <SortPopup value={sortType} onChangeSort={(id) => setSortType(id)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{isLoading ? skeletons : pizzas}</div>
           <Pagination onChangePage={(number) => setCurrentPage(number)}/>
        </div>
    );
};