const Categories = ({value, onChangeCategory}) => {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <div className="categories">    
            <ul>
                {categories.map((categoryName, i) => (
                <li 
                    className={value === i ? 'active' : ''} 
                    onClick={() => onChangeCategory(i)} 
                    key={i}>
                    {categoryName}
                </li>
                ))}  
            </ul>
        </div>
    )
}

export default Categories;