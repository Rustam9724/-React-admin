function Institution() {
    return (
        <div className="institution">
            <h1>Заведение</h1>
            <div className="institution__main">
                <div className="institution__main__left">
                    <label>
                        <p>Название заведения</p>
                        <input type="text" placehholder="Введите название"/>
                    </label>
                    <label>
                        <p>Внутреннее название заведения</p>
                        <input type="text" placeholder="Введите название"/>
                    </label>
                    <label>
                        <p>Адрес</p>
                        <input  type="text" placeholder="Введите адрес"/>
                    </label>
                    <label>
                        <p>Описание</p>
                        <textarea placeholder="Введите описание"></textarea>
                    </label>
                </div>
                <div className="institution__main__right">
                    <label>
                        <p>Выбор темы</p>
                        <select>
                            <option>Тёмная</option>
                            <option>Светлая</option>
                        </select>
                    </label>
                    <label>
                        <p>Название сети WiFi</p>
                        <input type="text" placeholder="Введите название"/>
                    </label>
                    <label>
                        <p>Пароль сети WiFi</p>
                        <input type="password" placeholder="Введите пароль"/>
                    </label>
                    <button>Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default Institution;