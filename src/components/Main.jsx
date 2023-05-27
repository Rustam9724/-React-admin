import { useState } from 'react';
import Summary from './Summary.jsx';
import Categories from './Categories';
import AddCategory from './AddCategory.jsx';
import {} from 'nanoid';
import Footer from './Footer';
import { categoriesList, meelsAndDrinksList, waiters, employers } from './object';
import MeelsAndDrinks from './MeelsAndDrinks.jsx';
import AddMeel from './AddMeel.jsx';
import CodeGeneration from './CodeGeneration.jsx';
import AppointTables from './AppointTables.jsx';
import OrdersList from './OrdersList.jsx';
import Order from './Order.jsx';
import Employers from './Employers';
import AddEmployer from './AddEmployer';
import PopularMeels from './PopularMeels.jsx';
import AddToOrder from './AddToOrder.jsx';
import SubCalc from './SubCalc.jsx';
import ListOfServices from './ListOfServices.jsx';
import OrderStatistics from './OrderStatistics.jsx';
import MeelsStatistics from './MeelsStatistics.jsx';
import CategoriesStatistics from './CategoriesStatistics.jsx';
import Institution from './Institution.jsx';
import Support from './Support.jsx';

function Main() {
    const [isMenuItemOpen, setIsMenuItemOpen] = useState(false);
    const [isTablesItemOpen, setIsTablesItemOpen] = useState(false);
    const [isMarketingItemOpen, setIsMarketingItemOpen] = useState(false);
    const [isStatisticsItemOpen, setIsStatisticsItemOpen] = useState(false);
    const [isSettingsItemOpen, setIsSettingsItemOpen] = useState(false);
    const [isSubscribeItemOpen, setIsSubscribeItemOpen] = useState(false);
    const [openComponent, setOpenComponent] = useState('Summary');
    const [categoriesListState, setCategoriesListState] = useState(categoriesList)
    const [meelsAndDrinksListState, setMeelsAndDrinksListState] = useState(meelsAndDrinksList);
    const [waitersState, setWaitersState] = useState(waiters);
    const [openOrderNumber, setOpenOrderNumber] = useState(null);
    const [employersListState, setEmployersListState] = useState(employers)
    const [restName, setRestName] = useState('Ресторан')

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
    } else if (openComponent === 'AppointTables') {
        show = <AppointTables waitersState={waitersState} setWaitersState={setWaitersState}/>
    } else if (openComponent === 'OrdersList') {
        show = <OrdersList setOpenComponent={setOpenComponent} setOpenOrderNumber={setOpenOrderNumber}/>
    } else if (openComponent === 'Order') {
        show = <Order openOrderNumber={openOrderNumber} setOpenComponent={setOpenComponent}/>
    } else if (openComponent === 'Employers') {
        show = <Employers setOpenComponent={setOpenComponent} employersListState={employersListState} setEmployersListState={setEmployersListState}/>
    } else if (openComponent === 'AddEmployer') {
        show = <AddEmployer employersListState={employersListState} setEmployersListState={setEmployersListState} setOpenComponent={setOpenComponent}/>
    } else if (openComponent === 'PopularMeels') {
        show = <PopularMeels meelsAndDrinksListState={meelsAndDrinksListState} setMeelsAndDrinksListState={setMeelsAndDrinksListState} />
    } else if (openComponent === 'AddToOrder') {
        show = <AddToOrder meelsAndDrinksListState={meelsAndDrinksListState} setMeelsAndDrinksListState={setMeelsAndDrinksListState}/>
    } else if (openComponent === 'SubCalc') {
        show = <SubCalc />
    } else if (openComponent === 'ListOfServices') {
        show = <ListOfServices />
    } else if (openComponent === 'OrderStatistics') {
        show = <OrderStatistics />;
    } else if (openComponent === 'MeelsStatistics') {
        show = <MeelsStatistics />
    } else if (openComponent === 'CategoriesStatistics') {
        show = <CategoriesStatistics />
    } else if (openComponent === 'Institution') {
        show = <Institution setRestName={setRestName}/>
    } else if (openComponent === 'Support') {
        show = <Support />
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
                <div
                    className={`aside__item aside__item-summary ${openComponent === 'Summary' ? 'selected' : null}`} 
                    onClick={() => setOpenComponent('Summary')}
                >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.16666 2.93336C5.19751 3.8535 2.49448 7.5334 2.80357 11.5961C3.11266 15.6587 6.34128 18.8874 10.404 19.1965C14.4666 19.5055 18.1465 16.8025 19.0667 12.8334C19.0667 12.3271 18.6563 11.9167 18.15 11.9167H11.9167C10.9041 11.9167 10.0833 11.0959 10.0833 10.0834V3.66669C10.0603 3.44733 9.95044 3.24631 9.7782 3.10852C9.60597 2.97073 9.38573 2.90765 9.16666 2.93336" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.16666 2.93336C5.19751 3.8535 2.49448 7.5334 2.80357 11.5961C3.11266 15.6587 6.34128 18.8874 10.404 19.1965C14.4666 19.5055 18.1465 16.8025 19.0667 12.8334C19.0667 12.3271 18.6563 11.9167 18.15 11.9167H11.9167C10.9041 11.9167 10.0833 11.0959 10.0833 10.0834V3.66669C10.0603 3.44733 9.95044 3.24631 9.7782 3.10852C9.60597 2.97073 9.38573 2.90765 9.16666 2.93336" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.75 3.20825C16.1075 4.03835 17.9616 5.89243 18.7917 8.24992H14.6667C14.1604 8.24992 13.75 7.83951 13.75 7.33325V3.20825" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.75 3.20825C16.1075 4.03835 17.9616 5.89243 18.7917 8.24992H14.6667C14.1604 8.24992 13.75 7.83951 13.75 7.33325V3.20825" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    <p>Сводка</p>
                </div>
                <div className="aside__item aside__item-menu" onClick={(event) => menuItemToggle(event)}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4167 2.75H18.1667C18.1667 2.44987 17.9878 2.17864 17.7119 2.06052C17.436 1.94241 17.1162 2.00015 16.899 2.20731L17.4167 2.75ZM17.4167 13.75V14.5C17.8309 14.5 18.1667 14.1642 18.1667 13.75H17.4167ZM12.8334 13.75L12.0834 13.7547C12.086 14.1671 12.421 14.5 12.8334 14.5V13.75ZM18.1667 13.75C18.1667 13.3358 17.8309 13 17.4167 13C17.0025 13 16.6667 13.3358 16.6667 13.75H18.1667ZM17.4167 19.25V20C17.8309 20 18.1667 19.6642 18.1667 19.25H17.4167ZM16.5 19.25H15.75C15.75 19.6642 16.0858 20 16.5 20V19.25ZM17.25 16.5C17.25 16.0858 16.9142 15.75 16.5 15.75C16.0858 15.75 15.75 16.0858 15.75 16.5H17.25ZM8.08334 3.66667C8.08334 3.25245 7.74756 2.91667 7.33334 2.91667C6.91913 2.91667 6.58334 3.25245 6.58334 3.66667H8.08334ZM6.58334 19.25C6.58334 19.6642 6.91913 20 7.33334 20C7.74756 20 8.08334 19.6642 8.08334 19.25H6.58334ZM5.33334 3.66667C5.33334 3.25245 4.99756 2.91667 4.58334 2.91667C4.16913 2.91667 3.83334 3.25245 3.83334 3.66667H5.33334ZM10.8333 3.66667C10.8333 3.25245 10.4976 2.91667 10.0833 2.91667C9.66913 2.91667 9.33334 3.25245 9.33334 3.66667H10.8333ZM16.6667 2.75V13.75H18.1667V2.75H16.6667ZM17.4167 13H12.8334V14.5H17.4167V13ZM13.5834 13.7453C13.5729 12.0685 13.6182 10.4769 14.1736 8.7996C14.7254 7.13322 15.8005 5.32821 17.9344 3.29269L16.899 2.20731C14.6183 4.38296 13.3911 6.39082 12.7497 8.32809C12.1118 10.2544 12.0728 12.0573 12.0834 13.7547L13.5834 13.7453ZM16.6667 13.75V19.25H18.1667V13.75H16.6667ZM17.4167 18.5H16.5V20H17.4167V18.5ZM17.25 19.25V16.5H15.75V19.25H17.25ZM6.58334 3.66667V19.25H8.08334V3.66667H6.58334ZM3.83334 3.66667V6.41667H5.33334V3.66667H3.83334ZM3.83334 6.41667C3.83334 8.34966 5.40035 9.91667 7.33334 9.91667V8.41667C6.22877 8.41667 5.33334 7.52124 5.33334 6.41667H3.83334ZM7.33334 9.91667C9.26634 9.91667 10.8333 8.34966 10.8333 6.41667H9.33334C9.33334 7.52124 8.43791 8.41667 7.33334 8.41667V9.91667ZM10.8333 6.41667V3.66667H9.33334V6.41667H10.8333Z" fill="#4B465C"/>
                    <path d="M17.4167 2.75H18.1667C18.1667 2.44987 17.9878 2.17864 17.7119 2.06052C17.436 1.94241 17.1162 2.00015 16.899 2.20731L17.4167 2.75ZM17.4167 13.75V14.5C17.8309 14.5 18.1667 14.1642 18.1667 13.75H17.4167ZM12.8334 13.75L12.0834 13.7547C12.086 14.1671 12.421 14.5 12.8334 14.5V13.75ZM18.1667 13.75C18.1667 13.3358 17.8309 13 17.4167 13C17.0025 13 16.6667 13.3358 16.6667 13.75H18.1667ZM17.4167 19.25V20C17.8309 20 18.1667 19.6642 18.1667 19.25H17.4167ZM16.5 19.25H15.75C15.75 19.6642 16.0858 20 16.5 20V19.25ZM17.25 16.5C17.25 16.0858 16.9142 15.75 16.5 15.75C16.0858 15.75 15.75 16.0858 15.75 16.5H17.25ZM8.08334 3.66667C8.08334 3.25245 7.74756 2.91667 7.33334 2.91667C6.91913 2.91667 6.58334 3.25245 6.58334 3.66667H8.08334ZM6.58334 19.25C6.58334 19.6642 6.91913 20 7.33334 20C7.74756 20 8.08334 19.6642 8.08334 19.25H6.58334ZM5.33334 3.66667C5.33334 3.25245 4.99756 2.91667 4.58334 2.91667C4.16913 2.91667 3.83334 3.25245 3.83334 3.66667H5.33334ZM10.8333 3.66667C10.8333 3.25245 10.4976 2.91667 10.0833 2.91667C9.66913 2.91667 9.33334 3.25245 9.33334 3.66667H10.8333ZM16.6667 2.75V13.75H18.1667V2.75H16.6667ZM17.4167 13H12.8334V14.5H17.4167V13ZM13.5834 13.7453C13.5729 12.0685 13.6182 10.4769 14.1736 8.7996C14.7254 7.13322 15.8005 5.32821 17.9344 3.29269L16.899 2.20731C14.6183 4.38296 13.3911 6.39082 12.7497 8.32809C12.1118 10.2544 12.0728 12.0573 12.0834 13.7547L13.5834 13.7453ZM16.6667 13.75V19.25H18.1667V13.75H16.6667ZM17.4167 18.5H16.5V20H17.4167V18.5ZM17.25 19.25V16.5H15.75V19.25H17.25ZM6.58334 3.66667V19.25H8.08334V3.66667H6.58334ZM3.83334 3.66667V6.41667H5.33334V3.66667H3.83334ZM3.83334 6.41667C3.83334 8.34966 5.40035 9.91667 7.33334 9.91667V8.41667C6.22877 8.41667 5.33334 7.52124 5.33334 6.41667H3.83334ZM7.33334 9.91667C9.26634 9.91667 10.8333 8.34966 10.8333 6.41667H9.33334C9.33334 7.52124 8.43791 8.41667 7.33334 8.41667V9.91667ZM10.8333 6.41667V3.66667H9.33334V6.41667H10.8333Z" fill="white" fill-opacity="0.2"/>
                </svg>   
                    <p>Меню</p>
                    <div className="aside__item__arrow"></div>
                </div>
                {
                    isMenuItemOpen &&
                        <>
                            <div className={`aside__item aside__item-drop-down ${openComponent === 'Categories' ? 'selected' : null}`}>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="10.9999" r="3.66667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="11" cy="10.9999" r="3.66667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                                <p onClick={() => setOpenComponent('Categories')}>Категории</p>
                            </div>
                            <div className={`aside__item aside__item-drop-down ${openComponent === 'MeelsAndDrinks' ? 'selected' : null}`}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="10.9999" r="3.66667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="11" cy="10.9999" r="3.66667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p onClick={() => setOpenComponent('MeelsAndDrinks')}>Блюда и напитки</p>
                            </div>
                        </>
                }
                <div className="aside__item aside__item-tables" onClick={(event) => tablesItemToggle(event)}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3333 3.66664V3.67581" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.3333 3.66664V3.67581" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.3333 18.3334V18.3426" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.3333 18.3334V18.3426" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.3333 14.6666V14.6758" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.3333 14.6666V14.6758" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.3333 10.9999V11.0091" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.3333 10.9999V11.0091" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.3333 7.33339V7.34256" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.3333 7.33339V7.34256" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="7.33334" y="3.66675" width="7.33333" height="14.6667" rx="1" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="7.33334" y="3.66675" width="7.33333" height="14.6667" rx="1" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.66668 3.66664V3.67581" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.66668 3.66664V3.67581" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.66668 18.3334V18.3426" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.66668 18.3334V18.3426" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.66668 14.6666V14.6758" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.66668 14.6666V14.6758" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.66668 10.9999V11.0091" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.66668 10.9999V11.0091" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.66668 7.33339V7.34256" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.66668 7.33339V7.34256" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>   
                    <p>Столы</p>
                    <div className="aside__item__arrow"></div>
                </div>
                {
                        isTablesItemOpen &&
                            <>
                                <div
                                    className={`aside__item aside__item-drop-down ${openComponent === 'AppointTables' ? 'selected' : null}`}
                                    onClick={() => setOpenComponent('AppointTables')}
                                >
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="10.9999" r="3.66667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <circle cx="11" cy="10.9999" r="3.66667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Назначение столов</p>
                                </div>
                                <div
                                    className={`aside__item aside__item-drop-down ${openComponent === 'CodeGeneration' ? 'selected' : null}`} 
                                    onClick={() => setOpenComponent('CodeGeneration')}
                                >
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="10.9999" r="3.66667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <circle cx="11" cy="10.9999" r="3.66667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Генерация QR-кодов</p>
                                </div>
                            </>
                    }
                <div
                    className={`aside__item aside__item-order-list ${openComponent === 'OrdersList' ? 'selected' : null}`}
                    onClick={() => setOpenComponent('OrdersList')}
                >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.25 5.50008H18.3333" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.25 5.50008H18.3333" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.25 11.0001H18.3333" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.25 11.0001H18.3333" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.25 16.5001H18.3333" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.25 16.5001H18.3333" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.58333 5.49989V5.50906" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.58333 5.49989V5.50906" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.58333 10.9999V11.0091" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.58333 10.9999V11.0091" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.58333 16.4999V16.5091" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.58333 16.4999V16.5091" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Список заказов</p>
                </div>
                <div
                    className={`aside__item aside__item-employers ${openComponent === 'Employers' ? 'selected' : null}`}
                    onClick={() => setOpenComponent('Employers')}
                >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="8.25001" cy="6.41667" rx="3.66667" ry="3.66667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <ellipse cx="8.25001" cy="6.41667" rx="3.66667" ry="3.66667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.75 19.25V17.4167C2.75 15.3916 4.39162 13.75 6.41667 13.75H10.0833C12.1084 13.75 13.75 15.3916 13.75 17.4167V19.25" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.75 19.25V17.4167C2.75 15.3916 4.39162 13.75 6.41667 13.75H10.0833C12.1084 13.75 13.75 15.3916 13.75 17.4167V19.25" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.6667 2.86914C16.2891 3.28455 17.4238 4.74647 17.4238 6.42122C17.4238 8.09598 16.2891 9.5579 14.6667 9.97331" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.6667 2.86914C16.2891 3.28455 17.4238 4.74647 17.4238 6.42122C17.4238 8.09598 16.2891 9.5579 14.6667 9.97331" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.25 19.25V17.4166C19.2404 15.7525 18.1113 14.3035 16.5 13.8875" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.25 19.25V17.4166C19.2404 15.7525 18.1113 14.3035 16.5 13.8875" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>    
                    <p>Сотрудники</p>
                </div>
                <div className="aside__item aside__item-marketing" onClick={(event) => marketingItemToggle(event)}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.75 2.75V19.25H19.25" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.75 2.75V19.25H19.25" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="8.24999" cy="8.25008" r="1.83333" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="8.24999" cy="8.25008" r="1.83333" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <ellipse cx="17.4167" cy="6.41658" rx="1.83333" ry="1.83333" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <ellipse cx="17.4167" cy="6.41658" rx="1.83333" ry="1.83333" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <ellipse cx="12.8333" cy="13.7501" rx="1.83333" ry="1.83333" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <ellipse cx="12.8333" cy="13.7501" rx="1.83333" ry="1.83333" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.31335 9.73511L11.4584 12.3751" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.31335 9.73511L11.4584 12.3751" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.8307 12.2173L16.4313 8.01343" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.8307 12.2173L16.4313 8.01343" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>    
                    <p>Маркетинг</p>
                    <div className="aside__item__arrow"></div>
                </div>
                    {
                        isMarketingItemOpen &&
                            <>
                                <div
                                    className={`aside__item aside__item-drop-down ${openComponent === 'PopularMeels' ? 'selected' : null}`}
                                    onClick={() => setOpenComponent('PopularMeels')}
                                >
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="10.9999" r="3.66667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <circle cx="11" cy="10.9999" r="3.66667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Популярные блюда</p>
                                </div>
                                <div
                                    className={`aside__item aside__item-drop-down ${openComponent === 'AddToOrder' ? 'selected' : null}`}
                                    onClick={() => setOpenComponent('AddToOrder')}
                                >
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="10.9999" r="3.66667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="11" cy="10.9999" r="3.66667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                    <p>Добавить к заказу</p>
                                </div>
                            </>
                    }
                <div className={`aside__item aside__item-statistics`} onClick={event => statisticsItemToggle(event)}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.75" y="11" width="5.5" height="7.33333" rx="1" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="2.75" y="11" width="5.5" height="7.33333" rx="1" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="8.25" y="7.33325" width="5.5" height="11" rx="1" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="8.25" y="7.33325" width="5.5" height="11" rx="1" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="13.75" y="3.66675" width="5.5" height="14.6667" rx="1" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="13.75" y="3.66675" width="5.5" height="14.6667" rx="1" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.66666 18.3333H16.5" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.66666 18.3333H16.5" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                    <p>Статистика</p>
                    <div className="aside__item__arrow"></div>
                </div>
                {
                        isStatisticsItemOpen &&
                            <>
                                <div
                                    className={`aside__item aside__item-drop-down ${openComponent === 'OrderStatistics' ? 'selected' : null}`}
                                    onClick={() => setOpenComponent('OrderStatistics')}
                                >
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="10.9999" r="3.66667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <circle cx="11" cy="10.9999" r="3.66667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Заказы</p>
                                </div>
                                <div
                                    className={`aside__item aside__item-drop-down ${openComponent === 'MeelsStatistics' ? 'selected' : null}`}
                                    onClick={() => setOpenComponent('MeelsStatistics')}
                                >
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="10.9999" r="3.66667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <circle cx="11" cy="10.9999" r="3.66667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Блюда</p>
                                </div>
                                <div
                                    className={`aside__item aside__item-drop-down ${openComponent === "CategoriesStatistics" ? 'selected' : null}`}
                                    onClick={() => setOpenComponent('CategoriesStatistics')}
                                >
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11" cy="10.9999" r="3.66667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <circle cx="11" cy="10.9999" r="3.66667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p>Категории</p>
                                </div>
                            </>
                    }
                <div className="aside__item aside__item-settings" onClick={event => settingsItemToggle(event)}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.46458 3.95725C9.85508 2.34758 12.1449 2.34758 12.5354 3.95725C12.6543 4.44772 13.0002 4.85194 13.4664 5.0451C13.9327 5.23826 14.4631 5.19713 14.894 4.93442C16.3084 4.07275 17.9282 5.69158 17.0665 7.10692C16.8042 7.53762 16.7631 8.06766 16.9561 8.5336C17.149 8.99954 17.5527 9.34542 18.0428 9.46458C19.6524 9.85508 19.6524 12.1449 18.0428 12.5354C17.5523 12.6543 17.1481 13.0002 16.9549 13.4664C16.7617 13.9327 16.8029 14.4631 17.0656 14.894C17.9272 16.3084 16.3084 17.9282 14.8931 17.0665C14.4624 16.8042 13.9323 16.7631 13.4664 16.9561C13.0005 17.149 12.6546 17.5527 12.5354 18.0428C12.1449 19.6524 9.85508 19.6524 9.46458 18.0428C9.34574 17.5523 8.9998 17.1481 8.53357 16.9549C8.06734 16.7617 7.53689 16.8029 7.106 17.0656C5.69158 17.9272 4.07183 16.3084 4.9335 14.8931C5.19584 14.4624 5.23687 13.9323 5.04393 13.4664C4.851 13.0005 4.44727 12.6546 3.95725 12.5354C2.34758 12.1449 2.34758 9.85508 3.95725 9.46458C4.44772 9.34574 4.85194 8.9998 5.0451 8.53357C5.23826 8.06734 5.19713 7.53689 4.93442 7.106C4.07275 5.69158 5.69158 4.07183 7.10692 4.9335C8.02358 5.49083 9.21158 4.99767 9.46458 3.95725Z" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.46458 3.95725C9.85508 2.34758 12.1449 2.34758 12.5354 3.95725C12.6543 4.44772 13.0002 4.85194 13.4664 5.0451C13.9327 5.23826 14.4631 5.19713 14.894 4.93442C16.3084 4.07275 17.9282 5.69158 17.0665 7.10692C16.8042 7.53762 16.7631 8.06766 16.9561 8.5336C17.149 8.99954 17.5527 9.34542 18.0428 9.46458C19.6524 9.85508 19.6524 12.1449 18.0428 12.5354C17.5523 12.6543 17.1481 13.0002 16.9549 13.4664C16.7617 13.9327 16.8029 14.4631 17.0656 14.894C17.9272 16.3084 16.3084 17.9282 14.8931 17.0665C14.4624 16.8042 13.9323 16.7631 13.4664 16.9561C13.0005 17.149 12.6546 17.5527 12.5354 18.0428C12.1449 19.6524 9.85508 19.6524 9.46458 18.0428C9.34574 17.5523 8.9998 17.1481 8.53357 16.9549C8.06734 16.7617 7.53689 16.8029 7.106 17.0656C5.69158 17.9272 4.07183 16.3084 4.9335 14.8931C5.19584 14.4624 5.23687 13.9323 5.04393 13.4664C4.851 13.0005 4.44727 12.6546 3.95725 12.5354C2.34758 12.1449 2.34758 9.85508 3.95725 9.46458C4.44772 9.34574 4.85194 8.9998 5.0451 8.53357C5.23826 8.06734 5.19713 7.53689 4.93442 7.106C4.07275 5.69158 5.69158 4.07183 7.10692 4.9335C8.02358 5.49083 9.21158 4.99767 9.46458 3.95725Z" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="11" cy="11" r="2.75" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="11" cy="11" r="2.75" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>    
                    <p>Настройки</p>
                    <div className="aside__item__arrow"></div>
                </div>
                {
                    isSettingsItemOpen &&
                        <>
                            <div
                                className={`aside__item aside__item-drop-down ${openComponent === 'Institution' ? 'selected' : null}`}
                                onClick={() => setOpenComponent("Institution")}
                            >
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="10.9999" r="3.66667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="11" cy="10.9999" r="3.66667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>Заведение</p>
                            </div>
                        </>
                }
                <div className="aside__item aside__item-subscribe" onClick={event => subscribeItemToggle(event)}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33333 17.4166V4.58325H12.8333C14.3521 4.58325 15.5833 5.81447 15.5833 7.33325C15.5833 8.85203 14.3521 10.0833 12.8333 10.0833H5.5" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.33333 17.4166V4.58325H12.8333C14.3521 4.58325 15.5833 5.81447 15.5833 7.33325C15.5833 8.85203 14.3521 10.0833 12.8333 10.0833H5.5" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.8333 13.7501H5.5" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.8333 13.7501H5.5" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>    
                    <p>Подписка</p>
                    <div className="aside__item__arrow"></div>
                </div>
                {
                        isSubscribeItemOpen &&
                            <>
                                <div className={`aside__item aside__item-drop-down ${openComponent === 'SubCalc' ? 'selected' : null}`} onClick={() => setOpenComponent('SubCalc')}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="10.9999" r="3.66667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="11" cy="10.9999" r="3.66667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                    <p>Калькулятор подписки</p>
                                </div>
                                <div className={`aside__item aside__item-drop-down ${openComponent === 'ListOfServices' ? 'selected' : null}`} onClick={() => setOpenComponent('ListOfServices')}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="10.9999" r="3.66667" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="11" cy="10.9999" r="3.66667" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                    <p>Список услуг</p>
                                </div>
                            </>
                    }
                <div className={`aside__item aside__item-support ${openComponent === 'Support' ? 'selected' : 'null'}`} onClick={() => setOpenComponent('Support')}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8.25" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="11" cy="11" r="8.25" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 15.5834V15.5926" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 15.5834V15.5926" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 12.375C10.9653 11.7637 11.339 11.2031 11.9167 11C12.8615 10.6387 13.4753 9.72031 13.4478 8.70915C13.4204 7.69799 12.7576 6.81431 11.7946 6.50482C10.8315 6.19533 9.77806 6.52745 9.16666 7.3333" stroke="#4B465C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 12.375C10.9653 11.7637 11.339 11.2031 11.9167 11C12.8615 10.6387 13.4753 9.72031 13.4478 8.70915C13.4204 7.69799 12.7576 6.81431 11.7946 6.50482C10.8315 6.19533 9.77806 6.52745 9.16666 7.3333" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>    
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
                        <div className="main__header__left__rest-name">
                            {restName}
                        </div>
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