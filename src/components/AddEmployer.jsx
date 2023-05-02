import { useState } from 'react';
import { nanoid } from 'nanoid';

function AddEmployer({employersListState, setEmployersListState, setOpenComponent}) {
    const [employerName, setEmployerName] = useState('');
    const [employerSurname, setEmployerSurname] = useState('');
    const [employerPassword, setEmployerPassword] = useState('');
    const [employerEmail, setEmployerEmail] = useState('');
    const [employerPhone, setEmployerPhone] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [employerPost, setEmployerPost] = useState('Официант')

    function addEmployerFunc() {
        setIsNameValid(true);
        setIsPasswordValid(true);
        setIsEmailValid(true);

        if (!employerName) {
            setIsNameValid(false)
        } 
        
        if (!employerPassword) {
            setIsPasswordValid(false)
        } 
        
        if (!employerEmail) {
            setIsEmailValid(false)
        } 
        
        if (employerName && employerPassword && employerEmail) {
            const date = new Date();

            let day = date.getDate();
            if (`${day}`.length === 1) {
                day = `0${day}`
            }
    
            let month = date.getMonth() + 1;
            if (`${month}`.length === 1) {
                month = `0${month}`
            } 
    
            const newEmployer = {
                id: nanoid(),
                name: employerName,
                post: employerPost,
                lastChange: `${day}.${month}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`,
                isEdit: false,
                email: employerEmail,
                cls: "Jason",
            }
            setEmployersListState([...employersListState, newEmployer]);
            setEmployerName('');
            setEmployerSurname('');
            setEmployerPassword('');
            setEmployerEmail('');
            setEmployerPhone('');
            setIsNameValid(true);
            setIsPasswordValid(true);
            setIsEmailValid(true);
        }
    }
        
    function cancelHandler() {
        setEmployerName('');
        setEmployerSurname('');
        setEmployerPassword('');
        setEmployerEmail('');
        setEmployerPhone('');
        setIsNameValid(true);
        setIsPasswordValid(true);
        setIsEmailValid(true);
    }

    function passwordGeneration() {
        let result = '';
        for (let i = 1; i <= 10; i++) {
            result += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
        setEmployerPassword(result);
    }
    
    return (
        <div className="add-employer">
            <div className="add-employer__title">
                <div onClick={() => setOpenComponent('Employers')}></div>
                <h2>Добавить сотрудника</h2>
            </div>
            <div className="add-employer__main">
                <div className="add-employer__main__left">
                    <div className="add-employer__section">
                        <label>
                            <p>Имя<span>{!isNameValid && '*'}</span></p>
                            <input type="text" placeholder="Введите имя" value={employerName} onChange={event => setEmployerName(event.target.value)} className={!isNameValid ? 'invalid-input' : null}/>
                        </label>
                        <label>
                            <p>Фамилия</p>
                            <input type="text" placeholder="Введите фамилию" value={employerSurname} onChange={event => setEmployerSurname(event.target.value)}/>
                        </label>
                    </div>
                    <div className="add-employer__section">
                        <label>
                            <p>Должность</p>
                            <select onChange={event => setEmployerPost(event.target.value)}>
                                <option>Официант</option>
                                <option>Системный администратор</option>
                                <option>Научный сотрудник</option>
                                <option>Оператор</option>
                                <option>Программист</option>
                            </select>
                        </label>
                    </div>
                    <div className="add-employer__section">
                        <label>
                            <p>Пароль<span>{!isPasswordValid && '*'}</span></p>
                            <input type="text" placeholder="Придумайте пароль" value={employerPassword} onChange={event => setEmployerPassword(event.target.value)} className={!isPasswordValid ? 'invalid-input' : null}/>
                        </label>
                        <button onClick={passwordGeneration}>Сгенерировать</button>
                    </div>
                </div>
                <div className="add-employer__main__right">
                    <div className="add-employer__section">
                        <label>
                            <p>Email<span>{!isPasswordValid && '*'}</span></p>
                            <input type="email" placeholder="Введите e-mail" value={employerEmail} onChange={event => setEmployerEmail(event.target.value)} className={!isEmailValid ? "invalid-input" : null}/>
                        </label>
                        <label>
                            <p>Номер телефона</p>
                            <input type="tel" placeholder="Введите номер" value={employerPhone} onChange={event => setEmployerPhone(event.target.value)}/>
                        </label>
                    </div>
                    <div className="add-employer__main__right__buttons">
                        <button className={`add-employer__main__right__buttons__${(employerName || employerPassword || employerEmail || employerSurname || employerPhone) ? 'save-btn' : 'cancel-btn'}`} onClick={cancelHandler}>Отменить</button>
                        <button className="add-employer__main__right__buttons__save-btn" onClick={addEmployerFunc}>Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default AddEmployer;