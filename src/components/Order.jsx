import { orders } from '../components/object';

function Order({openOrderNumber}) {
    const openOrder = orders.find(order => {
        return order.number === openOrderNumber;
    })

    return (
        <div className="order">
            <div className="order__title">
                <div></div>
                <h2>Заказ <span>#{openOrder.number}</span></h2>
            </div>
            <div className="order__main">
                <div className="order__main__left">
                    <div className="order__main__left__item">
                        <div className="order__main__left__item__icon"></div>
                        <div className="order__main__left__item__info">
                            <p>Стол</p>
                            <p>{openOrder.table}</p>
                        </div>
                    </div>
                    <div className="order__main__left__item">
                        <div className="order__main__left__item__icon"></div>
                        <div className="order__main__left__item__info">
                            <p>Официант</p>
                            <p>Имя Фамилия</p>
                        </div>
                    </div>
                    <div className="order__main__left__item">
                        <div className="order__main__left__item__icon"></div>
                        <div className="order__main__left__item__info">
                            <p>Дата</p>
                            <p>{openOrder.date}</p>
                        </div>
                    </div>
                    <div className="order__main__left__item">
                        <div className="order__main__left__item__icon"></div>
                        <div className="order__main__left__item__info">
                            <p>Комментарий</p>
                            <p>Launch a deal!</p>
                        </div>
                    </div>
                </div>
                <div className="order__main__right">
                    <div className="order__main__right__header">
                        <div className="order__main__right__header__item">НАЗВАНИЕ</div>
                        <div className="order__main__right__header__item">ЦЕНА, РУБ</div>
                        <div className="order__main__right__header__item">КОЛИЧЕСТВО</div>
                        <div className="order__main__right__header__item">СУММА, РУБ</div>
                    </div>
                    <div className="order__main__right__section">
                        <div className="order__main__right__section__name">
                            <div></div>
                            <p>Название блюда</p>
                        </div>
                        <p>550</p>
                        <p>1</p>
                        <p>550</p>
                    </div>
                    <div className="order__main__right__section">
                        <div className="order__main__right__section__name">
                            <div></div>
                            <p>Название блюда</p>
                        </div>
                        <p>550</p>
                        <p>2</p>
                        <p>1100</p>
                    </div>
                    <div className="order__main__right__section">
                        <div className="order__main__right__section__name">
                            <div></div>
                            <p>Название блюда</p>
                        </div>
                        <p>550</p>
                        <p>2</p>
                        <p>1100</p>
                    </div>
                    <div className="order__main__right__section">
                        <div className="order__main__right__section__name">
                            <div></div>
                            <p>Название блюда</p>
                        </div>
                        <p>550</p>
                        <p>2</p>
                        <p>1100</p>
                    </div>
                    <div className="order__main__right__section__total">Итого: 12345</div>
                </div>
            </div>
        </div>
    )
}

export default Order;