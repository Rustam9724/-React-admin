import { useState } from 'react';
import Calendar from './Calendar';
import { categoriesList } from './object';

function CategoriesStatistics() {
    const currentDate = new Date();

    const [startStatDate, setStartStatDate] = useState(new Date());
    const [finishStatDate, setFinishStatDate] = useState(new Date());
    const [startInfoDate, setStartInfoDate] = useState(new Date());
    const [finishInfoDate, setFinishInfoDate] = useState(new Date());
    const [chosedStartStatDate, setChosedStartStatDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 24))
    const [chosedFinishStatDate, setChosedFinishStatDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 24))
    const [chosedStartInfoDate, setChosedStartInfoDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 24))
    const [chosedFinishInfoDate, setChosedFinishInfoDate] = useState(new Date(currentDate.getFullYear(), currentDate.getMonth(), 24))

    let categoriesResult;
    categoriesResult = categoriesList.filter(ctg => {
        return (Date.parse(new Date(ctg.lastChange.slice(6, 10), +ctg.lastChange.slice(3, 5) - 1, ctg.lastChange.slice(0, 2))) >= Date.parse(chosedStartInfoDate) 
                    && Date.parse(new Date(ctg.lastChange.slice(6, 10), +ctg.lastChange.slice(3, 5) - 1, ctg.lastChange.slice(0, 2))) <= Date.parse(chosedFinishInfoDate)
               )
    })
    
    categoriesResult = categoriesResult.map(ctg => {
        return (
            <div className="statistics__info__list__category" key={ctg.id}>
                <div className="statistics__info__list__category__section">
                    <div></div>
                    <p>{ctg.name}</p>
                </div>
                <div className="statistics__info__list__category__section">550</div>
                <div className="statistics__info__list__category__section">
                    <p className={ctg.status ? "active" : "passive"}>{ctg.status ? "Активно" : 'Неактивно'}</p>
                </div>
                <div className="statistics__info__list__category__section">{ctg.lastChange}</div>
            </div>
        )
    })

    return (
        <div className="statistics">
            <h2>Статистика по категориям</h2>
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
            <div className="statistics__category__info">
                <div className="statistics__category__info__header">
                    <div className="statistics__category__info__header__section">
                        <p>НАЗВАНИЕ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="statistics__category__info__header__section">
                        <p>КОЛИЧЕСТВО ПРОСМОТРОВ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="statistics__category__info__header__section">
                        <p>СТАТУС</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="statistics__category__info__header__section">
                        <p>ПОСЛЕДНЕЕ ИЗМЕНЕНИЕ</p>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="statistics__info__list">
                        {categoriesResult}
                </div>
            </div>
        </div>
    )
}

export default CategoriesStatistics;