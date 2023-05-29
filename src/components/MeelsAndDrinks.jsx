import { useState, useRef } from 'react';

function MeelsAndDrinks({meelsAndDrinksListState, setMeelsAndDrinksListState, setOpenComponent}) {
    const [searchValue, setSearchValue] = useState(''); 

    function editMeelAndDrinkName(event, elem) {
        const date = new Date();

        let day = date.getDate();
        if (`${day}`.length === 1) {
            day = `0${day}`
        }

        let month = date.getMonth() + 1;
        if (`${month}`.length === 1) {
            month = `0${month}`
        } 

        setMeelsAndDrinksListState(meelsAndDrinksListState.map(ctg => {
            if (ctg.id === elem.id) {
                return {...ctg, name: event.target.value, lastChange: `${day}.${month}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`};
            } else {
                return ctg;
            }
        }))
    }

    function editMeelAndDrinkPrice(event, elem) {
        const date = new Date();

        let day = date.getDate();
        if (`${day}`.length === 1) {
            day = `0${day}`
        }

        let month = date.getMonth() + 1;
        if (`${month}`.length === 1) {
            month = `0${month}`
        } 

        setMeelsAndDrinksListState(meelsAndDrinksListState.map(ctg => {
            if (ctg.id === elem.id) {
                return {...ctg, price: event.target.value, lastChange: `${day}.${month}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`};
            } else {
                return ctg;
            }
        }))
    }

    function editNameHandler(elem) {
        setMeelsAndDrinksListState(meelsAndDrinksListState.map(ctg => {
            if (ctg.id === elem.id) {
                return {...ctg, isNameEdit: true};
            } else {
                return ctg;
            }
        }))
    }

    function editNameBlurHandler(elem) {
        setMeelsAndDrinksListState(meelsAndDrinksListState.map(ctg => {
            if (ctg.id === elem.id) {
                return {...ctg, isNameEdit: false, isPriceEdit: true};
            } else {
                return ctg;
            }
        }))
    }

    function editPriceBlurHandler(elem) {
        setMeelsAndDrinksListState(meelsAndDrinksListState.map(ctg => {
            if (ctg.id === elem.id) {
                return {...ctg, isPriceEdit: false};
            } else {
                return ctg;
            }
        }))
    }

    function editEnterHandler(event, elem) {
        if (event.key === 'Enter') {
            if (elem.isNameEdit) {
                editNameBlurHandler(elem);
            } else if (elem.isPriceEdit) {
                editPriceBlurHandler(elem);
            }
        }
    }

    function deleteCategory(elem) {
        setMeelsAndDrinksListState(meelsAndDrinksListState.filter(ctg => {
            return ctg.id !== elem.id;
        }))
    }

    let meelsandDrinksResult;
    if (searchValue) {
        meelsandDrinksResult = meelsAndDrinksListState.filter(ctg => {
            return ctg.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
        })
    } else {
        meelsandDrinksResult = meelsAndDrinksListState;
    }

    const mainListWrapper = useRef(null);

    function scrollUpFunc() {
        mainListWrapper.current.backgroundColor = 'red';
    }

    meelsandDrinksResult = meelsandDrinksResult.map(elem => {
        return (
            <div className="meels-and-drinks__main__list__section" key={elem.id}>
                <div className="meels-and-drinks__main__list__section__name">
                    <div ></div>
                    {
                        !elem.isNameEdit ? <p>{elem.name}</p> 
                        : <input 
                            type="text" 
                            value={elem.name} 
                            onChange={event => editMeelAndDrinkName(event, elem)} 
                            onBlur={() => editNameBlurHandler(elem)} 
                            autoFocus 
                            maxLength="20"
                            onKeyDown={event => editEnterHandler(event, elem)}
                        />
                    }
                </div>
                <div className="meels-and-drinks__main__list__section__price">
                    {
                        !elem.isPriceEdit ? <>{elem.price}</> 
                        : <input 
                            type="number"
                            value={elem.price < 0 ? 0 : elem.price}
                            onChange={event => editMeelAndDrinkPrice(event, elem)}
                            onBlur={() => editPriceBlurHandler(elem)}
                            onKeyDown={event => editEnterHandler(event, elem)}
                            autoFocus
                        />
                    }
                </div>
                <div className="meels-and-drinks__main__list__section__status">
                    <div className={elem.status ? "active" : "passive"}>{elem.status ? "Активно" : 'Неактивно'}</div>
                </div>
                <div className="meels-and-drinks__main__list__section__last-change">{elem.lastChange}</div>
                <div className="meels-and-drinks__main__list__section__actions">
                    <div onClick={() => editNameHandler(elem)}></div>
                    <div onClick={() => deleteCategory(elem)}></div>
                </div>
            </div>
        )
            
    }) 

    return (
        <div className="meels-and-drinks">
            <h2>Блюда и напитки</h2>
            <div className="meels-and-drinks__search-and-add">
                <div className="meels-and-drinks__search-and-add__search">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.33333" cy="8.33333" r="5.83333" stroke="#4B465C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="8.33333" cy="8.33333" r="5.83333" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.5 17.5L12.5 12.5" stroke="#4B465C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.5 17.5L12.5 12.5" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input type="text" placeholder="Поиск" value={searchValue} onChange={event => setSearchValue(event.target.value)}/>
                </div>
                <div className="meels-and-drinks__search-and-add_add" onClick={() => setOpenComponent('AddMeel')}>
                    <div></div>
                    <p>Добавить блюдо</p>
                </div>
            </div>
            <div className="meels-and-drinks__main">
                <div className="meels-and-drinks__main__header">
                    <div className="meels-and-drinks__main__header__section">
                        <p>НАЗВАНИЕ</p>
                        <div>
                        </div>
                    </div>
                    <div className="meels-and-drinks__main__header__section">
                        <p>ЦЕНА, руб</p>
                    </div>
                    <div className="meels-and-drinks__main__header__section">
                        <p>СТАТУС</p>
                    </div>
                    <div className="meels-and-drinks__main__header__section">
                        <p>ПОСЛЕДНЕЕ ИЗМЕНЕНИЕ</p>
                    </div>
                    <div className="meels-and-drinks__main__header__section">
                        <p>ДЕЙСТВИЯ</p>
                    </div>
                </div>
                <div className="meels-and-drinks__main__list">
                    {meelsandDrinksResult}
                </div>
            </div>
        </div>
    )
}

export default MeelsAndDrinks;