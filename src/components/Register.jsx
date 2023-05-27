import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValue, setIsPasswordValid] = useState(true);
    const [isAgree, setIsAgree] = useState(false);
    const [isAgreeValid, setIsAgreeValid] = useState(true)
    const navigate = useNavigate();

    function getRegister() {
        setIsNameValid(true);
        setIsEmailValid(true);
        setIsPasswordValid(true);
        setIsAgreeValid(true)

        if (!name) {
            setIsNameValid(false);
        }

        if (!email) {
            setIsEmailValid(false);
        }

        if (!password) {
            setIsPasswordValid(false)
        }

        if (!isAgree) {
            setIsAgreeValid(false)
        }

        if (name && email && password && isAgree) {
            navigate('/');
        }
    }

    return (
        <div className="register-section">
            <div className="register__top-shape"></div>
             <div className="register-form">
                 <h3><span>Вкус</span><span>Клик</span></h3>
                 <div className="register-welcome-section">
                    <p>Регистрация</p>
                    <p>Пожалуйста, введите свои данные для регистарции</p>
                 </div>
                 <label>
                    <p>Имя {!isNameValid && <span>*</span>}</p>
                    <input
                        type="text"
                        placeholder="Placeholder"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        className={!isNameValid ? 'invalid' : null}
                    />
                 </label>
                <label>
                    <p>Фамилия</p>
                    <input type="text" placeholder="john.doe"/>
                </label>
                <label>
                    <p>Email {!isEmailValid && <span>*</span>}</p>
                    <input
                        type="email"
                        placeholder="Placeholder"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        className={!isEmailValid ? 'invalid' : null}
                    />
                </label>
                <label>
                    <p>Телефон</p>
                    <input type="phone" placeholder="john.doe@gmail.com"/>
                </label>
                <label>
                    <p>Пароль {!isPasswordValue && <span>*</span>}</p>
                    <input
                        type="password"
                        placeholder="Placeholder"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        className={!isPasswordValue ? 'invalid' : null}
                    />
                </label>
                <div className="register__i-agree-section">
                    <input
                        type="checkbox"
                        id="i-agree-section__checkbox"
                        checked={isAgree}
                        onChange={() => setIsAgree(!isAgree)}
                    />
                    <label htmlFor="i-agree-section__checkbox">Я согласен с <a href="#">Политикой конфиденциальности</a>{!isAgreeValid && <span>*</span>}</label>
                </div>
                 <button onClick={getRegister}>Зарегестрироваться</button>
                 <div className="register-has-account"><p>Уже есть аккаунт?</p> <Link to="/" className="register__sign-in">Войти</Link></div>
            </div>
            <div className="register__bottom-shape"></div>  
        </div>
    )
}

export default Register;