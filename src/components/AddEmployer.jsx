function AddEmployer() {
    return (
        <div className="add-employer">
            <div className="add-employer__title">
                <div></div>
                <h2>Добавить сотрудника</h2>
            </div>
            <div className="add-employer__main">
                <div className="add-employer__main__left">
                    <div className="add-employer__section">
                        <label>
                            <p>Имя</p>
                            <input type="text" placeholder="Введите имя"/>
                        </label>
                        <label>
                            <p>Фамилия</p>
                            <input type="text" placeholder="Введите фамилию"/>
                        </label>
                    </div>
                    <div className="add-employer__section">
                        <label>
                            <p>Должность</p>
                            <select>
                                <option>Официант</option>
                                <option>Системный администратор</option>
                                <option>Научный сотрудник</option>
                                <option>Оператор</option>
                            </select>
                        </label>
                    </div>
                    <div className="add-employer__section">
                        <label>
                            <p>Пароль</p>
                            <input type="text" placeholder="Придумайте пароль"/>
                        </label>
                        <button>Сгенерировать</button>
                    </div>
                </div>
                <div className="add-employer__main__right">
                    <div className="add-employer__section">
                        <label>
                            <p>Email</p>
                            <input type="text" placeholder="Введите e-mail"/>
                        </label>
                        <label>
                            <p>Номер телефона</p>
                            <input type="phone" placeholder="Введите номер телефона"/>
                        </label>
                    </div>
                    <div className="add-employer__main__right__buttons">
                        <button className="add-employer__main__right__buttons__cancel-btn">Отменить</button>
                        <button className="add-employer__main__right__buttons__save-btn">Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default AddEmployer;