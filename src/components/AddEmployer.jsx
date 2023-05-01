function AddEmployer() {
    return (
        <div className="add-employer">
            <div className="add-employer-title">
                <div></div>
                <h2>Добавить сотрудника</h2>
            </div>
            <div className="add-employer__main">
                <div className="add-employer__main__left">
                    <div>
                        <label>
                            <p>Имя</p>
                            <input type="text" placeholder="Введите имя"/>
                        </label>
                        <label>
                            <p>Фамилия</p>
                            <input type="text" placeholder="Введите фамилию"/>
                        </label>
                    </div>
                    <label>
                        <p>Должность</p>
                        <select>
                            <option>Официант</option>
                            <option>Системный администратор</option>
                            <option>Научный сотрудник</option>
                            <option>Оператор</option>
                        </select>
                    </label>
                    <label>
                        <p>Пароль</p>
                        <div>
                            <input type="text" placeholder="Придумайте пароль"/>
                            <button>Сгенерировать</button>
                        </div>
                    </label>
                </div>
                <div className="add-employer__main__right">
                    <label>
                        <p>Email</p>
                        <input type="text" placeholder="Введите e-mail"/>
                    </label>
                    <label>
                        <p>Номер телефона</p>
                        <input type="phone" placeholder="Введите номер телефона"/>
                    </label>
                    <div className="add-employer__main__right">
                        <button>Отменить</button>
                        <button>Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default AddEmployer;