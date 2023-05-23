import { useState } from 'react';
import Calendar from './Calendar';
import { orders } from './object';

function OrderStatistics() {
    const currentDate = new Date();

    const [startStatDate, setStartStatDate] = useState(new Date());
    const [finishStatDate, setFinishStatDate] = useState(new Date());
    const [startInfoDate, setStartInfoDate] = useState(new Date());
    const [finishInfoDate, setFinishInfoDate] = useState(new Date());
    const [chosedStartStatDate, setChosedStartStatDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 24))
    const [chosedFinishStatDate, setChosedFinishStatDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 24))
    const [chosedStartInfoDate, setChosedStartInfoDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 24))
    const [chosedFinishInfoDate, setChosedFinishInfoDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 24))

    let ordersResult;
    ordersResult = orders.filter(order => {
        return (Date.parse(new Date(order.date.slice(6, 10), +order.date.slice(3, 5) - 1, order.date.slice(0, 2))) >= Date.parse(chosedStartInfoDate) 
                    && Date.parse(new Date(order.date.slice(6, 10), +order.date.slice(3, 5) - 1, order.date.slice(0, 2))) <= Date.parse(chosedFinishInfoDate)
               )
    })
    
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
            <div className="statistics__info__list__order" key={order.id}>
                <div className="statistics__info__list__order__number">{order.number}</div>
                <div className="statistics__info__list__order__table">{order.table}</div>
                <div className="statistics__info__list__order__cost">{order.cost}</div>
                <div className="statistics__info__list__order__positions">{order.numberOfPositions}</div>
                <div className="statistics__info__list__order__status">
                    <p className={order.status}>{status}</p>
                </div>
                <div className="statistics__info__order__date">{order.date}</div>
            </div>
        )
    })

    return (
        <div className="statistics">
            <h2>Статистика по заказам</h2>
            <div className="statistics__dates dates">
                <Calendar 
                    date={startStatDate}
                    setDate={setStartStatDate}
                    chosedDate={chosedStartStatDate}
                    setChosedDate={setChosedStartStatDate}
                    format="от"
                />
                <Calendar 
                    date={finishStatDate}
                    setDate={setFinishStatDate}
                    chosedDate={chosedFinishStatDate}
                    setChosedDate={setChosedFinishStatDate}
                    format="до"
                />
            </div>
            <div className="statistics__schedule"></div>
            <div className="statistics__dates dates">
                <Calendar 
                    date={startInfoDate}
                    setDate={setStartInfoDate}
                    chosedDate={chosedStartInfoDate}
                    setChosedDate={setChosedStartInfoDate}
                    format="от"
                />
                <Calendar 
                    date={finishInfoDate}
                    setDate={setFinishInfoDate}
                    chosedDate={chosedFinishInfoDate}
                    setChosedDate={setChosedFinishInfoDate}
                    format="до"
                />
            </div>
            <div className="statistics__info">
                <div className="statistics__info__header">
                    <div className="statistics__info__header__section">
                        <p># ЗАКАЗА</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="statistics__info__header__section">
                        <p>СТОЛ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="statistics__info__header__section">
                        <p>СУММА, РУБ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="statistics__info__header__section">
                        <p>КОЛИЧЕСТВО ПОЗИЦИЙ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="statistics__info__header__section">
                        <p>СТАТУС</p>
                        <div>
                            <div></div> 
                            <div></div>
                        </div>
                    </div>
                    <div className="statistics__info__header__section">
                        <p>ДАТА СОЗДАНИЯ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="statistics__info__list">
                        {ordersResult}
                </div>
            </div>
        </div>
    )
}

export default OrderStatistics;