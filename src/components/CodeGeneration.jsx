import { useState } from 'react';

function CodeGeneration() {
    const [firstTable, setFirstTable] = useState(1);
    const [lastTable, setLastTable] = useState(42);

    let tables = [];
    for (let i = firstTable; i <= lastTable; i++) {
        tables.push(
            <div className="code__generation__main__left__choose-table__tables__table">
                {i}
            </div>
        )
    } 

    return (
        <div className="code-generation">
            <h2>Генерация QR-кодов</h2>
            <div className="code-generation__main">
                <div className="code-generation__main__left">
                    <div className="code__generation__main__left__section">
                        <label>
                            <p>Номера столов от</p>
                            <input type="number" placeholder="Выберите номер"/>
                        </label>
                        <label>
                            <p>Номера столов до</p>
                            <input type="number" placeholder="Выберите номер"/>
                        </label>
                    </div>
                    <div className="code__generation__main__left__section">
                        <label>
                            <p>Заголовок</p>
                            <input type="text" placeholder="Введите заголовок"/>
                        </label>
                        <label>
                            <p>Описание</p>
                            <input type="text" placeholder="Введите описание"/>
                        </label>
                    </div>
                    <div className="code__generation__main__left__section">
                        <label>
                            <p>Вид QR-кода</p>
                            <select>
                                <option>Квадратный</option>
                                <option>Прямоугольный</option>
                                <option>Круглый</option>
                            </select>
                        </label>
                        <button>Сохранить</button>
                    </div>
                    <div className="code__generation__main__left__choose-table">
                        <p>Выбор стола</p>
                        <div className="code__generation__main__left__choose-table__tables">
                            {tables}
                        </div>
                    </div>
                </div>
                <div className="code-generation__main__right">
                    <div className="code-generation__main__right__header">
                        <div className="code-generation__main__right__header__figures">
                            <p>Квадрат</p>
                            <p>Прямоугольник</p>
                            <p>Круг</p>
                        </div>
                        <div className="code-generation__main__right__header__line">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="code-generation__main__right__QR-section">
                        <h5>Вкус<span>Клик</span></h5>
                        <p className="code-generation__main__right__QR-section__view-menu">Посмотреть меню</p>
                        <p className="code-generation__main__right__QR-section__description">Lemon drops chocolate cake gummies carrot</p>
                        <div className="code-generation__main__right__QR-section__QR-code"></div>
                        <a href="!#">vkusclick.ru/yFnEq/13</a>
                        <p className="code-generation__main__right__QR-section__description">Номер вашего стола</p>
                        <div className="code-generation__main__right__QR-section__table-number">13</div>
                    </div>
                    <div className="code-generation__main__right__download-section">
                        <select>
                            <option>SVG</option>
                            <option>PNG</option>
                            <option>JPG</option>
                            <option>GIF</option>
                        </select>
                        <div className="code-generation__main__right__download-section__button">
                            <p>Скачать</p>
                            <div></div>
                        </div>
                    </div>
                    <div className="code-generation__main__right__download-section">
                        <select>
                            <option>SVG</option>
                            <option>PNG</option>
                            <option>JPG</option>
                            <option>GIF</option>
                        </select>
                        <div className="code-generation__main__right__download-section__button">
                            <p>Скачать</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodeGeneration;