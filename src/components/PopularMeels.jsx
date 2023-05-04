import { useState } from 'react';

function PopularMeels({meelsAndDrinksListState, setMeelsAndDrinksListState}) {

    const availableMeelsResult = meelsAndDrinksListState.map(meel => {
        return (
            <div className="marketing__main__section__meel" key={meel.id}>
                <div></div>
                <p>{meel.name}</p>
                <input type="checkbox" id={meel.id} hidden/>
                <label htmlFor={meel.id}></label>
            </div>
        )
    })
    
    const choosedMeelsResult = meelsAndDrinksListState.filter(meel => {
        return meel.isPopular;
    }).map(meel => {
        return (
            <div className="marketing__main__section__meel" key={meel.id}>
                <div></div>
                <p>{meel.name}</p>
                <label htmlFor={meel.id}></label>
                <input type="checkbox" id={meel.id}/>
            </div>
        )
    })

    return (
        <div className="marketing">
            <h2>Популярные блюда</h2>
            <div className="marketing__main">
                <div className="marketing__main__section available__meels">
                    <h4>Доступные блюда</h4>
                    <div className="marketing__main__section__header">
                        <input type="text" placeholder="Введите блюдо"/>
                        <div className="marketing__main__section__header__one-arrow"></div>
                        <div className="marketing__main__section__header__two-arrow"></div>
                    </div>
                    <div className="marketing__main__section__meels">
                        {availableMeelsResult}
                    </div>
                </div>
                <div className="marketing__main__section choosed__meels">
                    <h4>Доступные блюда</h4>
                    <div className="marketing__main__section__header">
                        <div className="marketing__main__section__header__two-arrow"></div>
                        <div className="marketing__main__section__header__one-arrow"></div>
                        <input type="text" placeholder="Введите блюдо"/>
                    </div>
                    <div className="marketing__main__section__meels">
                        {choosedMeelsResult}
                    </div>
                    <button>Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default PopularMeels;