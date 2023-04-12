import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Summary from './Summary.jsx'

function Main() {
    const [isMenuItemOpen, setIsMenuItemOpen] = useState(false);
    const [isTablesItemOpen, setIsTablesItemOpen] = useState(false);
    const [isMarketingItemOpen, setIsMarketingItemOpen] = useState(false);
    const [isStatisticsItemOpen, setIsStatisticsItemOpen] = useState(false);
    const [isSettingsItemOpen, setIsSettingsItemOpen] = useState(false);
    const [isSubscribeItemOpen, setIsSubscribeItemOpen] = useState(false);

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

    return (
        <div className="main__container">
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
                                <p>Категории</p>
                            </div>
                            <div className="aside__item aside__item-drop-down">
                                <div></div>
                                <p>Блюда и напитки</p>
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
                                <div className="aside__item aside__item-drop-down">
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
            <Summary />
        </div>
    ) 
}

export default Main