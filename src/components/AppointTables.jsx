import { useState } from 'react';

function AppointTables({waitersState, setWaitersState}) {
    const [unatTables, setUnatTables] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedTable, setSelectedTable] = useState(null);
    const [isWaiterActive, setIsWaiterActive] = useState(false);

    function tableClickHandler(event, i) {
        if (!event.target.classList.contains('unat-table') && !event.target.classList.contains('assign-table')) {
            setSelectedTable(i)
        }
    }

    let tables = [];
    for (let i = 1; i <= 42; i++) {
        let clsName;

        unatTables.forEach(item => {
            if (item === `${i}`) {
                clsName = 'unat-table';
            }
        })

       waitersState.forEach(waiter => {
           waiter.tables.forEach(table => {
               if (table === i) {
                   clsName = "assign-table";
               }
           })
       })

       if (selectedTable === i) {
           clsName = 'selected-table ';
       }

        tables.push(
            <div key={i} className={clsName} onClick={event => tableClickHandler(event, i)}>
                {i}
            </div>
        )
    } 

    function applyBtnHandler() {
        if (inputValue) {
            setUnatTables(inputValue.split(','))
            setInputValue('');
            console.log(unatTables)
        }
    }

    function waiterClickHandler(elem) {
        if (isWaiterActive) {
            setWaitersState(waitersState.map(waiter => {
                if (elem.id === waiter.id) {
                    return {...waiter, tables: [...waiter.tables, selectedTable]};
                } else {
                    return waiter;
                }
            }))
            setSelectedTable(null);
            setIsWaiterActive(false);
        }
    }

    const waitersResult = waitersState.map(elem => {
        return (
            <div key={elem.id} className={`appoint-tables__main__left__waiter ${isWaiterActive && 'active'}`} onClick={() => waiterClickHandler(elem)}>
                <div className={`appoint-tables__main__left__waiter__avatar ${isWaiterActive && 'active'}`}>ЖА</div>
                <div className={`appoint-tables__main__left__waiter__info ${isWaiterActive && 'active'}`}>
                        <p>{elem.name}</p>
                        <p>Столы: {elem.tables.join(', ')}</p>
                    </div>
             </div>
        )
    })

    return (
        <div className="appoint-tables">
            <h2>Назначение столов</h2>
            <div className="appoint-tables__main">
                <div className="appoint-tables__main__left">
                    <h3>Оффицианты</h3>
                    <div className="appoint-tables__main__left__unat-tables">
                        <label>
                            <p>Необслуживаемые столы</p>
                            <input type="text" placeholder="Введите через запятую" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
                        </label>
                        <button onClick={applyBtnHandler}>Применить</button>
                    </div>
                    {waitersResult}
                </div>
                <div className="appoint-tables__main__right">
                    <h3>Столы</h3>
                    <div className="appoint-tables__main__right__tables">
                        <p>Выбор стола</p>
                            <div className="appoint-tables__main__right__tables__tables">{tables}</div>
                    </div>
                    <button className={selectedTable && 'active'} onClick={() => setIsWaiterActive(true)}>Назначить</button>
                    <div className="appoint-tables__main__right__designations">
                        <div>
                            <div>1</div>
                            <p> - выбранный стол</p>
                        </div>
                        <div>
                            <div>1</div>
                            <p> - необслуживаемые столы</p>
                        </div>
                        <div>
                            <div>1</div>
                            <p> - стол не назначен</p>
                        </div>
                        <div>
                            <div>1</div>
                            <p> - уже назначен</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointTables;