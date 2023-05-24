import { useState } from 'react';
import Calendar from './Calendar';
import { meelsAndDrinksList } from './object';

function MeelsStatistics() {
    const currentDate = new Date();

    const [startStatDate, setStartStatDate] = useState(new Date());
    const [finishStatDate, setFinishStatDate] = useState(new Date());
    const [startInfoDate, setStartInfoDate] = useState(new Date());
    const [finishInfoDate, setFinishInfoDate] = useState(new Date());
    const [chosedStartStatDate, setChosedStartStatDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 24))
    const [chosedFinishStatDate, setChosedFinishStatDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 24))
    const [chosedStartInfoDate, setChosedStartInfoDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 24))
    const [chosedFinishInfoDate, setChosedFinishInfoDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 24))

    let meelsResult;
    meelsResult = meelsAndDrinksList.filter(meel => {
        return (Date.parse(new Date(meel.lastChange.slice(6, 10), +meel.lastChange.slice(3, 5) - 1, meel.lastChange.slice(0, 2))) >= Date.parse(chosedStartInfoDate) 
                    && Date.parse(new Date(meel.lastChange.slice(6, 10), +meel.lastChange.slice(3, 5) - 1, meel.lastChange.slice(0, 2))) <= Date.parse(chosedFinishInfoDate)
               )
    })
    
    meelsResult = meelsResult.map(meel => {
        return (
            <div className="statistics__info__list__meel" key={meel.id}>
                <div className="statistics__info__list__meel__section">
                    <div></div>
                    <p>{meel.name}</p>
                </div>
                <div className="statistics__info__list__meel__section">{meel.price}</div>
                <div className="statistics__info__list__meel__section">550</div>
                <div className="statistics__info__list__meel__section">
                    <p className={meel.status ? "active" : "passive"}>{meel.status ? "Активно" : 'Неактивно'}</p>
                </div>
                <div className="statistics__info__list__meel__section">{meel.lastChange}</div>
            </div>
        )
    })

    return (
        <div className="statistics">
            <h2>Статистика по блюдам</h2>
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
            <div className="statistics__meel__info">
                <div className="statistics__meel__info__header">
                    <div className="statistics__meel__info__header__section">
                        <p>НАЗВАНИЕ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="statistics__meel__info__header__section">
                        <p>ЦЕНА</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="statistics__meel__info__header__section">
                        <p>ПРОСМОТРЫ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="statistics__meel__info__header__section">
                        <p>СТАТУС</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="statistics__meel__info__header__section">
                        <p>ПОСЛЕДНЕЕ ИЗМЕНЕНИЕ</p>
                        <div>
                            <div></div> 
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="statistics__info__list">
                        {meelsResult}
                </div>
            </div>
        </div>
    )
}

export default MeelsStatistics;