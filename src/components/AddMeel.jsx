function AddMeel() {
    return (
        <div className="add-meel">
            <div className="add-meel__title">
                <div></div>
                <h2>Добавить блюдо</h2>
            </div>
            <div className="add-meel__main">
                <div className="add-meel__left">
                    <div className="add-meel__section add-meel__section-single">
                        <label>
                            <p>Название<span>*</span></p>
                            <input type="text" placeholder="Введите название"/>
                        </label>
                    </div>
                    <div className="add-meel__section">
                        <label>
                            <p>Цена, руб<span>*</span></p>
                            <input type="number" placeholder="Введите цену"/>
                        </label>
                        <label>
                            <p>Старая цена, руб</p>
                            <input type="number" placeholder="Введите цену"/>
                        </label>
                    </div>
                    <div className="add-meel__section">
                        <label>
                            <p>Количество<span>*</span></p>
                            <input type="number" placeholder="Введите цену"/>
                        </label>
                        <label>
                            <p>Единицы измерения</p>
                            <select>
                                <option>гр</option>
                                <option>кг</option>
                                <option>шт</option>
                            </select>
                        </label>
                    </div>
                    <div className="add-meel__section">
                        <label>
                            <p>Время подачи, мин<span>*</span></p>
                            <input type="number" placeholder="Введите цену"/>
                        </label>
                        <div className="add-meel__activity">
                        <p>Активность</p>
                        <div className="add-meel__activity__tumbler">
                            <label htmlFor="add-meel__activity__checkbox">
                                <div></div>
                            </label>
                            <p>{'Вкл'}</p>
                        </div>
                        <input type="checkbox" id="add-meel__activity__checkbox" hidden/>
                        </div>
                    </div>
                </div>
                <div className="add-meel__right">
                    <div className="add-meel__section add-meel__section-description">
                        <p>Описание</p>
                        <textarea placeholder="Введите описание"></textarea>
                    </div>
                    <div className="add-meel__section">
                    <label>
                        <p>Ккал</p>
                        <input type="text" placeholder="Placeholder"/>
                    </label>
                    <label>
                        <p>Белки, г</p>
                        <input type="text" placeholder="Placeholder"/>
                    </label>
                </div>
                <div className="add-meel__section">
                    <label>
                        <p>Жиры, г</p>
                        <input type="text" placeholder="Placeholder"/>
                    </label>
                    <label>
                        <p>Углеводы, г</p>
                        <input type="text" placeholder="Placeholder"/>
                    </label>
                </div>
                <div className="add-meel__section add-meel__section-allergens">
                    <label>
                        <p>Аллергены</p>
                        <div>
                            <input type="text"/> 
                        </div>
                    </label>
                </div>
                <div className="add-meel__section add-meel__section-ingredients">
                    <p>Ингридиенты</p>
                    <textarea placeholder="Введите ингридиенты"></textarea>
                </div>
                <div className="add-meel__buttons">
                    <button className="add-meel__buttons__cancel-btn">Отменить</button>
                    <button className="add-meel__buttons__save-btn">Сохранить</button>
                </div>
            </div>
        </div>
    </div>    
    )
}

export default AddMeel;