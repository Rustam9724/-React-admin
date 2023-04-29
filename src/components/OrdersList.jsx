import { orders } from './object';
import { useState } from 'react';

function OrdersList({setOpenComponent, setOpenOrderNumber}) {
    const [searchValue, setSearchValue] = useState(''); 

    function orderClickHandler(order) {
        setOpenOrderNumber(order.number);
        setOpenComponent('Order');
    }

    let ordersResult;
    if (searchValue) {
        ordersResult = orders.filter(order => {
            return `${order.number}`.indexOf(searchValue.toLowerCase()) >= 0;
        })
    } else {
        ordersResult = orders;
    }

    ordersResult = ordersResult.map(order => {
        let status;
        switch (order.status) {
            case 'expects':
                status = 'Ожидает';
                break;
            case 'accepted':
                status = 'Принят';
                break;
            case 'completed':
                status = 'Завершён';
                break;
            case 'getready':
                status = 'Готовится';
                break;
            case 'canceled':
                status = 'Отменён';
                break;
            default: 
                status = '';    
        }
        return (
            <div className="orders-list__main__list__order" key={order.id} onClick={() => orderClickHandler(order)}>
                <div className="orders-list__main__list__order__number">{order.number}</div>
                <div className="orders-list__main__list__order__table">{order.table}</div>
                <div className="orders-list__main__list__order__cost">{order.cost}</div>
                <div className="orders-list__main__list__order__status">
                    <p className={order.status}>{status}</p>
                </div>
                <div className="orders-list__main__list__order__date">{order.date}</div>
                <div className="orders-list__main__list__order__last-change">{order.lastChange}</div>
            </div>
        )
    })

    return (
        <div className="orders-list">
            <h2>Заказы</h2>
                <div className="orders-list__search">
                    <input type="text" placeholder="Поиск" value={searchValue} onChange={event => setSearchValue(event.target.value)} placeholder="Введите номер заказа"/>
                </div>
            <div className="orders-list__main">
                <div className="orders-list__main__header">
                    <div className="orders-list__main__header__section">
                        <p># ЗАКАЗА</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="orders-list__main__header__section">
                        <p>СТОЛ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="orders-list__main__header__section">
                        <p>СУММА, РУБ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="orders-list__main__header__section">
                        <p>СТАТУС</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="orders-list__main__header__section">
                        <p>ДАТА СОЗДАНИЯ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="orders-list__main__header__section">
                        <p>ПОСЛЕДНЕЕ ИЗМЕНЕНИЕ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="orders-list__main__list">
                    <div className="meels-and-drinks__main__list__wrapper">
                        {ordersResult}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersList;