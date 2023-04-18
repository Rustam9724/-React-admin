function Summary() {
    return (
        <div className="summary">
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
            </div>
    )
}

export default Summary;