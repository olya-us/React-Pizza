import { useState } from "react";

const Categories = () => {
    const [activeItem, setActiveItem] = useState(0);

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">    
            <ul>
                {categories.map((item, i) => 
                <li 
                    className={activeItem === i ? 'active' : ''} 
                    onClick={() => onSelectItem(i)} 
                    key={i}>
                    {item}
                </li>
                )}  
            </ul>
        </div>
    )
}

export default Categories;