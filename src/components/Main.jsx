import { useState } from 'react';
import Summary from './Summary.jsx';
import Categories from './Categories';
import AddCategory from './AddCategory.jsx';
import {} from 'nanoid';
import Footer from './Footer';
import { categoriesList, meelsAndDrinksList } from './object';
import MeelsAndDrinks from './MeelsAndDrinks.jsx';
import AddMeel from './AddMeel.jsx';
import CodeGeneration from './CodeGeneration.jsx';


function Main() {
    const [isMenuItemOpen, setIsMenuItemOpen] = useState(false);
    const [isTablesItemOpen, setIsTablesItemOpen] = useState(false);
    const [isMarketingItemOpen, setIsMarketingItemOpen] = useState(false);
    const [isStatisticsItemOpen, setIsStatisticsItemOpen] = useState(false);
    const [isSettingsItemOpen, setIsSettingsItemOpen] = useState(false);
    const [isSubscribeItemOpen, setIsSubscribeItemOpen] = useState(false);
    const [openComponent, setOpenComponent] = useState('Summary');
    const [categoriesListState, setCategoriesListState] = useState(categoriesList)
    const [meelsAndDrinksListState, setMeelsAndDrinksListState] = useState(meelsAndDrinksList)

    let show;

    if (openComponent === 'Summary') {
        show = <Summary />
    } else if (openComponent === 'Categories') {
        show = <Categories categoriesListState={categoriesListState} setCategoriesListState={setCategoriesListState} setOpenComponent={setOpenComponent}/>
    } else if (openComponent === 'AddCategory') {
        show = <AddCategory categoriesListState={categoriesListState} setCategoriesListState={setCategoriesListState} setOpenComponent={setOpenComponent}/>
    } else if (openComponent === 'MeelsAndDrinks') {
        show = <MeelsAndDrinks meelsAndDrinksListState={meelsAndDrinksListState} setMeelsAndDrinksListState={setMeelsAndDrinksListState} setOpenComponent={setOpenComponent}/>
    } else if (openComponent === 'AddMeel') {
        show = <AddMeel meelsAndDrinksListState={meelsAndDrinksListState} setMeelsAndDrinksListState={setMeelsAndDrinksListState} setOpenComponent={setOpenComponent}/>
    } else if (openComponent === 'CodeGeneration') {
        show = <CodeGeneration />
    }
    
    function asideOpen() {
        const aside = document.querySelector('.aside');
        const substrate = document.querySelector('.substrate');
        aside.style.display = 'block';
        substrate.style.display = 'block';
        aside.style.position = 'absolute';
        aside.style.zIndex = '2';
        console.log('Hi')
    }

    function menuItemToggle(event) {
        setIsMenuItemOpen(!isMenuItemOpen);
        let target = event.target.closest('div.aside__item')
        target.classList.toggle("opened");
    }

    function tablesItemToggle(event) {
        setIsTablesItemOpen(!isTablesItemOpen);
        let target = event.target.closest('div.aside__item')
        target.classList.toggle("opened");
    }

    function marketingItemToggle(event) {
        setIsMarketingItemOpen(!isMarketingItemOpen);
        let target = event.target.closest('div.aside__item')
        target.classList.toggle("opened");
    }

    function statisticsItemToggle(event) {
        setIsStatisticsItemOpen(!isStatisticsItemOpen);
        let target = event.target.closest('div.aside__item')
        target.classList.toggle("opened");
    }

    function settingsItemToggle(event) {
        setIsSettingsItemOpen(!isSettingsItemOpen);
        let target = event.target.closest('div.aside__item')
        target.classList.toggle("opened");
    }

    function subscribeItemToggle(event) {
        setIsSubscribeItemOpen(!isSubscribeItemOpen);
        let target = event.target.closest('div.aside__item')
        target.classList.toggle("opened");
    }

    function asideClose() {
        const aside = document.querySelector('.aside');
        const substrate = document.querySelector('.substrate');
        aside.style.display = 'none'; 
        substrate.style.display = 'none'; 
    }

    return (
        <div className="main__container">
            <div className="substrate" onClick={asideClose}></div>
            <div className="aside">
                <h3><span>Вкус</span><span>Клик</span></h3>
                <div className="aside__item aside__item-summary">
                    <div></div>    
                    <p>Сводка</p>
                </div>
                <div className="aside__item aside__item-menu" onClick={(event) => menuItemToggle(event)}>
                    <div></div>    
                    <p>Меню</p>
                    <div className="aside__item__arrow"></div>
                </div>
                {
                    isMenuItemOpen &&
                        <>
                            <div className="aside__item aside__item-drop-down">
                                <div></div>
                                <p onClick={() => setOpenComponent('Categories')}>Категории</p>
                            </div>
                            <div className="aside__item aside__item-drop-down">
                                <div></div>
                                <p onClick={() => setOpenComponent('MeelsAndDrinks')}>Блюда и напитки</p>
                            </div>
                        </>
                }
                <div className="aside__item aside__item-tables" onClick={(event) => tablesItemToggle(event)}>
                    <div></div>    
                    <p>Столы</p>
                    <div className="aside__item__arrow"></div>
                </div>
                {
                        isTablesItemOpen &&
                            <>
                                <div className="aside__item aside__item-drop-down">
                                    <div></div>
                                    <p>Назначение столов</p>
                                </div>
                                <div className="aside__item aside__item-drop-down" onClick={() => setOpenComponent('CodeGeneration')}>
                                    <div></div>
                                    <p>Генераци QR-кодов</p>
                                </div>
                            </>
                    }
                <div className="aside__item aside__item-order-list">
                    <div></div>    
                    <p>Список заказов</p>
                </div>
                <div className="aside__item aside__item-employers">
                    <div></div>    
                    <p>Сотрудники</p>
                </div>
                <div className="aside__item aside__item-marketing" onClick={(event) => marketingItemToggle(event)}>
                    <div></div>    
                    <p>Маркетинг</p>
                    <div className="aside__item__arrow"></div>
                </div>
                    {
                        isMarketingItemOpen &&
                            <>
                                <div className="aside__item aside__item-drop-down">
                                    <div></div>
                                    <p>Популярные блюда</p>
                                </div>
                                <div className="aside__item aside__item-drop-down">
                                    <div></div>
                                    <p>Добавить к заказу</p>
                                </div>
                            </>
                    }
                <div className="aside__item aside__item-statistics" onClick={event => statisticsItemToggle(event)}>
                    <div></div>    
                    <p>Статистика</p>
                    <div className="aside__item__arrow"></div>
                </div>
                {
                        isStatisticsItemOpen &&
                            <>
                                <div className="aside__item aside__item-drop-down">
                                    <div></div>
                                    <p>Заказы</p>
                                </div>
                                <div className="aside__item aside__item-drop-down">
                                    <div></div>
                                    <p>Блюда</p>
                                </div>
                                <div className="aside__item aside__item-drop-down">
                                    <div></div>
                                    <p>Категории</p>
                                </div>
                            </>
                    }
                <div className="aside__item aside__item-settings" onClick={event => settingsItemToggle(event)}>
                    <div></div>    
                    <p>Настройки</p>
                    <div className="aside__item__arrow"></div>
                </div>
                {
                    isSettingsItemOpen &&
                        <>
                            <div className="aside__item aside__item-drop-down">
                                <div></div>
                                <p>Заведение</p>
                            </div>
                        </>
                }
                <div className="aside__item aside__item-subscribe" onClick={event => subscribeItemToggle(event)}>
                    <div></div>    
                    <p>Подписка</p>
                    <div className="aside__item__arrow"></div>
                </div>
                {
                        isSubscribeItemOpen &&
                            <>
                                <div className="aside__item aside__item-drop-down">
                                    <div></div>
                                    <p>Калькулятор полписки</p>
                                </div>
                                <div className="aside__item aside__item-drop-down">
                                    <div></div>
                                    <p>Список услуг</p>
                                </div>
                            </>
                    }
                <div className="aside__item aside__item-support">
                    <div></div>    
                    <p>Поддержка</p>
                </div>
            </div>
            <div className="main__right">
                <div className="main__header">
                    <div className="main__header__left">
                        <div className="main__burger-btn" onClick={asideOpen}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <select>
                            <option>Ресторан</option>
                            <option>Ресторан 2</option>
                            <option>Ресторан 3</option>
                        </select>
                    </div>
                    <div className="main__header__right">
                        <div className="main__header__price">
                            <div className="main__header__price__wallet"></div>
                                <p>23434 руб.</p>
                            </div>
                        <div className="main__header__theme-tumbler"></div>
                        <div className="main__header__notifications"></div>
                        <div className="main__header__employer">
                            <div className="main__header__employer__left">
                                <p>Имя Фамилия</p>
                                <p>Должность</p>
                            </div>
                            <div className="main__header__employer__right"></div>
                        </div>
                    </div>
                </div>
                {show}
                <Footer />
            </div>
        </div>
    ) 
}

export default Main