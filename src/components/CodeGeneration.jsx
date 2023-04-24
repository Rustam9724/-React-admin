import { useState } from 'react';

function CodeGeneration() {
    const [firstTable, setFirstTable] = useState(1);
    const [lastTable, setLastTable] = useState(42);
    const [selectedTable, setSelectedTable] = useState(null);
    const [codeForm, setCodeForm] = useState('square');

    let tables = [];
    for (let i = firstTable; i <= lastTable; i++) {
        let num = i;
        tables.push(
            <div className={selectedTable === num ? 'selected' : null} key={i} onClick={event => setSelectedTable(num)}>
                {i}
            </div>
        )
    } 

    function selectChangeHandler(event) {
        if (event.target.value === 'Квадратный') {
            setCodeForm('square')
        } else if (event.target.value === 'Прямоугольный') {
            setCodeForm('rectangle');
        } else if (event.target.value === 'Круглый') {
            setCodeForm('circle')
        }
    } 

    return (
        <div className="code-generation">
            <h2>Генерация QR-кодов</h2>
            <div className="code-generation__main">
                <div className="code-generation__main__left">
                    <div className="code__generation__main__left__section">
                        <label>
                            <p>Номера столов от</p>
                            <input type="number" placeholder="Выберите номер" value={firstTable < 1 ? 1 : firstTable} onChange={event => setFirstTable(event.target.value < 1 ? 1 : event.target.value)}/>
                        </label>
                        <label>
                            <p>Номера столов до</p>
                            <input type="number" placeholder="Выберите номер" value={lastTable > 42 ? 42 : lastTable} onChange={event => setLastTable(event.target.value > 42 ? 42 : event.target.value)}/>
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
                            <select onChange={event => selectChangeHandler(event)}>
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
                            <div className={codeForm === 'square' ? 'selected' : null}></div>
                            <div className={codeForm === 'rectangle' ? 'selected' : null}></div>
                            <div className={codeForm === 'circle' ? 'selected' : null}></div>
                        </div>
                    </div>
                    <div className={`code-generation__main__right__QR-section ${codeForm}`}>
                        <h5 className={codeForm}>Вкус<span>Клик</span></h5>
                        <p className={`code-generation__main__right__QR-section__view-menu ${codeForm}`}>Посмотреть меню</p>
                        <p className={`code-generation__main__right__QR-section__description ${codeForm}`}>Lemon drops chocolate cake gummies carrot</p>
                        <div className={`code-generation__main__right__QR-section__QR-code ${codeForm}`}></div>
                        <a href="!#">vkusclick.ru/yFnEq/13</a>
                        <p className="code-generation__main__right__QR-section__description">Номер вашего стола</p>
                        <div className={`code-generation__main__right__QR-section__table-number ${codeForm}`}>{selectedTable}</div>
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