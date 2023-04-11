import { useState } from 'react';

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
            <div className="summary">
                <div className="summary__header">
                    <select>
                        <option>Ресторан</option>
                        <option>Ресторан 2</option>
                        <option>Ресторан 3</option>
                    </select>
                    <div className="summary__header__price">
                        <div className="summary__header__price__wallet"></div>
                        <p>23434 руб.</p>
                    </div>
                    <div className="summary__header__theme-tumbler"></div>
                    <div className="summary__header__notifications"></div>
                    <div className="summary__header__employer">
                        <div className="summary__header__employer__left">
                            <p>Имя Фамилия</p>
                            <p>Должность</p>
                        </div>
                        <div className="summary__header__employer__right"></div>
                    </div>
                </div>
                <h2>Сводка за текущий день</h2>
                <div className="summary_main">
                    <div className="summary__main__left">
                        <div className="summary__main__left__item">
                            <div className="summary__main__left__item__text">
                                <p>123</p>
                                <p>Просмотры блюд</p>
                            </div>
                            <div className="summary__main__left__item__icon"></div>
                        </div>
                        <div className="summary__main__left__item">
                            <div className="summary__main__left__item__text">
                                <p>8</p>
                                <p>Заказы</p>
                            </div>
                            <div className="summary__main__left__item__icon"></div>
                        </div>
                        <div className="summary__main__left__item">
                            <div className="summary__main__left__item__text">
                                <p>35</p>
                                <p>Блюд заказано</p>
                            </div>
                            <div className="summary__main__left__item__icon"></div>
                        </div>
                    </div>
                    <div className="summary__main__right"></div>
                </div>
                <footer>
                        <p>© 2023 ВкусКлик</p>
                        <p>Пользовательское соглашение</p>
                        <p>Политика конфиденциальности</p>
                </footer>
            </div>
        </div>
    ) 
}

export default Main