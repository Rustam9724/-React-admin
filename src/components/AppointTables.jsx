function AppointTables() {
    let tables = [];
    for (let i = 1; i <= 42; i++) {
        tables.push(
            <div key={i}>
                {i}
            </div>
        )
    } 

    return (
        <div className="appoint-tables">
            <h2>Назначение столов</h2>
            <div className="appoint-tables__main">
                <div className="appoint-tables__main__left">
                    <h3>Оффицианты</h3>
                    <div className="appoint-tables__main__left__unat-tables">
                        <label>
                            <p>Необслуживаемые столы</p>
                            <input type="text" placeholder="Введите номера"/>
                        </label>
                        <button>Применить</button>
                    </div>
                    <div className="appoint-tables__main__left__waiter">
                        <div className="appoint-tables__main__left__waiter__avatar">ЖА</div>
                        <div className="appoint-tables__main__left__waiter__info">
                            <p>Edgar Lones</p>
                            <p>Столы: 1,2,4,15</p>
                        </div>
                    </div>
                    <div className="appoint-tables__main__left__waiter">
                        <div className="appoint-tables__main__left__waiter__avatar">ЖА</div>
                        <div className="appoint-tables__main__left__waiter__info">
                            <p>Edgar Lones</p>
                            <p>Столы: 1,2,4,15</p>
                        </div>
                    </div>
                    <div className="appoint-tables__main__left__waiter">
                        <div className="appoint-tables__main__left__waiter__avatar">ЖА</div>
                        <div className="appoint-tables__main__left__waiter__info">
                            <p>Edgar Lones</p>
                            <p>Столы: 1,2,4,15</p>
                        </div>
                    </div>
                    <div className="appoint-tables__main__left__waiter">
                        <div className="appoint-tables__main__left__waiter__avatar">ЖА</div>
                        <div className="appoint-tables__main__left__waiter__info">
                            <p>Edgar Lones</p>
                            <p>Столы: 1,2,4,15</p>
                        </div>
                    </div>
                    <div className="appoint-tables__main__left__waiter">
                        <div className="appoint-tables__main__left__waiter__avatar">ЖА</div>
                        <div className="appoint-tables__main__left__waiter__info">
                            <p>Edgar Lones</p>
                            <p>Столы: 1,2,4,15</p>
                        </div>
                    </div>
                    <div className="appoint-tables__main__left__waiter">
                        <div className="appoint-tables__main__left__waiter__avatar">ЖА</div>
                        <div className="appoint-tables__main__left__waiter__info">
                            <p>Edgar Lones</p>
                            <p>Столы: 1,2,4,15</p>
                        </div>
                    </div>
                </div>
                <div className="appoint-tables__main__right">
                    <h3>Столы</h3>
                    <div className="appoint-tables__main__right__tables">
                        <p>Выбор стола</p>
                            <div className="appoint-tables__main__right__tables__tables">{tables}</div>
                    </div>
                    <button>Назначить</button>
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