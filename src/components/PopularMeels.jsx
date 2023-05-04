import { useState } from 'react';

function PopularMeels({meelsAndDrinksListState, setMeelsAndDrinksListState}) {

    const availableMeelsResult = meelsAndDrinksListState.map(meel => {
        return (
            <div className="popular-meels__main__section__meel" key={meel.id}>
                <div></div>
                <p>{meel.name}</p>
                <label htmlFor={meel.id}></label>
                <input type="checkbox" id={meel.id}/>
            </div>
        )
    })
    
    const choosedMeelsResult = meelsAndDrinksListState.filter(meel => {
        return meel.isPopular;
    }).map(meel => {
        return (
            <div className="popular-meels__main__section__meel" key={meel.id}>
                <div></div>
                <p>{meel.name}</p>
                <label htmlFor={meel.id}></label>
                <input type="checkbox" id={meel.id}/>
            </div>
        )
    })

    return (
        <div className="popular-meels">
            <h2>Популярные блюда</h2>
            <div className="popular-meels__main">
                <div className="popular-meels__main__section available__meels">
                    <h4>Доступные блюда</h4>
                    <div className="popular-meels__main__section__header">
                        <input type="text" placeholder="Введите блюдо"/>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="popular-meels__main__section__meels">
                        {availableMeelsResult}
                    </div>
                </div>
                <div className="popular-meels__main__section choosed__meels">
                    <h4>Доступные блюда</h4>
                    <div className="popular-meels__main__section__header">
                        <div></div>
                        <div></div>
                        <input type="text" placeholder="Введите блюдо"/>
                    </div>
                    <div className="popular-meels__main__section__meels">
                        {choosedMeelsResult}
                    </div>
                </div>
                <button>Сохранить</button>
            </div>
        </div>
    )
}

export default PopularMeels;