import { useState } from 'react';

function ListOfServices() {
    const [isPopup, setIsPopup] = useState(false);
    const [service, setService] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [isServiceValid, setIsServiceValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isNumberValid, setIsNumberValid] = useState(true);


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

    let result = [];
    for (let i = 1; i <= 6; i++) {
        result.push(
            <div className="list-of-services__main__service-card service-card" key={i} onClick={() => setIsPopup(true)}>
                <div className="service-card__image"></div>
                <div className="service-card__main">
                    <h4>Card Title</h4>
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content. card title and make up the bulk of the card's content.</p>
                    <div className="service-card__order-block">
                            <button>Заказать</button>
                            <p>1234 руб</p>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="list-of-services">
            <div className={`modal-subscription__substrate ${isPopup ? 'active' : null}`} onClick={() => setIsPopup(false)}></div>
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
            <h2>Список услуг</h2>
            <div className="list-of-services__main">
                {result}
            </div>
        </div>
    )
}

export default ListOfServices