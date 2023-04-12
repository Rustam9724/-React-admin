function Summary() {
    
    function asideOpen() {
        const aside = document.querySelector('.aside');
        const substrate = document.querySelector('.substrate');
        aside.style.display = 'block';
        substrate.style.display = 'block';
        aside.style.position = 'absolute';
        aside.style.zIndex = '2';
        console.log('Hi')
    }
    
    function asideClose() {
        const aside = document.querySelector('.aside');
        const substrate = document.querySelector('.substrate');
        aside.style.display = 'none'; 
        substrate.style.display = 'none'; 
    }

    return (
        <div className="summary">
            <div className="substrate" onClick={asideClose}></div>
                <div className="summary__header">
                    <div className="summary__header__left">
                        <div className="summary__burger-btn" onClick={asideOpen}>
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
                    <div className="summary__header__right">
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
    )
}

export default Summary;