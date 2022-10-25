import { useState } from "react";

const Categories = ({items, onClickItem}) => {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (i) => {
        setActiveItem(i)
    }

    return (
        <div className="categories">    
            <ul>
                <li 
                    className={activeItem === null ? 'active' : ''} 
                    onClick={() => onSelectItem(null)}>Все
                </li>
                {items.map((item, i) => 
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