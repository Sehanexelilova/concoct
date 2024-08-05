import React from 'react';
import Style from './ourMenu.module.css';

function OurMenu({ object, category }) {
    return (
        <section className={Style.container}>
            <div className={Style.header_Search}>
                <h3>Our Menu</h3>
                <div className={Style.searchInput}>
                    <input type="search" placeholder='Search here' />
                </div>
            </div>

            <h2>{category}</h2> {/* Dinamik başlık */}

            <div className={Style.boxs}>
                {object.map((food, index) => (
                    <div className={Style.box} key={index}>
                        <img src={food.img} alt={food.name} />
                        <div className={Style.name}>
                            <h2>{food.name}</h2>
                            <span>{`$${food.price}`}</span>
                        </div>
                        <p>{food.about}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OurMenu;
