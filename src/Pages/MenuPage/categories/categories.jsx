import React, { useState } from 'react';
import Style from './categories.module.css';
import image from '../../../assets/MenuPage/catagories/Picture Food Web.png';
import image2 from '../../../assets/MenuPage/catagories/image2.png';
import image3 from '../../../assets/MenuPage/catagories/image3.png';
import image4 from '../../../assets/MenuPage/catagories/image4.png';
import image5 from '../../../assets/MenuPage/catagories/image5.png';
import OurMenu from '../ourMenu/ourMenu';

function Categories() {
    const catagories_ = {
        Appetizer: [
            {
                img: image,
                name: 'Crispy Calamari',
                about: "Crispy fried fresh calamari, served with the chef's signature spice sauce.",
                price: '16',
            },
            {
                img: image2,
                name: 'Caprese Bruschetta',
                about: "Slices of sweet cherry tomatoes, fresh mozzarella and basil on crunchy.",
                price: '16',
            },
            {
                img: image3,
                name: 'Cheese Plate',
                about: "A selection of high quality cheeses served with dried fruit, nuts.",
                price: '16',
            },
            {
                img: image4,
                name: 'Caprese Salad',
                about: "Slices of bright red tomatoes, fresh mozzarella and basil leaves drizzled.",
                price: '16',
            },
            {
                img: image5,
                name: 'Stuffed Mushrooms',
                about: "Mushrooms stuffed with the chef's signature blend of cheese and herbs.",
                price: '16',
            },
            {
                img: image,
                name: 'Oysters Rockefeller',
                about: "Scallops are stuffed with spinach, garlic and spice sauce, then grilled.",
                price: '16',
            }
        ],
        Salad: [
            {
                img: image,
                name: 'Crispy Calamari',
                about: "Crispy fried fresh calamari, served with the chef's signature spice sauce.",
                price: '16',
            },
            {
                img: image2,
                name: 'Caprese Bruschetta',
                about: "Slices of sweet cherry tomatoes, fresh mozzarella and basil on crunchy.",
                price: '16',
            },
            {
                img: image3,
                name: 'Cheese Plate',
                about: "A selection of high quality cheeses served with dried fruit, nuts.",
                price: '16',
            },
            {
                img: image4,
                name: 'Caprese Salad',
                about: "Slices of bright red tomatoes, fresh mozzarella and basil leaves drizzled.",
                price: '16',
            },
            {
                img: image5,
                name: 'Stuffed Mushrooms',
                about: "Mushrooms stuffed with the chef's signature blend of cheese and herbs.",
                price: '16',
            },
            {
                img: image,
                name: 'Oysters Rockefeller',
                about: "Scallops are stuffed with spinach, garlic and spice sauce, then grilled.",
                price: '16',
            }
        ],
        Pasta: [
            {
                img: image,
                name: 'Crispy Calamari',
                about: "Crispy fried fresh calamari, served with the chef's signature spice sauce.",
                price: '16',
            },
            {
                img: image2,
                name: 'Caprese Bruschetta',
                about: "Slices of sweet cherry tomatoes, fresh mozzarella and basil on crunchy.",
                price: '16',
            },
            {
                img: image3,
                name: 'Cheese Plate',
                about: "A selection of high quality cheeses served with dried fruit, nuts.",
                price: '16',
            },
            {
                img: image4,
                name: 'Caprese Salad',
                about: "Slices of bright red tomatoes, fresh mozzarella and basil leaves drizzled.",
                price: '16',
            },
            {
                img: image5,
                name: 'Stuffed Mushrooms',
                about: "Mushrooms stuffed with the chef's signature blend of cheese and herbs.",
                price: '16',
            },
            {
                img: image,
                name: 'Oysters Rockefeller',
                about: "Scallops are stuffed with spinach, garlic and spice sauce, then grilled.",
                price: '16',
            }
        ],
        Seafood: [
            {
                img: image,
                name: 'Crispy Calamari',
                about: "Crispy fried fresh calamari, served with the chef's signature spice sauce.",
                price: '16',
            },
            {
                img: image2,
                name: 'Caprese Bruschetta',
                about: "Slices of sweet cherry tomatoes, fresh mozzarella and basil on crunchy.",
                price: '16',
            },
            {
                img: image3,
                name: 'Cheese Plate',
                about: "A selection of high quality cheeses served with dried fruit, nuts.",
                price: '16',
            },
            {
                img: image4,
                name: 'Caprese Salad',
                about: "Slices of bright red tomatoes, fresh mozzarella and basil leaves drizzled.",
                price: '16',
            },
            {
                img: image5,
                name: 'Stuffed Mushrooms',
                about: "Mushrooms stuffed with the chef's signature blend of cheese and herbs.",
                price: '16',
            },
            {
                img: image,
                name: 'Oysters Rockefeller',
                about: "Scallops are stuffed with spinach, garlic and spice sauce, then grilled.",
                price: '16',
            }
        ],
        Dessert: [
            {
                img: image,
                name: 'Crispy Calamari',
                about: "Crispy fried fresh calamari, served with the chef's signature spice sauce.",
                price: '16',
            },
            {
                img: image2,
                name: 'Caprese Bruschetta',
                about: "Slices of sweet cherry tomatoes, fresh mozzarella and basil on crunchy.",
                price: '16',
            },
            {
                img: image3,
                name: 'Cheese Plate',
                about: "A selection of high quality cheeses served with dried fruit, nuts.",
                price: '16',
            },
            {
                img: image4,
                name: 'Caprese Salad',
                about: "Slices of bright red tomatoes, fresh mozzarella and basil leaves drizzled.",
                price: '16',
            },
            {
                img: image5,
                name: 'Stuffed Mushrooms',
                about: "Mushrooms stuffed with the chef's signature blend of cheese and herbs.",
                price: '16',
            },
            {
                img: image,
                name: 'Oysters Rockefeller',
                about: "Scallops are stuffed with spinach, garlic and spice sauce, then grilled.",
                price: '16',
            }
        ],
        Beverages: [
            {
                img: image,
                name: 'Crispy Calamari',
                about: "Crispy fried fresh calamari, served with the chef's signature spice sauce.",
                price: '16',
            },
            {
                img: image2,
                name: 'Caprese Bruschetta',
                about: "Slices of sweet cherry tomatoes, fresh mozzarella and basil on crunchy.",
                price: '16',
            },
            {
                img: image3,
                name: 'Cheese Plate',
                about: "A selection of high quality cheeses served with dried fruit, nuts.",
                price: '16',
            },
            {
                img: image4,
                name: 'Caprese Salad',
                about: "Slices of bright red tomatoes, fresh mozzarella and basil leaves drizzled.",
                price: '16',
            },
            {
                img: image5,
                name: 'Stuffed Mushrooms',
                about: "Mushrooms stuffed with the chef's signature blend of cheese and herbs.",
                price: '16',
            },
            {
                img: image,
                name: 'Oysters Rockefeller',
                about: "Scallops are stuffed with spinach, garlic and spice sauce, then grilled.",
                price: '16',
            }
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState('Appetizer');
    const [foods, setFoods] = useState(catagories_['Appetizer']);

    const handleFoods = (category) => {
        setSelectedCategory(category);
        setFoods(catagories_[category]);
    };

    return (
        <section className={Style.container}>
            <div className={Style.categories}>
                <h2>Categories</h2>
                <ul>
                    {Object.keys(catagories_).map((category, index) => (
                        <li onClick={() => handleFoods(category)} key={index}>
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
            <OurMenu object={foods} category={selectedCategory} />
        </section>
    );
}

export default Categories;
