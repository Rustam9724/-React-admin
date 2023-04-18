import { useState, useRef } from 'react';

function Categories({categoriesListState, setCategoriesListState, setOpenComponent}) {
    const [searchValue, setSearchValue] = useState(''); 
    // const [offsetTopValue, setOffsetTopValue] = useState(0);

    function editCategory(event, elem) {
        const date = new Date();

        let day = date.getDate();
        if (`${day}`.length === 1) {
            day = `0${day}`
        }

        let month = date.getMonth() + 1;
        if (`${month}`.length === 1) {
            month = `0${month}`
        } 

        setCategoriesListState(categoriesListState.map(ctg => {
            if (ctg.id === elem.id) {
                return {...ctg, name: event.target.value, lastChange: `${day}.${month}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`};
            } else {
                return ctg;
            }
        }))
    }

    function editClickHandler(elem) {
        setCategoriesListState(categoriesListState.map(ctg => {
            if (ctg.id === elem.id) {
                return {...ctg, isEdit: true};
            } else {
                return ctg;
            }
        }))
    }

    function editBlurHandler(elem) {
        setCategoriesListState(categoriesListState.map(ctg => {
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
        setCategoriesListState(categoriesListState.filter(ctg => {
            return ctg.id !== elem.id;
        }))
    }

    let categoriesResult;
    if (searchValue) {
        categoriesResult = categoriesListState.filter(ctg => {
            return ctg.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
        })
    } else {
        categoriesResult = categoriesListState;
    }

    const mainListWrapper = useRef(null);

    function scrollUpFunc() {
        mainListWrapper.current.backgroundColor = 'red';
    }

    categoriesResult = categoriesResult.map(elem => {
        return (
            <div className="categories__main__list__section" key={elem.id}>
                <div className="categories__main__list__section__name">
                    <div ></div>
                    {
                        !elem.isEdit ? <p>{elem.name}</p> 
                        : <input 
                            type="text" 
                            value={elem.name} 
                            onChange={event => editCategory(event, elem, elem.id)} 
                            onBlur={() => editBlurHandler(elem)} 
                            autoFocus 
                            maxLength="20"
                            onKeyDown={event => editEnterHandler(event, elem)}
                        />
                    }
                </div>
                <div className="categories__main__list__section__status">
                    <div className={elem.status ? "active" : "passive"}>{elem.status ? "Активно" : 'Неактивно'}</div>
                </div>
                <div className="categories__main__list__section__last-change">{elem.lastChange}</div>
                <div className="categories__main__list__section__actions">
                    <div onClick={() => editClickHandler(elem)}></div>
                    <div onClick={() => deleteCategory(elem)}></div>
                </div>
            </div>
        )
            
    }) 

    return (
        <div className="categories">
            <h2>Категории</h2>
            <div className="categories__search-and-add">
                <div className="categories__search-and-add__search">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.33333" cy="8.33333" r="5.83333" stroke="#4B465C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="8.33333" cy="8.33333" r="5.83333" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.5 17.5L12.5 12.5" stroke="#4B465C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.5 17.5L12.5 12.5" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input type="text" placeholder="Поиск" value={searchValue} onChange={event => setSearchValue(event.target.value)}/>
                </div>
                <div className="categories__search-and-add_add" onClick={() => setOpenComponent('AddCategory')}>
                    <div></div>
                    <p>Добавить категорию</p>
                </div>
            </div>
            <div className="categories__main">
                <div className="categories__main__header">
                    <div className="categories__main__header__section">
                        <p>НАЗВАНИЕ</p>
                        <div>
                            <div className={categoriesResult.length > 10 ? 'dark' : null} onClick={scrollUpFunc} ref={mainListWrapper}></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="categories__main__header__section">
                        <p>СТАТУС</p>
                        <div>
                            <div className={categoriesResult.length > 10 ? 'dark' : null}></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="categories__main__header__section">
                        <p>ПОСЛЕДНЕЕ ИЗМЕНЕНИЕ</p>
                        <div>
                            <div className={categoriesResult.length > 10 ? 'dark' : null}></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="categories__main__header__section">
                        <p>ДЕЙСТВИЯ</p>
                    </div>
                </div>
                <div className="categories__main__list">
                    <div className="categories__main__list__wrapper">
                        {categoriesResult}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;