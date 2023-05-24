import { useState } from 'react';

function Institution({setRestName}) {
    const [restNameValue, setRestNameValue] = useState('');
    const [addres, setAddres] = useState('');
    const [internalRestName, setInternalRestName] = useState('');
    const [description, setDescription] = useState('')
    const [wifiName, setWifiName] = useState('');
    const [wifiPassword, setWifiPassword] = useState('');
    const [isRestNameValid, setIsRestNameValid] = useState(true);
    const [isAddresValid, setIsAddresValid] = useState(true)


    function save() {
        setIsRestNameValid(true);
        setIsAddresValid(true);

        if (!restNameValue) {
            setIsRestNameValid(false)
        } 
        
        if (!addres) {
            setIsAddresValid(false)
        } 
        
        if (restNameValue && addres) {
            setRestName(restNameValue);
            setInternalRestName('');
            setAddres('');
            setDescription('');
            setWifiName('');
            setWifiPassword('');
        }
    }

    return (
        <div className="institution">
            <h2>Заведение</h2>
            <div className="institution__main">
                <div className="institution__main__section institution__main__section__left">
                    <label>
                        <p>Название заведения{!isRestNameValid && <span>*</span>}</p>
                        <input 
                            type="text" 
                            placeholder="Введите название" 
                            className={!isRestNameValid ? 'invalid' : null} 
                            value={restNameValue} 
                            onChange={event => setRestNameValue(event.target.value)}
                        />
                    </label>
                    <label>
                        <p>Внутреннее название заведения</p>
                        <input type="text" placeholder="Введите название" value={internalRestName} onChange={event => setInternalRestName(event.target.value)}/>
                    </label>
                    <label>
                        <p>Адрес{!isAddresValid && <span>*</span>}</p>
                        <input 
                            type="text" 
                            placeholder="Введите адрес" 
                            className={!isAddresValid ? 'invalid' : null} 
                            value={addres} 
                            onChange={event => setAddres(event.target.value)}
                        />
                    </label>
                    <label>
                        <p>Описание</p>
                        <textarea placeholder="Введите описание" value={description} onChange={event => setDescription(event.target.value)}></textarea>
                    </label>
                </div>
                <div className="institution__main__section institution__main__section__right">
                    <label>
                        <p>Выбор темы</p>
                        <select>
                            <option>Тёмная</option>
                            <option>Светлая</option>
                        </select>
                    </label>
                    <label>
                        <p>Название сети WiFi</p>
                        <input type="text" placeholder="Введите название" value={wifiName} onChange={event => setWifiName(event.target.value)}/>
                    </label>
                    <label>
                        <p>Пароль сети WiFi</p>
                        <input type="password" placeholder="Введите пароль" value={wifiPassword} onChange={event => setWifiPassword(event.target.value)}/>
                    </label>
                    <button onClick={save}>Сохранить</button>
                </div>
            </div>
        </div>
    )
}

export default Institution;