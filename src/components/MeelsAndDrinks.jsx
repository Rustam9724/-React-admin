import { useState, useRef } from 'react';

function MeelsAndDrinks({meelsAndDrinksListState, setMeelsAndDrinksListState, setOpenComponent}) {
    const [searchValue, setSearchValue] = useState(''); 

    function editMeelAndDrinkElemen(event, elem) {
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

    function editClickHandler(elem) {
        setMeelsAndDrinksListState(meelsAndDrinksListState.map(ctg => {
            if (ctg.id === elem.id) {
                return {...ctg, isEdit: true};
            } else {
                return ctg;
            }
        }))
    }

    function editBlurHandler(elem) {
        setMeelsAndDrinksListState(meelsAndDrinksListState.map(ctg => {
            if (ctg.id === elem.id) {
                return {...ctg, isEdit: false};
            } else {
                return ctg;
            }
        }))
    }

    function editEnterHandler(event, elem) {
        if (event.key === 'Enter') {
            editBlurHandler(elem);
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
                        !elem.isEdit ? <p>{elem.name}</p> 
                        : <input 
                            type="text" 
                            value={elem.name} 
                            onChange={event => editMeelAndDrinkElemen(event, elem, elem.id)} 
                            onBlur={() => editBlurHandler(elem)} 
                            autoFocus 
                            maxLength="20"
                            onKeyDown={event => editEnterHandler(event, elem)}
                        />
                    }
                </div>
                <div className="meels-and-drinks__main__list__section__price">
                    {elem.price}
                </div>
                <div className="meels-and-drinks__main__list__section__status">
                    <div className={elem.status ? "active" : "passive"}>{elem.status ? "Активно" : 'Неактивно'}</div>
                </div>
                <div className="meels-and-drinks__main__list__section__last-change">{elem.lastChange}</div>
                <div className="meels-and-drinks__main__list__section__actions">
                    <div onClick={() => editClickHandler(elem)}></div>
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
                            <div className={meelsandDrinksResult.length > 10 ? 'dark' : null} onClick={scrollUpFunc} ref={mainListWrapper}></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="meels-and-drinks__main__header__section">
                        <p>Цена</p>
                        <div>
                            <div className={meelsandDrinksResult.length > 10 ? 'dark' : null} onClick={scrollUpFunc} ref={mainListWrapper}></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="meels-and-drinks__main__header__section">
                        <p>СТАТУС</p>
                        <div>
                            <div className={meelsandDrinksResult.length > 10 ? 'dark' : null}></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="meels-and-drinks__main__header__section">
                        <p>ПОСЛЕДНЕЕ ИЗМЕНЕНИЕ</p>
                        <div>
                            <div className={meelsandDrinksResult.length > 10 ? 'dark' : null}></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="meels-and-drinks__main__header__section">
                        <p>ДЕЙСТВИЯ</p>
                    </div>
                </div>
                <div className="meels-and-drinks__main__list">
                    <div className="meels-and-drinks__main__list__wrapper">
                        {meelsandDrinksResult}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeelsAndDrinks;