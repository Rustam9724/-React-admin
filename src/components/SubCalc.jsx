import { useState } from 'react';

function SubCalc() {
    const [isPopup, setIsPopup] = useState(false);
    const [service, setService] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [isServiceValid, setIsServiceValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isNumberValid, setIsNumberValid] = useState(true);

    function moduleClickHandler(event) {
        let target = event.target.closest("div.sub-calc__main__module");
        target.childNodes[0].childNodes[0].checked = !target.childNodes[0].childNodes[0].checked;
        target.classList.toggle('checked');
    }

    function sendingApp() {
       setIsServiceValid(true);
       setIsNameValid(true);
       setIsNumberValid(true);

       if (!service) {
           setIsServiceValid(false);
       }

       if (!name) {
           setIsNameValid(false);
       }

       if (!number) {
           setIsNumberValid(false)
       }

       if (service && name && number) {
           setService('');
           setName('');
           setNumber('');
           setIsServiceValid(true);
           setIsNameValid(true);
           setIsNumberValid(true);
           setIsPopup(false);
       }
    }
    
    return (
        <div className="sub-calc">
            <div className={`sub-calc__substrate ${isPopup ? 'active' : null}`}></div>
            <div className={`modal-subscription ${isPopup ? 'active' : null}`}>
                <div className="modal-subscription__cross" onClick={() => setIsPopup(false)}>
                    <div></div>
                </div>
                <h4>Заказ услуг</h4>
                <label>
                    <p>Услуги{!isServiceValid && <span>*</span>}</p>
                    <input type="text" placeholder="Введите услугу" value={service} onChange={event => setService(event.target.value)} className={!isServiceValid ? 'invalid' : null}/>
                </label>
                <label>
                    <p>Имя{!isNameValid && <span>*</span>}</p>
                    <input type="text" placeholder="Введите имя" value={name} onChange={event => setName(event.target.value)} className={!isNameValid ? 'invalid' : null}/>
                </label>
                <label>
                    <p>Телефон{!isNameValid && <span>*</span>}</p>
                    <input type="text" placeholder="Введите телефон" value={number} onChange={event => setNumber(event.target.value)} className={!isNumberValid ? 'invalid' : null}/>
                </label>
                <button onClick={sendingApp}>Отправить заявку</button>
            </div>
            <div className="sub-calc__header">
                <h2>Калькулятор подписки</h2>
                <div>
                    <div></div>
                    <p>Пополнить баланс</p>
                </div>
            </div>
            <div className="sub-calc__main">
                <div className="sub-calc__main__module" onClick={event => moduleClickHandler(event)}>
                    <div className="sub-calc__main__module__checkbox">
                        <input type="checkbox" id="first" hidden/>
                        <label htmlFor="first"></label>
                    </div>
                    <h4>Название модуля</h4>
                    <p>Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время! Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время!</p>
                    <div className="sub-calc__main__module__price">
                        <p>29 руб./день</p>
                        <p>829 руб./месяц</p>
                    </div>
                </div>
                <div className="sub-calc__main__module disabled">
                    <h4>Название модуля</h4>
                    <p>Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время! Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время!</p>
                    <div className="sub-calc__main__module__price">
                        <p>В разработке</p>
                    </div>
                </div>
                <div className="sub-calc__main__module" onClick={event => moduleClickHandler(event)}>
                    <div className="sub-calc__main__module__checkbox">
                        <input type="checkbox" id="third" hidden/>
                        <label htmlFor="third"></label>
                    </div>
                    <h4>Название модуля</h4>
                    <p>Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время! Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время!</p>
                    <div className="sub-calc__main__module__price">
                        <p>29 руб./день</p>
                        <p>829 руб./месяц</p>
                    </div>
                </div>
                <div className="sub-calc__main__module" onClick={event => moduleClickHandler(event)}>
                    <div className="sub-calc__main__module__checkbox">
                        <input type="checkbox" id="fourth" hidden/>
                        <label htmlFor="fourth"></label>
                    </div>
                    <h4>Название модуля</h4>
                    <p>Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время! Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время!</p>
                    <div className="sub-calc__main__module__price">
                        <p>29 руб./день</p>
                        <p>829 руб./месяц</p>
                    </div>
                </div>
                <div className="sub-calc__main__module" onClick={event => moduleClickHandler(event)}>
                    <div className="sub-calc__main__module__checkbox">
                        <input type="checkbox" id="fifth" hidden/>
                        <label htmlFor="fifth"></label>
                    </div>
                    <h4>Название модуля</h4>
                    <p>Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время! Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время!</p>
                    <div className="sub-calc__main__module__price">
                        <p>29 руб./день</p>
                        <p>829 руб./месяц</p>
                    </div>
                </div>
                <div className="sub-calc__main__module" onClick={event => moduleClickHandler(event)}>
                    <div className="sub-calc__main__module__checkbox">
                        <input type="checkbox" id="sixth" hidden/>
                        <label htmlFor="sixth"></label>
                    </div>
                    <h4>Название модуля</h4>
                    <p>Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время! Если Вы не нашли вопрос в нашем FAQ, Вы можете связаться с нами. Мы ответим Вам в ближайшее время!</p>
                    <div className="sub-calc__main__module__price">
                        <p>29 руб./день</p>
                        <p>829 руб./месяц</p>
                    </div>
                </div>
            </div>
            <div className="sub-calc__consumtion">
                <div><pre>Текущий расход: </pre> <pre>98 руб./день </pre> <pre>или </pre> <pre>980 руб./месяц </pre></div>
                <div><pre>Прогноз расхода: </pre> <pre>98 руб./день </pre> <pre>или </pre> <pre>980 руб./месяц </pre></div>
            </div>
            <button onClick={() => setIsPopup(true)}>Применить</button>
        </div>
    )
}

export default SubCalc;